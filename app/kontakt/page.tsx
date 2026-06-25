'use client'

import { useState } from 'react'
import LocationMap from '../components/LocationMap'
import Footer from '../components/Footer'

export default function KontaktPage() {
  const [sent, setSent] = useState(false)

  return (
    <main>
      <LocationMap />

      <section
        style={{
          background: 'var(--color-bg-dark)',
          padding: '80px var(--section-pad-x) var(--section-pad-y)',
          minHeight: 'calc(100vh - 76px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '96px',
            alignItems: 'start',
          }}
        >

          {/* ── Ľavý stĺpec — info ──────────────────────────────── */}
          <div>
            <span className="eyebrow">B2B dopyt</span>
            <h1
              className="h-section lg"
              style={{ color: 'var(--color-white)', marginTop: '8px' }}
            >
              Napíšte nám
            </h1>
            <p
              style={{
                marginTop: '20px',
                fontSize: 'var(--text-lg)',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 'var(--leading-normal)',
                maxWidth: '400px',
              }}
            >
              Záujem o spoluprácu, cenovú ponuku alebo sortiment —
              ozvite sa a ozveme sa do 24 hodín.
            </p>

            {/* Kontaktná osoba */}
            <div
              style={{
                marginTop: '56px',
                paddingTop: '40px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-brand-primary)',
                  letterSpacing: 'var(--tracking-widest)',
                  textTransform: 'uppercase',
                  fontWeight: 'var(--weight-medium)',
                }}
              >
                Priamy kontakt na obchod
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-3xl)',
                  color: 'var(--color-white)',
                  marginTop: '8px',
                  lineHeight: 1,
                }}
              >
                Kontakt
              </p>
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                <a
                  href="tel:+421918562092"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  +421 918 562 092
                </a>
                <a
                  href="mailto:dusan.nagy@kralovska-pekaren.sk"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  dusan.nagy@kralovska-pekaren.sk
                </a>
              </div>
            </div>

            {/* Adresa */}
            <div
              style={{
                marginTop: '40px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                fontSize: 'var(--text-sm)',
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 'var(--leading-loose)',
              }}
            >
              STANISLAV, s. r. o.<br />
              Krmeš 61<br />
              900 50 Kráľová pri Senci
            </div>
          </div>

          {/* ── Pravý stĺpec — formulár ─────────────────────────── */}
          <form
            className="cta-form"
            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          >
            <span className="cta-form-label">Nový dopyt</span>

            <div className="cta-form-row">
              <label className="sr-only" htmlFor="k-company">Spoločnosť</label>
              <input id="k-company" type="text" placeholder="Spoločnosť" required />
              <label className="sr-only" htmlFor="k-contact">Meno</label>
              <input id="k-contact" type="text" placeholder="Meno" required />
            </div>

            <div className="cta-form-row">
              <label className="sr-only" htmlFor="k-email">E-mail</label>
              <input id="k-email" type="email" placeholder="E-mail" required />
              <label className="sr-only" htmlFor="k-phone">Telefón</label>
              <input id="k-phone" type="tel" placeholder="Telefón" />
            </div>

            <label className="sr-only" htmlFor="k-type">Typ prevádzky</label>
            <select id="k-type" defaultValue="">
              <option value="" disabled>Typ prevádzky (voliteľné)</option>
              <option>Supermarket / reťazec</option>
              <option>Hotel</option>
              <option>Reštaurácia / gastro</option>
              <option>Distribútor</option>
              <option>Privátna značka</option>
            </select>

            <label className="sr-only" htmlFor="k-message">Správa</label>
            <textarea
              id="k-message"
              placeholder="Správa — sortiment, objem, región..."
              rows={4}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'var(--color-white)',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                padding: '12px 14px',
                outline: 'none',
                resize: 'vertical',
                transition: 'border-color var(--dur-base) var(--ease-out)',
              }}
            />

            <button className="cta-form-submit" type="submit">
              {sent ? 'Odoslané — ozveme sa ✓' : 'Odoslať dopyt →'}
            </button>

            <p className="cta-form-small">
              Spracúvame podľa GDPR, nezdieľame s tretími stranami.
            </p>
          </form>

        </div>
      </section>

      <Footer />
    </main>
  )
}
