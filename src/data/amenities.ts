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
    name: "Conference Room",
    description: "A comfortable, focused meeting hall equipped with presentation screen and seating for corporate sessions.",
    image: media.conference,
    iconName: "Presentation",
  },
  {
    name: "Kitchen & Bar",
    description: "A well-equipped kitchen and licensed bar offering hot meals, cold beers, cocktails, and soft drinks.",
    image: media.exterior[2],
    iconName: "Utensils",
  },
  {
    name: "Laundry & Ironing Space",
    description: "Convenient on-site guest laundry and dedicated ironing facilities to keep your garments crisp.",
    image: media.ironing,
    iconName: "Shirt",
  },
  {
    name: "Event Center",
    description: "A flexible open-air space ready to host parties, wedding banquets, birthdays, and celebrations.",
    image: media.exterior[1],
    iconName: "PartyPopper",
  },
  {
    name: "Grand Interior Reception",
    description: "Welcoming lobby with an elegant spiral staircase connecting to the upper guest rooms.",
    image: media.interior,
    iconName: "BedDouble",
  },
  {
    name: "Secure Gated Parking",
    description: "Complimentary, safe parking within our fully walled compound with 24/7 security personnel.",
    image: media.exterior[0],
    iconName: "ParkingCircle",
  },
];
