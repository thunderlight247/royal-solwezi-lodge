import { pageMeta } from "@/lib/metadata";
import { business } from "@/data/business";
import { PageHero, Section } from "@/components/Section";
export const metadata = pageMeta("Location & Directions", "Find Royal Solwezi Lodge at the Ekwamkrom Police Barrier, Agona Swedru, Central Region, Ghana, and get directions on Google Maps.", "/location");
export default function Location() {
  const l = business.location;
  return (<><PageHero title="Location & Directions" /><Section>
    <address className="not-italic text-lg">{business.name}<br />{l.street}<br />{l.city}, {l.region}, {l.country}</address>
    <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-green mt-4">Get Directions on Google Maps</a>
    <iframe title="Map showing Royal Solwezi Lodge" src={business.googleMapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-8 h-96 w-full rounded-2xl border-0" />
  </Section></>);
}
