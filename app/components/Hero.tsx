'use client'

import { useEffect, useState } from 'react'

const images = ['/b1.png', '/b2.png']
const badges = ['HACCP', 'ISO 22000', 'DENNÁ DISTRIBÚCIA']

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
          Čerstvé pečivo každý deň pre supermarkety, hotely a <br />
          reštaurácie po celom Slovensku
        </p>

        <div className="hero-buttons">
          <a href="#kontakt" className="hero-cta-primary">Vyžiadať ponuku</a>
          <a href="#katalog" className="hero-cta-secondary">Katalóg produktov</a>
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
          <img
            key={src}
            src={src}
            alt=""
            className="hero-carousel-img"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
          />
        ))}
        <div className="hero-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === activeIndex ? ' active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
