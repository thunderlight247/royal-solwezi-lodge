// Confirmed facts and configuration for Royal Solwezi Lodge.
export const business = {
  name: "Royal Solwezi Lodge",
  tagline: "Comfortable, welcoming stays in Agona Swedru",
  location: {
    street: "Ekwamkrom Police Barrier",
    city: "Agona Swedru",
    region: "Central Region",
    country: "Ghana",
    countryCode: "GH",
  },
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+233530470113",
  phone: process.env.NEXT_PUBLIC_PHONE || "+233530470113",
  altPhone: "+233505367267",
  backupPhone: "+233505367267",
  email: process.env.NEXT_PUBLIC_EMAIL || "royalsolwezilodge@gmail.com",
  googleMapsUrl: "https://share.google/7PYqCsIbSYz3xv1Vv",
  googleMapsEmbed: "https://www.google.com/maps?q=Royal+Solwezi+Lodge+Agona+Swedru+Ghana&output=embed",
  // Verified Google rating, e.g. { value: 4.5, count: 28 } - leave undefined until verified on live Google Maps
  rating: undefined as undefined | { value: number; count: number },
  // Social media channels (empty entries are hidden automatically)
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  },
  // Standard lodge policies (customizable by client)
  checkIn: "12:00 PM",
  checkOut: "2:00 PM",
  receptionHours: "Open 24/7",
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://royalsolwezilodge.com";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  // { href: "/menu", label: "Menu" }, // Commented out until menu updates are ready
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
