import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    image: '/b1.png',
    tag: 'Balené & krájané',
    name: 'Chlieb a bochníky',
    href: '/produkty#chlieb-pecivo',
    skus: 11,
    meta: 'Trvanl. 3–5 dní',
    items: [
      { name: 'Dlháň 800 g', note: 'krájaný, balený' },
      { name: 'Tmavý chlieb', note: 'ražná múka' },
      { name: 'Špaldový chlieb 500 g', note: 'špaldová múka' },
      { name: 'Chlieb Vitamineral 250 g', note: 'semienka & obilniny' },
    ],
    more: 'Zobraziť katalóg chlebov →',
  },
  {
    image: '/b2.png',
    tag: 'Čerstvá dodávka',
    name: 'Bagety a rožky',
    href: '/produkty#slane-pecivo',
    skus: 13,
    meta: 'Dodáv. denne 4:30',
    items: [
      { name: 'Francúzska bageta 150 g', note: 'pšeničná múka' },
      { name: 'Bageta tmavá 200 g', note: 'ražný podiel' },
      { name: 'Celozrnný rožok 50 g', note: 'celozrnná múka' },
      { name: 'Anglický rožok 70 g', note: 'mäkký, balený' },
    ],
    more: 'Zobraziť katalóg bagiet →',
  },
  {
    image: '/b1.png',
    tag: 'Gastro & catering',
    name: 'Slané špeciality',
    href: '/produkty#slane-pecivo',
    skus: 12,
    meta: 'MOQ 200 ks',
    items: [
      { name: 'Pagáč oškvarkový 85 g', note: 'bravčové oškvarky' },
      { name: 'Banquet pagáč slaný 100 ks', note: 'balenie 100 ks' },
      { name: 'Cesnakový uzol 100 g', note: 'čerstvý cesnak' },
      { name: 'Pizza rožok 70 g', note: 'paradajka & syr' },
    ],
    more: 'Zobraziť gastro katalóg →',
  },
  {
    image: '/b2.png',
    tag: 'Vlastná receptúra',
    name: 'Sladké pečivo',
    href: '/produkty#sladke-pecivo',
    skus: 38,
    meta: 'Vlastná receptúra',
    items: [
      { name: 'Bratislavský Rožok orechový 50 g', note: 'orechová náplň' },
      { name: 'Štrúdľa jablko/mak noha min. 950 g', note: 'jablko / mak' },
      { name: 'Vianočka 320 g', note: 'sezónna edícia' },
      { name: 'Buchtičky tvarohové 320 g', note: 'tvarohová náplň' },
    ],
    more: 'Vytvoriť privátnu značku →',
  },
  {
    image: '/b1.png',
    tag: 'Špeciálne zloženie',
    name: 'Špeciálne pečivo',
    href: '/produkty#specialne-pecivo',
    skus: 4,
    meta: 'Funkčné zloženie',
    items: [
      { name: 'Chlieb Vitamineral 250 g', note: 'semienka & obilniny' },
      { name: 'Sezamový bochník 125 g', note: 'sezamové semienka' },
      { name: 'Zemiakový chlieb', note: 'zemiakový podiel' },
      { name: 'Sendvič 320 g', note: 'balený, krájený' },
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
          <Link className="product-col" href={c.href} key={c.name + c.tag}>
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
              <span className="product-col-more">{c.more}</span>
            </div>
          </Link>
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
