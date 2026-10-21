"use client";
import { useState, useId, useMemo } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  BedDouble,
  FileText,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Clock,
  Info,
} from "lucide-react";
import { buildReservationWhatsAppMessage, whatsappUrl, hasWhatsApp } from "@/lib/whatsapp";
import { rooms } from "@/data/rooms";

export default function BookingForm({ defaultRoom = "" }: { defaultRoom?: string }) {
  const [url, setUrl] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [selectedRoomTitle, setSelectedRoomTitle] = useState<string>(defaultRoom);
  const formId = useId();

  // Today in YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  const selectedRoomObj = useMemo(() => {
    return rooms.find((r) => r.title === selectedRoomTitle);
  }, [selectedRoomTitle]);

  // Calculate nights
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const dIn = new Date(checkIn);
    const dOut = new Date(checkOut);
    const diff = (dOut.getTime() - dIn.getTime()) / (1000 * 3600 * 24);
    return diff > 0 ? Math.round(diff) : 0;
  }, [checkIn, checkOut]);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setUrl(
      whatsappUrl(
        buildReservationWhatsAppMessage({
          name: f.name,
          phone: f.phone,
          email: f.email,
          address: f.address,
          checkIn: f.checkIn,
          checkOut: f.checkOut,
          nights: nights > 0 ? nights : undefined,
          guests: `${f.adults} adult(s), ${f.children} child(ren)`,
          room: f.room,
          message: f.message,
        })
      )
    );
  }

  const labelClass = "block text-xs font-semibold uppercase tracking-wider text-forest/90 mb-1.5";

  return (
    <form
      id={formId}
      onSubmit={submit}
      onChange={() => setUrl(null)}
      className="card overflow-hidden p-6 md:p-8"
    >
      <div className="border-b border-line pb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-deep">
          <Sparkles size={13} /> Direct Reservation Enquiry
        </span>
        <h2 className="mt-3 font-serif text-3xl text-forest">Reserve Your Stay</h2>
        <p className="mt-1 text-sm text-ink/70">
          Choose from our 17 rooms (Executive, Deluxe, or Standard). Enquiries are sent directly to WhatsApp for rapid confirmation.
        </p>
      </div>

      <div className="space-y-8 pt-6">
        {/* Step 1: Personal Info */}
        <fieldset className="space-y-4">
          <legend className="flex items-center gap-2 font-serif text-xl text-forest">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-forest-dark">
              1
            </span>
            Personal Information
          </legend>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name *
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Kwame Mensah"
                  autoComplete="name"
                  className="field field-with-icon"
                />
                <User size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/40" />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone / WhatsApp Number *
              </label>
              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  defaultValue="+233 "
                  placeholder="+233 XX XXX XXXX"
                  autoComplete="tel"
                  className="field field-with-icon"
                />
                <Phone size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/40" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address (Optional)
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="kwame@example.com"
                  autoComplete="email"
                  className="field field-with-icon"
                />
                <Mail size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/40" />
              </div>
            </div>

            <div>
              <label htmlFor="address" className={labelClass}>
                Residential Town / City (Optional)
              </label>
              <div className="relative">
                <input
                  id="address"
                  name="address"
                  placeholder="e.g. Accra, Winneba, Swedru"
                  className="field field-with-icon"
                />
                <MapPin size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/40" />
              </div>
            </div>
          </div>
        </fieldset>

        {/* Step 2: Stay Details */}
        <fieldset className="space-y-4 border-t border-line pt-6">
          <legend className="flex items-center gap-2 font-serif text-xl text-forest">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-forest-dark">
              2
            </span>
            Stay Details &amp; Room Category
          </legend>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="checkIn" className={labelClass}>
                Check-in Date *
              </label>
              <div className="relative">
                <input
                  id="checkIn"
                  name="checkIn"
                  type="date"
                  min={today}
                  required
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    if (checkOut && e.target.value > checkOut) {
                      setCheckOut("");
                    }
                  }}
                  className="field field-with-icon"
                />
                <Calendar size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/40" />
              </div>
            </div>

            <div>
              <label htmlFor="checkOut" className={labelClass}>
                Check-out Date *
              </label>
              <div className="relative">
                <input
                  id="checkOut"
                  name="checkOut"
                  type="date"
                  min={checkIn || today}
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="field field-with-icon"
                />
                <Calendar size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/40" />
              </div>
            </div>

            <div>
              <label htmlFor="adults" className={labelClass}>
                Adults
              </label>
              <div className="relative">
                <select id="adults" name="adults" defaultValue="1" className="field field-with-icon">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Adult" : "Adults"}
                    </option>
                  ))}
                </select>
                <Users size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/40" />
              </div>
            </div>

            <div>
              <label htmlFor="children" className={labelClass}>
                Children
              </label>
              <div className="relative">
                <select id="children" name="children" defaultValue="0" className="field field-with-icon">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Child" : "Children"}
                    </option>
                  ))}
                </select>
                <Users size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/40" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="room" className={labelClass}>
                Preferred Room Category
              </label>
              <div className="relative">
                <select
                  id="room"
                  name="room"
                  value={selectedRoomTitle}
                  onChange={(e) => setSelectedRoomTitle(e.target.value)}
                  className="field field-with-icon"
                >
                  <option value="">No preference (Assist me on WhatsApp)</option>
                  {rooms.map((r) => (
                    <option key={r.id} value={r.title}>
                      {r.title} — ({r.coolingType}, {r.specs.bedType})
                    </option>
                  ))}
                </select>
                <BedDouble size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/40" />
              </div>
            </div>
          </div>

          {/* Stay Duration Preview Box */}
          {nights > 0 && (
            <div className="mt-4 rounded-xl border border-gold/40 bg-gold/10 p-4 transition-all">
              <div className="flex items-center justify-between border-b border-gold/30 pb-2">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest">
                  <Clock size={15} className="text-gold-deep" /> Stay Duration
                </span>
                <span className="rounded-full bg-forest px-3 py-1 text-xs font-semibold text-gold">
                  {nights} {nights === 1 ? "Night" : "Nights"}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-sm text-ink/80">
                <div>
                  <p className="font-semibold text-forest">
                    {selectedRoomObj ? selectedRoomObj.title : "Room Category to be advised"}
                  </p>
                  <p className="text-xs text-ink/65">
                    {selectedRoomObj
                      ? `${selectedRoomObj.coolingType} • ${selectedRoomObj.specs.bedType}`
                      : "We will help you pick the best room for your stay"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block rounded-md bg-white/80 px-2.5 py-1 text-xs font-medium text-forest border border-line">
                    Rates confirmed on WhatsApp
                  </span>
                </div>
              </div>
              <p className="mt-2.5 flex items-center gap-1.5 text-[11px] text-ink/65">
                <Info size={12} className="shrink-0 text-gold-deep" />
                Your dates and room selection will be forwarded directly to the lodge team for current pricing and confirmation.
              </p>
            </div>
          )}
        </fieldset>

        {/* Step 3: Special Requests */}
        <fieldset className="space-y-4 border-t border-line pt-6">
          <legend className="flex items-center gap-2 font-serif text-xl text-forest">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-forest-dark">
              3
            </span>
            Special Requests &amp; Notes
          </legend>

          <div>
            <label htmlFor="message" className={labelClass}>
              Notes, Conference Needs, Laundry or Special Occasions (Optional)
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Let us know if you require conference room setup (30-40 people), laundry services, event center booking, or late check-in..."
                className="field field-textarea-with-icon"
              />
              <FileText size={18} className="pointer-events-none absolute left-3.5 top-3.5 text-forest/40" />
            </div>
          </div>

          <label className="flex items-start gap-3 rounded-xl bg-tint/60 p-3 text-xs text-ink/75 cursor-pointer">
            <input
              type="checkbox"
              name="terms"
              required
              className="mt-0.5 h-4 w-4 rounded border-line text-forest focus:ring-gold"
            />
            <span>
              I understand this enquiry will be processed directly with Royal Solwezi Lodge on WhatsApp to confirm room availability and current rates.
            </span>
          </label>
        </fieldset>

        {/* Action button */}
        {!url ? (
          <button
            type="submit"
            className="btn btn-gold w-full py-3.5 text-base shadow-lg shadow-gold/20"
          >
            <MessageCircle size={18} />
            Review &amp; Send on WhatsApp {nights > 0 ? `(${nights} ${nights === 1 ? "Night" : "Nights"})` : ""}
          </button>
        ) : (
          <div role="status" className="rounded-2xl border border-gold/40 bg-tint p-5 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest text-gold">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="mt-3 font-serif text-xl text-forest">Your Request is Ready!</h3>
            <p className="mt-1 text-sm text-ink/70">
              Click below to send your structured enquiry to the front desk team on WhatsApp.
            </p>
            {hasWhatsApp() ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold mt-4 w-full py-3.5 text-base shadow-lg shadow-gold/20"
              >
                <MessageCircle size={18} />
                Open in WhatsApp Now
              </a>
            ) : (
              <p className="mt-3 text-sm text-red-700">WhatsApp number is not configured.</p>
            )}
            <p className="mt-3 text-xs text-ink/50">
              Typical response time: within 15 to 30 minutes during operating hours.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
