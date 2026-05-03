'use client'

import { useState } from 'react'

export default function CtaBand() {
  const [sent, setSent] = useState(false)

  return (
    <section className="cta-band-new" id="kontakt">
      <div className="cta-band-inner">
        <div>
          <span className="eyebrow">Vyžiadať dopyt</span>
          <h2 className="h-section">
            Spoľahlivý partner<br />
            pre <em>váš sortiment.</em>
          </h2>
          <p className="cta-band-lede">
            Napíšte základné parametre — segment, mesto, odhadované denné množstvo. Ozve sa obchodný manažér s ponukou pre váš typ prevádzky.
          </p>
        </div>

        <form
          className="cta-form"
          onSubmit={(e) => { e.preventDefault(); setSent(true) }}
        >
          <span className="cta-form-label">B2B dopyt</span>
          <div className="cta-form-row">
            <label className="sr-only" htmlFor="cta-company">Spoločnosť / prevádzka</label>
            <input id="cta-company" type="text" placeholder="Spoločnosť / prevádzka" required />
            <label className="sr-only" htmlFor="cta-contact">Kontaktná osoba</label>
            <input id="cta-contact" type="text" placeholder="Kontaktná osoba" required />
          </div>
          <div className="cta-form-row">
            <label className="sr-only" htmlFor="cta-email">E-mail</label>
            <input id="cta-email" type="email" placeholder="E-mail" required />
            <label className="sr-only" htmlFor="cta-phone">Telefón</label>
            <input id="cta-phone" type="tel" placeholder="Telefón" />
          </div>
          <label className="sr-only" htmlFor="cta-type">Typ prevádzky</label>
          <select id="cta-type" required defaultValue="">
            <option value="" disabled>Typ prevádzky —</option>
            <option>Supermarket / reťazec</option>
            <option>Hotel</option>
            <option>Reštaurácia / gastro</option>
            <option>Distribútor</option>
            <option>Privátna značka</option>
          </select>
          <label className="sr-only" htmlFor="cta-volume">Odhadované denné množstvo</label>
          <input id="cta-volume" type="text" placeholder="Odhadované denné množstvo (napr. 500 ks)" />
          <button className="cta-form-submit" type="submit">
            {sent ? 'Odoslané — ozveme sa ✓' : 'Vyžiadať ponuku →'}
          </button>
          <p className="cta-form-small">
            Dáta spracúvame podľa GDPR, nezdieľame s tretími stranami.
          </p>
        </form>
      </div>
    </section>
  )
}
