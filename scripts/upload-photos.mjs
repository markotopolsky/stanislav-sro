#!/usr/bin/env node
// Upload fotiek z `stanislav-fotky/` do Cloudinary a aktualizuj
// `app/data/produkty.json` so secure URL.
//
// Použitie:
//   1. npm install cloudinary  (jednorazovo)
//   2. .env.local musí obsahovať:
//        CLOUDINARY_CLOUD_NAME=...
//        CLOUDINARY_API_KEY=...
//        CLOUDINARY_API_SECRET=...
//   3. node scripts/upload-photos.mjs            # ostrý beh
//      node scripts/upload-photos.mjs --dry-run  # iba ukáže čo by spravil

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PHOTOS_DIR = path.join(ROOT, 'stanislav-fotky')
const PRODUCTS_JSON = path.join(ROOT, 'app/data/produkty.json')
const MAPPING_JSON = path.join(__dirname, 'photo-mapping.json')
const CLOUDINARY_FOLDER = 'kralovska-pekaren/products'

const DRY = process.argv.includes('--dry-run')
const FORCE = process.argv.includes('--force')

// === Načítaj .env.local ===
function loadEnv() {
  const envPath = path.join(ROOT, '.env.local')
  if (!fs.existsSync(envPath)) return
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/)
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}
loadEnv()

// === Util: očisti názov súboru na "foto-stem" ===
function photoStem(filename) {
  let stem = path.basename(filename, path.extname(filename))
  stem = stem.replace(/\s*\(\d+\)$/, '') // odstráň " (1)", " (2)"
  stem = stem.replace(/\.thumb_\d+x\d+$/, '') // .thumb_270x270
  stem = stem.replace(/-\d+$/, '') // -123 (ID z pôvodného webu)
  return stem
}

// === Načítaj produkty a mapping ===
const productsData = JSON.parse(fs.readFileSync(PRODUCTS_JSON, 'utf8'))
const productBySlug = new Map(productsData.products.map((p) => [p.slug, p]))
const mapping = JSON.parse(fs.readFileSync(MAPPING_JSON, 'utf8'))
const overrides = mapping.overrides ?? {}
const skipSet = new Set(mapping.skip ?? [])

// === Pripoj fotky k produktom (zoskup duplicates, pick prvý alphabetically) ===
// Skenuje PHOTOS_DIR aj jeho subfoldery (napr. updated/) jednoúrovňovo.
function listPhotos(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      for (const sub of fs.readdirSync(full)) {
        if (!sub.startsWith('.')) out.push(path.join(full, sub))
      }
    } else {
      out.push(full)
    }
  }
  return out.sort()
}

const filePaths = listPhotos(PHOTOS_DIR)

// Súbor v subfoldery (napr. updated/) vyhráva nad root verziou rovnakého stem-u.
const isInSubfolder = (fp) => path.dirname(fp) !== PHOTOS_DIR
const stemToFile = new Map()
for (const fp of filePaths) {
  const stem = photoStem(path.basename(fp))
  const existing = stemToFile.get(stem)
  if (!existing) {
    stemToFile.set(stem, fp)
  } else if (isInSubfolder(fp) && !isInSubfolder(existing)) {
    stemToFile.set(stem, fp)
  }
}

const plan = [] // {file, stem, slug, action: 'upload'|'skip-no-product'|'skip-manual'|'skip-existing'}
for (const [stem, file] of stemToFile) {
  if (skipSet.has(stem)) {
    plan.push({ file, stem, slug: null, action: 'skip-manual' })
    continue
  }
  const slug = overrides[stem] ?? stem
  const product = productBySlug.get(slug)
  if (!product) {
    plan.push({ file, stem, slug, action: 'skip-no-product' })
    continue
  }
  // Skip if product already has Cloudinary URL (unless --force, alebo súbor je v subfolderi
  // — predpokladáme že subfoldery ako updated/ obsahujú novšie verzie a vždy nahradzujú).
  if (!FORCE && !isInSubfolder(file) && product.image?.includes('res.cloudinary.com')) {
    plan.push({ file, stem, slug, action: 'skip-existing' })
    continue
  }
  plan.push({ file, stem, slug, action: 'upload' })
}

// === Print plán ===
const toUpload = plan.filter((p) => p.action === 'upload')
const noProduct = plan.filter((p) => p.action === 'skip-no-product')
const skipped = plan.filter((p) => p.action === 'skip-manual')
const existing = plan.filter((p) => p.action === 'skip-existing')

console.log(`\nUnikátnych fotiek: ${stemToFile.size}`)
console.log(`  Na upload:      ${toUpload.length}`)
console.log(`  Už nahrané:     ${existing.length}  (preskočené; --force pre re-upload)`)
console.log(`  Bez produktu:   ${noProduct.length}  (foto-stem nemá zhodu v produkty.json)`)
console.log(`  Preskočené:     ${skipped.length}`)

if (noProduct.length) {
  console.log('\n--- Foto-stems bez produktu (uprav scripts/photo-mapping.json): ---')
  for (const p of noProduct) console.log(`  ✗ ${p.stem}  (mapping → ${p.slug})`)
}

if (DRY) {
  console.log('\n[DRY-RUN] Žiadny upload sa nespustí.')
  console.log('\nPrvých 10 plánovaných uploadov:')
  for (const p of toUpload.slice(0, 10)) {
    console.log(`  ↑ ${p.file}  →  ${CLOUDINARY_FOLDER}/${p.slug}`)
  }
  process.exit(0)
}

// === Kontrola Cloudinary credentials ===
const cloudName = process.env.CLOUDINARY_CLOUD_NAME
const apiKey = process.env.CLOUDINARY_API_KEY
const apiSecret = process.env.CLOUDINARY_API_SECRET
if (!cloudName || !apiKey || !apiSecret) {
  console.error('\nChýbajú Cloudinary credentials v .env.local:')
  console.error('  CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET')
  process.exit(1)
}

// === Upload ===
let cloudinary
try {
  cloudinary = (await import('cloudinary')).v2
} catch {
  console.error('\nChýba balík `cloudinary`. Spusti: npm install cloudinary')
  process.exit(1)
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
})

console.log(`\nUpload spustený (${toUpload.length} fotiek)...\n`)

let ok = 0
let fail = 0
for (const item of toUpload) {
  const filepath = item.file
  const publicId = `${CLOUDINARY_FOLDER}/${item.slug}`
  try {
    const result = await cloudinary.uploader.upload(filepath, {
      public_id: publicId,
      overwrite: true,
      resource_type: 'image',
    })
    const url = result.secure_url
    const p = productBySlug.get(item.slug)
    p.image = url
    delete p._new // už nie je nový bez fotky
    ok++
    console.log(`  ✓ ${item.slug.padEnd(50)} → ${url}`)
  } catch (e) {
    fail++
    console.error(`  ✗ ${item.slug.padEnd(50)} → ${e.message}`)
  }
}

// === Zapíš JSON ===
fs.writeFileSync(PRODUCTS_JSON, JSON.stringify(productsData, null, 2) + '\n')

console.log(`\nHotovo. Úspešne: ${ok}, chyby: ${fail}.`)
console.log(`Aktualizovaný: ${PRODUCTS_JSON}\n`)
