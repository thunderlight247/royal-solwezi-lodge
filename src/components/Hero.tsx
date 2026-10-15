"use client";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import SafeImage from "./SafeImage";
import { media } from "@/data/media";

const entrance = { duration: 0.72, ease: [0.22, 1, 0.36, 1] } as const;
const box: Variants = { hidden: {}, show: { transition: { delayChildren: 0.12, staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: entrance } };

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate flex min-h-[82svh] flex-col items-center text-white md:min-h-[88vh] md:items-end">
      <SafeImage src={media.hero} alt="Royal Solwezi Lodge, a serene lodge in Agona Swedru" sizes="100vw" priority className="-z-10 object-cover" />

      {/* Multi-stop gradient for better text legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/25 via-black/10 to-black/70 md:bg-gradient-to-t md:from-black/75 md:via-black/25 md:to-black/15" />

      {/* Subtle vignette on sides */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.3)_100%)]" />

      <motion.div
        variants={box}
        initial={reduce ? "show" : "hidden"}
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 py-14 text-center md:px-6 md:pb-16 md:text-left"
      >
        <motion.p variants={item} className="mx-auto inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-black/25 px-4 py-2 text-sm backdrop-blur-sm md:mx-0">
          <MapPin size={14} className="text-gold" /> Agona Swedru, Central Region, Ghana
        </motion.p>

        <motion.h1 variants={item} className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-[1.06] text-white drop-shadow-sm md:mx-0 md:text-6xl lg:text-7xl">
          Serene Lodging &amp; Open-Air Pavilion Dining
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-sm md:mx-0 md:text-lg">
          Rest well, eat well and enjoy the open air at Royal Solwezi Lodge &amp; Restaurant.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <Link href="/book" className="btn btn-gold shadow-lg shadow-gold/20">Book Your Stay</Link>
          <Link href="/menu" className="btn btn-line">Explore the Menu</Link>
        </motion.div>

        {/* Trust signals */}
        <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/75 md:justify-start">
          {[
            ["3", "Room Tiers"],
            ["4", "Dining Categories"],
            ["📍", "Agona Swedru"],
          ].map(([value, label]) => (
            <div key={label} className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-gold">{value}</span>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ChevronDown size={28} className="text-white/60" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
