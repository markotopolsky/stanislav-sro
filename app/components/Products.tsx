'use client'

import { useEffect, useRef } from 'react'

const categories = [
  {
    image: '/b1.png',
    count: '18 produktov',
    name: 'Chlieb a pečivo',
    chips: ['Francúzska Bageta', 'Celozrnný rožok', 'Chlieb Dlháň', 'Bageta tmavá'],
  },
  {
    image: '/b2.png',
    count: '18 produktov',
    name: 'Chlieb a pečivo',
    chips: ['Francúzska Bageta', 'Celozrnný rožok', 'Chlieb Dlháň', 'Bageta tmavá'],
  },
  {
    image: '/b1.png',
    count: '18 produktov',
    name: 'Chlieb a pečivo',
    chips: ['Francúzska Bageta', 'Celozrnný rožok', 'Chlieb Dlháň', 'Bageta tmavá'],
  },
  {
    image: '/b2.png',
    count: '18 produktov',
    name: 'Chlieb a pečivo',
    chips: ['Francúzska Bageta', 'Celozrnný rožok', 'Chlieb Dlháň', 'Bageta tmavá'],
  },
]

export default function Products() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="products" id="produkty">
      <div className="products-header">
        <span className="products-eyebrow">Náš sortiment</span>
        <h2 className="products-heading">
          Pečivo pre každý
          <br />
          <em className="products-heading-em">typ prevádzky</em>
        </h2>
      </div>

      <div className="products-grid">
        {categories.map(({ image, count, name, chips }, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el }}
            className="product-card fade-up"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <img src={image} alt={name} className="product-card-img" />
            <div className="product-card-body">
              <span className="product-card-count">{count}</span>
              <h3 className="product-card-name">{name}</h3>
              <p className="product-card-intro">V našom sortimente produktov nájdete:</p>
              <div className="product-card-chips">
                {chips.map((chip) => (
                  <span key={chip} className="product-card-chip">{chip}</span>
                ))}
              </div>
              <div className="product-card-divider" />
              <a href="#" className="product-card-link">Zistiť viac ›</a>
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
