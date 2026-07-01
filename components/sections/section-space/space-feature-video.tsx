"use client";

import { BackgroundVideo } from "@/components/ui/background-video";

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
  return (
    <BackgroundVideo
      src={src}
      poster={poster}
      alt={alt}
      className={className}
      sizes="(min-width: 768px) 1152px, 100vw"
      decorative={false}
    />
  );
};
