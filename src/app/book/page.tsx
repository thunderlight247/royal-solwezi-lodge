import { Phone, MessageCircle, Crown, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { pageMeta } from "@/lib/metadata";
import { business } from "@/data/business";
import BookingForm from "@/components/BookingForm";
import { PageHero } from "@/components/Section";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata = pageMeta(
  "Book Your Stay",
  "Send a booking request to Royal Solwezi Lodge in Agona Swedru, Ghana. Your request is prepared for WhatsApp.",
  "/book"
);

export default async function Book({ searchParams }: { searchParams: Promise<{ room?: string }> }) {
  const { room } = await searchParams;

  return (
    <>
      <PageHero
        tag="Reservations"
        title="Book Your Stay"
        intro="Send us your preferred dates and room choice. We reply swiftly via WhatsApp to confirm availability and payment details."
      />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BookingForm defaultRoom={room ?? ""} />
        </div>

        <aside className="space-y-6">
          {/* Quick Support Card */}
          <div className="card p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-deep">Front Desk</span>
            <h3 className="mt-1 font-serif text-2xl text-forest">Need Help?</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Prefer speaking with a reservations representative right away? Reach our team directly:
            </p>

            <div className="mt-5 space-y-3">
              {business.phone && (
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center gap-3 rounded-xl border border-line bg-cream/70 p-3 text-sm font-semibold text-forest transition-colors hover:border-gold hover:bg-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/20 text-forest">
                    <Phone size={16} />
                  </span>
                  <div>
                    <span className="block text-xs font-normal text-ink/50">Call Front Desk</span>
                    {business.phone}
                  </div>
                </a>
              )}

              {business.backupPhone && business.backupPhone !== business.phone && (
                <a
                  href={`tel:${business.backupPhone}`}
                  className="flex items-center gap-3 rounded-xl border border-line bg-cream/70 p-3 text-sm font-semibold text-forest transition-colors hover:border-gold hover:bg-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/20 text-forest">
                    <Phone size={16} />
                  </span>
                  <div>
                    <span className="block text-xs font-normal text-ink/50">Additional Line</span>
                    {business.backupPhone}
                  </div>
                </a>
              )}

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-line bg-cream/70 p-3 text-sm font-semibold text-forest transition-colors hover:border-gold hover:bg-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366]/20 text-green-700">
                  <MessageCircle size={16} />
                </span>
                <div>
                  <span className="block text-xs font-normal text-ink/50">Instant Message</span>
                  WhatsApp Chat
                </div>
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-xs text-ink/60">
              <Clock size={14} className="text-gold" />
              <span>Reception open 7 days a week</span>
            </div>
          </div>

          {/* Why Book Direct */}
          <div className="relative overflow-hidden rounded-2xl bg-forest p-6 text-white shadow-lg">
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gold/10 blur-xl"
              aria-hidden
            />
            <h3 className="flex items-center gap-2 font-serif text-xl text-white">
              <Crown size={19} className="text-gold" /> Why Book Direct?
            </h3>
            <p className="mt-2 text-xs text-white/70">
              Booking straight with Royal Solwezi Lodge guarantees the best hospitality experience:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/90">
              <li className="flex items-start gap-2.5">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>Direct access to current room availability &amp; rates</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>Direct custom requests &amp; flexible arrangements</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>Prompt one-on-one WhatsApp updates</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
