import Reveal from "./Reveal";
export function PageHero({ title, intro, tag }: { title: string; intro?: string; tag?: string }) {
  return <section className="bg-forest-dark px-4 py-14 text-center text-white">{tag && <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{tag}</p>}<h1 className="mt-1 font-serif text-4xl text-white md:text-5xl">{title}</h1>{intro && <p className="mx-auto mt-3 max-w-2xl text-white/80">{intro}</p>}</section>;
}
export function Section({ title, children, id }: { title?: string; children: React.ReactNode; id?: string }) {
  return <section id={id} className="mx-auto max-w-6xl px-4 py-14"><Reveal>{title && <h2 className="mb-8 font-serif text-3xl md:text-4xl">{title}</h2>}{children}</Reveal></section>;
}
