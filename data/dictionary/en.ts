import { socialLinks } from "@/data/images";
import { shopAddress, shopLocation } from "@/data/location";

const reviewAvatar = (path: string): string =>
  `https://lh3.googleusercontent.com/${path}`;

export const en = {
  meta: {
    title: "Success Barbershop — Dubai's First Latin-Inspired Grooming Destination",
    description:
      "Dubai's first international Latin-inspired grooming destination. Precision fades, beard craftsmanship, and luxury barbering.",
  },
  nav: {
    logo: "Success",
    bookNow: "Book Now",
  },
  hero: {
    eyebrow: "Dubai · Est. 2024",
    title: "Success",
    titleEm: "Barbershop",
    subtitle: "Dubai's first international Latin-inspired grooming destination.",
    bookCta: "Book Appointment",
    exploreCta: "Explore",
    scroll: "Scroll",
    imageAlt:
      "Success Barbershop interior — barbers at work in Dubai",
  },
  ticker: [
    "Precision Fades",
    "Latin Energy",
    "Dubai",
    "International Standards",
    "Expert Barbers",
    "Skin Fades",
    "Beard Craftsmanship",
    "Perm Specialists",
  ],
  experience: {
    label: "The Experience",
    headline: "Where precision",
    headlineEm: "culture.",
    headlineJoin: "meets",
    body: "We are not a standard barbershop. Success was built as Dubai's meeting point of Latin grooming tradition and international luxury — a space where every visit is a ritual.",
    quote:
      '"Every man who walks in here deserves to walk out transformed."',
    detail:
      "From the moment you enter, the atmosphere signals something different. Premium materials. Measured light. The quiet confidence of a team that lives for their craft.",
    imageAlt: "Success Barbershop studio interior — barber stations with branded capes",
    pillars: [
      {
        number: "I",
        title: "International",
        titleBreak: "Standards",
        desc: "Every technique is rooted in global grooming excellence — refined in Latin America, perfected for Dubai's most discerning clientele.",
      },
      {
        number: "II",
        title: "Latin",
        titleBreak: "Energy",
        desc: "Our culture is our craft. The warmth, passion, and attention to detail of Latin barbering is woven into every appointment.",
      },
      {
        number: "III",
        title: "Precision",
        titleBreak: "Craftsmanship",
        desc: "Lines so clean, fades so seamless — we treat every detail as a signature. No rush. No compromise. Ever.",
      },
      {
        number: "IV",
        title: "Exclusive",
        titleBreak: "Environment",
        desc: "Designed as a destination. The space itself communicates that you are somewhere rare — a boutique experience in the heart of Dubai.",
      },
    ],
  },
  services: {
    label: "The Menu",
    headline: "Signature",
    headlineBreak: "Services",
    intro:
      "Every service is delivered with precision, craftsmanship, and attention to detail—designed to elevate your grooming experience.",
    categories: [
      {
        index: "01",
        title: "Haircuts & Styling",
        items: [
          {
            name: "Classic Haircut",
            price: "90 AED",
            description:
              "Timeless precision tailored to your personal style.",
          },
          {
            name: "Skin Fade & Beard",
            price: "130 AED",
            description:
              "Sharp fades paired with expertly sculpted beard detailing.",
          },
          {
            name: "Kids Cut",
            price: "75 AED",
            description: "Modern cuts designed for young gentlemen.",
          },
        ],
      },
      {
        index: "02",
        title: "Beard Grooming",
        items: [
          {
            name: "Full Beard Styling",
            price: "50 AED",
            description: "Shape, define, and refine your signature look.",
          },
          {
            name: "Beard Shave with Hot Towel",
            price: "60 AED",
            description:
              "Traditional hot towel shave with a smooth, refreshing finish.",
          },
        ],
      },
      {
        index: "03",
        title: "Skin & Wellness",
        items: [
          {
            name: "Express Facial",
            price: "100 AED",
            description:
              "Deep cleansing treatment for refreshed, healthy-looking skin.",
          },
          {
            name: "Black Mask",
            price: "15 AED",
            description:
              "Purifying charcoal treatment that detoxifies and revitalizes the skin.",
          },
          {
            name: "Back Massage",
            price: "50 AED",
            description:
              "A relaxing massage designed to ease tension and restore comfort.",
          },
        ],
      },
      {
        index: "04",
        title: "Hand & Foot Care",
        items: [
          {
            name: "Pedicure",
            price: "75 AED",
            description:
              "Complete foot care for comfort, cleanliness, and confidence.",
          },
          {
            name: "Manicure",
            price: "50 AED",
            description: "Clean, detailed grooming for well-maintained hands.",
          },
        ],
      },
      {
        index: "05",
        title: "Waxing",
        items: [
          {
            name: "Facial & Body Waxing",
            price: "From 20 AED",
            description:
              "Professional facial and body waxing with expert precision.",
          },
        ],
      },
    ],
    cta: {
      headline: "Ready for Your Next Appointment?",
      sub: "Experience Dubai's First International Latin-Inspired Grooming Destination.",
      button: "Book Your Appointment",
    },
  },
  productBrands: {
    eyebrow: "Product Partners",
    headline: "Premium",
    headlineBreak: "Brands",
    intro:
      "Every service is finished with professional-grade formulations chosen for performance, care, and results.",
    brands: [
      {
        id: "stmt",
        name: "STMNT",
        tagline: "Grooming Goods",
        description:
          "Modern styling essentials built for sharp cuts, clean finishes, and everyday confidence.",
        alt: "STMNT Grooming Goods logo",
      },
      {
        id: "philipMartins",
        name: "Philip Martin's",
        tagline: "Made in Italy",
        description:
          "Italian luxury haircare crafted with natural ingredients for refined grooming and lasting quality.",
        alt: "Philip Martin's luxury grooming products logo",
      },
    ],
  },
  gallery: {
    headline: "The",
    headlineBreak: "Craft",
    count: "Precision, always",
    quote: '"Crafted for the image-conscious man of Dubai."',
    instagramCta: "Follow @successbarberdxb",
    socialLinks: [
      {
        label: "Instagram",
        text: "Follow @successbarberdxb",
        href: socialLinks.instagram,
      },
      {
        label: "Facebook",
        text: "Success Barber Shop",
        href: socialLinks.facebook,
      },
      {
        label: "TikTok",
        text: "Follow @successbarbershopdxb",
        href: socialLinks.tiktok,
      },
    ],
    cells: [
      {
        label: null,
        alt: "Hot towel beard grooming at Success Barbershop",
      },
      {
        label: "Scissor Craft",
        alt: "Precision scissor work on curly hair at Success Barbershop",
      },
      {
        label: "The Transformation",
        alt: "Curly hair styling — satisfied client at Success Barbershop",
      },
      {
        label: "The Studio",
        alt: "Success Barbershop interior — lounge and barber stations",
      },
    ],
  },
  artists: {
    eyebrow: "The Team",
    headline: "The",
    headlineBreak: "Artists",
    members: [
      {
        num: "01",
        name: "Jovany",
        role: "Lead Artist · Curl Specialist",
        spec: "Dubai's foremost curl perm specialist. Jovany transforms natural texture into statement — trusted by the city's most style-conscious clients.",
        alt: "Jovany — beard and curl specialist at Success Barbershop",
      },
      {
        num: "02",
        name: "Koro",
        role: "Senior Barber · Fade Architect",
        spec: "Precision fade specialist with a signature eye for symmetry. Known for exceptional client hospitality and meticulous edge work.",
        alt: "Koro — fade architect at Success Barbershop",
      },
      {
        num: "03",
        name: "The Team",
        role: "All Barbers · Full Service",
        spec: "Each member of the Success team brings international training and a shared commitment to craftsmanship. Every artist, every time.",
        alt: "The Success Barbershop team at work",
      },
    ],
  },
  space: {
    headline: "The",
    headlineBreak: "Space",
    desc: "Designed as a destination. Westview Terrace, Shop 1 — a location as refined as the experience within.",
    panels: [
      { caption: "The Studio — Dubai", alt: "Success Barbershop studio — four private chairs, Dubai" },
      { caption: "Products", alt: "Premium grooming products at Success Barbershop" },
      { caption: "Craft", alt: "Precision clipper work — Success Barbershop craft" },
    ],
    attributes: [
      { label: "Location", value: [...shopAddress.short] },
      { label: "Atmosphere", value: ["Boutique", "Minimal"] },
      { label: "Stations", value: ["4 Private", "Chairs"] },
      { label: "Open Daily", value: ["9:00 AM – 10:00 PM"] },
    ],
  },
  visit: {
    label: "Visit Us",
    headline: ["Come", "find", "your look."],
    headlineEm: "your look.",
    address: {
      label: "Address",
      lines: [...shopAddress.lines],
    },
    hours: {
      label: "Hours",
      rows: [
        { day: "Mon – Fri", time: "9:00 AM – 10:00 PM" },
        { day: "Saturday", time: "9:00 AM – 10:00 PM" },
        { day: "Sunday", time: "9:00 AM – 10:00 PM" },
      ],
    },
    contact: {
      label: "Contact",
      phone: "+971 52 140 0990",
    },
    ctas: [
      {
        label: "WhatsApp",
        text: "Book via WhatsApp",
        href: "https://wa.me/971521400990",
        external: true,
        icon: "whatsapp",
      },
      {
        label: "Phone",
        text: "Call the Studio",
        href: "tel:+971521400990",
        external: false,
        icon: "phone",
      },
      {
        label: "Directions",
        text: "Get Directions",
        href: shopLocation.directionsUrl,
        external: true,
        icon: "directions",
      },
      {
        label: "Instagram",
        text: "@successbarberdxb",
        href: socialLinks.instagram,
        external: true,
        icon: "instagram",
      },
      {
        label: "Facebook",
        text: "Success Barber Shop",
        href: socialLinks.facebook,
        external: true,
        icon: "facebook",
      },
      {
        label: "TikTok",
        text: "@successbarbershopdxb",
        href: socialLinks.tiktok,
        external: true,
        icon: "tiktok",
      },
    ],
  },
  reviews: {
    eyebrow: "Guest Voices",
    headline: "What",
    headlineBreak: "They Say",
    intro:
      "Real words from clients who have experienced the chair — shared directly from Google Reviews.",
    rating: "5.0",
    source: "Google Reviews",
    viewAllCta: "Read All Reviews",
    viewAllHref: shopLocation.reviewsUrl,
    starLabel: "5 out of 5 stars",
    items: [
      {
        name: "Ayaz Aziz",
        date: "Jun 27, 2026",
        dateIso: "2026-06-27",
        text: "The best shop in JVC. Had the best hair cut.",
        avatar: reviewAvatar(
          "a-/ALV-UjWesdUPuW6_CPmDmyakSkOAiJxObEwb_l0FrHaVLzjPCyZs-qBk=s120-c-rp-mo-br100",
        ),
        alt: "Ayaz Aziz — Google review profile photo",
      },
      {
        name: "Hassan Wasswa",
        date: "Jun 26, 2026",
        dateIso: "2026-06-26",
        text: "An exceptional grooming experience from start to…",
        avatar: reviewAvatar(
          "a-/ALV-UjXMNlUSOCvpq1W1Dgnyp4tY8obARd8KJz9WMxhRfgtz94P2bcfFoA=s120-c-rp-mo-ba12-br100",
        ),
        alt: "Hassan Wasswa — Google review profile photo",
      },
      {
        name: "Amjad Husari",
        date: "Jun 25, 2026",
        dateIso: "2026-06-25",
        text: "Best barber shop in town.",
        avatar: reviewAvatar(
          "a-/ALV-UjU6G0zFpiw45oqvRFfyMta66tR9bAViwDVhrNbfWfaT-9srbc4p-g=s120-c-rp-mo-br100",
        ),
        alt: "Amjad Husari — Google review profile photo",
      },
      {
        name: "Hasan Abufakher",
        date: "Jun 25, 2026",
        dateIso: "2026-06-25",
        text: "Amazing work.",
        avatar: reviewAvatar(
          "a/ACg8ocKvlEbzGhxH4PNq-UxNPgLqmCFS-pr4gwYKAE0zkBOwesZaBA=s120-c-rp-mo-br100",
        ),
        alt: "Hasan Abufakher — Google review profile photo",
      },
      {
        name: "Salamo Belk",
        date: "Jun 24, 2026",
        dateIso: "2026-06-24",
        text: "Really great.",
        avatar: reviewAvatar(
          "a-/ALV-UjUImjVKxTumvaXM3GBXFyNa8MErDdITOn0AZZ3vCcEYYPRfCZsN=s120-c-rp-mo-br100",
        ),
        alt: "Salamo Belk — Google review profile photo",
      },
      {
        name: "Nicole Ebot",
        date: "Jun 23, 2026",
        dateIso: "2026-06-23",
        text: "Amazing work — really recommend this place…",
        avatar: reviewAvatar(
          "a/ACg8ocJtpih3Gm3NtK3MkSXjqI_S_KANlehk1X3c8vfY8ERg68y1Yg=s120-c-rp-mo-br100",
        ),
        alt: "Nicole Ebot — Google review profile photo",
      },
      {
        name: "Geo Ortiz",
        date: "Jun 23, 2026",
        dateIso: "2026-06-23",
        text: "Geo is awesome! Great vibes, strong attention to detail…",
        avatar: reviewAvatar(
          "a-/ALV-UjXy0eASlARIWv8_6Q1CdHACJk8bSwHXRZdKZWOuUQ3ycvpqRIqNTw=s120-c-rp-mo-ba12-br100",
        ),
        alt: "Geo Ortiz — Google review profile photo",
      },
      {
        name: "Tariq Ahmadzai",
        date: "Jun 23, 2026",
        dateIso: "2026-06-23",
        text: "Nothing to say except perfect barber. Well done.",
        avatar: reviewAvatar(
          "a/ACg8ocK6JH_yXeV1qbvj_C8GWLm_tJqqcQzMAcIY82kF7gQXIPAXgLA=s120-c-rp-mo-br100",
        ),
        alt: "Tariq Ahmadzai — Google review profile photo",
      },
    ],
  },
  brand: {
    eyebrow: "The Brand",
    headline: "Wear",
    headlineEm: "Success",
    body: "Premium apparel bearing the Success mark — crafted for men who carry confidence beyond the chair.",
    videoAlt: "Success Barbershop premium logo apparel collection",
    cta: "View on Instagram",
    ctaHref: socialLinks.instagram,
  },
  map: {
    ariaLabel: "Success Barbershop location map",
    title: `Map showing ${shopLocation.name} at Westview Terrace, Shop 1, Dubai`,
  },
  footer: {
    logo: "Success Barbershop",
    tagline: "Dubai's First Latin-Inspired Grooming Destination",
    links: [
      { label: "Experience", href: "#experience" },
      { label: "Services", href: "#services" },
      { label: "Product Brands", href: "#product-brands" },
      { label: "Artists", href: "#artists" },
      { label: "Reviews", href: "#reviews" },
      { label: "The Brand", href: "#brand" },
      { label: "The Space", href: "#space" },
      { label: "Visit", href: "#visit" },
      { label: "Instagram", href: socialLinks.instagram },
      { label: "Facebook", href: socialLinks.facebook },
      { label: "TikTok", href: socialLinks.tiktok },
    ],
    copy: {
      prefix: "© 2026 Success Barbershop, Developed by ",
      credit: { label: "Fadezy", href: "https://www.fadezyrl.com/" },
      suffix: ". All rights reserved.",
    },
  },
} as const;

export type Dictionary = typeof en;
