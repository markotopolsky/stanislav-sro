export default function LocationMap() {
  return (
    <section className="kontakt-map">
      <div className="kontakt-map-inner">
        <div className="kontakt-map-head">
          <span className="eyebrow">Kde nás nájdete</span>
          <h2 className="h-section">
            Prevádzka v <em>Kráľovej pri Senci</em>
          </h2>
        </div>

        <div className="kontakt-map-frame-wrap">
          <iframe
            className="kontakt-map-frame"
            title="Mapa — STANISLAV, s. r. o."
            src="https://www.google.com/maps?q=48.1983423,17.442077&z=16&hl=sk&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="kontakt-map-card">
            <span className="kontakt-map-card-label">Adresa prevádzky</span>
            <p className="kontakt-map-card-name">STANISLAV, s. r. o.</p>
            <p className="kontakt-map-card-addr">
              Krmeš 61<br />
              900 50 Kráľová pri Senci
            </p>
            <a
              className="btn-dark"
              href="https://www.google.com/maps/place/STANISLAV,+s.r.o./@48.1983423,17.442077,17z/data=!4m6!3m5!1s0x476c9d36cbd09291:0xd4bb2b9ad1875e8c!8m2!3d48.1983423!4d17.442077!16s%2Fg%2F11bzx25tdk?hl=sk-sk"
              target="_blank"
              rel="noreferrer"
            >
              Otvoriť v Google&nbsp;Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
