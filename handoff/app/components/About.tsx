const milestones = [
  { year: '1991', title: 'Prvá pec, jedna rodina', text: 'Pekáreň založená v Bratislave. 1 pec, 3 zamestnanci, 1 obchodný partner.' },
  { year: '2001', title: 'Prvý reťazec', text: 'Listing v COOP Jednota. Prechod z remesla na poloautomatizovanú linku.' },
  { year: '2010', title: 'ISO 22000', text: 'Certifikácia otvára dvere do Billa, Tesco a Kaufland.' },
  { year: '2018', title: 'Druhá linka, EDI', text: 'Strojnásobenie kapacity, EDI integrácia s reťazcami, portál B2B objednávok.' },
  { year: '2026', title: '120+ prevádzok', text: 'Dnes dodávame denne do viac ako 120 B2B prevádzok po celom Slovensku.' },
]

export default function About() {
  return (
    <section className="about-new" id="o-nas">
      <div className="about-new-inner">
        <div className="about-new-head">
          <div>
            <span className="eyebrow">Kto za tým stojí</span>
            <h2 className="h-section lg">
              Rodinný podnik<br />
              v <em>tretej generácii.</em>
            </h2>
          </div>
          <div className="about-new-head-right">
            <p>Od otcovej prvej pece v 1991 sme sa rozrástli na priemyselnú kapacitu, ale zostávame rodinným podnikom. Vlastníci sú v prevádzke denne — čo znamená rýchle rozhodnutia bez korporátnej vrstvy.</p>
            <div className="about-new-stat-inline">
              <div><strong>42</strong><span>zamestnancov</span></div>
              <div><strong>2 400 m²</strong><span>výrobná plocha</span></div>
              <div><strong>100 %</strong><span>slovenský kapitál</span></div>
            </div>
          </div>
        </div>

        <div className="timeline-rail">
          {milestones.map((m) => (
            <div className="tl-item" key={m.year}>
              <div className="tl-year">{m.year}</div>
              <div className="tl-title">{m.title}</div>
              <p className="tl-text">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
