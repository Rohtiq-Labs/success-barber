"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { en } from "@/data/dictionary/en";
import { images, videos, BOOKING_URL } from "@/data/images";
import { BackgroundVideo } from "@/components/ui/background-video";

export const SectionHero = (): React.JSX.Element => {
  const bloomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bloom = bloomRef.current;
    if (!bloom) return;

    const onScroll = (): void => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        bloom.style.transform = `translateY(${y * 0.15}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-[75vh] flex-col items-start justify-center overflow-hidden md:min-h-[600px] md:h-svh md:items-stretch md:justify-end"
    >
      <div className="absolute inset-0 overflow-hidden bg-charcoal">
        <BackgroundVideo
          src={videos.hero}
          poster={images.hero}
          alt={en.hero.imageAlt}
          priority
          sizes="100vw"
        />
        <div className="hero-lines absolute inset-0 z-1" aria-hidden="true" />
        <div
          ref={bloomRef}
          className="absolute -top-[10%] -right-[10%] z-1 h-[70vw] max-h-[500px] w-[70vw] max-w-[500px] animate-bloom-pulse rounded-full bg-[radial-gradient(circle,rgba(200,170,120,0.09)_0%,transparent_70%)] motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 z-2 bg-linear-to-t from-[rgba(14,12,10,0.88)] via-[rgba(14,12,10,0.35)] to-[rgba(14,12,10,0.55)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-2 w-full px-6 text-left md:px-12 md:pb-18">
        <p className="mb-4.5 animate-fade-up text-[0.65rem] font-medium uppercase tracking-[0.35em] text-titanium opacity-0 [animation-delay:0.3s] motion-reduce:opacity-100">
          {en.hero.eyebrow}
        </p>
        <h1 className="mb-5 animate-fade-up font-display text-[clamp(3.8rem,18vw,7rem)] leading-[0.88] tracking-[0.02em] text-ivory opacity-0 [animation-delay:0.6s] motion-reduce:opacity-100 md:text-[clamp(5rem,12vw,9rem)]">
          {en.hero.title}
          <em className="mt-1 block font-serif text-[0.55em] font-light not-italic tracking-[0.04em] text-ivory/70">
            {en.hero.titleEm}
          </em>
        </h1>
        <p className="mb-9 max-w-[260px] animate-fade-up font-serif text-[1.05rem] italic leading-snug text-ivory/55 opacity-0 [animation-delay:0.9s] motion-reduce:opacity-100">
          {en.hero.subtitle}
        </p>
        <div className="flex animate-fade-up justify-start gap-3.5 opacity-0 [animation-delay:1.2s] motion-reduce:opacity-100">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury inline-block bg-ivory px-6.5 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal hover:bg-titanium hover:text-ivory"
          >
            {en.hero.bookCta}
          </a>
          <Link
            href="#experience"
            className="btn-ghost inline-block border-b border-ivory/20 py-3.5 text-[0.7rem] uppercase tracking-[0.22em] text-ivory/60 hover:border-ivory hover:text-ivory"
          >
            {en.hero.exploreCta}
          </Link>
        </div>
      </div>

      <div
        className="absolute right-6 bottom-7 z-2 flex animate-fade-in flex-col items-center gap-2 opacity-0 [animation-delay:2s] motion-reduce:opacity-100"
        aria-hidden="true"
      >
        <div className="h-12 w-px animate-scroll-pulse bg-linear-to-b from-ivory/30 to-transparent motion-reduce:animate-none" />
        <span className="text-[0.6rem] uppercase tracking-[0.25em] text-ivory/30 [writing-mode:vertical-rl]">
          {en.hero.scroll}
        </span>
      </div>
    </section>
  );
};
