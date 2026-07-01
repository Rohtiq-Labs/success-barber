const IMG = "/assets/images";
const NEW_IMG = "/assets/new-images";
const CRAFT = `${IMG}/craft`;
const VID = "/assets/videos";

const newImage = (filename: string): string =>
  `${NEW_IMG}/${encodeURIComponent(filename)}`;

export const images = {
  hero: `${IMG}/458243251_17854572216256305_3429423906153086280_n.jpg`,
  experience: `${NEW_IMG}/shod-building.jpeg`,
  gallery: [
    newImage("Still 2026-07-01 014019_1.73.1.jpg.jpeg"),
    newImage("Still 2026-07-01 014003_1.39.1.jpg.jpeg"),
    newImage("Still 2026-07-01 014041_1.106.1.jpg.jpeg"),
    `${NEW_IMG}/interioir.jpeg`,
  ],
  artists: [
    `${IMG}/488316381_17882381796256305_7693056712276859620_n.jpg`,
    `${IMG}/500101694_1843388119848740_2928094562129408245_n.jpg`,
    `${IMG}/458243251_17854572216256305_3429423906153086280_n.jpg`,
  ],
  space: [
    `${IMG}/458243251_17854572216256305_3429423906153086280_n.jpg`,
    `${IMG}/467426730_17865187275256305_6552006990329879324_n.jpg`,
    `${IMG}/469105465_17867251731256305_1208451425520129091_n.jpg`,
  ],
} as const;

export const videos = {
  hero: `${VID}/hero-background.mp4`,
  /** ~720p faststart encode for mobile; add public/assets/videos/hero-background-mobile.mp4 */
  heroMobile: `${VID}/hero-background-mobile.mp4`,
  space: `${VID}/video-02.mp4`,
  brand: `${VID}/cloths.mp4`,
} as const;

export const WHATSAPP_URL = "https://wa.me/971528737000";
