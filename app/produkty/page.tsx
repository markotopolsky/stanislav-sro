import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import { categories, getProductsByCategory } from '../data/produkty'

export const metadata = {
  title: 'Sortiment — Kráľovská pekáreň',
  description: 'Kompletný prehľad pekárenských výrobkov pre B2B odberateľov: chlieb, pečivo, štrúdle a sladké špeciality.',
}

// Krátke B2B popisy ku každej kategórii
const KAT_POPIS: Record<string, string> = {
  'chlieb-pecivo':    'Chleby, formové bochníky a rôzne druhy rožkov. Trvanlivosť 3–5 dní, vhodné pre reťazce aj B2B.',
  'sladke-pecivo':    'Tradičné slovenské sladké špeciality — bratislavské rožky, buchtičky, záviíny a sezónne novinky.',
  'strudle':          'Ručne rolované štrúdle s ovocnou a tvarohovou náplňou. Porciové balenia aj celé nohy (min. 950 g).',
  'slane-pecivo':     'Bagety, žemle, pagáče a uzly. Čerstvé denné dodávky pre reťazce a B2B odberateľov.',
  'specialne-pecivo': 'Špeciálne pečivo so sezamom, špaldom a Vitamineral — vhodné pre zdravé stravovacie koncepty.',
}

