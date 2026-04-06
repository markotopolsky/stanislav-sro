'use client'

import { useEffect, useRef } from 'react'

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Denná distribúcia',
    text: 'Čerstvé pečivo každý deň. Načas, bez výnimky.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Certifikovaná výroba',
    text: 'HACCP a ISO 22000. Najvyššie štandardy kvality.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Flexibilné objednávky',
    text: 'Vlastný harmonogram prispôsobený vašim potrebám.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: '33 rokov tradície',
    text: 'Od roku 1991 dodávame do najväčších reťazcov.',
  },
]

export default function WhyUs() {
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
    <section className="whyus" id="preco-my">
      <div className="whyus-layout">
        <div className="whyus-left">
          <span className="whyus-eyebrow">Prečo my</span>
          <h2 className="whyus-heading">Prečo si nás vybrať</h2>
          <p className="whyus-subtext">Tridsať rokov skúseností a spoľahlivosti.</p>
          <a href="#" className="whyus-cta">Zistiť viac →</a>
        </div>

        <div className="whyus-grid">
          {cards.map(({ icon, title, text }, i) => (
            <div
              key={title}
              ref={(el) => { cardRefs.current[i] = el }}
              className="whyus-card fade-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="whyus-card-icon">{icon}</div>
              <h3 className="whyus-card-title">{title}</h3>
              <p className="whyus-card-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
