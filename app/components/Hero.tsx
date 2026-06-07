'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = ['/b1.png', '/b2.png']
const badges = ['IFS FOOD', 'ZNAČKA KVALITY', 'HACCP', 'ISO 22000']

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      {/* Left */}
      <div className="hero-left">
        <span className="hero-eyebrow">B2B dodávateľ od roku 1991</span>

        <h1 className="hero-heading">
          Spoľahlivý partner<br />
          pre <em className='hero-heading-bold'>váš obchod</em>
        </h1>

        <p className="hero-subtext">
          Tradičný slovenský výrobca pekárenských výrobkov<br />
          pre obchodné reťazce a firemných odberateľov
        </p>

        <div className="hero-buttons">
          <a href="#kontakt" className="hero-cta-primary">Vyžiadať ponuku</a>
          <a href="#produkty" className="hero-cta-secondary">
            Náš sortiment <span aria-hidden>→</span>
          </a>
        </div>

        <div className="hero-badges">
          {badges.map((b) => (
            <span key={b} className="hero-badge">{b}</span>
          ))}
        </div>
      </div>

      {/* Right — Carousel */}
      <div className="hero-carousel">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
            className="hero-carousel-img"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
          />
        ))}
        <div className="hero-dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero-dot${i === activeIndex ? ' active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Snímka ${i + 1} z ${images.length}`}
              aria-current={i === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
