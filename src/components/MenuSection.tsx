"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, ChefHat } from "lucide-react";
import SafeImage from "./SafeImage";
import SectionHeader from "./SectionHeader";
import { categories, dishes, type MenuCategory } from "@/data/menu";
import { orderUrl, hasWhatsApp } from "@/lib/whatsapp";

export default function MenuSection() {
  const [cat, setCat] = useState<MenuCategory>(categories[0]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="menu">
      <SectionHeader
        tag="Pavilion Kitchen &amp; Bar"
        title="Authentic Ghanaian Cuisine &amp; Drinks"
        intro="Order directly via WhatsApp from our kitchen and bar. We serve authentic local Ghanaian dishes, charcoal grills, and cold beverages."
      />

      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="Menu categories"
        className="mb-10 flex flex-wrap justify-center gap-2.5"
      >
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={c === cat}
            onClick={() => setCat(c)}
            className={`relative rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              c === cat
                ? "border-gold bg-gold text-forest-dark shadow-md shadow-gold/20"
                : "border-line bg-white text-ink/70 hover:border-gold/50 hover:text-forest"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={cat}
          role="tabpanel"
          aria-label={cat}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ type: "spring", stiffness: 130, damping: 16 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {dishes
            .filter((d) => d.category === cat)
            .map((d) => (
              <li
                key={d.id}
                className="card group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SafeImage
                    src={d.image}
                    alt={d.name}
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {/* Chef's Special chip */}
                  {d.chips.includes("Chef's Special") && (
                    <span className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full bg-forest/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm shadow">
                      <ChefHat size={11} />
                      Chef&apos;s Special
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-serif text-lg leading-snug">{d.name}</h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-ink/65">{d.description}</p>

                  {/* Local badge */}
                  {d.chips.includes("Local") && (
                    <div className="mt-2.5">
                      <span className="rounded-full bg-tint px-2.5 py-0.5 text-xs font-medium text-gold-deep">
                        🇬🇭 Local Specialty
                      </span>
                    </div>
                  )}

                  {hasWhatsApp() && (
                    <a
                      href={orderUrl(d.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline mt-4 w-full text-xs"
                    >
                      <MessageCircle size={14} /> Order via WhatsApp
                    </a>
                  )}
                </div>
              </li>
            ))}
        </motion.ul>
      </AnimatePresence>
    </section>
  );
}
