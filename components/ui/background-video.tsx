"use client";

import { useEffect, useRef, useState } from "react";
import {
  attachPersistentVideo,
  detachPersistentVideo,
} from "@/lib/persistent-video";
import { SiteImage } from "@/components/ui/site-image";

type BackgroundVideoProps = {
  src: string;
  poster: string;
  alt: string;
  className?: string;
  sizes?: string;
  /** Load immediately on the client (hero). Default: lazy near viewport. */
  priority?: boolean;
  decorative?: boolean;
};

export const BackgroundVideo = ({
  src,
  poster,
  alt,
  className = "object-cover object-center",
  sizes = "100vw",
  priority = false,
  decorative = true,
}: BackgroundVideoProps): React.JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  const mediaClass = `absolute inset-0 h-full w-full ${className}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    if (priority) {
      setShouldLoad(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.01 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [mounted, priority]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !shouldLoad) return;

    const videoClass = `absolute inset-0 h-full w-full ${className}`;
    const video = attachPersistentVideo(
      src,
      container,
      videoClass,
      priority ? "metadata" : "auto",
    );

    if (decorative) {
      video.setAttribute("aria-hidden", "true");
      video.removeAttribute("aria-label");
    } else {
      video.removeAttribute("aria-hidden");
      video.setAttribute("aria-label", alt);
    }

    const play = async (): Promise<void> => {
      try {
        await video.play();
      } catch {
        // Autoplay may be blocked; poster remains visible underneath.
      }
    };

    void play();

    return () => {
      detachPersistentVideo(video, container);
    };
  }, [shouldLoad, src, className, priority, decorative, alt]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full overflow-hidden"
    >
      <SiteImage
        src={poster}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className={mediaClass}
      />
    </div>
  );
};
