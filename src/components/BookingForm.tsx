"use client";
import { useState } from "react";
import { buildReservationWhatsAppMessage, whatsappUrl, hasWhatsApp } from "@/lib/whatsapp";
import { rooms } from "@/data/rooms";
export default function BookingForm({ defaultRoom = "" }: { defaultRoom?: string }) {
  const [url, setUrl] = useState<string | null>(null);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setUrl(whatsappUrl(buildReservationWhatsAppMessage({ name: f.name, phone: f.phone, email: f.email, address: f.address, checkIn: f.checkIn, checkOut: f.checkOut,
      guests: `${f.adults} adult(s), ${f.children} child(ren)`, room: f.room, message: f.message })));
  }
  const L = "text-sm font-medium text-forest";
  return (
    <form onSubmit={submit} onChange={() => setUrl(null)} className="card space-y-8 p-6 md:p-8">
      <h2 className="font-serif text-3xl">Booking Request</h2>
      <fieldset className="grid gap-4 sm:grid-cols-2"><legend className="mb-3 font-serif text-xl text-forest">Personal Information</legend>
        <label className={L}>Full name<input name="name" required autoComplete="name" className="field" /></label>
        <label className={L}>Phone number<input name="phone" required type="tel" defaultValue="+233" autoComplete="tel" className="field" /></label>
        <label className={L}>Email address<input name="email" type="email" autoComplete="email" className="field" /></label>
        <label className={L}>Residential address (optional)<input name="address" className="field" /></label></fieldset>
      <fieldset className="grid gap-4 sm:grid-cols-2"><legend className="mb-3 font-serif text-xl text-forest">Stay Details</legend>
        <label className={L}>Check-in<input name="checkIn" type="date" required className="field" /></label>
        <label className={L}>Check-out<input name="checkOut" type="date" required className="field" /></label>
        <label className={L}>Adults<select name="adults" defaultValue="1" className="field">{[1, 2, 3, 4, 5, 6].map((n) => <option key={n}>{n}</option>)}</select></label>
        <label className={L}>Children<select name="children" defaultValue="0" className="field">{[0, 1, 2, 3, 4].map((n) => <option key={n}>{n}</option>)}</select></label>
        <label className={`${L} sm:col-span-2`}>Room type<select name="room" defaultValue={defaultRoom} className="field"><option value="">No preference</option>{rooms.map((r) => <option key={r.id}>{r.title}</option>)}</select></label></fieldset>
      <fieldset className="space-y-4"><legend className="mb-3 font-serif text-xl text-forest">Special Requests</legend>
        <label className={L}>Anything we should know?<textarea name="message" rows={4} className="field" /></label>
        <label className="flex items-start gap-2 text-sm"><input type="checkbox" name="terms" required className="mt-1" /> I agree to the Terms &amp; Privacy Policy and understand this is a request, not a confirmed booking.</label></fieldset>
      {!url ? <button type="submit" className="btn btn-gold w-full">Submit Booking Request</button> : (
        <div role="status" className="rounded-xl bg-tint p-4">
          <p className="font-medium text-forest">Your enquiry is ready to send on WhatsApp.</p>
          {hasWhatsApp() ? <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-3">Send Enquiry on WhatsApp</a> : <p className="mt-2 text-sm text-red-700">WhatsApp number not configured.</p>}
          <p className="mt-3 text-xs">The lodge will reply to confirm availability and rates.</p></div>)}
    </form>);
}
