'use client'

import { useState } from 'react'
import { Phone, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'

const items = [
  {
    q: 'Aká je minimálna objednávka (MOQ) pre nového partnera?',
    a: <>Pre stály sortiment <strong>žiadna MOQ</strong> — dodávame od 1 prepravky. Pri <strong>privátnej značke MOQ 2 000 ks/deň</strong>, pri sezónnych špecialitách 500 ks/deň. Pre pilotnú šaržu privátnej značky dohodneme znížené MOQ na prvé 2 týždne.</>,
  },
  {
    q: 'Aký je lead time medzi objednávkou a dodaním?',
    a: <>Stály sortiment: objednávka do 14:00 → dodanie nasledujúce ráno. Nové SKU v našom katalógu: 48 h. Privátna značka: 5–10 pracovných dní na pilotnú šaržu, potom štandardný denný cyklus.</>,
  },
  {
    q: 'Dodávate aj mimo Bratislavy? Aký je rádius?',
    a: <>Vlastnými chladenými vozidlami pokrývame <strong>180 km rádius</strong> — celé západné Slovensko, Považie, Trnavský kraj a Bratislavu. Pre dodávky do východných častí SR spolupracujeme s overeným logistickým partnerom (Nitra, B. Bystrica).</>,
  },
  {
    q: 'Robíte privátne značky? Aký je proces?',
    a: <>Áno. Proces: (1) zaslanie briefu + target cost, (2) návrh receptúry + pilotná šarža do 10 dní, (3) technický list, alergény, EAN, balenie podľa CI odberateľa, (4) nábeh výroby. Aktuálne vyrábame pod <strong>6 privátnymi značkami</strong> pre retail a HoReCa.</>,
  },
  {
    q: 'Aké sú platobné podmienky a faktúrovací cyklus?',
    a: <>Štandardne <strong>splatnosť 30 dní</strong> od vystavenia faktúry, možnosť 14-dňovej splatnosti so zľavou 1,5 %. Faktúrujeme dekádne alebo mesačne, podľa preferencie odberateľa. Podporujeme EDI vrátane INVOIC, DESADV, ORDERS.</>,
  },
  {
    q: 'Ako riešite reklamácie a nezhody v kvalite?',
    a: <>Reklamácia cez portál alebo e-mail → potvrdenie do 4 h → technická analýza šarže do 24 h (každá šarža je archivovaná 24 mesiacov). Kompenzácia v ďalšej faktúre alebo náhradnou dodávkou podľa dohody. Za 2025: 0,18 % reklamovaných kusov.</>,
  },
  {
    q: 'Poskytujete exkluzivitu pre lokálny trh?',
    a: <>Pri privátnej značke áno — receptúra je exkluzívna pre odberateľa. Pri stálom sortimente riešime regionálnu exkluzivitu individuálne, typicky v rámci rámcovej zmluvy na 12+ mesiacov.</>,
  },
  {
    q: 'Čo musím poslať, ak chcem pilotnú dodávku?',
    a: <>Stačí vyplniť formulár nižšie — meno, typ prevádzky, odhadované denné množstvo a mesto. Do 4 pracovných hodín sa vám ozve Martin Král s cenníkom pre váš segment a návrhom pilotnej dodávky.</>,
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-left">
          <span className="eyebrow">Časté otázky</span>
          <h2 className="h-section">
            Odpovedáme na otázky <em>pred</em> dopytom.
          </h2>
          <p className="faq-left-lede">
            Zostavili sme na základe reálnych 200+ dopytov za posledné dva roky. Ak tu nenájdete svoje — napíšte priamo na obchod.
          </p>

          <div className="faq-contact">
            <span className="faq-contact-label">Priamy kontakt na obchod</span>
            <h3 className="faq-contact-title">Ing. Martin Král</h3>
            <div className="faq-contact-row">
              <Phone size={18} weight="regular" aria-hidden />
              <strong>+421 903 123 456</strong>
            </div>
            <div className="faq-contact-row">
              <EnvelopeSimple size={18} weight="regular" aria-hidden />
              <strong>obchod@kralovskapekaren.sk</strong>
            </div>
            <div className="faq-contact-row faq-contact-row-note">Odpovedáme do 4 pracovných hodín</div>
          </div>
        </div>

        <div className="faq-list">
          {items.map((it, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={it.q}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                >
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="q">{it.q}</span>
                  <span className="mark" aria-hidden>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className="faq-a"
                  >
                    {it.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
