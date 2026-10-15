import Link from "next/link";
import { ArrowRight, BedDouble, Utensils, Shield, MessageCircle } from "lucide-react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import RoomsSection from "@/components/RoomsSection";
import MenuSection from "@/components/MenuSection";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import SafeImage from "@/components/SafeImage";
import { media } from "@/data/media";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <RoomsSection />
      <MenuSection />

      {/* About the Lodge Featurette */}
      <section className="border-y border-line bg-white px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">
              About the Lodge
            </span>
            <h2 className="mt-2 font-serif text-3xl text-forest sm:text-4xl leading-tight">
              A Welcoming Sanctuary in Agona Swedru
            </h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Royal Solwezi Lodge brings together comfortable, well-appointed suites, breezy outdoor spaces, and delightful dining within a secure, gated compound near the Ekwamkrom Police Barrier.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-cream p-3 text-center border border-line">
                <BedDouble size={20} className="mx-auto text-gold" />
                <p className="mt-1 text-xs font-semibold text-forest">Air-Con Suites</p>
              </div>
              <div className="rounded-xl bg-cream p-3 text-center border border-line">
                <Utensils size={20} className="mx-auto text-gold" />
                <p className="mt-1 text-xs font-semibold text-forest">Pavilion Dining</p>
              </div>
              <div className="rounded-xl bg-cream p-3 text-center border border-line">
                <Shield size={20} className="mx-auto text-gold" />
                <p className="mt-1 text-xs font-semibold text-forest">Gated Security</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-semibold text-forest transition-colors hover:text-gold-deep"
              >
                Learn more about our lodge <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <SafeImage
              src={media.gazebo}
              alt="Serene garden gazebo at Royal Solwezi Lodge"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-serif text-lg font-semibold">Garden Gazebo &amp; Greenery</p>
              <p className="text-xs text-white/80">Quiet spots to relax, read, and converse.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <LocationSection />
      <FaqSection />

      {/* Bottom CTA Banner */}
      <section className="relative overflow-hidden bg-forest-dark px-4 py-16 text-center text-white md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fdb413' fill-opacity='1'%3E%3Cpath d='M20 20l10-10v20L20 20zm-10-10l10 10L10 30V10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Ready to Visit?</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-white">
            Planning Your Stay in Agona Swedru?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/80">
            Send us your preferred dates or order from the pavilion menu. Our team replies promptly on WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/book" className="btn btn-gold shadow-lg shadow-gold/20">
              Check Availability &amp; Book
            </Link>
            <a
              href={whatsappUrl("Hello Royal Solwezi Lodge, I would like to enquire about availability.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line"
            >
              <MessageCircle size={16} /> Direct WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