export default function ProduktyPage() {
  const aktivneKat = categories.filter((c) => getProductsByCategory(c.slug).length > 0)
  const celkemProduktov = aktivneKat.reduce((s, c) => s + getProductsByCategory(c.slug).length, 0)

  return (
    <main>
      {/* ── Animácie a hover efekty (CSS-only, žiaden JS) ─────────── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .karta {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          background: var(--color-bg-surface);
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(26,23,20,0.07);
          transition: transform 0.35s var(--ease-out), box-shadow 0.35s var(--ease-out);
          animation: fadeUp 0.5s var(--ease-out) both;
        }
        .karta:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 36px rgba(26,23,20,0.13);
        }
        .karta-img { transition: transform 0.55s var(--ease-out); }
        .karta:hover .karta-img { transform: scale(1.06); }
        .karta-sipka {
          color: var(--color-text-muted);
          transition: transform 0.25s var(--ease-out), color 0.25s var(--ease-out);
        }
        .karta:hover .karta-sipka {
          transform: translateX(4px);
          color: var(--color-brand-primary);
        }
      `}</style>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        style={{
          background: `
            radial-gradient(ellipse at 18% 65%, rgba(240,142,38,0.10) 0%, transparent 52%),
            radial-gradient(ellipse at 82% 25%, rgba(240,142,38,0.07) 0%, transparent 45%),
            var(--color-bg-dark)
          `,
          paddingTop: '88px',
          paddingBottom: '88px',
          paddingInline: 'var(--section-pad-x)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <span className="eyebrow">Kompletný sortiment</span>

          <h1
            className="h-section"
            style={{
              color: 'var(--color-white)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              maxWidth: '700px',
              marginTop: '8px',
            }}
          >
            Pečivo pre váš <em>biznis</em>
          </h1>

          <p
            style={{
              marginTop: '24px',
              fontSize: 'var(--text-lg)',
              color: 'rgba(255,255,255,0.58)',
              maxWidth: '540px',
              lineHeight: 'var(--leading-normal)',
            }}
          >
            Kompletný výrobný program pekárne Kráľovská — od tradičného chleba cez štrúdle
            až po sladké špeciality. Čerstvé dodávky od roku 1991.
          </p>

          {/* Štatistiky pod headingom */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(255,255,255,0.09)',
            }}
          >
            {[
              { cislo: celkemProduktov, popis: 'produktov v sortimente' },
              { cislo: aktivneKat.length, popis: 'kategórií pečiva' },
              { cislo: '4:30', popis: 'čerstvé dodávky od' },
            ].map(({ cislo, popis }, i) => (
              <div
                key={popis}
                style={{
                  paddingRight: '40px',
                  marginRight: '40px',
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.09)' : undefined,
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontWeight: 'var(--weight-semibold)',
                    fontSize: 'var(--text-4xl)',
                    color: 'var(--color-brand-primary)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {cislo}
                </div>
                <div
                  style={{
                    marginTop: '6px',
                    fontSize: 'var(--text-xs)',
                    color: 'rgba(255,255,255,0.45)',
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase',
                  }}
                >
                  {popis}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kategórie s produktmi ────────────────────────────────── */}
      {aktivneKat.map((kat, katIdx) => {
        const produkty = getProductsByCategory(kat.slug)
        // Striedanie pozadí pre vizuálny rytmus
        const bg = katIdx % 2 === 0 ? 'var(--color-bg-primary)' : 'var(--color-bg-surface)'

        return (
          <section
            key={kat.slug}
            id={kat.slug}
            style={{
              background: bg,
              padding: 'var(--section-pad-y) var(--section-pad-x)',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>

              {/* Hlavička kategórie — 2 stĺpce na wide, 1 na mobile */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '40px',
                  alignItems: 'end',
                  marginBottom: '48px',
                  paddingBottom: '40px',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <div>
                  <span className="eyebrow">{produkty.length} produktov</span>
                  <h2
                    className="h-section"
                    style={{ marginTop: '8px', fontSize: 'var(--text-4xl)' }}
                  >
                    {kat.name}
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-normal)',
                    maxWidth: '480px',
                  }}
                >
                  {KAT_POPIS[kat.slug] ?? 'Výrobky z tejto kategórie sú pripravované denne z kvalitných surovín.'}
                </p>
              </div>

              {/* Responzívny grid kariet */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: '20px',
                }}
              >
                {produkty.map((produkt, i) => (
                  <Link
                    key={produkt.slug}
                    href={`/produkty/${produkt.slug}`}
                    className="karta"
                    // Staggered reveal: každá karta sa objaví o 55ms neskôr
                    style={{ animationDelay: `${i * 55}ms` }}
                  >
                    {/* Fotka */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '4/3',
                        overflow: 'hidden',
                        background: 'var(--color-bg-subtle)',
                      }}
                    >
                      <Image
                        src={produkt.image}
                        alt={produkt.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="karta-img"
                        style={{ objectFit: 'cover' }}
                        unoptimized
                      />
                    </div>

                    {/* Telo karty */}
                    <div style={{ padding: '18px 22px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontStyle: 'italic',
                          fontSize: 'var(--text-xl)',
                          color: 'var(--color-text-primary)',
                          lineHeight: 'var(--leading-snug)',
                          margin: 0,
                          flex: 1,
                        }}
                      >
                        {produkt.name}
                      </p>
                      <span
                        className="karta-sipka"
                        style={{
                          display: 'inline-block',
                          marginTop: '14px',
                          fontSize: 'var(--text-xs)',
                          letterSpacing: 'var(--tracking-wide)',
                          textTransform: 'uppercase',
                          fontWeight: 'var(--weight-medium)',
                        }}
                      >
                        Zobraziť detail →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* ── Spodný CTA pás ──────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--color-bg-dark)',
          color: 'var(--color-white)',
          padding: 'var(--section-pad-y) var(--section-pad-x)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h2
              className="h-section"
              style={{ color: 'var(--color-white)', fontSize: 'var(--text-4xl)' }}
            >
              Záujem o <em>B2B spoluprácu?</em>
            </h2>
            <p
              style={{
                marginTop: '12px',
                fontSize: 'var(--text-lg)',
                color: 'rgba(255,255,255,0.58)',
              }}
            >
              Katalóg vrátane technických listov a alergénov zasielame na vyžiadanie.
            </p>
          </div>
          <a href="/#kontakt" className="btn-dark" style={{ flexShrink: 0 }}>
            Vyžiadať B2B ponuku →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
