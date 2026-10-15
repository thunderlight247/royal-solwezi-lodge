import { pageMeta } from "@/lib/metadata";
import GalleryGrid from "@/components/GalleryGrid";
import { PageHero, Section } from "@/components/Section";

export const metadata = pageMeta(
  "Photo Gallery",
  "Photos of Royal Solwezi Lodge in Agona Swedru: rooms, reception, gazebo, pavilion and compound.",
  "/gallery"
);

export default function Gallery() {
  return (
    <>
      <PageHero
        tag="Visual Tour"
        title="Photo Gallery"
        intro="Explore our guest suites, open-air dining pavilion, manicured gardens, and event facilities in Agona Swedru."
      />
      <Section>
        <GalleryGrid />
      </Section>
    </>
  );
}
