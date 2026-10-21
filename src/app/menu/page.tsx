import Link from "next/link";
import { MessageCircle, Utensils } from "lucide-react";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/Section";
import { whatsappUrl } from "@/lib/whatsapp";
// import MenuSection from "@/components/MenuSection"; // Commented out until food photography and dish lists are finalized

export const metadata = pageMeta(
  "Kitchen & Bar",
  "Fresh meals and drinks at Royal Solwezi Lodge, Agona Swedru. Inquire via WhatsApp.",
  "/menu"
);

export default function Menu() {
  return (
    <>
      <PageHero
        tag="Lodge Dining"
        title="Kitchen &amp; Bar"
        intro="Our on-site kitchen and licensed bar prepare delicious meals, grills, and chilled drinks for lodge guests and visitors."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <div className="card mx-auto max-w-xl p-8 border border-line">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-tint text-gold shadow-sm">
            <Utensils size={28} />
          </span>
          <h2 className="mt-4 font-serif text-2xl text-forest">Daily Kitchen &amp; Bar Service</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            Our kitchen and bar are fully active. For today&apos;s available local specials, charcoal grills, and cold beverages, please reach out to our team on WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl("Hello Royal Solwezi Lodge, I would like to enquire about what meals and drinks are available today.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-sm"
            >
              <MessageCircle size={16} /> Enquire on WhatsApp
            </a>
            <Link href="/rooms" className="btn btn-outline text-sm">
              Explore Rooms
            </Link>
          </div>
        </div>

        {/* 
          MenuSection component is preserved below for future updates when food photos are ready:
          <MenuSection />
        */}
      </section>
    </>
  );
}
