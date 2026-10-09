import { MapPin, Navigation } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { business } from "@/data/business";
const driveTimes: { from: string; time: string }[] = []; // TODO: add verified drive times (e.g. from Accra, Winneba)
export default function LocationSection() {
  const l = business.location;
  return (
    <section className="mx-auto max-w-6xl px-4 py-14"><SectionHeader tag="Find Us" title="Location & Directions" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <p className="flex items-start gap-2 text-forest"><MapPin className="mt-1 shrink-0 text-gold" size={18} /> <span>{business.name}<br />{l.street}, {l.city}<br />{l.region}, {l.country}</span></p>
          {driveTimes.length > 0 && <ul className="mt-4 space-y-1 text-sm">{driveTimes.map((d) => <li key={d.from}>From {d.from}: {d.time}</li>)}</ul>}
          <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-6"><Navigation size={16} /> Get Directions</a>
        </div>
        <iframe title="Map showing Royal Solwezi Lodge" src={business.googleMapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full rounded-2xl border border-line" />
      </div></section>);
}
