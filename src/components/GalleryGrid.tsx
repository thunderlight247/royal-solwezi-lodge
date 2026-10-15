"use client";
import SafeImage from "./SafeImage";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { gallery } from "@/data/gallery";

const CATS = ["All", ...Array.from(new Set(gallery.map((g) => g.cat)))];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = filter === "All" ? gallery : gallery.filter((g) => g.cat === filter);

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight") setLightboxIdx((prev) => prev === null ? null : (prev + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightboxIdx((prev) => prev === null ? null : (prev + filtered.length - 1) % filtered.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [lightboxIdx, filtered.length]);

  // Lock scroll when lightbox open
  useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  return (
    <>
      {/* Category filter pills */}
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by category">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
              filter === c
                ? "border-gold bg-gold text-forest-dark shadow-md shadow-gold/20"
                : "border-line bg-white text-ink/70 hover:border-gold/50 hover:text-forest"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.ul
        className="grid grid-cols-2 gap-3 md:grid-cols-3"
        layout
      >
        <AnimatePresence>
          {filtered.map((g, n) => (
            <motion.li
              key={g.src}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              className={n % 5 === 0 ? "md:col-span-2" : ""}
            >
              <button
                onClick={() => setLightboxIdx(n)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl"
                aria-label={`View: ${g.alt}`}
              >
                <SafeImage
                  src={g.src}
                  alt={g.alt}
                  sizes="(min-width:768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-forest/0 transition-all duration-300 group-hover:bg-forest/40">
                  <ZoomIn size={28} className="text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" strokeWidth={1.5} />
                </div>
                {/* Category chip */}
                <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {g.cat}
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close */}
            <button
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
              aria-label="Close image viewer"
              onClick={() => setLightboxIdx(null)}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((p) => p === null ? null : (p + filtered.length - 1) % filtered.length);
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIdx((p) => p === null ? null : (p + 1) % filtered.length);
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <SafeImage
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].alt}
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* Caption & counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-sm font-medium text-white">{filtered[lightboxIdx].alt}</p>
              <p className="mt-1 text-xs text-white/50">{lightboxIdx + 1} / {filtered.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
