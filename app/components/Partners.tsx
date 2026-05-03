import Image from 'next/image'

const logos = [
  { src: '/kaufland-logo 1.svg', alt: 'Kaufland' },
  { src: '/billa-logo 1.svg', alt: 'Billa' },
  { src: '/coop-logo 1.svg', alt: 'Coop' },
  { src: '/tesco-logo 1.svg', alt: 'Tesco' },
]

export default function Partners() {
  return (
    <section className="partners-new" id="partneri">
      <div className="partners-new-inner">
        <p className="partners-new-label">
          Dodávame do <em>najväčších</em> reťazcov a sietí na Slovensku.
        </p>
        <div className="partners-new-logos">
          {logos.map(({ src, alt }) => (
            <Image
              key={alt}
              src={src}
              alt={alt}
              width={140}
              height={28}
              unoptimized
              style={{ width: 'auto', height: 28 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
