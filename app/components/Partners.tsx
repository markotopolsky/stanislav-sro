import Image from 'next/image'

const logos = [
  { src: '/kaufland-logo 1.svg', alt: 'Kaufland', href: 'https://www.kaufland.sk' },
  { src: '/billa-logo 1.svg', alt: 'Billa', href: 'https://shop.billa.sk' },
  { src: '/coop-logo 1.svg', alt: 'Coop', href: 'https://www.coopjednota.sk' },
  { src: '/tesco-logo 1.svg', alt: 'Tesco', href: 'https://potravinydomov.itesco.sk' },
]

export default function Partners() {
  return (
    <section className="partners-new" id="partneri">
      <div className="partners-new-inner">
        <p className="partners-new-label">
          Dodávame do <em>najväčších</em> reťazcov a sietí na Slovensku.
        </p>
        <div className="partners-new-logos">
          {logos.map(({ src, alt, href }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${alt} — e-shop`}
            >
              <Image
                src={src}
                alt={alt}
                width={140}
                height={28}
                unoptimized
                style={{ width: 'auto', height: 28 }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
