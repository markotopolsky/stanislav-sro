'use client'

import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { label: 'Sortiment', href: '/produkty' },
  { label: 'Certifikáty', href: '/#certifikaty' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'GDPR', href: '/gdpr' },
  { label: 'E-shop', href: 'https://www.kralovskapekaren.sk', external: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={`navbar${open ? ' navbar--open' : ''}`}>
      <div className="navbar-inner">
        <a href="/" className="navbar-logo" aria-label="Kráľovská pekáreň">
          <Image src="/logo-wordmark-s.svg" alt="" width={320} height={64} unoptimized priority />
        </a>

        <nav className="navbar-links" aria-label="Hlavná navigácia">
          {navLinks.map(({ label, href, external }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              {...(external && { target: '_blank', rel: 'noreferrer' })}
            >
              {label}
            </a>
          ))}
          <a href="#kontakt" className="nav-cta">
            Vyžiadať ponuku
          </a>
        </nav>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Zatvoriť menu' : 'Otvoriť menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>
      </div>

      <div id="mobile-nav" className="navbar-mobile" hidden={!open}>
        {navLinks.map(({ label, href, external }) => (
          <a
            key={href}
            href={href}
            className="navbar-mobile-link"
            onClick={() => setOpen(false)}
            {...(external && { target: '_blank', rel: 'noreferrer' })}
          >
            {label}
          </a>
        ))}
        <a
          href="#kontakt"
          className="navbar-mobile-cta"
          onClick={() => setOpen(false)}
        >
          Vyžiadať ponuku
        </a>
      </div>
    </header>
  )
}
