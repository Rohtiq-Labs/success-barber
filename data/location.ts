export const shopAddress = {
  lines: [
    "Westview Terrace, Shop 1",
    "Dubai",
    "United Arab Emirates",
  ],
  short: ["Westview Terrace", "Shop 1"],
  full: "Westview Terrace, Shop 1 - Dubai - United Arab Emirates",
  query: "Westview Terrace Shop 1 Dubai United Arab Emirates",
} as const;

export const shopLocation = {
  name: "Success Barber Shop and Spa",
  query: shopAddress.query,
  center: {
    lat: 25.056737,
    lng: 55.211718,
  },
  placeId: "0x3e5f135413fcaaa1:0xfc402e74bea5465b",
  directionsUrl: "https://maps.app.goo.gl/TXVPFD2MWe3iNYvq6",
  reviewsUrl:
    "https://www.google.com/maps/place/Success+Barber+Shop+and+Spa/@25.0556285,55.2135479,17z/data=!4m8!3m7!1s0x3e5f135413fcaaa1:0xfc402e74bea5465b!8m2!3d25.0556285!4d55.2135479!9m1!1b1",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7228.729208180059!2d55.21096700845945!3d25.055628537264266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f135413fcaaa1%3A0xfc402e74bea5465b!2sSuccess%20Barber%20Shop%20and%20Spa!5e0!3m2!1sen!2s!4v1782472766983!5m2!1sen!2s",
} as const;
