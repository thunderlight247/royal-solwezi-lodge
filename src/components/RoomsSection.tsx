"use client";
import { useState } from "react";
import Link from "next/link";
import { BedDouble, Maximize, Users } from "lucide-react";
import SafeImage from "./SafeImage";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
import RoomDrawer from "./RoomDrawer";
import Reveal from "./Reveal";
import { rooms, type Room } from "@/data/rooms";
export default function RoomsSection() {
  const [sel, setSel] = useState<Room | null>(null);
  return (
    <section className="mx-auto max-w-6xl px-4 py-14" id="rooms">
      <SectionHeader tag="Accommodation" title="Rooms & Suites" intro="Choose a room, view the details, then book through WhatsApp." />
      <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {rooms.map((r, i) => (
          <Reveal key={r.id} delay={i * 0.08}>
            <TiltCard className="card group h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <SafeImage src={r.images[0]} alt={`${r.title} at Royal Solwezi Lodge`} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                <span className="absolute right-3 top-3 rounded-md bg-gold px-3 py-1.5 text-sm font-bold text-forest-dark shadow">From GH₵ {r.pricePerNight}/night</span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-2xl leading-tight">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{r.tagline}</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-forest/80">
                  <li className="flex items-center gap-1.5"><Users size={15} /> {r.specs.maxGuests} Guests</li>
                  <li className="flex items-center gap-1.5"><Maximize size={15} /> {r.specs.sqm} sqm</li>
                  <li className="flex items-center gap-1.5"><BedDouble size={15} /> {r.specs.bedType}</li>
                </ul>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <button onClick={() => setSel(r)} className="btn btn-outline rounded-lg px-3">View Details</button>
                  <Link href={`/book?room=${encodeURIComponent(r.title)}`} className="btn btn-gold rounded-lg px-3">Book Room</Link>
                </div>
              </div>
            </TiltCard>
          </Reveal>))}
      </div>
      <RoomDrawer room={sel} onClose={() => setSel(null)} />
    </section>);
}
