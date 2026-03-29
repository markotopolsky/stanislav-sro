"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="flex items-start justify-between px-24 h-[72px] overflow-visible transition-colors duration-500"
      style={{ backgroundColor: scrolled ? "#000" : "transparent" }}
    >
      <button className="flex items-center gap-3 text-white cursor-pointer self-center">
        <span className="font-heading text-sm font-medium tracking-widest uppercase">Menu</span>
        <Image src="/hamburger-menu-icon.svg" alt="Menu" width={22} height={22} />
      </button>

      <Image
        src="/logo-nav.svg"
        alt="Kráľovská pekáreň"
        width={160}
        height={160}
        priority
        unoptimized
        className="transition-transform duration-500 origin-top"
        style={{ transform: scrolled ? "scale(0.5)" : "scale(1)" }}
      />

      <button className="text-white cursor-pointer self-center">
        <MagnifyingGlassIcon size={24} weight="light" />
      </button>
    </nav>
  );
}
