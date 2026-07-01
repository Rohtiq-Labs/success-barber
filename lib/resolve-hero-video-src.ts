import { videos } from "@/data/images";

const MOBILE_BREAKPOINT = "(max-width: 640px)";

/** Picks a smaller mobile encode when available; falls back to the main hero file. */
export const resolveHeroVideoSrc = (): string => {
  if (typeof window === "undefined") return videos.hero;

  const isMobile = window.matchMedia(MOBILE_BREAKPOINT).matches;
  return isMobile ? videos.heroMobile : videos.hero;
};
