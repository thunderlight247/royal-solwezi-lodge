import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/data/testimonials";
export default function Testimonials() {
  if (testimonials.length === 0) return null; // never show invented reviews
  return (
    <section className="mx-auto max-w-6xl px-4 py-14"><SectionHeader tag="Guest Reviews" title="What guests say" />
      <div className="grid gap-6 md:grid-cols-3">{testimonials.map((t) => (
        <figure key={t.name} className="card p-6">
          <div className="flex gap-1 text-gold" aria-label={`${t.rating} out of 5 stars`}>{Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
          <blockquote className="mt-3">&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption className="mt-4 flex items-center gap-3">
            {t.avatar && /* eslint-disable-next-line @next/next/no-img-element */ <img src={t.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />}
            <span className="font-medium text-forest">{t.name}{t.source && <span className="block text-xs font-normal">{t.source}</span>}</span></figcaption>
        </figure>))}</div></section>);
}
