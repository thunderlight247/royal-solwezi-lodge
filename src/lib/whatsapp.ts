import { business } from "@/data/business";

export type Reservation = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  location?: string;
  checkIn?: string;
  checkOut?: string;
  nights?: number;
  totalEstimate?: number;
  guests?: string;
  room?: string;
  message?: string;
};

const fmt = (d?: string) =>
  d
    ? new Date(d + "T00:00:00").toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

export function buildReservationWhatsAppMessage(r: Reservation) {
  const l = [
    `Hello ${business.name},`,
    "",
    "I would like to enquire about staying at the lodge.",
    "",
    `Name: ${r.name}`,
    `Contact: ${r.phone}`,
  ];
  if (r.email) l.push(`Email: ${r.email}`);
  if (r.address) l.push(`Address: ${r.address}`);
  if (r.location) l.push(`Current location: ${r.location}`);
  if (r.checkIn) l.push(`Check-in: ${fmt(r.checkIn)}`);
  if (r.checkOut) l.push(`Check-out: ${fmt(r.checkOut)}`);
  if (r.nights && r.nights > 0) l.push(`Duration: ${r.nights} ${r.nights === 1 ? "night" : "nights"}`);
  if (r.room) l.push(`Preferred room: ${r.room}`);
  if (r.totalEstimate && r.totalEstimate > 0) l.push(`Estimated Total: GH₵ ${r.totalEstimate.toLocaleString()}`);
  if (r.guests) l.push(`Guests: ${r.guests}`);
  if (r.message) l.push("", "Additional request:", r.message);
  l.push("", "Thank you.");
  return l.join("\n");
}

export function whatsappUrl(text = `Hello ${business.name}, I would like to make an enquiry.`) {
  return `https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

export const hasWhatsApp = () => business.whatsapp.replace(/\D/g, "").length > 8;
export const orderUrl = (dish: string) => whatsappUrl(`Hello ${business.name}, I would like to order: ${dish}.`);
