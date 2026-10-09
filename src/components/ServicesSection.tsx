import { BedDouble, Coffee, PartyPopper, Presentation, Utensils, UsersRound } from "lucide-react";
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
};

export default function ServicesSection() {
  return (
    <section className="bg-[#263858] px-4 py-16 text-white md:py-20" id="services">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="Services" title="Everything for a memorable stay" intro="Rest, dine, celebrate or gather together at Royal Solwezi Lodge." inverse />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <Reveal key={service.name} delay={index * 0.06}>
                <article className="group h-full rounded-xl border border-white/15 bg-white/[0.045] p-6 transition-colors duration-300 hover:border-gold/50 hover:bg-white/[0.08] sm:p-7">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold transition-transform duration-300 group-hover:scale-105">
                    <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-white">{service.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
