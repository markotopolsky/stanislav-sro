const certs = [
  {
    seal: 'IFS',
    code: 'IFS Food',
    name: 'IFS Food',
    text: 'Silný dôkaz procesného riadenia, hygieny a pripravenosti na náročné odberateľské požiadavky.',
  },
  {
    seal: 'ZK',
    code: 'Národné označenie',
    name: 'Značka kvality',
    text: 'Spotrebiteľsky zrozumiteľný signál dôveryhodnosti a kvality slovenských potravín.',
  },
  {
    seal: 'ZTŠ',
    code: 'Bratislavské rožky',
    name: 'Zaručená tradičná špecialita',
    text: 'Prvok tradície, autenticity a špeciality, ktorý posilňuje odlíšenie značky.',
  },
]

export default function Certifications() {
  return (
    <section className="certs" id="certifikaty">
      <div className="certs-inner">
        <div className="certs-head">
          <span className="eyebrow">Certifikáty a štandardy</span>
          <h2 className="h-section">
            Procesne riadený, <em>auditne pripravený</em><br />
            výrobca.
          </h2>
          <p className="section-lede">
            Pri vývoji procesov využívame skúsenosti externých audítorov a konzultantov. Dôraz na bezpečnosť, hygienu a opakovateľný výsledok v každej fáze výroby.
          </p>
        </div>

        <div className="certs-grid">
          {certs.map((c) => (
            <div className="cert" key={c.name}>
              <div className="cert-seal">{c.seal}</div>
              <span className="cert-code">{c.code}</span>
              <h3 className="cert-name">{c.name}</h3>
              <p className="cert-text">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="certs-footer">
          <div className="certs-footer-l">
            Dokumentácia<br />
            <span>Certifikáty a technické listy zasielame na vyžiadanie.</span>
          </div>
          <a href="#kontakt">Vyžiadať dokumentáciu →</a>
        </div>
      </div>
    </section>
  )
}
