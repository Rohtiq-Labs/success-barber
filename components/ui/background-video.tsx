"use client";

import { useEffect, useRef, useState } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const enableVideo = (): void => {
      setShowVideo(true);
    };

    if (priority) {
      enableVideo();
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          enableVideo();
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.01 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    const play = async (): Promise<void> => {
      try {
        await video.play();
      } catch {
        // Autoplay may be blocked; poster frame remains visible underneath.
      }
    };

    void play();
  }, [showVideo]);

  const mediaClass = `absolute inset-0 h-full w-full ${className}`;

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
      {showVideo ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "metadata" : "auto"}
          aria-hidden={decorative ? true : undefined}
          aria-label={decorative ? undefined : alt}
          className={mediaClass}
        />
      ) : null}
    </div>
  );
};
