"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import SafeImage from "./SafeImage";
import SectionHeader from "./SectionHeader";
import { categories, dishes, type MenuCategory } from "@/data/menu";
import { orderUrl, hasWhatsApp } from "@/lib/whatsapp";
export default function MenuSection() {
  const [cat, setCat] = useState<MenuCategory>(categories[0]);
  return (
    <section className="mx-auto max-w-6xl px-4 py-14" id="menu">
      <SectionHeader tag="Pavilion Menu" title="Food & Drink" intro="Order by WhatsApp and we will confirm availability and timing." />
      <div role="tablist" aria-label="Menu categories" className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={c === cat} onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${c === cat ? "border-gold bg-gold text-forest-dark" : "border-line bg-white text-forest hover:border-gold"}`}>{c}</button>))}
      </div>
      <AnimatePresence mode="wait">
        <motion.ul key={cat} role="tabpanel" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.filter((d) => d.category === cat).map((d) => (
            <li key={d.id} className="card flex flex-col overflow-hidden">
              <div className="relative aspect-[4/3]">
                <SafeImage src={d.image} alt={d.name} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-sm font-bold text-forest-dark shadow">GH₵ {d.price}</span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-serif text-xl">{d.name}</h3>
                <p className="mt-1 flex-1 text-sm">{d.description}</p>
                {d.chips.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{d.chips.map((c) => <span key={c} className="rounded-full bg-tint px-2.5 py-0.5 text-xs font-medium text-gold-deep">{c}</span>)}</div>}
                {hasWhatsApp() && <a href={orderUrl(d.name)} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-4 w-full"><MessageCircle size={16} /> Order via WhatsApp</a>}
              </div>
            </li>))}
        </motion.ul>
      </AnimatePresence>
    </section>);
}
