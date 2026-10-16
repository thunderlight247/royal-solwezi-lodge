import {
  BedDouble,
  Coffee,
  PartyPopper,
  Presentation,
  Utensils,
  UsersRound,
  Shirt,
  Sun,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { services } from "@/data/services";

const serviceIcons = {
  BedDouble,
  Coffee,
  PartyPopper,
  Presentation,
  Utensils,
  UsersRound,
  Shirt,
  Sun,
};

export default function ServicesSection() {
  return (
    <section
      className="relative overflow-hidden bg-forest-dark px-4 py-16 text-white md:py-24"
      id="services"
    >
      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fdb413' fill-opacity='1'%3E%3Cpath d='M20 20l10-10v20L20 20zm-10-10l10 10L10 30V10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          tag="Our Services"
          title="Comfort, Dining, Gatherings &amp; Rest"
          intro="Stay, dine, meet, or celebrate at Royal Solwezi Lodge in Agona Swedru."
          inverse
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon =
              serviceIcons[service.icon as keyof typeof serviceIcons] || BedDouble;
            return (
              <Reveal key={service.name} delay={index * 0.06}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.09] hover:shadow-lg hover:shadow-black/20 sm:p-7">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/20 transition-all duration-300 group-hover:bg-gold/25 group-hover:ring-gold/40 group-hover:scale-105">
                    <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-white">{service.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
