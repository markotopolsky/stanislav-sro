const categories = [
  {
    image: '/b1.png',
    tag: 'Pre reťazce',
    name: 'Chlieb a bochníky',
    skus: 24,
    meta: 'Trvanl. 3–5 dní',
    items: [
      { name: 'Dlháň 900 g', note: 'klasika' },
      { name: 'Ražný bochník 500 g', note: 'bestseller' },
      { name: 'Celozrnný 750 g', note: 'BIO' },
      { name: 'Kváskový 1 kg', note: 'remeslo' },
    ],
    more: 'Zobraziť katalóg chlebov →',
  },
  {
    image: '/b2.png',
    tag: 'HoReCa',
    name: 'Bagety a rožky',
    skus: 18,
    meta: 'Dodáv. denne 4:30',
    items: [
      { name: 'Francúzska bageta 250 g', note: 'klasika' },
      { name: 'Rustikálna bageta', note: 'hotely' },
      { name: 'Celozrnný rožok', note: 'raňajky' },
      { name: 'Cibuľový rožok', note: 'gastro' },
    ],
    more: 'Zobraziť katalóg bagiet →',
  },
  {
    image: '/b1.png',
    tag: 'Gastro & catering',
    name: 'Slané špeciality',
    skus: 14,
    meta: 'MOQ 200 ks',
    items: [
      { name: 'Burger bulka 4″', note: 'HoReCa' },
      { name: 'Hot-dog bulka 20 cm', note: 'retail' },
      { name: 'Pizza základ 33 cm', note: 'catering' },
      { name: 'Focaccia 500 g', note: 'hotely' },
    ],
    more: 'Zobraziť gastro katalóg →',
  },
  {
    image: '/b2.png',
    tag: 'Privátna značka',
    name: 'Sladké pečivo',
    skus: 12,
    meta: 'Vlastná receptúra',
    items: [
      { name: 'Makový závin 400 g', note: 'sezónne' },
      { name: 'Orechový koláč 500 g', note: 'retail' },
      { name: 'Buchty slivkové', note: 'tradičné' },
      { name: 'Vianočka 700 g', note: 'sezóna' },
    ],
    more: 'Vytvoriť privátnu značku →',
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
          <div><strong>68 SKU</strong> v stálom sortimente</div>
          <div><strong>Privátne značky</strong> na požiadanie (MOQ 2 000 ks / deň)</div>
          <div><strong>Šarža A/B/C</strong> pre variabilnú cenotvorbu</div>
        </div>
      </div>

      <div className="products-grid-new">
        {categories.map((c) => (
          <article className="product-col" key={c.name + c.tag}>
            <img src={c.image} alt={c.name} className="product-col-img" />
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
          <strong>Kompletný B2B katalóg</strong> vrátane technických listov, alergénov, EAN kódov a balenia na paletu. Aktualizovaný 04/2026, 68 SKU, 42 strán PDF.
        </div>
        <a href="#" className="btn-dark">Stiahnuť katalóg (PDF, 2.4 MB)</a>
      </div>
    </section>
  )
}
