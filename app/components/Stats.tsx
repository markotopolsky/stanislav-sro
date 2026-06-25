import Image from 'next/image'

export default function Stats() {
  return (
    <section className="stats-new" id="stats">
      <div className="stats-new-inner">
        <div className="logo-badge">
          <Image
            src="https://res.cloudinary.com/dl6xldrhk/image/upload/v1782388524/Logos_Food_qbe0od.png"
            alt="IFS Food"
            width={220}
            height={120}
            unoptimized
          />
        </div>
        <div className="logo-badge">
          <Image
            src="/logo-nav-XL.svg"
            alt="Kráľovská pekáreň"
            width={220}
            height={120}
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}
