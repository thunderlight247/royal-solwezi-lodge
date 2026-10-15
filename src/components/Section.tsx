import Reveal from "./Reveal";

export function PageHero({
  title,
  intro,
  tag,
}: {
  title: string;
  intro?: string;
  tag?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-dark px-4 py-16 text-center text-white md:py-20">
      {/* Subtle geometric pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fdb413' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Bottom fade into page bg */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-cream/10" />

      <div className="relative mx-auto max-w-3xl">
        {tag && (
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold/80">{tag}</p>
        )}
        <h1 className={`font-serif text-4xl text-white md:text-5xl ${tag ? "mt-2" : ""}`}>
          {title}
        </h1>
        {intro && (
          <p className="mx-auto mt-4 max-w-2xl text-white/70 leading-relaxed">{intro}</p>
        )}
        {/* Gold accent line */}
        <div className="mx-auto mt-5 h-0.5 w-16 rounded-full bg-gold/50" />
      </div>
    </section>
  );
}

export function Section({
  title,
  children,
  id,
}: {
  title?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14">
      <Reveal>
        {title && (
          <h2 className="mb-8 font-serif text-3xl md:text-4xl">{title}</h2>
        )}
        {children}
      </Reveal>
    </section>
  );
}
