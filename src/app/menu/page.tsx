import { pageMeta } from "@/lib/metadata";
import MenuSection from "@/components/MenuSection";
import { PageHero } from "@/components/Section";

export const metadata = pageMeta(
  "Pavilion Menu: Ghanaian Food & Drinks",
  "Authentic Ghanaian dishes, charcoal grills, tilapia, chichinga, sobolo, palm wine, and breakfast at Royal Solwezi Lodge, Agona Swedru. Order via WhatsApp.",
  "/menu"
);

export default function Menu() {
  return (
    <>
      <PageHero
        tag="Pavilion Kitchen &amp; Bar"
        title="Ghanaian Food &amp; Drinks Menu"
        intro="Authentic Ghanaian dishes, sizzling charcoal-grilled tilapia and chichinga, refreshing local sobolo and palm wine, and hearty breakfast favorites served in our breezy open-air pavilion."
      />
      <MenuSection />
    </>
  );
}
