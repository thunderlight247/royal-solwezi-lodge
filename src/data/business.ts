// Only confirmed facts live here. Empty values are hidden by the UI until filled.
export const business = {
  name: "Royal Solwezi Lodge",
  tagline: "Comfortable, welcoming stays in Agona Swedru",
  location: {
    street: "Ekwamkrom Police Barrier", // research lead - confirm exact address with client
    city: "Agona Swedru",
    region: "Central Region",
    country: "Ghana",
    countryCode: "GH",
    // geo: { lat: 0, lng: 0 }  // add ONLY after verifying on Google Maps
  },
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+233530470113", // client-provided
  phone: process.env.NEXT_PUBLIC_PHONE || "+233248380011", // client-provided
  backupPhone: "+233530470113", // client-provided
  email: process.env.NEXT_PUBLIC_EMAIL || "officialsolwezyguesthouse@gmail.com", // client-provided
  // No coordinates: the embed uses a text search query.
  googleMapsUrl: "https://share.google/7PYqCsIbSYz3xv1Vv", // client-provided Google listing share link
  googleMapsEmbed: "https://www.google.com/maps?q=Royal+Solwezi+Lodge+Agona+Swedru+Ghana&output=embed",
  // Verified Google rating, e.g. { value: 4.0, count: 50 } - leave undefined until re-checked on the live profile
  rating: undefined as undefined | { value: number; count: number },
  social: {} as Record<string, string>,
  checkIn: "", checkOut: "", // TODO
};
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://royal-solwezi-lodge.vercel.app";
export const nav = [
  { href: "/rooms", label: "Rooms" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];
