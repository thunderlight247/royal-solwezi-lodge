import { pageMeta } from "@/lib/metadata";
import RoomsSection from "@/components/RoomsSection";
import { PageHero } from "@/components/Section";

export const metadata = pageMeta(
  "Rooms & Suites in Agona Swedru",
  "Rooms and suites at Royal Solwezi Lodge, Agona Swedru, Central Region, Ghana. Book via WhatsApp.",
  "/rooms"
);

export default function Rooms() {
  return (
    <>
      <PageHero
        tag="Accommodation"
        title="Rooms &amp; Suites"
        intro="Thoughtfully furnished rooms and suites designed for peaceful rest, complete with air conditioning, satellite TV, and attentive room service."
      />
      <RoomsSection />
    </>
  );
}
