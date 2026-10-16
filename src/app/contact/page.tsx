import { Phone, Mail, MapPin, MessageCircle, Clock, Navigation } from "lucide-react";
import { pageMeta } from "@/lib/metadata";
import { business } from "@/data/business";
import { PageHero } from "@/components/Section";
import { whatsappUrl, hasWhatsApp } from "@/lib/whatsapp";
import BookingForm from "@/components/BookingForm";

export const metadata = pageMeta(
  "Contact & Reservations",
  "Contact Royal Solwezi Lodge in Agona Swedru, Central Region, Ghana. Reach our front desk by phone, email, or instant WhatsApp.",
  "/contact"
);

export default function ContactPage() {
  const l = business.location;

  return (
    <>
      <PageHero
        tag="Get In Touch"
        title="Contact Us"
        intro="Have questions about availability, pavilion reservations, or events? Reach out to our front desk team."
      />

      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Contact Method Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* WhatsApp Card */}
          <div className="card flex flex-col justify-between p-6 transition-all hover:border-gold/50 hover:shadow-md">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/15 text-green-700">
                <MessageCircle size={22} />
              </span>
              <h3 className="mt-4 font-serif text-xl text-forest">WhatsApp</h3>
              <p className="mt-1 text-xs text-ink/65">Fastest reply for bookings and enquiries</p>
            </div>
            {hasWhatsApp() && (
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-sm mt-5 w-full text-xs"
              >
                Chat on WhatsApp
              </a>
            )}
          </div>

          {/* Phone Card */}
          <div className="card flex flex-col justify-between p-6 transition-all hover:border-gold/50 hover:shadow-md">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/20 text-forest">
                <Phone size={22} />
              </span>
              <h3 className="mt-4 font-serif text-xl text-forest">Phone</h3>
              <p className="mt-1 text-xs text-ink/65">Speak directly to the front desk</p>
              <div className="mt-3 space-y-1 text-sm font-semibold text-forest">
                {business.phone && (
                  <p>
                    <a href={`tel:${business.phone}`} className="hover:text-gold-deep">
                      {business.phone}
                    </a>
                  </p>
                )}
                {business.backupPhone && business.backupPhone !== business.phone && (
                  <p>
                    <a href={`tel:${business.backupPhone}`} className="hover:text-gold-deep">
                      {business.backupPhone}
                    </a>
                  </p>
                )}
              </div>
            </div>
            <a
              href={`tel:${business.phone || business.backupPhone}`}
              className="btn btn-outline btn-sm mt-5 w-full text-xs"
            >
              Call Front Desk
            </a>
          </div>

          {/* Email Card */}
          <div className="card flex flex-col justify-between p-6 transition-all hover:border-gold/50 hover:shadow-md">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-gold-deep">
                <Mail size={22} />
              </span>
              <h3 className="mt-4 font-serif text-xl text-forest">Email</h3>
              <p className="mt-1 text-xs text-ink/65">For corporate, conference &amp; event bookings</p>
              <p className="mt-3 truncate text-xs font-semibold text-forest">
                <a href={`mailto:${business.email}`} className="hover:text-gold-deep">
                  {business.email}
                </a>
              </p>
            </div>
            <a
              href={`mailto:${business.email}`}
              className="btn btn-outline btn-sm mt-5 w-full text-xs"
            >
              Send Email
            </a>
          </div>

          {/* Location Card */}
          <div className="card flex flex-col justify-between p-6 transition-all hover:border-gold/50 hover:shadow-md">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-gold-deep">
                <MapPin size={22} />
              </span>
              <h3 className="mt-4 font-serif text-xl text-forest">Location</h3>
              <p className="mt-1 text-xs text-ink/65">
                {l.street}, {l.city}, {l.region}
              </p>
              <p className="mt-2 text-xs text-ink/50 flex items-center gap-1.5">
                <Clock size={12} className="text-gold" /> Open 7 Days / Week
              </p>
            </div>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm mt-5 w-full text-xs"
            >
              <Navigation size={13} /> View on Map
            </a>
          </div>
        </div>

        {/* Booking & Enquiry Form */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          {/* Map Preview Sidebar */}
          <div className="space-y-6">
            <div className="card overflow-hidden p-0 shadow-sm">
              <iframe
                title="Map of Royal Solwezi Lodge"
                src={business.googleMapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
              <div className="p-5">
                <h4 className="font-serif text-lg text-forest">{business.name}</h4>
                <p className="mt-1 text-xs text-ink/70">
                  Near Ekwamkrom Police Barrier, Agona Swedru, Central Region, Ghana
                </p>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm mt-4 w-full text-xs"
                >
                  <Navigation size={13} /> Get Driving Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
