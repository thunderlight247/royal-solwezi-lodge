import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import RoomsSection from "@/components/RoomsSection";
import MenuSection from "@/components/MenuSection";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
export default function Home() {
  return (<>
    <Hero /><ServicesSection /><RoomsSection /><MenuSection />
    <section className="border-y border-line bg-white px-4 py-14 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">About the Lodge</p>
          <h2 className="mt-2 font-serif text-3xl text-forest md:text-4xl">A welcoming stay in Agona Swedru</h2>
        </div>
        <div>
          <p className="max-w-2xl leading-relaxed text-ink/75">Royal Solwezi Lodge brings together comfortable rooms, relaxed outdoor spaces, and food and drink in one welcoming compound near Ekwamkrom Police Barrier.</p>
          <Link href="/about" className="mt-5 inline-flex items-center gap-2 font-semibold text-forest transition-colors hover:text-gold-deep">Discover the lodge <ArrowRight size={17} /></Link>
        </div>
      </div>
    </section>
    <Testimonials /><LocationSection />
    <section className="bg-forest text-center text-white"><div className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="font-serif text-4xl text-white">Planning a stay in Agona Swedru?</h2>
      <p className="mt-3 text-white/85">Tell us your dates and we will reply on WhatsApp to confirm availability.</p>
      <Link href="/book" className="btn btn-gold mt-6">Reserve / Order</Link></div></section>
  </>);
}
