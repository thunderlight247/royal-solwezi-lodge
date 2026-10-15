import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/Section";
import LocationSection from "@/components/LocationSection";

export const metadata = pageMeta(
  "Location & Directions",
  "Find Royal Solwezi Lodge at the Ekwamkrom Police Barrier, Agona Swedru, Central Region, Ghana, and get directions on Google Maps.",
  "/location"
);

export default function LocationPage() {
  return (
    <>
      <PageHero
        tag="Getting Here"
        title="Location &amp; Directions"
        intro="Conveniently situated near the Ekwamkrom Police Barrier in Agona Swedru with ample gated parking."
      />
      <LocationSection />
    </>
  );
}
