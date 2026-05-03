const stats = [
  { value: '1991', label: 'rok založenia', meta: 'tradičný slovenský výrobca' },
  { value: 'IFS Food', label: 'certifikácia', meta: 'procesné riadenie a hygiena' },
  { value: 'Značka kvality', label: 'národné označenie', meta: 'dôveryhodnosť pre spotrebiteľa' },
  { value: 'ZTŠ', label: 'Bratislavské rožky', meta: 'zaručená tradičná špecialita' },
]

export default function Stats() {
  return (
    <section className="stats-new" id="stats">
      <div className="stats-new-inner">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-num">{s.value}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-meta">{s.meta}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
