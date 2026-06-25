import InquiryForm from './InquiryForm'

export default function CtaBand() {
  return (
    <section className="cta-band-new" id="kontakt">
      <div className="cta-band-inner">
        <div>
          <span className="eyebrow">Vyžiadať dopyt</span>
          <h2 className="h-section">
            Spoľahlivý partner<br />
            pre <em>váš sortiment.</em>
          </h2>
          <p className="cta-band-lede">
            Napíšte základné parametre — segment, mesto, odhadované denné množstvo. Ozve sa obchodný manažér s ponukou pre váš typ prevádzky.
          </p>
        </div>

        <InquiryForm />
      </div>
    </section>
  )
}
