'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 1000, suffix: 'ks', label: 'PRODUKCIA DENNE' },
  { value: 120, suffix: '+', label: 'PARTNEROV' },
  { value: 33, suffix: '', label: 'ROKOV NA TRHU' },
  { value: 5, suffix: '', label: 'PREDAJNE V BA' },
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
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const duration = 1200
    const steps = 40
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setCounts(stats.map((s) => Math.round(s.value * eased)))
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [started])

  return (
    <section className="stats" ref={ref}>
      {stats.map(({ suffix, label }, i) => (
        <div
          key={label}
          className={`stats-item${i < stats.length - 1 ? ' stats-item-border' : ''}`}
        >
          <span className="stats-number">{counts[i]}{suffix}</span>
          <span className="stats-label">{label}</span>
        </div>
      ))}
    </section>
  )
}
