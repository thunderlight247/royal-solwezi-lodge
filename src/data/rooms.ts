export type Room = {
  slug: string; name: string; description: string;
  images: { src: string; alt: string }[];
  features: string[]; amenities: string[]; maxGuests?: number;
  price?: { amount: number; currency: "GHS"; period: "night" | "day" | "stay" }; // future
  availability?: boolean; // future
};
// 15 guest rooms in total (client-provided). Add categories/prices when confirmed.
export const rooms: Room[] = [
  {
    slug: "guest-room",
    name: "Guest Room",
    description: "A restful air-conditioned room with a generous wooden-framed bed, crisp white linen, a satellite TV, a writing desk and a private tiled bathroom with a bath.",
    images: [
      { src: "/images/room-bed.jpg", alt: "Guest room at Royal Solwezi Lodge with a large bed and white linen" },
      { src: "/images/room-bath.jpg", alt: "Blue-tiled bathroom with a bath at Royal Solwezi Lodge" },
    ],
    features: ["Individual air conditioning", "Flat-screen satellite TV", "Writing desk", "Electric tea pot", "Private tiled bathroom with bath"],
    amenities: [],
  },
];
