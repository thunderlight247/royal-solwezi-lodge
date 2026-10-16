import { media } from "./media";

export type Amenity = {
  name: string;
  description?: string;
  image?: string;
  iconName?: string;
};

export const amenities: Amenity[] = [
  {
    name: "Summer Hut Relaxation",
    description: "A cool, breezy open-air summer hut designed for quiet moments, conversation, and daytime rest.",
    image: media.summerHut,
    iconName: "Sun",
  },
  {
    name: "Open-Air Pavilion",
    description: "A welcoming, sheltered space to savor authentic Ghanaian dishes, charcoal grills, and refreshments.",
    image: media.pavilion,
    iconName: "Utensils",
  },
  {
    name: "Conference Room (30–40 People)",
    description: "An air-conditioned hall configured for 30 to 40 attendees, executive meetings, and group training.",
    image: media.conference,
    iconName: "Presentation",
  },
  {
    name: "Bar & Kitchen",
    description: "A well-equipped kitchen and licensed bar offering hot meals, cold beers, cocktails, and soft drinks.",
    image: media.bar,
    iconName: "Wine",
  },
  {
    name: "Event Center",
    description: "A flexible open-air space ready to host parties, wedding banquets, birthdays, and community gatherings.",
    iconName: "PartyPopper",
  },
  {
    name: "Laundry Services",
    description: "Professional on-site guest washing and ironing service for fresh clothing throughout your stay.",
    iconName: "Shirt",
  },
  {
    name: "Secure Gated Parking",
    description: "Complimentary, safe parking within our fully walled compound with 24/7 front security.",
    iconName: "ParkingCircle",
  },
];
