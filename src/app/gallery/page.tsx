import { pageMeta } from "@/lib/metadata";
import GalleryGrid from "@/components/GalleryGrid";
import { PageHero, Section } from "@/components/Section";

export const metadata = pageMeta(
  "Photo Gallery",
  "Photos of Royal Solwezi Lodge in Agona Swedru: 17 rooms, summer hut, conference hall, pavilion and compound.",
  "/gallery"
);

export default function Gallery() {
  return (
    <>
      <PageHero
        tag="Visual Tour"
        title="Photo Gallery"
        intro="Explore our 17 guest rooms, breezy summer hut, open-air pavilion bar and kitchen, conference hall, and secure compound in Agona Swedru."
      />
      <Section>
        <GalleryGrid />
      </Section>
    </>
  );
}
