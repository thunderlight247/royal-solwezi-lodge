"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, BedDouble, Check, ChevronLeft, ChevronRight, Maximize, Users, MessageCircle } from "lucide-react";
import SafeImage from "./SafeImage";
import { getIcon } from "./icons";
import type { Room } from "@/data/rooms";
import { whatsappUrl, hasWhatsApp } from "@/lib/whatsapp";

const spring = { type: "spring", stiffness: 130, damping: 18 } as const;

export default function RoomDrawer({ room, onClose }: { room: Room | null; onClose: () => void }) {
  const [i, setI] = useState(0);
  useEffect(() => { setI(0); }, [room]);
  useEffect(() => {
    if (!room) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((p) => (p + 1) % (room.images.length));
      if (e.key === "ArrowLeft") setI((p) => (p + room.images.length - 1) % room.images.length);
    };
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [room, onClose]);

  const n = room?.images.length ?? 1;

  return (
    <AnimatePresence>
      {room && (<>
        {/* Backdrop */}
        <motion.div
          key="bg"
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Panel */}
        <motion.aside
          key="panel"
          role="dialog"
          aria-modal="true"
          aria-label={room.title}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={spring}
          className="fixed right-0 top-0 z-50 flex h-full w-full max-w-lg flex-col overflow-y-auto bg-cream shadow-2xl"
        >
          {/* Image carousel */}
          <div className="relative aspect-[16/10] shrink-0 bg-tint">
            <SafeImage
              src={room.images[i]}
              alt={`${room.title}, photo ${i + 1}`}
              sizes="560px"
              className="object-cover"
            />

            {/* Gradient overlay for controls readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
              aria-label="Close panel"
            >
              <X size={18} />
            </button>

            {/* Price badge */}
            <span className="absolute left-3 top-3 rounded-lg bg-gold px-3 py-1.5 text-sm font-bold text-forest-dark shadow-md">
              GH₵ {room.pricePerNight}<span className="text-xs font-medium">/night</span>
            </span>

            {/* Carousel controls */}
            {n > 1 && (<>
              <button
                aria-label="Previous photo"
                onClick={() => setI((i + n - 1) % n)}
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow transition-colors hover:bg-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next photo"
                onClick={() => setI((i + 1) % n)}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow transition-colors hover:bg-white"
              >
                <ChevronRight size={18} />
              </button>
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {room.images.map((_, d) => (
                  <button
                    key={d}
                    onClick={() => setI(d)}
                    aria-label={`Go to photo ${d + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${d === i ? "w-5 bg-gold" : "w-1.5 bg-white/60"}`}
                  />
                ))}
              </div>
            </>)}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-7 p-6">
            {/* Title + description */}
            <div>
              <h2 className="font-serif text-3xl">{room.title}</h2>
              <p className="mt-3 leading-relaxed text-ink/70">{room.description}</p>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-3 gap-3 text-center">
              {([
                [Users, "Guests", `${room.specs.maxGuests}`],
                [Maximize, "Room Size", `${room.specs.sqm} sqm`],
                [BedDouble, "Bed", room.specs.bedType],
              ] as const).map(([Icon, label, value]) => (
                <div key={label} className="card p-3">
                  <Icon className="mx-auto text-gold" size={20} />
                  <p className="mt-1.5 text-xs uppercase tracking-wide text-ink/55">{label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-forest">{value}</p>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div>
              <h3 className="mb-4 font-serif text-xl">Room Amenities</h3>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {room.amenities.map((a) => {
                  const I = getIcon(a.iconName);
                  return (
                    <li key={a.label} className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tint text-gold">
                        <I size={15} />
                      </span>
                      <span className="text-sm text-forest">{a.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="mb-4 font-serif text-xl">Room Features</h3>
              <ul className="space-y-2">
                {room.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check size={15} className="shrink-0 text-gold" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div className="rounded-xl bg-tint/60 p-4">
              <h3 className="mb-2 font-serif text-lg">Policies</h3>
              <ul className="space-y-1.5 text-sm text-ink/70">
                {room.policies.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky footer CTA */}
          <div className="sticky bottom-0 flex items-center justify-between gap-3 border-t border-line bg-white/95 p-4 backdrop-blur-sm">
            <div>
              <p className="text-xs text-ink/55">Starting from</p>
              <p className="font-serif text-xl text-forest">
                GH₵ {room.pricePerNight}{" "}
                <span className="font-sans text-sm font-normal text-ink/60">/ night</span>
              </p>
            </div>
            {hasWhatsApp() && (
              <a
                className="btn btn-gold"
                target="_blank"
                rel="noopener noreferrer"
                href={whatsappUrl(`Hello Royal Solwezi Lodge, I would like to book the ${room.title}.`)}
              >
                <MessageCircle size={16} /> Book via WhatsApp
              </a>
            )}
          </div>
        </motion.aside>
      </>)}
    </AnimatePresence>
  );
}
