'use client'

import { useEffect, useRef, useState } from 'react'

const milestones = [
  {
    year: '1991',
    title: 'Začiatok s jednou pecou a jasnou víziou.',
    text: 'Pekáreň vznikla v Bratislave ako rodinný podnik. Od prvého dňa sme stavili na kvalitné suroviny a tradičné postupy. Malá pekáreň s veľkými ambíciami.',
  },
  {
    year: '2001',
    title: 'Prvé dodávky do veľkých reťazcov.',
    text: 'Po desiatich rokoch rastu sme rozšírili výrobu a začali dodávať do prvých supermarketov. Kvalita ktorú sme budovali sa stala naším obchodným argumentom.',
  },
  {
    year: '2010',
    title: 'ISO 22000 — kvalita certifikovaná.',
    text: 'Získanie medzinárodného certifikátu potvrdilo to čo sme vždy vedeli — naša výroba spĺňa najvyššie štandardy potravinovej bezpečnosti.',
  },
  {
    year: '2018',
    title: 'Digitálna transformácia.',
    text: 'Spustenie online objednávok a moderného skladového systému. Flexibilita a spoľahlivosť dodávok na novej úrovni.',
  },
  {
    year: '2024',
    title: '120+ partnerov. Každý deň.',
    text: 'Dnes dodávame čerstvé pečivo do viac ako 120 prevádzok po celom Slovensku. Každý deň. Bez výnimky.',
  },
]

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) setActiveIndex(index)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="o-nas">
      <div className="about-header">
        <span className="about-eyebrow">O nás</span>
        <h2 className="about-heading">
          Pečieme poctivo od roku <em>1991</em>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-timeline">
          <div className="about-timeline-line" />
          {milestones.map(({ year }, i) => (
            <button
              key={year}
              className={`about-timeline-year${i === activeIndex ? ' active' : ''}`}
              onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="about-content">
          {milestones.map(({ year, title, text }, i) => (
            <div
              key={year}
              ref={(el) => { sectionRefs.current[i] = el }}
              className="about-content-section"
            >
              <span className="about-content-year">{year}</span>
              <h3 className="about-content-title">{title}</h3>
              <p className="about-content-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
