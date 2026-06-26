"use client";

import { useEffect, useRef, useState } from "react";
import { SiteImage } from "@/components/ui/site-image";

type SpaceFeatureVideoProps = {
  src: string;
  poster: string;
  alt: string;
  className?: string;
};

export const SpaceFeatureVideo = ({
  src,
  poster,
  alt,
  className = "space-img object-cover object-center transition-transform duration-800 ease-out",
}: SpaceFeatureVideoProps): React.JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(true);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = (): void => {
      setUseVideo(!motionQuery.matches);
    };

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => motionQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !useVideo) return;

    const playVideo = async (): Promise<void> => {
      try {
        await video.play();
      } catch {
        setUseVideo(false);
      }
    };

    void playVideo();
  }, [useVideo]);

  if (!useVideo) {
    return <SiteImage src={poster} alt={alt} sizes="100vw" className={className} />;
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      aria-label={alt}
      className={`absolute inset-0 h-full w-full ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
