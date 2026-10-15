import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { business, nav } from "@/data/business";

export default function Footer() {
  const l = business.location;
  return (
    <footer className="relative overflow-hidden bg-forest-dark text-white/80">
      {/* Subtle decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="" width={44} height={42} className="h-10 w-auto rounded-lg opacity-90" />
              <p className="font-serif text-2xl text-gold">{business.name}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {business.tagline}. A welcoming lodge &amp; restaurant compound in Agona Swedru, Ghana.
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold/70" />
              <span>{l.street}, {l.city}<br />{l.region}, {l.country}</span>
            </p>
          </div>

          {/* Navigation column */}
          <nav aria-label="Footer">
            <p className="font-semibold uppercase tracking-wider text-white/50 text-xs mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="group flex items-center gap-1.5 transition-colors hover:text-gold"
                  >
                    <span className="h-px w-3 bg-gold/40 transition-all duration-200 group-hover:w-5 group-hover:bg-gold" />
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div className="text-sm">
            <p className="font-semibold uppercase tracking-wider text-white/50 text-xs mb-4">Get in Touch</p>
            <ul className="space-y-3">
              {business.phone && (
                <li>
                  <a href={`tel:${business.phone}`} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                    <Phone size={15} className="shrink-0 text-gold/70" /> {business.phone}
                  </a>
                </li>
              )}
              {business.backupPhone && (
                <li>
                  <a href={`tel:${business.backupPhone}`} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                    <Phone size={15} className="shrink-0 text-gold/70" /> {business.backupPhone}
                  </a>
                </li>
              )}
              {business.email && (
                <li>
                  <a href={`mailto:${business.email}`} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                    <Mail size={15} className="shrink-0 text-gold/70" /> {business.email}
                  </a>
                </li>
              )}
              <li>
                <Link href="/contact" className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <MessageCircle size={15} className="shrink-0 text-gold/70" /> Chat on WhatsApp
                </Link>
              </li>
              <li>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <ExternalLink size={15} className="shrink-0 text-gold/70" /> Open in Google Maps
                </a>
              </li>
            </ul>

            {/* Book CTA */}
            <div className="mt-6">
              <Link href="/book" className="btn btn-gold btn-sm">
                Reserve a Room
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/35">
          © {new Date().getFullYear()} {business.name}, {l.city}, Ghana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
