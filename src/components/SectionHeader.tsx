import Reveal from "./Reveal";
export default function SectionHeader({ tag, title, intro, inverse = false }: { tag: string; title: string; intro?: string; inverse?: boolean }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{tag}</p>
      <h2 className={`mt-2 font-serif text-3xl md:text-4xl ${inverse ? "text-white" : ""}`}>{title}</h2>
      <p aria-hidden className={`mt-3 ${inverse ? "text-white/60" : "text-gold"}`}>— • —</p>
      {intro && <p className={`mt-3 ${inverse ? "text-white/75" : ""}`}>{intro}</p>}
    </Reveal>);
}
