export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="footer-new-grid">
        <div className="footer-new-brand">
          <img src="/logo-nav-XL.svg" alt="Kráľovská pekáreň" />
          <p>B2B dodávateľ čerstvého pečiva od 1991. Bratislava, Slovensko.</p>
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
          <a href="#">Technické listy</a>
          <a href="#">Certifikáty</a>
          <a href="#">B2B portál</a>
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
          <a href="#">+421 903 123 456</a>
          <a href="#">obchod@kralovskapekaren.sk</a>
          <a href="#">Pekárenská 12, Bratislava</a>
          <a href="#">IČO 12 345 678</a>
        </div>
      </div>
      <div className="footer-new-bottom">
        <span>© 2026 Kráľovská pekáreň s.r.o. · Všetky práva vyhradené.</span>
        <span>GDPR · Obchodné podmienky · Cookies</span>
      </div>
    </footer>
  )
}
