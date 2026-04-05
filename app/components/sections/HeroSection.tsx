import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Background image */}
      <Image
        src="https://res.cloudinary.com/dl6xldrhk/image/upload/v1774798747/Placeholder_Image_hz71fi.png"
        alt="Kráľovská pekáreň"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "33.333% 50%",
        }}
      />

      {/* Centered content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center text-center max-w-3xl">

          {/* 1. Badge logo — animates on scroll */}
          <Image
            src="/logo-badge-s.svg"
            alt="Kráľovská pekáreň"
            width={220}
            height={220}
            className="hero-logo"
            priority
            unoptimized
          />

          {/* 2. Decorative divider */}
          <Image
            src="/something-element-hero.svg"
            alt=""
            width={768}
            height={20}
            className="mb-6"
            style={{ width: 768, height: 20 }}
            aria-hidden
            unoptimized
          />

          {/* 3. Body text */}
          <p className="font-heading text-ui-background text-[20px] leading-relaxed mb-8 max-w-2xl">
            Reprehenderit eu veniam consequat ullamco laboris non Lorem. Excepteur Lorem eu sunt laborum ea anim aliquip sunt ullamco amet ad
          </p>

          {/* 4. CTA buttons */}
          <div className="flex items-center gap-3 justify-center">
            <button className="bg-[var(--color-brand-orange)] text-white font-heading font-medium px-6 py-3 text-sm cursor-pointer rounded-[4px]">
              Tlačidlo na akciu
            </button>
            <button className="w-12 h-12 rounded-full bg-[var(--color-brand-orange)] text-white flex items-center justify-center cursor-pointer">
              <ArrowUpRight size={20} />
            </button>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button className="w-12 h-12 rounded-full bg-[var(--color-brand-orange)] text-white flex items-center justify-center cursor-pointer">
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}
