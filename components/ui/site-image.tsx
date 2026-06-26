import Image from "next/image";

type SiteImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export const SiteImage = ({
  src,
  alt,
  fill = true,
  width,
  height,
  priority = false,
  className = "object-cover object-center",
  sizes = "100vw",
}: SiteImageProps): React.JSX.Element => {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 800}
      priority={priority}
      className={className}
    />
  );
};
