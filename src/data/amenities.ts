import { media } from "./media";
export type Amenity = { name: string; description?: string; image?: string; iconName?: string };
export const amenities: Amenity[] = [
  { name: "Open-air pavilion", description: "A relaxed, open-sided space for meals and gatherings.", image: media.pavilion, iconName: "Utensils" },
  { name: "Licensed bar & lounge", description: "An on-site licensed bar and lounge space.", image: media.bar, iconName: "Wine" },
  { name: "Garden gazebo", description: "A covered gazebo for quiet moments outdoors.", image: media.gazebo, iconName: "Trees" },
  { name: "Secure guest parking", description: "Complimentary, secure parking for guests.", iconName: "ParkingCircle" },
  { name: "Housekeeping & laundry", description: "Full housekeeping and laundry services.", iconName: "Sparkles" },
];
