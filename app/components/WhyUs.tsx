const cards = [
  {
    stat: '01',
    title: 'Slovenský pôvod',
    text: 'Domáca výroba a dlhoročná znalosť slovenského trhu od roku 1991.',
    list: ['Posilnenie ponuky o kvalitné slovenské produkty', 'Dôveryhodný pôvod pre koncového zákazníka'],
  },
  {
    stat: '02',
    title: 'Stabilná kvalita',
    text: 'Konzistentná výroba, dôraz na senzoriku výrobkov a opakovateľný štandard.',
    list: ['Procesne zvládnutá a hygienicky riadená výroba', 'Dôraz na bezpečnosť v každej fáze'],
  },
  {
    stat: '03',
    title: 'Inovácie a receptúry',
    text: 'Nové kombinácie chutí, viac náplní, jednoduchšie zloženie a taktiež snaha eliminovať prídavné látky.',
    list: ['Sezónne a limitované novinky', 'Sortiment aj bez konzervačných látok'],
  },
  {
    stat: '04',
    title: 'Flexibilita a partnerstvo',
    text: 'Prispôsobenie sortimentu a spolupráca pri rozvoji výrobkov podľa požiadaviek odberateľa.',
    list: ['Vývoj noviniek a privátnych značiek', 'Sezónne kampane a regionálne preferencie'],
  },
]

export default function WhyUs() {
  return (
    <section className="whyus-new" id="preco-my">
      <div className="whyus-new-inner">
        <div className="whyus-new-left">
          <span className="eyebrow">Prečo s nami</span>
          <h2 className="h-section">
            Tradícia, kvalita<br />
            a <em>obchodné reťazce.</em>
          </h2>
          <p className="whyus-new-lede">
            Spájame poctivé spracovanie cesta a overené suroviny s automatizovanou výrobou a presnými receptúrami. Výsledkom je stabilný sortiment, na ktorý sa odberateľ môže spoľahnúť.
          </p>
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
