// Remote imagery curated for Ghanaian hospitality aesthetic.
const u = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const media = {
  hero: u("photo-1566073771259-6a8506099945", 2000),
  pavilion: u("photo-1540555700478-4be289fbecef"),
  bar: u("photo-1551024709-8f23befc6f87"),
  summerHut: u("photo-1577495508048-b635879837f1"),
  conference: u("photo-1517502884422-41eaead166d4"),
  // Backward compatibility alias for any existing reference
  gazebo: u("photo-1577495508048-b635879837f1"),
  gallery: [
    u("photo-1566073771259-6a8506099945"), // Compound & Exterior
    u("photo-1577495508048-b635879837f1"), // Summer Hut relaxation
    u("photo-1540555700478-4be289fbecef"), // Open-Air Pavilion
    u("photo-1517502884422-41eaead166d4"), // Conference Room (30-40 capacity)
    u("photo-1582719478250-c89cae4dc85b"), // Executive Room (Air Conditioned)
    u("photo-1590490360182-c33d57733427"), // Luxury Room (Air Conditioned)
    u("photo-1631049307264-da0ec9d70304"), // Standard Room (Fan Cooled)
    u("photo-1551024709-8f23befc6f87"), // Bar & Kitchen
  ],
  map: u("photo-1524661135-423995f22d0b"),
  rooms: {
    executive: [
      u("photo-1582719478250-c89cae4dc85b"),
      u("photo-1590490360182-c33d57733427"),
      u("photo-1618773928121-c32242e63f39"),
    ],
    luxury: [
      u("photo-1590490360182-c33d57733427"),
      u("photo-1582719478250-c89cae4dc85b"),
      u("photo-1584132967334-10e028bd69f7"),
    ],
    standard: [
      u("photo-1631049307264-da0ec9d70304"),
      u("photo-1596394516093-501ba68a0ba6"),
      u("photo-1618773928121-c32242e63f39"),
    ],
  },
  food: {
    local: [
      u("photo-1563379091339-03b21ab4a4f8", 900), // Ghana Jollof Rice
      u("photo-1534422298391-e4f8c172dddb", 900), // Banku & Grilled Tilapia
      u("photo-1596797038530-2c107229654b", 900), // Fufu & Light Soup
      u("photo-1604329760661-e71dc83f8f26", 900), // Waakye Special
    ],
    grill: [
      u("photo-1534422298391-e4f8c172dddb", 900), // Charcoal Grilled Whole Tilapia
      u("photo-1529193591184-b1d58069ecdd", 900), // Beef & Goat Chichinga (Suya)
      u("photo-1555939594-58d7cb561ad1", 900), // Charcoal Grilled Chicken
      u("photo-1519708227418-c8fd9a32b7a2", 900), // Spicy Grilled Pork Chofi
    ],
    bar: [
      u("photo-1536935338788-846bb9981813", 900), // Chilled Hibiscus Sobolo
      u("photo-1514362545857-3bc16c4c7d1b", 900), // Fresh Palm Wine Cooler
      u("photo-1551024709-8f23befc6f87", 900), // Pavilion Bar & Beers
      u("photo-1540555700478-4be289fbecef", 900), // Tropical Fruit Punch
    ],
    breakfast: [
      u("photo-1525351484163-7529414344d8", 900), // Fried Egg & Bread with Hot Tea/Milo
      u("photo-1588137378633-dea1336ce1e2", 900), // Warm Tom Brown Porridge
      u("photo-1586985289688-ca3cf47d3e6e", 900), // Hausa Koko & Koose
      u("photo-1525351484163-7529414344d8", 900), // Warm Oat Porridge & Toast
    ],
  },
};
