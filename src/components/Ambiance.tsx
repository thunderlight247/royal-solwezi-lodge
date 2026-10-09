import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { getIcon } from "./icons";
import { amenities } from "@/data/amenities";
export default function Ambiance() {
  return (
    <section className="bg-white"><div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeader tag="Ambiance" title="Relax in the open air" intro="An open-air pavilion, a licensed bar and a garden gazebo, all within the lodge compound." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {amenities.map((a, i) => { const I = getIcon(a.iconName); return (
          <Reveal key={a.name} delay={i * 0.06} className="text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-tint text-gold"><I size={26} /></span>
            <h3 className="mt-3 font-serif text-xl">{a.name}</h3><p className="mt-1 text-sm">{a.description}</p></Reveal>); })}
      </div></div></section>);
}
