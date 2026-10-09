"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, BedDouble, Check, ChevronLeft, ChevronRight, Maximize, Users } from "lucide-react";
import SafeImage from "./SafeImage";
import { getIcon } from "./icons";
import type { Room } from "@/data/rooms";
import { whatsappUrl, hasWhatsApp } from "@/lib/whatsapp";
const spring = { type: "spring", stiffness: 120, damping: 14 } as const;
export default function RoomDrawer({ room, onClose }: { room: Room | null; onClose: () => void }) {
  const [i, setI] = useState(0);
  useEffect(() => { setI(0); }, [room]);
  useEffect(() => {
    if (!room) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow; document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [room, onClose]);
  const n = room?.images.length ?? 1;
  return (
    <AnimatePresence>
      {room && (<>
        <motion.div key="bg" className="fixed inset-0 z-50 bg-black/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
        <motion.aside key="panel" role="dialog" aria-modal="true" aria-label={room.title} initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={spring}
          className="fixed right-0 top-0 z-50 flex h-full w-full max-w-xl flex-col overflow-y-auto bg-cream">
          <div className="relative aspect-[4/3] shrink-0">
            <SafeImage src={room.images[i]} alt={`${room.title}, photo ${i + 1}`} sizes="600px" className="object-cover" />
            <button onClick={onClose} className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-forest shadow"><ArrowLeft size={16} /> Back to Rooms</button>
            <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-sm font-bold text-forest-dark shadow">GH₵ {room.pricePerNight}/night</span>
            {n > 1 && (<>
              <button aria-label="Previous photo" onClick={() => setI((i + n - 1) % n)} className="absolute left-3 top-1/2 rounded-full bg-white/90 p-2 text-forest"><ChevronLeft size={18} /></button>
              <button aria-label="Next photo" onClick={() => setI((i + 1) % n)} className="absolute right-3 top-1/2 rounded-full bg-white/90 p-2 text-forest"><ChevronRight size={18} /></button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">{room.images.map((_, d) => <span key={d} className={`h-2 w-2 rounded-full ${d === i ? "bg-gold" : "bg-white/70"}`} />)}</div>
            </>)}
          </div>
          <div className="flex-1 space-y-8 p-6">
            <div><h2 className="font-serif text-3xl">{room.title}</h2>
              <h3 className="mt-4 font-serif text-xl">About This Room</h3><p className="mt-1">{room.description}</p></div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[[Users, "Guests", `${room.specs.maxGuests}`], [Maximize, "Room Size", `${room.specs.sqm} sqm`], [BedDouble, "Bed", room.specs.bedType]].map(([Icon, l, v]) => {
                const I = Icon as typeof Users; return (
                  <div key={l as string} className="card p-3"><I className="mx-auto text-gold" size={22} /><p className="mt-1 text-xs uppercase tracking-wide">{l as string}</p><p className="font-semibold text-forest">{v as string}</p></div>); })}
            </div>
            <div><h3 className="mb-3 font-serif text-xl">Amenities</h3>
              <ul className="space-y-3">{room.amenities.map((a) => { const I = getIcon(a.iconName); return (
                <li key={a.label} className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-tint text-gold"><I size={18} /></span><span className="text-forest">{a.label}</span></li>); })}</ul></div>
            <div><h3 className="mb-3 font-serif text-xl">Room Features</h3>
              <ul className="space-y-2">{room.features.map((f) => <li key={f} className="flex items-center gap-2"><Check size={16} className="text-gold" /> {f}</li>)}</ul></div>
            <div><h3 className="mb-3 font-serif text-xl">Policies</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm">{room.policies.map((p) => <li key={p}>{p}</li>)}</ul></div>
          </div>
          <div className="sticky bottom-0 flex items-center justify-between gap-3 border-t border-line bg-white p-4">
            <div><p className="text-xs">Starting from</p><p className="font-serif text-xl text-forest">GH₵ {room.pricePerNight} <span className="text-sm font-sans">/ night</span></p></div>
            {hasWhatsApp() && <a className="btn btn-gold" target="_blank" rel="noopener noreferrer" href={whatsappUrl(`Hello Royal Solwezi Lodge, I would like to book the ${room.title}.`)}>Book via WhatsApp</a>}
          </div>
        </motion.aside>
      </>)}
    </AnimatePresence>);
}
