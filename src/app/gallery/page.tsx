import { pageMeta } from "@/lib/metadata";
import GalleryGrid from "@/components/GalleryGrid";
import { PageHero, Section } from "@/components/Section";
export const metadata = pageMeta("Photo Gallery", "Photos of Royal Solwezi Lodge in Agona Swedru: rooms, reception, gazebo, pavilion and compound.", "/gallery");
export default function Gallery() { return (<><PageHero title="Gallery" /><Section><GalleryGrid /></Section></>); }
