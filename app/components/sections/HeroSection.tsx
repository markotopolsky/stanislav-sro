"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="https://res.cloudinary.com/dl6xldrhk/image/upload/v1774798747/Placeholder_Image_hz71fi.png"
        alt="Kráľovská pekáreň"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 hero-vignette" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">

        {/* Year badge — above logo */}
        <div className="hero-badge">
          <span className="hero-badge-line" />
          od roku 1991
          <span className="hero-badge-line" />
        </div>

        {/* Logo — standalone, 24px gap below */}
        <div className="hero-logo mb-6">
          <Image
            src="/logo-badge-s.svg"
            alt="Kráľovská pekáreň"
            width={320}
            height={320}
            style={{ width: "100%", height: "100%", display: "block" }}
            priority
            unoptimized
          />
        </div>

        {/* Content container — uniform 24px gap between all items */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/something-element-hero.svg"
            alt=""
            width={360}
            height={20}
            style={{ height: "auto" }}
            aria-hidden
            unoptimized
          />

          <h1 className="hero-headline">Pečivo, ktoré si pamätáte</h1>

          <p className="hero-tagline">
            Poctivé remeslo od roku 1991. Každý bochník pečieme
            z kvalitných surovín podľa tradícií —
            s dôrazom na chuť, ktorú si pamätáte.
          </p>

          <button className="hero-cta">Zistiť viac</button>
        </div>

      </div>

      {/* Scroll hint */}
      <button
        className="hero-scroll-btn"
        onClick={() => {
          const next = document.querySelector("main > section + *") as HTMLElement;
          next?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll down"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="white" strokeWidth="2.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>

    </section>
  );
}
