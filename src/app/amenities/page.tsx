import Image from "next/image";
import { pageMeta } from "@/lib/metadata";
import { amenities } from "@/data/amenities";
import { PageHero, Section } from "@/components/Section";
export const metadata = pageMeta("Amenities & Facilities", "Air-conditioned rooms, secure parking, licensed bar and lounge, and housekeeping and laundry at Royal Solwezi Lodge, Agona Swedru, Ghana.", "/amenities");
export default function Amenities() {
  return (<><PageHero title="Amenities & Facilities" />
    <Section><div className="grid gap-8 md:grid-cols-2 items-start">{amenities.map((a) => (
      <article key={a.name}>{a.image && <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={a.image} alt={a.name} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>}
        <h2 className="mt-3 font-serif text-2xl text-forest">{a.name}</h2>{a.description && <p className="text-ink/80">{a.description}</p>}</article>))}</div></Section></>);
}
