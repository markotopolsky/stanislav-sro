const cards = [
  {
    stat: '99,4 %',
    title: 'On-time dodávka',
    text: 'Doručenie na rampu v dohodnutom ±15 min slote. Merané za celý 2025, 43 800 dodávok.',
    list: ['GPS tracking prístupný odberateľovi', 'Zmluvná zľava pri zlyhaní SLA'],
  },
  {
    stat: '< 48 h',
    title: 'Lead time na novú objednávku',
    text: 'Pri stálom sortimente. Pri privátnej značke 5–10 pracovných dní na pilotnú šaržu.',
    list: ['EDI integrácia s reťazcami', 'Portál B2B objednávok 24/7'],
  },
  {
    stat: '3×',
    title: 'Navýšenie kapacity',
    text: 'Druhá linka umožňuje zdvojnásobiť výrobu do 6 týždňov, strojnásobiť pri 90-dňovom oznámení.',
    list: ['Flexibilné sezónne objednávky', 'Zálohová výroba pre peak obdobia'],
  },
  {
    stat: '24 mes.',
    title: 'Sledovateľnosť šarže',
    text: 'Každý bochník v supermarkete vieme spätne priradiť k mlynu, kvásku, peci a kamiónu. ISO 22000.',
    list: ['QR kód na palete', 'Reklamácia doriešená do 24 h'],
  },
]

export default function WhyUs() {
  return (
    <section className="whyus-new" id="preco-my">
      <div className="whyus-new-inner">
        <div className="whyus-new-left">
          <span className="eyebrow">Prečo s nami</span>
          <h2 className="h-section">
            Čo dostanete v zmluve —<br />
            nie v <em>marketingu.</em>
          </h2>
          <p className="whyus-new-lede">
            Každý z týchto parametrov je zapísaný v rámcovej zmluve a meriame ho kvartálne. Výpadok = zľava v ďalšej faktúre.
          </p>
          <blockquote className="whyus-new-quote">
            „Za tri roky spolupráce jeden výpadok v dodávke, vyriešený do 90 minút. Pre sieť 42 predajní nenahraditeľné.“
            <cite>— Nákupčí, reťazec potravín (referenciu radi sprostredkujeme)</cite>
          </blockquote>
        </div>

        <div className="whyus-grid-new">
          {cards.map((c) => (
            <div className="why-card" key={c.title}>
              <div className="why-card-stat">{c.stat}</div>
              <h3 className="why-card-title">{c.title}</h3>
              <p className="why-card-text">{c.text}</p>
              <ul className="why-card-list">
                {c.list.map((li) => <li key={li}>{li}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
