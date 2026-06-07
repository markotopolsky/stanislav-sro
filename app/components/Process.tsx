import { Fragment } from 'react'

const steps = [
  {
    num: 'Krok 01',
    title: ['Výber', 'surovín'],
    text: 'Kvalitná múka, náplne a pomocné suroviny tvoria základ pre stabilitu výrobku.',
  },
  {
    num: 'Krok 02',
    title: ['Príprava', 'receptúr'],
    text: 'Receptúry spájajú chuť, spracovateľnosť cesta, stabilitu a požiadavky odberateľov.',
  },
  {
    num: 'Krok 03',
    title: ['Spracovanie', 'cesta'],
    text: 'Presné dávkovanie, miesenie, kontrola konzistencie, odpočinok a kysnutie.',
  },
  {
    num: 'Krok 04',
    title: ['Tvarovanie', 'a plnenie'],
    text: 'Rovnomernosť, objem a atraktívny rez pri plnených aj tradičných výrobkoch.',
  },
  {
    num: 'Krok 05',
    title: ['Pečenie,', 'chladenie a balenie'],
    text: 'Stabilná farba, kôrka, vôňa, textúra. Balenie a expedícia alebo zmrazovanie podľa typu výrobku.',
  },
]

export default function Process() {
  return (
    <section className="process" id="proces">
      <div className="process-inner">
        <div className="process-head">
          <div>
            <span className="eyebrow">Výrobný proces</span>
            <h2 className="h-section lg">
              Procesne zvládnutá,<br />
              <em>hygienicky riadená výroba.</em>
            </h2>
          </div>
          <p className="section-lede">
            Výroba prebieha podľa prísnych hygienických noriem a štandardov. Presné receptúry a technologické postupy zaručujú rovnakú kvalitu a chuť produktov.
          </p>
        </div>

        <div className="process-steps">
          {[2, 3, 4, 5].map((col) => (
            <div
              key={`divider-${col}`}
              className="process-divider"
              style={{ gridColumn: col, gridRow: '1 / -1' }}
              aria-hidden="true"
            />
          ))}

          {steps.map((s, i) => (
            <Fragment key={s.num}>
              <div
                className="process-step-num"
                style={{ gridColumn: i + 1, gridRow: 1 }}
              >
                {s.num}
              </div>
              <h3
                className="process-step-title"
                style={{ gridColumn: i + 1, gridRow: 2 }}
              >
                {s.title[0]}
                <br />
                {s.title[1]}
              </h3>
              <p
                className="process-step-text"
                style={{ gridColumn: i + 1, gridRow: 3 }}
              >
                {s.text}
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
