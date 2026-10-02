import { business } from "@/data/business";
export type Reservation = { name: string; phone: string; location?: string; checkIn?: string; checkOut?: string; guests?: string; room?: string; message?: string };
const fmt = (d?: string) => d ? new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "";
export function buildReservationWhatsAppMessage(r: Reservation) {
  const l = [`Hello ${business.name},`, "", "I would like to enquire about staying at the lodge.", "",
    `Name: ${r.name}`, `Contact: ${r.phone}`];
  if (r.location) l.push(`Current location: ${r.location}`);
  if (r.checkIn) l.push(`Check-in: ${fmt(r.checkIn)}`);
  if (r.checkOut) l.push(`Check-out: ${fmt(r.checkOut)}`);
  if (r.guests) l.push(`Guests: ${r.guests}`);
  if (r.room) l.push(`Preferred room: ${r.room}`);
  if (r.message) l.push("", "Additional request:", r.message);
  l.push("", "Thank you.");
  return l.join("\n");
}
export function whatsappUrl(text = `Hello ${business.name}, I would like to make an enquiry.`) {
  const n = business.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
}
export const hasWhatsApp = () => business.whatsapp.replace(/\D/g, "").length > 8;
