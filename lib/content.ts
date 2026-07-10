export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "MEMES", href: "#memes" },
  { label: "STATUS", href: "#status" },
  { label: "BUY", href: "#buy" },
  { label: "X", href: "https://x.com/DEADCAT_RH" },
];

export type HeroSticker = {
  label: string;
  className: string;
  tilt: string;
  delay: number;
};

export const HERO_STICKERS: HeroSticker[] = [
  { label: "STILL DEAD", className: "top-[0%] left-[-4%] sm:left-[2%] bg-charcoal text-white", tilt: "-6deg", delay: 0 },
  { label: "COFFEE LOW", className: "top-[8%] right-[-6%] sm:right-[-2%] bg-coffee text-white", tilt: "5deg", delay: 0.4 },
  { label: "BOUNCE PENDING", className: "bottom-[14%] left-[-10%] sm:left-[-6%] bg-deadred text-white", tilt: "-4deg", delay: 0.8 },
  { label: "STRONG AVOID", className: "bottom-[-2%] right-[4%] bg-white text-ink", tilt: "4deg", delay: 1.2 },
];

export const HERO_IMAGE = {
  src: "/images/deadcat-hero.png",
  alt: "DEADCAT mascot in a black suit holding coffee, standing on a neon green background",
  width: 1024,
  height: 1024,
};

export const FEATURED_MEME_IMAGE = {
  src: "/images/deadcat-featured-meme.png",
  alt: "DEADCAT bouncing off a giant red candlestick above the city skyline",
  width: 1376,
  height: 768,
};

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/deadcat-tendies.png",
    alt: "DEADCAT eating chicken tenders at a trading desk surrounded by market monitors",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/deadcat-presentation.png",
    alt: "DEADCAT presenting a rising chart to Pepe the frog and a Shiba Inu dog in a boardroom",
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/deadcat-double-birds.png",
    alt: "DEADCAT with a halo giving double middle fingers while standing on a desk covered in stock certificates, surrounded by laughing coworkers",
    width: 957,
    height: 1120,
  },
];

export type StatCard = {
  title: string;
  value: string;
  icon:
    | "coffee"
    | "skull"
    | "activity"
    | "trending-up"
    | "briefcase"
    | "utensils"
    | "shield-off"
    | "voicemail"
    | "thumbs-down";
  bg: string;
  tilt: string;
};

export const STATUS_BOARD: StatCard[] = [
  { title: "COFFEE", value: "Dangerously Low", icon: "coffee", bg: "bg-coffee text-white", tilt: "-rotate-2" },
  { title: "CAT", value: "Dead", icon: "skull", bg: "bg-charcoal text-white", tilt: "rotate-1" },
  { title: "MARKET", value: "Chaotic", icon: "activity", bg: "bg-deadred text-white", tilt: "-rotate-1" },
  { title: "BOUNCE", value: "Pending", icon: "trending-up", bg: "bg-background text-ink", tilt: "rotate-2" },
  { title: "EMPLOYMENT", value: "Unfortunately Active", icon: "briefcase", bg: "bg-plum text-white", tilt: "-rotate-2" },
  { title: "LUNCH", value: "Chicken Tenders", icon: "utensils", bg: "bg-white text-ink", tilt: "rotate-1" },
  { title: "RISK MANAGEMENT", value: "404", icon: "shield-off", bg: "bg-charcoal text-white", tilt: "-rotate-1" },
  { title: "MARGIN CALL", value: "Sent To Voicemail", icon: "voicemail", bg: "bg-deadred text-white", tilt: "rotate-2" },
  { title: "ANALYST RATING", value: "Strong Avoid", icon: "thumbs-down", bg: "bg-coffee text-white", tilt: "-rotate-2" },
];

export const FOOTER_STATUS = [
  { label: "COFFEE", value: "LOW" },
  { label: "MARKET", value: "CHAOTIC" },
  { label: "CAT", value: "DEAD" },
  { label: "BOUNCE", value: "PENDING" },
];

export const SOCIAL_LINKS = [{ label: "FOLLOW ON X", href: "https://x.com/DEADCAT_RH" }];
