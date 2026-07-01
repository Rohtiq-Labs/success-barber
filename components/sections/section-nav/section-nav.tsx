"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { en } from "@/data/dictionary/en";
import { BOOKING_URL } from "@/data/images";

export const SectionNav = (): React.JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-6 py-5 transition-all duration-500 md:px-10 md:py-6 ${
        scrolled ? "bg-stone/88 backdrop-blur-[14px]" : ""
      }`}
      aria-label="Main navigation"
    >
      <Link
        href="#hero"
        className={`font-serif text-base font-normal uppercase tracking-[0.18em] transition-colors duration-500 ${
          scrolled ? "text-charcoal" : "text-ivory"
        }`}
      >
        {en.nav.logo}
      </Link>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-luxury px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] ${
          scrolled
            ? "bg-charcoal text-ivory hover:bg-titanium"
            : "bg-ivory text-charcoal hover:bg-charcoal hover:text-ivory"
        }`}
      >
        {en.nav.bookNow}
      </a>
    </nav>
  );
};
