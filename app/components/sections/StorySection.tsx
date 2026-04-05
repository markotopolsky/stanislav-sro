const stats = [
  { value: "30+", label: "Rokov tradície" },
  { value: "12K", label: "Produktov denne" },
  { value: "340+", label: "Obchodných partnerov" },
];

import Image from "next/image";

const partners = [
  { name: "Billa", logo: "https://res.cloudinary.com/dl6xldrhk/image/upload/v1774851412/billa-logo_l9l9fi.png" },
  { name: "Tesco", logo: "https://res.cloudinary.com/dl6xldrhk/image/upload/v1774851413/tesco-logo_jugfwu.png" },
  { name: "COOP Jednota", logo: "https://res.cloudinary.com/dl6xldrhk/image/upload/v1774851412/coop-logo_oeeijm.png" },
  { name: "Kaufland", logo: "https://res.cloudinary.com/dl6xldrhk/image/upload/v1774851412/kaufland-logo_dzccl4.png" },
];

export default function StorySection() {
  return (
    <section className="bg-[var(--color-ui-white)]">

      {/* Main content grid */}
      <div className="px-24 py-32">
        <div className="grid grid-cols-12 gap-16 items-start">

          {/* Left column — 5 cols */}
          <div className="col-span-5">
            {/* Accent bar */}
            <div className="w-12 h-1 bg-[var(--color-brand-orange)] mb-12" />

            {/* Label */}
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] block mb-6">
              O nás
            </span>

            {/* Main headline */}
            <h2 className="font-heading text-5xl font-bold leading-[1.08] text-[var(--color-text-primary)]">
              Nie sme <br />
              len pekáreň.
            </h2>
          </div>

          {/* Right column — 6 cols, offset by 1 */}
          <div className="col-span-6 col-start-7">
            {/* Body paragraph */}
            <p className="font-body text-base leading-[1.7] text-[var(--color-text-secondary)] mb-16 max-w-lg">
              Od roku 1991 zásobujeme reštaurácie, hotely a obchodné siete po celom Slovensku. Naša konzistentná kvalita, spoľahlivosť dodávok a silná distribučná sieť sú dôvodom, prečo nám dôverujú stovky obchodných partnerov.
            </p>

            {/* Stats grid — 3 columns */}
            <div className="grid grid-cols-3 gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-4xl font-bold text-[var(--color-brand-orange)] leading-tight mb-2">
                    {stat.value}
                  </div>
                  <div className="font-heading text-xs tracking-[0.2em] uppercase text-[var(--color-text-tertiary)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Divider — clean, minimal */}
      <div className="h-px bg-[var(--color-ui-border)] opacity-20" />

      {/* Partners section */}
      <div className="px-24 py-20 flex items-center justify-between">
        <span className="font-heading text-xs tracking-[0.3em] uppercase text-[var(--color-text-tertiary)] flex-shrink-0">
          Dôverujú nám
        </span>

        <div className="flex items-center gap-20 flex-1 ml-16">
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="h-12 w-auto object-contain opacity-40 grayscale"
              unoptimized
            />
          ))}
        </div>
      </div>

    </section>
  );
}
