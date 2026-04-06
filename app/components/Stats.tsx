const stats = [
  { number: '1000ks', label: 'PRODUKCIA DENNE' },
  { number: '120+', label: 'PARTNEROV' },
  { number: '33', label: 'ROKOV NA TRHU' },
  { number: '5', label: 'PREDAJNE V BA' },
]

export default function Stats() {
  return (
    <section className="stats">
      {stats.map(({ number, label }, i) => (
        <div
          key={label}
          className={`stats-item${i < stats.length - 1 ? ' stats-item-border' : ''}`}
        >
          <span className="stats-number">{number}</span>
          <span className="stats-label">{label}</span>
        </div>
      ))}
    </section>
  )
}
