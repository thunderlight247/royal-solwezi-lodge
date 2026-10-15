import { MapPin, Navigation, Car, ShieldCheck, MessageCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { business } from "@/data/business";
import { whatsappUrl } from "@/lib/whatsapp";

export default function LocationSection() {
  const l = business.location;
  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="location">
      <SectionHeader
        tag="Find Us"
        title="Location &amp; Directions"
        intro="Conveniently situated in Agona Swedru with secure compound parking for all guests."
      />
      <div className="grid gap-8 lg:grid-cols-5 lg:items-stretch">
        {/* Info card (2 cols on lg) */}
        <div className="card flex flex-col justify-between p-6 sm:p-8 lg:col-span-2">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-deep">Our Address</span>
              <h3 className="mt-1 font-serif text-2xl text-forest">{business.name}</h3>
              <p className="mt-2 flex items-start gap-2.5 text-sm leading-relaxed text-ink/80">
                <MapPin className="mt-1 shrink-0 text-gold" size={18} />
                <span>
                  {l.street}
                  <br />
                  {l.city}, {l.region}
                  <br />
                  {l.country}
                </span>
              </p>
            </div>

            <div className="space-y-3 rounded-xl bg-tint/60 p-4 text-xs text-ink/75">
              <div className="flex items-center gap-2 font-semibold text-forest">
                <Car size={15} className="text-gold" />
                <span>Landmark &amp; Arrival</span>
              </div>
              <p>
                Located along the main road near the <strong>Ekwamkrom Police Barrier</strong>. Easy access for taxis, private vehicles, and ride-hails.
              </p>
              <div className="flex items-center gap-2 pt-1 font-semibold text-forest">
                <ShieldCheck size={15} className="text-gold" />
                <span>Free On-Site Gated Parking</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold flex-1 text-xs"
            >
              <Navigation size={15} /> Google Maps
            </a>
            <a
              href={whatsappUrl("Hello, please share the exact pin location for Royal Solwezi Lodge.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex-1 text-xs"
            >
              <MessageCircle size={15} /> Request Pin
            </a>
          </div>
        </div>

        {/* Map iframe (3 cols on lg) */}
        <div className="relative overflow-hidden rounded-2xl border border-line shadow-sm min-h-[360px] lg:col-span-3">
          <iframe
            title="Map showing Royal Solwezi Lodge in Agona Swedru"
            src={business.googleMapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 min-h-[360px]"
          />
        </div>
      </div>
    </section>
  );
}
