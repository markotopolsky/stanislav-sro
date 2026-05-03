'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 24000, display: (n: number) => n.toLocaleString('sk-SK'), unit: ' ks', label: 'produkcia denne', meta: 'kapacita 3× navýšiteľná' },
  { value: 120, display: (n: number) => String(n), unit: '+', label: 'aktívnych B2B odberateľov', meta: 'reťazce · hotely · gastro' },
  { value: 33, display: (n: number) => String(n), unit: '', label: 'rokov nepretržitej výroby', meta: 'rodinný podnik od 1991' },
  { value: 994, display: (n: number) => (n / 10).toLocaleString('sk-SK', { minimumFractionDigits: 1, maximumFractionDigits: 1 }), unit: ' %', label: 'on-time dodávok za 2025', meta: 'interný SLA report' },
]

export default function Stats() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 1200
    const steps = 40
    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setCounts(stats.map((s) => Math.round(s.value * eased)))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started])

  return (
    <section className="stats-new" id="stats" ref={ref}>
      <div className="stats-new-inner">
        {stats.map((s, i) => (
          <div className="stat" key={s.label}>
            <div className="stat-num">
              {s.display(counts[i])}
              <span className="unit">{s.unit}</span>
            </div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-meta">{s.meta}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
