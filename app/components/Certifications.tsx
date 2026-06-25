import Image from 'next/image'

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
            Sme držiteľom medzinárodného certifikátu IFS Food. Dôraz na bezpečnosť, hygienu a opakovateľný výsledok kladieme v každej fáze výroby.
          </p>
        </div>

        <div className="ifs-panel">
          <div className="ifs-panel-logo">
            <Image
              src="https://res.cloudinary.com/dl6xldrhk/image/upload/v1782388524/Logos_Food_qbe0od.png"
              alt="IFS Food"
              width={240}
              height={130}
              unoptimized
            />
          </div>

          <div className="ifs-panel-body">
            <span className="cert-code">Medzinárodný štandard · GFSI</span>
            <h3 className="cert-name">Sme držiteľom certifikátu IFS&nbsp;Food</h3>
            <p className="cert-text">
              IFS Food je medzinárodne uznávaný štandard pre bezpečnosť a kvalitu potravín. Certifikácia potvrdzuje, že naša výroba spĺňa prísne požiadavky na hygienu, sledovateľnosť a procesné riadenie — rovnaké, aké vyžadujú najnáročnejšie reťazce a odberatelia.
            </p>
            <a
              className="ifs-panel-link"
              href="https://www.ifs-certification.com/en/ifs-portfolio/standards/food-standard"
              target="_blank"
              rel="noreferrer"
            >
              Zistiť viac o IFS Food →
            </a>
          </div>
        </div>

        <div className="ifs-note">
          <span className="ifs-note-badge">
            <Image
              src="https://res.cloudinary.com/dl6xldrhk/image/upload/v1782389824/sk_stg_4c-e1615290830910-300x300_fqtijb.png"
              alt="Zaručená tradičná špecialita"
              width={64}
              height={64}
              unoptimized
            />
          </span>
          <div className="ifs-note-text">
            <span className="ifs-note-label">Zaujímavosť</span>
            <p>
              Naše <strong>Bratislavské rožky</strong> sú zapísané v registri EÚ ako <em>Zaručená tradičná špecialita</em> — pečieme ich podľa chránenej receptúry, plnené orechovou alebo makovou náplňou.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
