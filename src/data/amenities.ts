export type Amenity = { name: string; description?: string; image?: string };
// Client-provided or photo-confirmed. Breakfast, hot tub, meeting rooms: add only once confirmed.
export const amenities: Amenity[] = [
  { name: "Open-air pavilion & bar area", description: "A thatched, open-sided pavilion with seating, set in the lodge compound.", image: "/images/pavilion.jpg" },
  { name: "Garden gazebo", description: "A raised, covered gazebo with wrought-iron railings, ideal for relaxing outdoors.", image: "/images/gazebo.jpg" },
  { name: "Reception & lounge", description: "A bright reception lobby with a comfortable seating area.", image: "/images/reception.jpg" },
  { name: "Spacious compound", description: "A wide paved courtyard with room to move around.", image: "/images/courtyard.jpg" },
  { name: "Secure guest parking", description: "Complimentary, secure parking for guests." },
  { name: "Licensed bar & lounge", description: "An on-site licensed bar and lounge space." },
  { name: "Housekeeping & laundry", description: "Full housekeeping and laundry services." },
  { name: "15 air-conditioned rooms", description: "Every room has its own air conditioning, a flat-screen satellite TV, a writing desk and an electric tea pot." },
];
