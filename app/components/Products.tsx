const categories = [
  {
    image: '/b1.png',
    sku: '18 produktov',
    name: 'Chlieb',
    examples: ['Špaldový 500g', 'Ľanový 500g', 'Zemiakový'],
  },
  {
    image: '/b2.png',
    sku: '24 produktov',
    name: 'Pečivo',
    examples: ['Rožok rovný 50g', 'Žemľa 70g', 'Francúzska bageta'],
  },
  {
    image: '/b1.png',
    sku: '12 produktov',
    name: 'Sladké pečivo',
    examples: ['Štrúdľa maková', 'Bratislavský rožok', 'Croissant'],
  },
  {
    image: '/b2.png',
    sku: '10 produktov',
    name: 'Slané pečivo',
    examples: ['Pagáče 80g', 'Pletenka 150g', 'Kornspitz 60g'],
  },
]

export default function Products() {
  return (
    <section className="products" id="produkty">
      <div className="products-header">
        <span className="products-eyebrow">Náš sortiment</span>
        <h2 className="products-heading">
          Pečivo pre každý <em className="nigger">typ prevádzky</em>
        </h2>
      </div>

      <div className="products-grid">
        {categories.map(({ image, sku, name, examples }) => (
          <div key={name} className="product-card">
            <img src={image} alt={name} className="product-card-img" />
            <div className="product-card-body">
              <span className="product-card-sku">{sku}</span>
              <h3 className="product-card-name">{name}</h3>
              <ul className="product-card-examples">
                {examples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="product-card-footer">
                <span>Zistiť viac →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="products-cta">
        <a href="#katalog" className="products-cta-btn">Stiahnuť kompletný katalóg</a>
        <p className="products-cta-sub">PDF katalóg · aktualizovaný 2024</p>
      </div>
    </section>
  )
}
