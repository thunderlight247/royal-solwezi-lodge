import { pageMeta } from "@/lib/metadata";
import { business } from "@/data/business";
import { PageHero, Section } from "@/components/Section";
export const metadata = pageMeta("About Royal Solwezi Lodge", "About Royal Solwezi Lodge, a lodge on the Ekwamkrom Police Barrier in Agona Swedru, Central Region, Ghana.", "/about");
export default function About() {
  return (<><PageHero title="About the Lodge" /><Section><div className="max-w-2xl space-y-4 text-lg leading-relaxed">
    <p>{business.name} welcomes guests to {business.location.city} in Ghana&apos;s {business.location.region}, close to the {business.location.street}.</p>
    <p>The lodge offers comfortable rooms, a reception and lounge, and relaxed outdoor spaces within a secure compound.</p>
    {/* TODO: add history/philosophy once supplied by the client */}
  </div></Section></>);
}
