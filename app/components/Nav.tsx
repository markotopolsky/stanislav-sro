const navLinks = [
  { label: 'Produkty', href: '#produkty' },
  { label: 'O nás', href: '#o-nas' },
  { label: 'Certifikáty', href: '#certifikaty' },
  { label: 'Partneri', href: '#partneri' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo" aria-label="Kráľovská pekáreň">
          <img src="/logo-nav-XL.svg" alt="Logo" width={80} height={80} />
        </a>

        <nav className="navbar-links">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
          <a href="#kontakt" className="nav-cta">
            Vyžiadať ponuku
          </a>
        </nav>
      </div>
    </header>
  )
}
