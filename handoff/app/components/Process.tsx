const steps = [
  {
    num: 'Krok 01',
    time: '16:00 — 18:00',
    title: ['Príjem surovín', '& kontrola šarže'],
    text: 'Múka od 3 certifikovaných mlynov, každá šarža laboratórne testovaná na vlhkosť, obsah lepku a alergény.',
  },
  {
    num: 'Krok 02',
    time: '18:00 — 22:00',
    title: ['Miešanie', 'a kysnutie'],
    text: 'Dve nezávislé miesiace linky. Dlhé kysnutie na vlastnej kváskovej kultúre (35 rokov vedenej).',
  },
  {
    num: 'Krok 03',
    time: '22:00 — 03:00',
    title: ['Pečenie', '& chladenie'],
    text: '4 rotačné pece, kapacita 24 000 ks / smena. Parametre teploty a vlhkosti každej šarže archivované 24 mesiacov.',
  },
  {
    num: 'Krok 04',
    time: '03:00 — 04:30',
    title: ['Balenie', 'a expedícia'],
    text: 'Balenie podľa špecifikácie odberateľa (EAN, privátna značka, paletizácia). QR kód sledovateľnosti na každej palete.',
  },
  {
    num: 'Krok 05',
    time: '04:30 — 10:00',
    title: ['Distribúcia', 'na vašu rampu'],
    text: '12 vlastných chladených vozidiel. Garantovaný doručovací slot ±15 min. GPS tracking prístupný odberateľovi.',
  },
]

export default function Process() {
  return (
    <section className="process" id="proces">
      <div className="process-inner">
        <div className="process-head">
          <div>
            <span className="eyebrow">Výrobný proces</span>
            <h2 className="h-section lg">
              Od múky po vašu<br />
              rampu za <em>18 hodín</em>
            </h2>
          </div>
          <p className="section-lede">
            Každý deň od 16:00 do nasledujúceho rána. Výroba v dvoch linkách, distribúcia vlastnými chladenými vozidlami do rádiusu 180 km.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((s) => (
            <div className="process-step" key={s.num}>
              <div className="process-step-num">{s.num}</div>
              <div className="process-step-time">{s.time}</div>
              <h3 className="process-step-title">
                {s.title[0]}<br />{s.title[1]}
              </h3>
              <p className="process-step-text">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="process-footer">
          <span><strong>2 výrobné linky</strong>paralelná redundancia, žiadny single point of failure</span>
          <span><strong>24 mesiacov</strong>archivácia parametrov každej šarže (ISO 22000)</span>
          <span><strong>180 km rádius</strong>celé západné a stredné Slovensko v jednom rozvozovom okne</span>
        </div>
      </div>
    </section>
  )
}
