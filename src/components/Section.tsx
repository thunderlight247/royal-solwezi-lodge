import Reveal from "./Reveal";
export function PageHero({ title, intro }: { title: string; intro?: string }) {
  return <section className="bg-forest-dark px-4 py-14 text-center text-white"><h1 className="font-serif text-4xl md:text-5xl">{title}</h1>{intro && <p className="mx-auto mt-3 max-w-2xl text-white/80">{intro}</p>}</section>;
}
export function Section({ title, children, id }: { title?: string; children: React.ReactNode; id?: string }) {
  return <section id={id} className="mx-auto max-w-6xl px-4 py-14"><Reveal>{title && <h2 className="mb-8 font-serif text-3xl text-forest md:text-4xl">{title}</h2>}{children}</Reveal></section>;
}
