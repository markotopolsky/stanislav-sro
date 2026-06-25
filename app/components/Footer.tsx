import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="footer-new-grid">
        <div className="footer-new-brand">
          <Image
            src="/logo-nav-XL.svg"
            alt="Kráľovská pekáreň"
            width={120}
            height={56}
            unoptimized
          />
          <p>Tradičný slovenský výrobca pekárenských výrobkov od roku 1991. Kráľová pri Senci.</p>
        </div>
        <div className="footer-new-col">
          <h4>Produkty</h4>
          <a href="#">Chlieb a bochníky</a>
          <a href="#">Bagety a rožky</a>
          <a href="#">Slané špeciality</a>
          <a href="#">Sladké pečivo</a>
          <a href="#">Privátne značky</a>
        </div>
        <div className="footer-new-col">
          <h4>Pre partnerov</h4>
          <a href="#">Katalóg (PDF)</a>
          <a href="#">Certifikáty</a>
        </div>
        <div className="footer-new-col">
          <h4>O spoločnosti</h4>
          <a href="#">Náš príbeh</a>
          <a href="#">Výrobný proces</a>
          <a href="#">Kariéra</a>
          <a href="#">Tlačové správy</a>
        </div>
        <div className="footer-new-col">
          <h4>Kontakt</h4>
          <a href="/kontakt">STANISLAV, s. r. o.</a>
          <a href="/kontakt">Krmeš 61</a>
          <a href="/kontakt">900 50 Kráľová pri Senci</a>
          <a href="tel:+421918562092">+421 918 562 092</a>
        </div>
      </div>
      <div className="footer-new-bottom">
        <span>© 2026 STANISLAV, s. r. o. · Všetky práva vyhradené.</span>
        <span>
          <a href="/ochrana-osobnych-udajov">Ochrana osobných údajov</a> ·{' '}
          <a href="/obchodne-podmienky">Obchodné podmienky</a> · Cookies
        </span>
      </div>
    </footer>
  )
}
