import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  UtensilsCrossed,
  MapPin,
  ArrowRight,
  Sun,
  Presentation,
  Shirt,
  BedDouble,
} from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { pageMeta } from "@/lib/metadata";
import { business } from "@/data/business";
import { media } from "@/data/media";
import { PageHero } from "@/components/Section";

export const metadata = pageMeta(
  "About Royal Solwezi Lodge",
  "Discover Royal Solwezi Lodge in Agona Swedru, Central Region, Ghana — 17 rooms, outdoor summer hut, pavilion bar and kitchen, conference room for 30-40, and authentic hospitality.",
  "/about"
);

const values = [
  {
    icon: BedDouble,
    title: "17 Comfortable Rooms",
    description:
      "Seventeen guest rooms across Executive, Luxury (both air-conditioned), and Standard (fan-cooled) categories to suit every traveler.",
  },
  {
    icon: UtensilsCrossed,
    title: "Bar & Kitchen",
    description:
      "Authentic Ghanaian cuisine, seasoned charcoal grills, fresh tilapia, and cold drinks served in our breezy open-air pavilion.",
  },
  {
    icon: Presentation,
    title: "Conference for 30–40",
    description:
      "An air-conditioned conference room perfectly sized for 30 to 40 participants, corporate retreats, and community meetings.",
  },
  {
    icon: Sun,
    title: "Summer Hut Relaxation",
    description:
      "A peaceful open-air summer hut on the compound where guests can rest, converse, and take in the natural breeze.",
  },
  {
    icon: Shirt,
    title: "Laundry Services",
    description:
      "Dedicated guest laundry and iron-pressing facilities to keep your garments clean and crisp throughout your stay.",
  },
  {
    icon: ShieldCheck,
    title: "Gated Compound Security",
    description:
      "A fully walled and gated property with 24/7 security and safe on-site parking for all guests and event attendees.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        tag="Our Story &amp; Hospitality"
        title="Welcome to Royal Solwezi Lodge"
        intro="A tranquil haven offering 17 rooms, a relaxing summer hut, conference facilities for 30-40 people, and authentic Ghanaian dining in Agona Swedru."
      />

      {/* Main Narrative with Image */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">Our Essence</p>
              <h2 className="mt-2 font-serif text-3xl text-forest sm:text-4xl">
                Ghanaian Warmth, Peaceful Rest &amp; Versatile Facilities
              </h2>
            </div>
            <p className="leading-relaxed text-ink/75">
              Situated near the Ekwamkrom Police Barrier in Agona Swedru, <strong className="text-forest">{business.name}</strong> was established to provide travelers, local families, and corporate organizations with a welcoming, reliable destination.
            </p>
            <p className="leading-relaxed text-ink/75">
              With <strong>17 rooms in total</strong> — featuring air-conditioned Executive and Luxury rooms alongside fan-cooled Standard rooms — every guest finds quiet comfort. Our lodge also includes a fully licensed bar and kitchen, an open-air summer hut to unwind, a conference hall accommodating <strong>30 to 40 people</strong>, a vibrant event center, and on-site laundry services.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-forest">
              <MapPin size={17} className="text-gold" />
              <span>{business.location.street}, {business.location.city}, {business.location.region}</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <SafeImage
              src={media.summerHut}
              alt="Summer hut at Royal Solwezi Lodge"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="font-serif text-xl font-semibold">The Summer Hut &amp; Compound</p>
              <p className="mt-1 text-xs text-white/80">Rest in the shade, enjoy cool breezes, and experience genuine Ghanaian hospitality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Hospitality */}
      <section className="border-y border-line bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">Facilities &amp; Amenities</p>
            <h2 className="mt-2 font-serif text-3xl text-forest sm:text-4xl">What We Offer at Royal Solwezi Lodge</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            Whether for an overnight stay, a 30–40 person seminar, or a weekend meal at our pavilion, we look forward to hosting you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn btn-gold">
              Reserve Your Stay
            </Link>
            <Link href="/menu" className="btn btn-line">
              Explore Ghanaian Menu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
