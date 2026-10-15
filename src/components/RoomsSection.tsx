"use client";
import { useState } from "react";
import Link from "next/link";
import { BedDouble, Maximize, Users, Star } from "lucide-react";
import SafeImage from "./SafeImage";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
import RoomDrawer from "./RoomDrawer";
import Reveal from "./Reveal";
import { rooms, type Room } from "@/data/rooms";

const FEATURED_ID = "deluxe"; // highlighted as most popular

export default function RoomsSection() {
  const [sel, setSel] = useState<Room | null>(null);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="rooms">
      <SectionHeader
        tag="Accommodation"
        title="Rooms &amp; Suites"
        intro="Choose a room, view the details, then book through WhatsApp."
      />
      <div className="grid gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
        {rooms.map((r, i) => (
          <Reveal key={r.id} delay={i * 0.08}>
            <TiltCard
              className={`card group relative h-full overflow-hidden transition-shadow duration-300 hover:shadow-2xl ${
                r.id === FEATURED_ID ? "ring-2 ring-gold/60 shadow-lg shadow-gold/10" : ""
              }`}
            >
              {/* Most popular badge */}
              {r.id === FEATURED_ID && (
                <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-center gap-1.5 bg-gold py-1.5 text-xs font-bold uppercase tracking-widest text-forest-dark">
                  <Star size={12} fill="currentColor" /> Most Popular
                </div>
              )}

              <div className={`relative aspect-[4/3] overflow-hidden ${r.id === FEATURED_ID ? "mt-8" : ""}`}>
                <SafeImage
                  src={r.images[0]}
                  alt={`${r.title} at Royal Solwezi Lodge`}
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span className="absolute right-3 top-3 rounded-lg bg-gold px-3 py-1.5 text-sm font-bold text-forest-dark shadow">
                  GH₵ {r.pricePerNight}<span className="text-xs font-medium">/night</span>
                </span>
              </div>

              <div className="flex flex-col p-5 sm:p-6">
                <h3 className="font-serif text-2xl leading-tight">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{r.tagline}</p>

                {/* Specs row */}
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-forest/80">
                  <li className="flex items-center gap-1.5">
                    <Users size={14} className="text-gold" /> {r.specs.maxGuests} Guests
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Maximize size={14} className="text-gold" /> {r.specs.sqm} sqm
                  </li>
                  <li className="flex items-center gap-1.5">
                    <BedDouble size={14} className="text-gold" /> {r.specs.bedType}
                  </li>
                </ul>

                {/* Amenity chips */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.amenities.slice(0, 3).map((a) => (
                    <span key={a.label} className="rounded-full bg-tint px-2.5 py-0.5 text-xs font-medium text-forest/70">
                      {a.label}
                    </span>
                  ))}
                </div>

                {/* CTA row — clear visual hierarchy */}
                <div className="mt-5 flex gap-2">
                  <button
                    onClick={() => setSel(r)}
                    className="btn btn-outline flex-1 rounded-xl text-xs px-2"
                  >
                    View Details
                  </button>
                  <Link
                    href={`/book?room=${encodeURIComponent(r.title)}`}
                    className="btn btn-gold flex-[2] rounded-xl text-xs px-2"
                  >
                    Book Room
                  </Link>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <p className="text-sm text-ink/60">
          All rates are per night. Contact us on WhatsApp for extended stays or group rates.
        </p>
      </Reveal>

      <RoomDrawer room={sel} onClose={() => setSel(null)} />
    </section>
  );
}
