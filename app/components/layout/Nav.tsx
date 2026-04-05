"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navLogoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const NAV_THRESHOLD = 40;
    const HERO_ANIM_RANGE = () => window.innerHeight * 0.5;

    // Smooth ease-in-out cubic — slow start, fast middle, gentle arrival
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const onScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > NAV_THRESHOLD);

      const rawProgress = Math.min(scrollY / HERO_ANIM_RANGE(), 1);
      const easedProgress = easeInOutCubic(rawProgress);

      const heroLogo = document.querySelector(".hero-logo") as HTMLElement | null;
      if (heroLogo) {
        const targetY = 36 - window.innerHeight / 2;
        const scale = 1 - (1 - 52 / 130) * easedProgress; // 130px → 52px (nav logo size)

        // Stay fully visible for first 60% of travel, then fade out quickly
        const opacity = rawProgress < 0.6 ? 1 : 1 - (rawProgress - 0.6) / 0.4;

        // Subtle motion blur that builds as logo flies up (max 3px)
        const blur = easedProgress * 3;

        heroLogo.style.transform = `translateY(${targetY * easedProgress}px) scale(${scale})`;
        heroLogo.style.opacity = `${opacity}`;
        heroLogo.style.filter = `blur(${blur}px)`;
      }

      if (navLogoRef.current) {
        navLogoRef.current.classList.toggle("logo-visible", scrollY >= NAV_THRESHOLD);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="relative flex items-center justify-between px-24 h-[72px] transition-colors duration-500"
      style={{ backgroundColor: scrolled ? "#000" : "transparent" }}
    >
      <button className="flex items-center gap-3 text-white cursor-pointer">
        <span className="font-heading text-sm font-medium tracking-widest uppercase">Menu</span>
        <Image src="/hamburger-menu-icon.svg" alt="Menu" width={22} height={22} style={{ width: 22, height: 22 }} />
      </button>

      <Image
        ref={navLogoRef}
        src="/logo-nav.svg"
        alt="Kráľovská pekáreň"
        width={52}
        height={52}
        className="nav-logo"
        unoptimized
      />

      <button className="text-white cursor-pointer">
        <MagnifyingGlassIcon size={24} weight="light" />
      </button>
    </nav>
  );
}
