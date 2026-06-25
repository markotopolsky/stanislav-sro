import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/Footer'
import InquiryForm from '../../components/InquiryForm'
import {
  products,
  getProductBySlug,
  getCategoryBySlug,
  getVariantsForProduct,
  type NutricneHodnoty,
} from '../../data/produkty'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const produkt = getProductBySlug(slug)
  if (!produkt) return {}
  return {
    title: `${produkt.name} — Kráľovská pekáreň`,
    description: `Zloženie, alergény a nutričné hodnoty pre ${produkt.name}. B2B prezentácia sortimentu Kráľovskej pekárne.`,
  }
}

// Mapovanie nutričných polí z dát na riadky tabuľky
function nutricneRiadky(n: NutricneHodnoty) {
  const r: { nazov: string; hodnota: string }[] = []
  if (n.energiaKj || n.energiaKcal) {
    const parts: string[] = []
    if (n.energiaKj) parts.push(`${n.energiaKj} kJ`)
    if (n.energiaKcal) parts.push(`${n.energiaKcal} kcal`)
    r.push({ nazov: 'Energetická hodnota', hodnota: parts.join(' / ') })
  }
  if (n.tuky) r.push({ nazov: 'Tuky', hodnota: n.tuky })
  if (n.nasMastneKys) r.push({ nazov: 'z toho nasýtené mastné kyseliny', hodnota: n.nasMastneKys })
  if (n.sacharidy) r.push({ nazov: 'Sacharidy', hodnota: n.sacharidy })
  if (n.cukry) r.push({ nazov: 'z toho cukry', hodnota: n.cukry })
  if (n.vlaknina) r.push({ nazov: 'Vláknina', hodnota: n.vlaknina })
  if (n.bielkoviny) r.push({ nazov: 'Bielkoviny', hodnota: n.bielkoviny })
  if (n.sol) r.push({ nazov: 'Soľ', hodnota: n.sol })
  return r
}

export default async function ProduktDetailPage({ params }: Props) {
  const { slug } = await params
  const produkt = getProductBySlug(slug)

  if (!produkt) notFound()

  const kategoria = getCategoryBySlug(produkt.category)
  const nutricne = produkt.nutricne ? nutricneRiadky(produkt.nutricne) : []
  const malDoPlnenia = !produkt.zlozenie && !produkt.nutricne && !produkt.alergeny
  const varianty = getVariantsForProduct(produkt.slug)

  return (
    <main>
      {/* Breadcrumb a hlavička */}
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
            <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
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
              {kategoria && <span className="eyebrow">{kategoria.name}</span>}
              {produkt.typVyrobku && !kategoria && (
                <span className="eyebrow">{produkt.typVyrobku}</span>
              )}
              <h1 className="h-section lg" style={{ marginTop: '8px' }}>
                {produkt.name}
              </h1>
              {produkt.typVyrobku && kategoria && (
                <p
                  style={{
                    marginTop: '12px',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: 'var(--tracking-wide)',
                  }}
                >
                  {produkt.typVyrobku}
                </p>
              )}

              {varianty && varianty.length > 1 && (
                <div style={{ marginTop: '28px' }}>
                  <div
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-muted)',
                      letterSpacing: 'var(--tracking-wide)',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                    }}
                  >
                    Dostupné varianty
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {varianty.map((v) => {
                      const isActive = v.slug === produkt.slug
                      return (
                        <Link
                          key={v.slug}
                          href={`/produkty/${v.slug}`}
                          aria-current={isActive ? 'page' : undefined}
                          style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 'var(--weight-medium)',
                            textDecoration: 'none',
                            border: '1px solid',
                            borderColor: isActive
                              ? 'var(--color-brand-primary)'
                              : 'var(--color-border)',
                            background: isActive
                              ? 'var(--color-brand-primary)'
                              : 'var(--color-bg-surface)',
                            color: isActive
                              ? 'var(--color-text-primary)'
                              : 'var(--color-text-secondary)',
                            transition: 'all var(--dur-base) var(--ease-out)',
                          }}
                        >
                          {v.gramaz ?? v.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
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

      {/* Hlavný obsah */}
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
          {/* Ľavý stĺpec: fotka + zloženie */}
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

            {produkt.zlozenie && (
              <div style={{ marginTop: '40px' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'var(--text-xl)',
                    color: 'var(--color-text-primary)',
                    marginBottom: '12px',
                  }}
                >
                  Zloženie
                </h2>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  {produkt.zlozenie}
                </p>
                {produkt.posyp && (
                  <p
                    style={{
                      marginTop: '12px',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                    }}
                  >
                    <strong style={{ color: 'var(--color-text-primary)' }}>Posyp:</strong>{' '}
                    {produkt.posyp}
                  </p>
                )}
              </div>
            )}

            {produkt.alergeny && (
              <div
                style={{
                  marginTop: '32px',
                  padding: '20px 24px',
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-muted)',
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Výrobok môže obsahovať
                </div>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 'var(--weight-medium)',
                  }}
                >
                  {produkt.alergeny}
                </p>
              </div>
            )}

            {produkt.skladovanie && (
              <p
                style={{
                  marginTop: '20px',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <strong style={{ color: 'var(--color-text-primary)' }}>Skladovanie:</strong>{' '}
                {produkt.skladovanie}
              </p>
            )}
          </div>

          {/* Pravý stĺpec: nutričná tabuľka + CTA */}
          <div>
            {nutricne.length > 0 ? (
              <div
                style={{
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
                {nutricne.map((riadok, i) => (
                  <div
                    key={riadok.nazov}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 24px',
                      borderBottom:
                        i < nutricne.length - 1 ? '1px dashed var(--color-border)' : undefined,
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
            ) : malDoPlnenia ? (
              <div
                style={{
                  border: '1px dashed var(--color-border)',
                  background: 'var(--color-bg-surface)',
                  padding: '24px',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 'var(--leading-normal)',
                }}
              >
                Detailné údaje (zloženie, alergény, nutričné hodnoty) k tomuto produktu doplníme.
                Pre technický list nás kontaktujte priamo.
              </div>
            ) : null}

            {/* B2B CTA — dopytový formulár */}
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
                  marginBottom: '8px',
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
              <InquiryForm produkt={produkt.name} />
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
