import { pageMeta } from "@/lib/metadata";
import MenuSection from "@/components/MenuSection";
import { PageHero } from "@/components/Section";
export const metadata = pageMeta("Pavilion Menu: Food & Drinks", "Local Ghanaian dishes, grill and BBQ, bar cocktails and breakfast at Royal Solwezi Lodge, Agona Swedru. Order via WhatsApp.", "/menu");
export default function Menu() { return (<><PageHero tag="Restaurant" title="Pavilion Menu" /><MenuSection /></>); }
