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
            Cenník do <em>4 hodín,</em><br />
            pilotná dodávka do 10 dní.
          </h2>
          <p className="cta-band-lede">
            Napíšte základné parametre — segment, mesto, odhadované denné množstvo. Ozve sa obchodný manažér s cenníkom pre váš typ prevádzky a časovou osou pilotu.
          </p>
          <div className="cta-band-meta">
            <div><strong>4 h</strong>odpoveď s cenníkom</div>
            <div><strong>10 dní</strong>do pilotnej dodávky</div>
            <div><strong>0 €</strong>za pilotnú šaržu do 200 ks</div>
          </div>
        </div>

        <form
          className="cta-form"
          onSubmit={(e) => { e.preventDefault(); setSent(true) }}
        >
          <span className="cta-form-label">B2B dopyt · 3 polia, 60 sekúnd</span>
          <div className="cta-form-row">
            <input type="text" placeholder="Spoločnosť / prevádzka" required />
            <input type="text" placeholder="Kontaktná osoba" required />
          </div>
          <div className="cta-form-row">
            <input type="email" placeholder="E-mail" required />
            <input type="text" placeholder="Telefón" />
          </div>
          <select required defaultValue="">
            <option value="" disabled>Typ prevádzky —</option>
            <option>Supermarket / reťazec</option>
            <option>Hotel</option>
            <option>Reštaurácia / gastro</option>
            <option>Distribútor</option>
            <option>Privátna značka</option>
          </select>
          <input type="text" placeholder="Odhadované denné množstvo (napr. 500 ks)" />
          <button className="cta-form-submit" type="submit">
            {sent ? 'Odoslané — ozveme sa do 4 h ✓' : 'Vyžiadať cenník →'}
          </button>
          <p className="cta-form-small">
            Odpovieme do 4 pracovných hodín. Dáta spracúvame podľa GDPR, nezdieľame s tretími stranami.
          </p>
        </form>
      </div>
    </section>
  )
}
