import Image from 'next/image'
import Link from 'next/link'

const CLOUDINARY = 'https://res.cloudinary.com/dl6xldrhk/image/upload'

const categories = [
  {
    image: `${CLOUDINARY}/v1781533435/kralovska-pekaren/products/dlhan.png`,
    tag: 'Balené & krájané',
    name: 'Chlieb',
    href: '/produkty#chlieb',
    skus: 6,
    meta: 'Trvanl. 3–5 dní',
    items: [
      { name: 'Dlháň 800 g', note: 'krájaný, balený' },
      { name: 'Tmavý chlieb', note: 'ražná múka' },
      { name: 'Špaldový chlieb 500 g', note: 'špaldová múka' },
      { name: 'Chlieb Vitamineral 250 g', note: 'semienka & obilniny' },
    ],
  },
  {
    image: `${CLOUDINARY}/v1781533432/kralovska-pekaren/products/celozrnny-rozok.png`,
    tag: 'Čerstvá dodávka',
    name: 'Pečivo',
    href: '/produkty#pecivo',
    skus: 8,
    meta: 'Dodáv. denne 4:30',
    items: [
      { name: 'Celozrnný rožok 50 g', note: 'celozrnná múka' },
      { name: 'Grahamový rohlík 50 g', note: 'pšeničná múka' },
      { name: 'Jačmenné pečivo 60 g', note: 'jačmenný slad' },
      { name: 'Rožok rovný 50 g', note: 'klasický' },
    ],
  },
  {
    image: `${CLOUDINARY}/v1781533451/kralovska-pekaren/products/pagac-oskvarkovy-85g.png`,
    tag: 'Gastro & catering',
    name: 'Slané pečivo',
    href: '/produkty#slane-pecivo',
    skus: 18,
    meta: 'MOQ 200 ks',
    items: [
      { name: 'Francúzska bageta 150 g', note: 'pšeničná múka' },
      { name: 'Pagáč oškvarkový 85 g', note: 'bravčové oškvarky' },
      { name: 'Cesnakový uzol 100 g', note: 'čerstvý cesnak' },
      { name: 'Pizza rožok 70 g', note: 'paradajka & syr' },
    ],
  },
  {
    image: `${CLOUDINARY}/v1781533424/kralovska-pekaren/products/bratislavsky-rozok-makovy.png`,
    tag: 'Vlastná receptúra',
    name: 'Sladké pečivo',
    href: '/produkty#sladke-pecivo',
    skus: 38,
    meta: 'Vlastná receptúra',
    items: [
      { name: 'Bratislavský rožok orechový 50 g', note: 'orechová náplň' },
      { name: 'Vianočka 320 g', note: 'sezónna edícia' },
      { name: 'Buchtičky tvarohové 320 g', note: 'tvarohová náplň' },
      { name: 'Závin makový 200 g', note: 'maková náplň' },
    ],
  },
  {
    image: `${CLOUDINARY}/v1781533465/kralovska-pekaren/products/strudla-jablko-mak.png`,
    tag: 'Ručne rolované',
    name: 'Štrúdle',
    href: '/produkty#strudle',
    skus: 5,
    meta: 'Noha min. 950 g',
    items: [
      { name: 'Štrúdľa jablko/mak', note: 'noha min. 950 g' },
      { name: 'Štrúdľa jablko/orech', note: 'noha min. 950 g' },
      { name: 'Štrúdľa mak/višňa', note: 'noha min. 950 g' },
      { name: 'Štrúdľa tvaroh/višňa', note: 'noha min. 950 g' },
    ],
  },
]

export default function Products() {
  return (
    <section className="products-new" id="produkty">
      <div className="products-new-header">
        <div>
          <span className="eyebrow">Sortiment</span>
          <h2 className="h-section lg">
            Kompletný<br />
            <em>sortiment</em>
          </h2>
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
              <span className="product-col-more">Zobraziť →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="products-new-footer">
        <div className="products-new-footer-copy">
          <strong>Celý sortiment</strong> v jednom katalógu.
        </div>
        <Link href="/produkty" className="btn-dark">Zobraziť katalóg →</Link>
      </div>
    </section>
  )
}
