import Reveal from "./Reveal";

export default function SectionHeader({
  tag,
  title,
  intro,
  inverse = false,
}: {
  tag: string;
  title: string;
  intro?: string;
  inverse?: boolean;
}) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{tag}</p>
      <h2 className={`mt-2 font-serif text-3xl md:text-4xl ${inverse ? "text-white" : ""}`}>
        {title}
      </h2>
      {/* Refined divider: thin lines flanking a diamond */}
      <div className={`mt-4 flex items-center justify-center gap-3 ${inverse ? "text-gold/60" : "text-gold/50"}`} aria-hidden>
        <span className={`block h-px w-10 ${inverse ? "bg-gold/40" : "bg-gold/40"}`} />
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="text-gold rotate-45">
          <rect x="2" y="2" width="6" height="6" />
        </svg>
        <span className={`block h-px w-10 ${inverse ? "bg-gold/40" : "bg-gold/40"}`} />
      </div>
      {intro && (
        <p className={`mt-4 leading-relaxed ${inverse ? "text-white/75" : "text-ink/65"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
