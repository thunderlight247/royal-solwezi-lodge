// All remote imagery lives here so it can be swapped for the client's real photography later.
const u = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
export const media = {
  hero: u("photo-1566073771259-6a8506099945", 2000),
  pavilion: u("photo-1555396273-367ea4eb4db5"),
  bar: u("photo-1551024709-8f23befc6f87"),
  gazebo: u("photo-1520250497591-112f2f40a3f4"),
  gallery: [u("photo-1564501049412-61c2a3083791"), u("photo-1618773928121-c32242e63f39"), u("photo-1584132967334-10e028bd69f7"), u("photo-1560448204-e02f11c3d0e2"), u("photo-1445019980597-93fa8acb246c"), u("photo-1578683010236-d716f9a3f461"), u("photo-1517840901100-8179e982acb7"), u("photo-1559329007-40df8a9345d8")],
  map: u("photo-1524661135-423995f22d0b"),
  rooms: {
    standard: [u("photo-1631049307264-da0ec9d70304"), u("photo-1618773928121-c32242e63f39"), u("photo-1578683010236-d716f9a3f461")],
    deluxe: [u("photo-1582719478250-c89cae4dc85b"), u("photo-1590490360182-c33d57733427"), u("photo-1578683010236-d716f9a3f461")],
    royal: [u("photo-1611892440504-42a792e24d32"), u("photo-1582719478250-c89cae4dc85b"), u("photo-1590490360182-c33d57733427")],
  },
  food: {
    local: [u("photo-1504674900247-0877df9cc836", 900), u("photo-1546069901-ba9599a7e63c", 900), u("photo-1512621776951-a57141f2eefd", 900), u("photo-1540189549336-e6e99c3679fe", 900)],
    grill: [u("photo-1555939594-58d7cb561ad1", 900), u("photo-1544025162-d76694265947", 900), u("photo-1529692236671-f1f6cf9683ba", 900), u("photo-1432139555190-58524dae6a55", 900)],
    bar: [u("photo-1551024709-8f23befc6f87", 900), u("photo-1470337458703-46ad1756a187", 900), u("photo-1514362545857-3bc16c4c7d1b", 900), u("photo-1536935338788-846bb9981813", 900)],
    breakfast: [u("photo-1525351484163-7529414344d8", 900), u("photo-1567620905732-2d1ec7ab7445", 900), u("photo-1484723091739-30a097e8f929", 900), u("photo-1493770348161-369560ae357d", 900)],
  },
};
