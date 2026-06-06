import Image from 'next/image'

const categories = [
  {
    image: '/b1.png',
    tag: 'Pre reťazce',
    name: 'Chlieb a bochníky',
    skus: 11,
    meta: 'Trvanl. 3–5 dní',
    items: [
      { name: 'Dlháň 800 g', note: 'klasika' },
      { name: 'Tmavý chlieb', note: 'tradičné' },
      { name: 'Špaldový chlieb 500 g', note: 'remeslo' },
      { name: 'Chlieb Vitamineral 250 g', note: 'vlastná receptúra' },
    ],
    more: 'Zobraziť katalóg chlebov →',
  },
  {
    image: '/b2.png',
    tag: 'HoReCa',
    name: 'Bagety a rožky',
    skus: 13,
    meta: 'Dodáv. denne 4:30',
    items: [
      { name: 'Francúzska bageta 150 g', note: 'klasika' },
      { name: 'Bageta tmavá 200 g', note: 'raňajky' },
      { name: 'Celozrnný rožok 50 g', note: 'bestseller' },
      { name: 'Anglický rožok 70 g', note: 'retail' },
    ],
    more: 'Zobraziť katalóg bagiet →',
  },
  {
    image: '/b1.png',
    tag: 'Gastro & catering',
    name: 'Slané špeciality',
    skus: 12,
    meta: 'MOQ 200 ks',
    items: [
      { name: 'Pagáč oškvarkový 85 g', note: 'tradičné' },
      { name: 'Banquet pagáč slaný 100 ks', note: 'catering' },
      { name: 'Cesnakový uzol 100 g', note: 'gastro' },
      { name: 'Pizza rožok 70 g', note: 'HoReCa' },
    ],
    more: 'Zobraziť gastro katalóg →',
  },
  {
    image: '/b2.png',
    tag: 'Privátna značka',
    name: 'Sladké pečivo',
    skus: 38,
    meta: 'Vlastná receptúra',
    items: [
      { name: 'Bratislavský Rožok orechový 50 g', note: 'tradičné' },
      { name: 'Štrúdľa jablko/mak noha min. 950 g', note: 'sezónne' },
      { name: 'Vianočka 320 g', note: 'sezónne' },
      { name: 'Buchtičky tvarohové 320 g', note: 'bestseller' },
    ],
    more: 'Vytvoriť privátnu značku →',
  },
  {
    image: '/b1.png',
    tag: 'Zdravé koncepty',
    name: 'Špeciálne pečivo',
    skus: 4,
    meta: 'Funkčné zloženie',
    items: [
      { name: 'Chlieb Vitamineral 250 g', note: 'vlastná receptúra' },
      { name: 'Sezamový bochník 125 g', note: 'špeciality' },
      { name: 'Zemiakový chlieb', note: 'tradičné' },
      { name: 'Sendvič 320 g', note: 'retail' },
    ],
    more: 'Zobraziť špeciálne pečivo →',
  },
]

export default function Products() {
  return (
    <section className="products-new" id="produkty">
      <div className="products-new-header">
        <div>
          <span className="eyebrow">Sortiment</span>
          <h2 className="h-section lg">
            Pečivo podľa<br />
            <em>vašej prevádzky</em>
          </h2>
        </div>
        <div className="products-new-header-right">
          <div><strong>Balené sladké a slané pečivo,</strong> mrazené pečivo na dopek alebo rozmraz, čerstvé pečivo, chlieb a štrúdle.</div>
          <div><strong>Privátne značky</strong> a vývoj noviniek podľa potrieb odberateľa.</div>
          <div><strong>Sezónne a limitované edície</strong> pre Vianoce, Veľkú noc a ďalšie obdobia.</div>
        </div>
      </div>

      <div className="products-grid-new">
        {categories.map((c) => (
          <article className="product-col" key={c.name + c.tag}>
            <div className="product-col-img-wrap">
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 20vw"
                className="product-col-img"
              />
            </div>
            <div className="product-col-body">
              <span className="product-col-tag">{c.tag}</span>
              <h3 className="product-col-name">{c.name}</h3>
              <div className="product-col-meta">
                <span><strong>{c.skus}</strong> SKU</span>
                <span>{c.meta}</span>
              </div>
              <ul className="product-col-list">
                {c.items.map((it) => (
                  <li key={it.name}>
                    {it.name} <span>{it.note}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="product-col-more">{c.more}</a>
            </div>
          </article>
        ))}
      </div>

      <div className="products-new-footer">
        <div className="products-new-footer-copy">
          <strong>Kompletný B2B katalóg</strong> vrátane technických listov, alergénov a balenia zasielame na vyžiadanie.
        </div>
        <a href="#kontakt" className="btn-dark">Vyžiadať katalóg →</a>
      </div>
    </section>
  )
}
