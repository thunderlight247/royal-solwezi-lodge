"use client";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import SafeImage from "./SafeImage";
import { media } from "@/data/media";
const entrance = { duration: 0.72, ease: [0.22, 1, 0.36, 1] } as const;
const box: Variants = { hidden: {}, show: { transition: { delayChildren: 0.12, staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: entrance } };
export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate flex min-h-[78svh] items-center text-white md:min-h-[82vh] md:items-end">
      <SafeImage src={media.hero} alt="Royal Solwezi Lodge, a serene lodge in Agona Swedru" sizes="100vw" priority className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-black/15 to-black/55 md:bg-gradient-to-t md:from-black/65 md:via-black/20 md:to-black/10" />
      <motion.div variants={box} initial={reduce ? "show" : "hidden"} animate="show" className="mx-auto w-full max-w-6xl px-5 py-16 text-center md:px-4 md:pb-16 md:text-left">
        <motion.p variants={item} className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm backdrop-blur md:mx-0"><MapPin size={14} className="text-gold" /> Agona Swedru, Central Region, Ghana</motion.p>
        <motion.h1 variants={item} className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-[1.08] text-white md:mx-0 md:text-6xl">Serene Lodging &amp; Open-Air Pavilion Dining</motion.h1>
        <motion.p variants={item} className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 md:mx-0 md:text-lg">Rest well, eat well and enjoy the open air at Royal Solwezi Lodge &amp; Restaurant.</motion.p>
        <motion.div variants={item} className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
          <Link href="/book" className="btn btn-gold">Book Your Stay</Link>
          <Link href="/menu" className="btn btn-line">Explore the Menu</Link>
        </motion.div>
      </motion.div>
    </section>);
}
