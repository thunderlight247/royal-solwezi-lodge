import { media } from "./media";
import { business } from "./business";

export interface RoomSpec {
  maxGuests: number;
  bedType: string;
  cooling: "Air Conditioning" | "Ceiling Fan";
}

export interface RoomAmenity {
  iconName: string;
  label: string;
}

export interface Room {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  coolingType: "Air Conditioned" | "Fan Cooled";
  images: string[];
  specs: RoomSpec;
  amenities: RoomAmenity[];
  features: string[];
  policies: string[];
}

export const TOTAL_ROOMS_COUNT = 17;

const policies = [
  `Check-in from ${business.checkIn} | Check-out by ${business.checkOut}`,
  "Contact front desk via WhatsApp for rates, availability, and reservations",
  "Smoke-free guest rooms",
  "Daily housekeeping and fresh linens included",
];

export const rooms: Room[] = [
  {
    id: "executive",
    slug: "executive-room",
    title: "Executive Room",
    tagline: "Air-conditioned comfort with modern appointments",
    coolingType: "Air Conditioned",
    description:
      "A calm, fully air-conditioned room featuring a comfortable queen-size bed, satellite television, work desk, and private en-suite bathroom for a restful stay in Agona Swedru.",
    images: media.rooms.executive,
    specs: { maxGuests: 2, bedType: "Queen Bed", cooling: "Air Conditioning" },
    amenities: [
      { iconName: "Snowflake", label: "Air Conditioning" },
      { iconName: "Tv", label: "Satellite TV" },
      { iconName: "Wifi", label: "High-Speed WiFi" },
    ],
    features: [
      "Individual climate control (AC)",
      "Private en-suite bathroom",
      "Writing desk & chair",
      "Electric tea/coffee kettle",
    ],
    policies,
  },
  {
    id: "luxury",
    slug: "luxury-room",
    title: "Luxury Room",
    tagline: "Spacious premium room with air conditioning & lounge space",
    coolingType: "Air Conditioned",
    description:
      "Our most generous room category, fully air-conditioned with a plush king bed, private seating area, smart TV, minibar, and upgraded bathroom amenities.",
    images: media.rooms.luxury,
    specs: { maxGuests: 2, bedType: "King Bed", cooling: "Air Conditioning" },
    amenities: [
      { iconName: "Snowflake", label: "Air Conditioning" },
      { iconName: "Tv", label: "Smart TV" },
      { iconName: "Wifi", label: "High-Speed WiFi" },
      { iconName: "Wine", label: "Minibar" },
      { iconName: "Armchair", label: "Lounge Area" },
    ],
    features: [
      "Individual climate control (AC)",
      "Separate seating & relaxation area",
      "Private en-suite bathroom",
      "Minibar refrigerator",
      "Work desk & dressing mirror",
    ],
    policies,
  },
  {
    id: "standard",
    slug: "standard-room",
    title: "Standard Room",
    tagline: "Comfortable and budget-friendly with cooling ceiling fan",
    coolingType: "Fan Cooled",
    description:
      "A tidy, welcoming room equipped with a powerful ceiling fan, comfortable double bed, satellite TV, and private bathroom. Perfect for economical stays.",
    images: media.rooms.standard,
    specs: { maxGuests: 2, bedType: "Double Bed", cooling: "Ceiling Fan" },
    amenities: [
      { iconName: "Fan", label: "Ceiling Fan" },
      { iconName: "Tv", label: "Satellite TV" },
      { iconName: "Wifi", label: "WiFi" },
    ],
    features: [
      "High-efficiency ceiling fan",
      "Private bathroom",
      "Satellite TV",
      "Wardrobe & bedside table",
    ],
    policies,
  },
];
