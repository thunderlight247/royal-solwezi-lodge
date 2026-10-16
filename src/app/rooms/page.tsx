import { pageMeta } from "@/lib/metadata";
import RoomsSection from "@/components/RoomsSection";
import { PageHero } from "@/components/Section";

export const metadata = pageMeta(
  "17 Rooms & Suites in Agona Swedru",
  "Executive, Luxury and Standard rooms at Royal Solwezi Lodge, Agona Swedru, Central Region, Ghana. 17 rooms total. Book via WhatsApp.",
  "/rooms"
);

export default function Rooms() {
  return (
    <>
      <PageHero
        tag="17 Guest Rooms"
        title="Rooms &amp; Suites"
        intro="Seventeen comfortable rooms categorized into Executive, Luxury (both air-conditioned), and Standard (fan-cooled) accommodations for peaceful rest in Agona Swedru."
      />
      <RoomsSection />
    </>
  );
}
