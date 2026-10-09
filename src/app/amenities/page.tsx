import SafeImage from "@/components/SafeImage";
import { pageMeta } from "@/lib/metadata";
import { amenities } from "@/data/amenities";
import { PageHero, Section } from "@/components/Section";
import ServicesSection from "@/components/ServicesSection";
export const metadata = pageMeta("Services & Facilities", "Accommodation, breakfast, dining, events, conferences and facilities at Royal Solwezi Lodge, Agona Swedru, Ghana.", "/amenities");
export default function Amenities() {
  return (<><PageHero title="Services & Facilities" intro="Everything you need for a comfortable stay, a good meal or a successful gathering." /><ServicesSection /><Section title="Around the Lodge"><div className="grid items-start gap-6 md:grid-cols-2">{amenities.map((a) => (
    <article key={a.name} className="card overflow-hidden">{a.image && <div className="relative aspect-[4/3]"><SafeImage src={a.image} alt={a.name} sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>}
      <div className="p-5"><h2 className="font-serif text-2xl">{a.name}</h2>{a.description && <p className="mt-1">{a.description}</p>}</div></article>))}</div></Section></>);
}
