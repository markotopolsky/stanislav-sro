import data from './produkty.json'

export type Category = {
  slug: string
  name: string
}

export type NutricneHodnoty = {
  energiaKj?: number
  energiaKcal?: number
  tuky?: string
  nasMastneKys?: string
  sacharidy?: string
  cukry?: string
  vlaknina?: string
  bielkoviny?: string
  sol?: string
}

export type Product = {
  slug: string
  name: string
  category: string
  image: string
  gramaz?: string
  typVyrobku?: string
  zlozenie?: string
  posyp?: string
  alergeny?: string
  nutricne?: NutricneHodnoty
  skladovanie?: string
  _new?: boolean
}

export type VariantGroup = {
  canonicalSlug: string
  members: string[]
}

export const categories: Category[] = data.categories
export const products: Product[] = data.products
export const variantGroups: VariantGroup[] = (data as { varianty?: VariantGroup[] }).varianty ?? []

// Map: slug → group it belongs to (if any)
const slugToGroup = new Map<string, VariantGroup>()
for (const g of variantGroups) {
  for (const s of g.members) slugToGroup.set(s, g)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

/** Vráti všetky produkty v kategórii, ale len 1× za skupinu (canonical variant). */
export function getProductsByCategory(categorySlug: string): Product[] {
  const seenGroups = new Set<VariantGroup>()
  const out: Product[] = []
  for (const p of products) {
    if (p.category !== categorySlug) continue
    const g = slugToGroup.get(p.slug)
    if (g) {
      if (seenGroups.has(g)) continue
      seenGroups.add(g)
      // Show the canonical product of the group, not p
      const canonical = getProductBySlug(g.canonicalSlug)
      if (canonical) out.push(canonical)
    } else {
      out.push(p)
    }
  }
  return out
}

/** Ak je produkt v skupine, vráti všetky varianty (zoradené podľa gramáže). */
export function getVariantsForProduct(slug: string): Product[] | null {
  const g = slugToGroup.get(slug)
  if (!g) return null
  const variants = g.members
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => p !== undefined)
  return variants.sort((a, b) => {
    const wa = parseInt(a.gramaz ?? '0', 10) || 999999
    const wb = parseInt(b.gramaz ?? '0', 10) || 999999
    return wa - wb
  })
}
