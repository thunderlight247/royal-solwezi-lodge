import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { getIcon } from "./icons";
import { amenities } from "@/data/amenities";

export default function Ambiance() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeader
          tag="Ambiance"
          title="Relax in the Open Air"
          intro="A licensed kitchen and bar, a cool summer hut for daytime rest, and an on-site conference room, all within our secure compound."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.slice(0, 4).map((a, i) => {
            const I = getIcon(a.iconName);
            return (
              <Reveal key={a.name} delay={i * 0.06} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-tint text-gold shadow-sm ring-1 ring-gold/20">
                  <I size={26} />
                </span>
                <h3 className="mt-3 font-serif text-xl">{a.name}</h3>
                <p className="mt-1 text-sm text-ink/70">{a.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
