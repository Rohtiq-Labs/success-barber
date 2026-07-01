"use client";

import { useLayoutEffect, useRef } from "react";
import { SiteImage } from "@/components/ui/site-image";
import { resolveHeroVideoSrc } from "@/lib/resolve-hero-video-src";
import { videos } from "@/data/images";

type HeroBackgroundVideoProps = {
  poster: string;
  alt: string;
};

const MEDIA_CLASS = "absolute inset-0 h-full w-full object-cover object-center";

export const HeroBackgroundVideo = ({
  poster,
  alt,
}: HeroBackgroundVideoProps): React.JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    const src = resolveHeroVideoSrc();
    const video = document.createElement("video");
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = "auto";
    video.src = src;
    video.className = `${MEDIA_CLASS} opacity-0 transition-opacity duration-300 motion-reduce:transition-none`;
    video.setAttribute("aria-hidden", "true");

    const revealVideo = (): void => {
      video.classList.replace("opacity-0", "opacity-100");
    };

    const tryPlay = (): void => {
      void video.play().then(revealVideo).catch(() => {});
    };

    video.addEventListener("playing", revealVideo, { once: true });
    video.addEventListener("canplay", tryPlay, { once: true });

    container.appendChild(video);
    tryPlay();

    const onMobileSrcFallback = (): void => {
      if (src !== videos.heroMobile) return;
      video.removeEventListener("error", onMobileSrcFallback);
      video.src = videos.hero;
      tryPlay();
    };

    video.addEventListener("error", onMobileSrcFallback);

    return () => {
      video.removeEventListener("playing", revealVideo);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("error", onMobileSrcFallback);
      if (video.parentNode === container) {
        container.removeChild(video);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full overflow-hidden"
    >
      <SiteImage
        src={poster}
        alt={alt}
        sizes="100vw"
        priority
        className={MEDIA_CLASS}
      />
    </div>
  );
};
