const logos = [
  { src: '/kaufland-logo 1.svg', alt: 'Kaufland' },
  { src: '/billa-logo 1.svg', alt: 'Billa' },
  { src: '/coop-logo 1.svg', alt: 'Coop' },
  { src: '/tesco-logo 1.svg', alt: 'Tesco' },

]

export default function Partners() {
  return (
    <section className="partners">
      <div className="partners-logos">
        {logos.map(({ src, alt }) => (
          <img key={alt} src={src} alt={alt} className="partner-logo" />
        ))}
      </div>
    </section>
  )
}
