const certs = [
  {
    seal: 'IFS',
    code: 'IFS Food v8',
    name: 'IFS Food',
    text: 'Higher Level od 2019. Vyžadovaný pre listing v Kauflande, Bille a Tescu. Ročný recertifikačný audit.',
    meta: 'Platnosť · 2026 / 09',
  },
  {
    seal: 'HA',
    code: 'HACCP',
    name: 'HACCP systém',
    text: 'Kompletne zdokumentovaný od 2003. 7 kritických kontrolných bodov, denný zápis a 24-mes. archivácia.',
    meta: 'Platnosť · nepretržitá',
  },
  {
    seal: 'ISO',
    code: 'ISO 22000:2018',
    name: 'ISO 22000',
    text: 'Manažment bezpečnosti potravín. Získaný 2010, bez prerušenia. Certifikačný orgán: Bureau Veritas.',
    meta: 'Platnosť · 2027 / 03',
  },
  {
    seal: 'BIO',
    code: 'SK-BIO-002',
    name: 'BIO produkcia',
    text: 'Pre vybrané SKU (celozrnné, ražné). Certifikát Naturalis SK. 8 produktov pod BIO logom v stálom sortimente.',
    meta: 'Platnosť · 2026 / 12',
  },
]

export default function Certifications() {
  return (
    <section className="certs" id="certifikaty">
      <div className="certs-inner">
        <div className="certs-head">
          <span className="eyebrow">Certifikáty a audity</span>
          <h2 className="h-section">
            Každá šarža <em>dohľadateľná.</em><br />
            Každý audit prešiel.
          </h2>
          <p className="section-lede">
            Pracujeme pod štyrmi nezávislými certifikačnými rámcami. Nominačné auditovanie zo strany reťazcov prechádzame od 2012 bez nálezu kritickej nezhody.
          </p>
        </div>

        <div className="certs-grid">
          {certs.map((c) => (
            <div className="cert" key={c.name}>
              <div className="cert-seal">{c.seal}</div>
              <span className="cert-code">{c.code}</span>
              <h3 className="cert-name">{c.name}</h3>
              <p className="cert-text">{c.text}</p>
              <div className="cert-meta">{c.meta}</div>
            </div>
          ))}
        </div>

        <div className="certs-footer">
          <div className="certs-footer-l">
            Audity a dokumentácia<br />
            <span>Certifikáty, technické listy a audítorské reporty posielame pod NDA do 24 hodín.</span>
          </div>
          <a href="#kontakt">Vyžiadať dokumentáciu →</a>
        </div>
      </div>
    </section>
  )
}
