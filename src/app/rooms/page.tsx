import { pageMeta } from "@/lib/metadata";
import { rooms } from "@/data/rooms";
import RoomCard from "@/components/RoomCard";
import { PageHero, Section } from "@/components/Section";
export const metadata = pageMeta("Rooms & Accommodation in Agona Swedru", "Guest rooms at Royal Solwezi Lodge, Agona Swedru, Central Region, Ghana. Enquire on WhatsApp for rates and availability.", "/rooms");
export default function Rooms() {
  return (<><PageHero title="Rooms & Accommodation" intro="Rates and availability are confirmed with the lodge when you enquire." />
    <Section><div className="space-y-6">{rooms.map((r) => <RoomCard key={r.slug} room={r} />)}</div></Section></>);
}
