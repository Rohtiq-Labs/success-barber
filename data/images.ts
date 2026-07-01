const IMG = "/assets/images";
const NEW_IMG = "/assets/new-images";
const BRANDS = "/assets/brands";
const ARTISTS = "/assets/artists";
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
    `${ARTISTS}/team-01.jpeg`,
    `${ARTISTS}/team-02.webp`,
    `${ARTISTS}/team-03.webp`,
    `${ARTISTS}/team-04.webp`,
  ],
  space: [
    `${IMG}/458243251_17854572216256305_3429423906153086280_n.jpg`,
    `${IMG}/space-02.jpg`,
    `${IMG}/space-03.jpg`,
  ],
  productBrands: {
    stmt: `${BRANDS}/images.png`,
    philipMartins: `${BRANDS}/philip-martin.jpeg`,
  },
} as const;

export const videos = {
  hero: `${VID}/hero-background.mp4`,
  space: `${VID}/video-02.mp4`,
  brand: `${VID}/cloths.mp4`,
} as const;

export const WHATSAPP_URL = "https://wa.me/971521400990";

export const BOOKING_URL =
  "https://www.fresha.com/en-GB/a/success-barbershop-dby-success-barber-shop-dubai-wharf-tower-1-shop-3-vesmsknc/all-offer?menu=true&pId=1284162";

export const socialLinks = {
  instagram: "https://www.instagram.com/successbarberdxb",
  facebook:
    "https://www.facebook.com/people/Success-barber-shop/61561995945983/",
  tiktok: "https://www.tiktok.com/@successbarbershopdxb",
} as const;
