"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type LuxuryImageFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export const LuxuryImageFrame = ({
  children,
  className = "",
}: LuxuryImageFrameProps): React.JSX.Element => {
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!frame || !media || prefersReducedMotion) {
      return;
    }

    let rafId = 0;

    const update = (): void => {
      const rect = frame.getBoundingClientRect();
      const viewport = window.innerHeight;
      const isVisible = rect.bottom > 0 && rect.top < viewport;

      if (!isVisible) {
        return;
      }

      const progress = Math.max(
        0,
        Math.min(1, 1 - (rect.top - viewport * 0.15) / (viewport * 0.85)),
      );
      const parallaxY = (rect.top + rect.height * 0.5 - viewport * 0.5) * -0.03;
      const scale = 1.1 + progress * 0.04;

      media.style.transform = `translate3d(0, ${parallaxY}px, 0) scale(${scale})`;
      media.style.transformOrigin = "center center";
    };

    const onScroll = (): void => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={frameRef} className={`overflow-hidden ${className}`.trim()}>
      <div
        ref={mediaRef}
        className={`relative h-full w-full ${prefersReducedMotion ? "" : "will-change-transform"}`}
      >
        {children}
      </div>
    </div>
  );
};
