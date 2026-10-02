"use client";
import { useState } from "react";
import { rooms } from "@/data/rooms";
import { buildReservationWhatsAppMessage, whatsappUrl, hasWhatsApp } from "@/lib/whatsapp";
const input = "mt-1 w-full rounded-lg border border-forest/25 bg-white px-3 py-2.5";
export default function EnquiryForm({ defaultRoom = "" }: { defaultRoom?: string }) {
  const [url, setUrl] = useState<string | null>(null);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setUrl(whatsappUrl(buildReservationWhatsAppMessage({ name: f.name, phone: f.phone, location: f.location, checkIn: f.checkIn, checkOut: f.checkOut, guests: f.guests, room: f.room, message: f.message })));
  }
  return (
    <form onSubmit={submit} onChange={() => setUrl(null)} className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm sm:grid-cols-2">
      <label className="text-sm font-medium">Full name<input name="name" required autoComplete="name" className={input} /></label>
      <label className="text-sm font-medium">Phone / contact number<input name="phone" required type="tel" autoComplete="tel" className={input} /></label>
      <label className="text-sm font-medium">Current location (optional)<input name="location" className={input} placeholder="e.g. Accra" /></label>
      <label className="text-sm font-medium">Number of guests<input name="guests" type="number" min={1} defaultValue={1} className={input} /></label>
      <label className="text-sm font-medium">Check-in date<input name="checkIn" type="date" className={input} /></label>
      <label className="text-sm font-medium">Check-out date<input name="checkOut" type="date" className={input} /></label>
      <label className="text-sm font-medium sm:col-span-2">Preferred room
        <select name="room" defaultValue={defaultRoom} className={input}><option value="">No preference</option>{rooms.map((r) => <option key={r.slug}>{r.name}</option>)}</select></label>
      <label className="text-sm font-medium sm:col-span-2">Additional request<textarea name="message" rows={3} className={input} /></label>
      <div className="sm:col-span-2">
        {!url ? <button className="btn btn-green w-full sm:w-auto" type="submit">Prepare my enquiry</button> : (
          <div role="status" className="rounded-lg bg-cream p-4">
            <p className="font-medium">Your enquiry is ready to send on WhatsApp.</p>
            {hasWhatsApp()
              ? <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-3">Send Enquiry on WhatsApp</a>
              : <p className="mt-2 text-sm text-red-700">WhatsApp number not configured yet (set NEXT_PUBLIC_WHATSAPP_NUMBER).</p>}
            <p className="mt-3 text-xs text-ink/70">This is an enquiry, not a confirmed booking. The lodge will reply to confirm availability.</p>
          </div>)}
      </div>
    </form>
  );
}
