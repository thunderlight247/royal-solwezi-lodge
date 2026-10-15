import Link from "next/link";
import { ShieldCheck, HeartHandshake, UtensilsCrossed, Sparkles, MapPin, ArrowRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { pageMeta } from "@/lib/metadata";
import { business } from "@/data/business";
import { media } from "@/data/media";
import { PageHero } from "@/components/Section";

export const metadata = pageMeta(
  "About Royal Solwezi Lodge",
  "Discover Royal Solwezi Lodge in Agona Swedru, Central Region, Ghana — serene accommodation, outdoor pavilion dining, and genuine hospitality.",
  "/about"
);

const values = [
  {
    icon: HeartHandshake,
    title: "Warm Hospitality",
    description: "Personal, attentive service rooted in authentic Ghanaian warmth, ensuring every guest feels welcomed and cared for.",
  },
  {
    icon: ShieldCheck,
    title: "Peace of Mind",
    description: "A secure, walled compound with on-site parking and 24/7 guest support for quiet nights and undisturbed rest.",
  },
  {
    icon: UtensilsCrossed,
    title: "Flavors & Dining",
    description: "From morning breakfast to charcoal-grilled tilapia and evening cocktails at our open-air pavilion.",
  },
  {
    icon: Sparkles,
    title: "Versatile Gatherings",
    description: "Flexible spaces designed to host everything from business conferences to family celebrations and weddings.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        tag="Our Story"
        title="Welcome to Royal Solwezi Lodge"
        intro="A tranquil retreat for travelers, families, and business visitors in the vibrant heart of Agona Swedru."
      />

      {/* Main Narrative with Image */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">Our Essence</p>
              <h2 className="mt-2 font-serif text-3xl text-forest sm:text-4xl">
                Serenity, Comfort, and Authentic Character
              </h2>
            </div>
            <p className="leading-relaxed text-ink/75">
              Situated near the Ekwamkrom Police Barrier in Agona Swedru, <strong className="text-forest">{business.name}</strong> was created to give travelers and locals a dedicated destination to unwind, dine, celebrate, and stay in total comfort.
            </p>
            <p className="leading-relaxed text-ink/75">
              Whether you are passing through the Central Region for work, attending a celebration, or seeking a quiet weekend escape from Accra or Winneba, our lodge combines well-furnished guest rooms with inviting open-air spaces.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-forest">
              <MapPin size={17} className="text-gold" />
              <span>{business.location.street}, {business.location.city}, {business.location.region}</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <SafeImage
              src={media.pavilion}
              alt="Outdoor pavilion at Royal Solwezi Lodge"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="font-serif text-xl font-semibold">The Pavilion Experience</p>
              <p className="mt-1 text-xs text-white/80">Fresh breezes, charcoal grills, and cold beverages under the open sky.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Hospitality */}
      <section className="border-y border-line bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">What Sets Us Apart</p>
            <h2 className="mt-2 font-serif text-3xl text-forest sm:text-4xl">The Pillars of Our Lodge</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-tint text-gold-deep">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-forest">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl text-white sm:text-4xl">Experience Royal Solwezi Lodge</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            From our quiet suites to our flavorful pavilion dishes, we look forward to making your visit pleasant and memorable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn btn-gold">
              Book a Room
            </Link>
            <Link href="/menu" className="btn btn-line">
              Explore Our Menu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
