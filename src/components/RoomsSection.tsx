"use client";
import { useState } from "react";
import Link from "next/link";
import { BedDouble, Users, Snowflake, Fan, Star } from "lucide-react";
import SafeImage from "./SafeImage";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
import RoomDrawer from "./RoomDrawer";
import Reveal from "./Reveal";
import { rooms, type Room, TOTAL_ROOMS_COUNT } from "@/data/rooms";

const FEATURED_ID = "executive";

export default function RoomsSection() {
  const [sel, setSel] = useState<Room | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="rooms">
      <SectionHeader
        tag="Accommodation"
        title="17 Guest Rooms &amp; Suites"
        intro={`Royal Solwezi Lodge features ${TOTAL_ROOMS_COUNT} rooms in total, divided into Executive, Luxury (both air-conditioned), and Standard (fan-cooled) categories.`}
      />

      <div className="grid gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
        {rooms.map((r, i) => (
          <Reveal key={r.id} delay={i * 0.08}>
            <TiltCard
              className={`card group relative h-full overflow-hidden transition-shadow duration-300 hover:shadow-2xl ${
                r.id === FEATURED_ID ? "ring-2 ring-gold/60 shadow-lg shadow-gold/10" : ""
              }`}
            >
              {/* Featured badge */}
              {r.id === FEATURED_ID && (
                <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-center gap-1.5 bg-gold py-1.5 text-xs font-bold uppercase tracking-widest text-forest-dark">
                  <Star size={12} fill="currentColor" /> Recommended Choice
                </div>
              )}

              <div className={`relative aspect-[4/3] overflow-hidden ${r.id === FEATURED_ID ? "mt-8" : ""}`}>
                <SafeImage
                  src={r.images[0]}
                  alt={`${r.title} at Royal Solwezi Lodge`}
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                {/* Cooling badge */}
                <span className="absolute left-3 top-3 rounded-full bg-forest/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm flex items-center gap-1.5 shadow">
                  {r.specs.cooling === "Air Conditioning" ? (
                    <>
                      <Snowflake size={13} className="text-gold" /> Air Conditioned
                    </>
                  ) : (
                    <>
                      <Fan size={13} className="text-gold" /> Fan Cooled
                    </>
                  )}
                </span>
              </div>

              <div className="flex flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-2xl leading-tight">{r.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{r.tagline}</p>

                {/* Specs row */}
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-forest/80">
                  <li className="flex items-center gap-1.5">
                    <Users size={14} className="text-gold" /> {r.specs.maxGuests} Guests
                  </li>
                  <li className="flex items-center gap-1.5">
                    <BedDouble size={14} className="text-gold" /> {r.specs.bedType}
                  </li>
                  <li className="flex items-center gap-1.5">
                    {r.specs.cooling === "Air Conditioning" ? (
                      <Snowflake size={14} className="text-gold" />
                    ) : (
                      <Fan size={14} className="text-gold" />
                    )}
                    {r.specs.cooling}
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

                {/* CTA row */}
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
                    Reserve Room
                  </Link>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <p className="text-sm text-ink/65">
          17 guest rooms in total across the lodge compound. Contact front desk on WhatsApp for current room rates and availability.
        </p>
      </Reveal>

      <RoomDrawer room={sel} onClose={() => setSel(null)} />
    </section>
  );
}
