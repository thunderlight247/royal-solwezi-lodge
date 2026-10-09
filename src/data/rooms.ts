import { media } from "./media";
export interface RoomSpec { maxGuests: number; sqm: number; bedType: string }
export interface RoomAmenity { iconName: string; label: string }
export interface Room {
  id: string; slug: string; title: string; tagline: string; description: string;
  pricePerNight: number; images: string[]; specs: RoomSpec; amenities: RoomAmenity[]; features: string[]; policies: string[];
}
// SAMPLE DATA: prices, sizes and tiers are placeholders from the brief. Replace with client-confirmed values before launch.
const policies = ["Check-in and check-out times: to be confirmed with the lodge", "Cancellation: please ask the lodge when you enquire", "Non-smoking rooms"];
export const rooms: Room[] = [
  { id: "standard", slug: "standard-executive-room", title: "Standard Executive Room", tagline: "Comfortable and well appointed",
    description: "A calm, air-conditioned room with a queen bed, satellite TV and everything you need for a restful stay in Agona Swedru.",
    pricePerNight: 350, images: media.rooms.standard, specs: { maxGuests: 2, sqm: 35, bedType: "Queen Bed" },
    amenities: [{ iconName: "Wifi", label: "WiFi" }, { iconName: "Snowflake", label: "Air Conditioning" }, { iconName: "Tv", label: "Smart TV" }],
    features: ["Private bathroom", "Writing desk", "Electric tea pot"], policies },
  { id: "deluxe", slug: "deluxe-pavilion-suite", title: "Deluxe Pavilion Suite", tagline: "More space, more comfort",
    description: "A spacious suite with a king bed and extra comforts, close to the lodge's open-air pavilion.",
    pricePerNight: 550, images: media.rooms.deluxe, specs: { maxGuests: 2, sqm: 65, bedType: "King Bed" },
    amenities: [{ iconName: "Wifi", label: "WiFi" }, { iconName: "Snowflake", label: "Air Conditioning" }, { iconName: "Tv", label: "Smart TV" }, { iconName: "Wine", label: "Minibar" }],
    features: ["Separate seating area", "Private bathroom", "Writing desk"], policies },
  { id: "royal", slug: "royal-penthouse-suite", title: "Royal Penthouse Suite", tagline: "Our most generous suite",
    description: "The lodge's flagship suite for up to four guests, with a king bed, lounge access and a rainfall shower.",
    pricePerNight: 800, images: media.rooms.royal, specs: { maxGuests: 4, sqm: 130, bedType: "King Bed" },
    amenities: [{ iconName: "Wifi", label: "High-Speed WiFi" }, { iconName: "Snowflake", label: "Air Conditioning" }, { iconName: "Tv", label: "Smart TV" },
      { iconName: "Wine", label: "Premium Minibar" }, { iconName: "Armchair", label: "Lounge Access" }, { iconName: "ShowerHead", label: "Rainfall Shower" }],
    features: ["Living area", "Private bathroom", "Ideal for families or small groups"], policies },
];
