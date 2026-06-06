import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/Footer'
import { products, getProductBySlug, getCategoryBySlug } from '../../data/produkty'

type Props = {
  params: Promise<{ slug: string }>
}

// Statické parametre pre všetky produkty
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const produkt = getProductBySlug(slug)
  if (!produkt) return {}
  return {
    title: `${produkt.name} — Kráľovská pekáreň`,
    description: `Detailné informácie o produkte ${produkt.name}. B2B prezentácia sortimentu Kráľovskej pekárne.`,
  }
}

// Placeholder nutričné hodnoty na 100 g
const nutricneHodnoty = [
  { nazov: 'Energetická hodnota', hodnota: '1 050 kJ / 251 kcal' },
  { nazov: 'Tuky', hodnota: '3,2 g' },
  { nazov: 'z toho nasýtené mastné kyseliny', hodnota: '0,7 g' },
  { nazov: 'Sacharidy', hodnota: '46 g' },
  { nazov: 'z toho cukry', hodnota: '2,1 g' },
  { nazov: 'Vláknina', hodnota: '3,4 g' },
  { nazov: 'Bielkoviny', hodnota: '8,2 g' },
  { nazov: 'Soľ', hodnota: '1,1 g' },
]

export default async function ProduktDetailPage({ params }: Props) {
  const { slug } = await params
  const produkt = getProductBySlug(slug)

  if (!produkt) notFound()

  const kategoria = getCategoryBySlug(produkt.category)

  return (
    <main>
      {/* Breadcrumb a späť */}
      <div
        style={{
          background: 'var(--color-bg-subtle)',
          borderBottom: '1px solid var(--color-border)',
          padding: '80px var(--section-pad-x) 0',
        }}
      >
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <nav
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              marginBottom: '32px',
            }}
            aria-label="Navigačná cesta"
          >
            <Link
              href="/"
              style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
            >
              Domov
            </Link>
            <span>›</span>
            <Link
              href="/produkty"
              style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
            >
              Sortiment
            </Link>
            <span>›</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>{produkt.name}</span>
          </nav>

          {/* Hlavička produktu */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'end',
              paddingBottom: '64px',
            }}
          >
            <div>
              {kategoria && (
                <span className="eyebrow">{kategoria.name}</span>
              )}
              <h1
                className="h-section lg"
                style={{ marginTop: '8px' }}
              >
                {produkt.name}
              </h1>
            </div>
            <div
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-normal)',
              }}
            >
              <p>
                Výrobok je dodávaný denne čerstvý priamo z našej pekárne v Kráľovej pri Senci.
                Vhodný pre supermarkety, reštaurácie, hotely a catering. Technický list
                a alergénový profil je k dispozícii na vyžiadanie.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hlavný obsah: fotka + info */}
      <section
        style={{
          background: 'var(--color-bg-primary)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Ľavý stĺpec: fotka */}
          <div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/3',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg-subtle)',
              }}
            >
              <Image
                src={produkt.image}
                alt={produkt.name}
                fill
                sizes="(max-width: 960px) 100vw, 55vw"
                style={{ objectFit: 'cover' }}
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Pravý stĺpec: popis + nutričná tabuľka + CTA */}
          <div>
            {/* Popis produktu — lorem ipsum placeholder */}
            <div
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-normal)',
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pečivo je pripravované
                z prvotriednych surovín podľa overených receptúr. Pravidelná kvalita a konzistentná
                chuť sú zárukou spokojnosti vašich zákazníkov.
              </p>
              <p style={{ marginTop: '16px' }}>
                Výrobok spĺňa prísne hygienické normy (HACCP, IFS, ISO 22000). Balenie a minimálne
                odberné množstvo prispôsobujeme potrebám každého odberateľa individuálne.
              </p>
            </div>

            {/* Nutričná tabuľka — placeholder hodnoty */}
            <div
              style={{
                marginTop: '40px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg-surface)',
              }}
            >
              <div
                style={{
                  padding: '16px 24px',
                  borderBottom: '1px solid var(--color-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'var(--text-xl)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Nutričné hodnoty
                </span>
                <span
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-muted)',
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase',
                  }}
                >
                  na 100 g
                </span>
              </div>
              {nutricneHodnoty.map((riadok, i) => (
                <div
                  key={riadok.nazov}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px 24px',
                    borderBottom: i < nutricneHodnoty.length - 1 ? '1px dashed var(--color-border)' : undefined,
                    fontSize: 'var(--text-sm)',
                    color: riadok.nazov.startsWith('z toho')
                      ? 'var(--color-text-muted)'
                      : 'var(--color-text-secondary)',
                    paddingLeft: riadok.nazov.startsWith('z toho') ? '40px' : '24px',
                  }}
                >
                  <span>{riadok.nazov}</span>
                  <span
                    style={{
                      color: 'var(--color-text-primary)',
                      fontVariantNumeric: 'tabular-nums',
                      fontWeight: 'var(--weight-medium)',
                    }}
                  >
                    {riadok.hodnota}
                  </span>
                </div>
              ))}
            </div>

            {/* B2B CTA */}
            <div
              style={{
                marginTop: '40px',
                padding: '32px',
                background: 'var(--color-bg-dark)',
                color: 'var(--color-white)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-xl)',
                  lineHeight: 'var(--leading-snug)',
                  marginBottom: '20px',
                }}
              >
                Mám záujem o tento produkt
              </p>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '24px',
                  lineHeight: 'var(--leading-normal)',
                }}
              >
                Kontaktujte nás pre cenovú ponuku, minimálne odberné množstvo a podmienky dodávky.
              </p>
              <a
                href="/#kontakt"
                style={{
                  display: 'inline-block',
                  background: 'var(--color-brand-primary)',
                  color: 'var(--color-text-primary)',
                  padding: '14px 28px',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-wide)',
                  textDecoration: 'none',
                  transition: 'background var(--dur-base) var(--ease-out)',
                }}
              >
                Vyžiadať ponuku →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Späť na sortiment */}
      <div
        style={{
          background: 'var(--color-bg-subtle)',
          borderTop: '1px solid var(--color-border)',
          padding: '32px var(--section-pad-x)',
        }}
      >
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Link
            href="/produkty"
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color var(--dur-base) var(--ease-out)',
            }}
          >
            ← Späť na sortiment
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
