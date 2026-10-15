import SafeImage from "@/components/SafeImage";
import { pageMeta } from "@/lib/metadata";
import { amenities } from "@/data/amenities";
import { PageHero, Section } from "@/components/Section";
import ServicesSection from "@/components/ServicesSection";
import { getIcon } from "@/components/icons";

export const metadata = pageMeta(
  "Services & Facilities",
  "Accommodation, breakfast, dining, events, conferences and facilities at Royal Solwezi Lodge, Agona Swedru, Ghana.",
  "/amenities"
);

export default function Amenities() {
  return (
    <>
      <PageHero
        tag="Lodge Experience"
        title="Services &amp; Facilities"
        intro="Everything you need for a restful stay, an open-air meal, or a productive business gathering."
      />

      <ServicesSection />

      <Section title="Around the Grounds">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a) => {
            const Icon = getIcon(a.iconName);
            return (
              <article
                key={a.name}
                className="card group flex flex-col overflow-hidden transition-all duration-300 hover:border-gold/40 hover:shadow-lg"
              >
                {a.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-tint">
                    <SafeImage
                      src={a.image}
                      alt={a.name}
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-gold backdrop-blur-sm">
                      <Icon size={18} />
                    </span>
                  </div>
                ) : (
                  <div className="flex h-36 items-center justify-center bg-tint/80 border-b border-line">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-gold shadow-sm ring-1 ring-gold/20">
                      <Icon size={28} />
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl text-forest">{a.name}</h3>
                  {a.description && (
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {a.description}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
