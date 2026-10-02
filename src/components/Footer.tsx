import Link from "next/link";
import { business, nav } from "@/data/business";
export default function Footer() {
  const l = business.location;
  return (
    <footer className="bg-forest-dark text-white/85">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-gold">{business.name}</p>
          <p className="mt-2 text-sm">{l.street}<br />{l.city}, {l.region}<br />{l.country}</p>
        </div>
        <nav aria-label="Footer"><p className="font-semibold text-white">Explore</p>
          <ul className="mt-2 space-y-1 text-sm">{nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-gold">{n.label}</Link></li>)}</ul>
        </nav>
        <div className="text-sm"><p className="font-semibold text-white">Contact</p>
          <ul className="mt-2 space-y-1">
            {business.phone && <li><a href={`tel:${business.phone}`}>{business.phone}</a></li>}
            {business.backupPhone && <li><a href={`tel:${business.backupPhone}`}>{business.backupPhone}</a></li>}
            {business.email && <li><a href={`mailto:${business.email}`}>{business.email}</a></li>}
            <li><Link href="/contact" className="hover:text-gold">Enquire on WhatsApp</Link></li>
            <li><a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Open in Google Maps</a></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {business.name}, {l.city}, Ghana.</p>
    </footer>
  );
}
