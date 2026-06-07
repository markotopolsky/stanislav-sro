import { Fragment } from 'react'

const milestones = [
  { year: '1991', title: 'Založenie spoločnosti', text: 'Začiatok výroby v Kráľovej pri Senci.' },
  { year: '—', title: 'Míľnik (doplniť)', text: 'Krátky popis udalosti — doplniť po konzultácii s klientom.' },
  { year: '—', title: 'Míľnik (doplniť)', text: 'Krátky popis udalosti — doplniť po konzultácii s klientom.' },
  { year: '—', title: 'Míľnik (doplniť)', text: 'Krátky popis udalosti — doplniť po konzultácii s klientom.' },
  { year: '2026', title: 'Dnes', text: 'Tradičný slovenský výrobca pekárenských výrobkov pre obchodné reťazce a B2B odberateľov.' },
]

export default function About() {
  return (
    <section className="about-new" id="o-nas">
      <div className="about-new-inner">
        <div className="about-new-head">
          <div>
            <span className="eyebrow">O spoločnosti</span>
            <h2 className="h-section lg">
              Tradičný slovenský<br />
              výrobca <em>od roku 1991.</em>
            </h2>
          </div>
          <div className="about-new-head-right">
            <p>
              STANISLAV, s. r. o. — Kráľovská pekáreň so sídlom v Kráľovej pri Senci. Výrobca kvalitných a bezpečných pekárenských výrobkov pre obchodné reťazce a firemných odberateľov. Značka stavia na tradičných receptúrach, konzistentnej kvalite a čerstvosti.
            </p>
          </div>
        </div>

        <div className="timeline-rail">
          {[2, 3, 4, 5].map((col) => (
            <div
              key={`tl-divider-${col}`}
              className="tl-divider"
              style={{ gridColumn: col, gridRow: '1 / -1' }}
              aria-hidden="true"
            />
          ))}

          {milestones.map((m, i) => (
            <Fragment key={`${m.year}-${i}`}>
              <div
                className="tl-year"
                style={{ gridColumn: i + 1, gridRow: 1 }}
              >
                {m.year}
              </div>
              <div
                className="tl-title"
                style={{ gridColumn: i + 1, gridRow: 2 }}
              >
                {m.title}
              </div>
              <p
                className="tl-text"
                style={{ gridColumn: i + 1, gridRow: 3 }}
              >
                {m.text}
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
