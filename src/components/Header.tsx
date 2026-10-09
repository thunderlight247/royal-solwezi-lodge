"use client";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { business, nav } from "@/data/business";
export default function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-3" aria-label={`${business.name} home`}>
          <Image src="/logo.jpg" alt="" width={48} height={46} className="h-11 w-auto" priority />
          <span className="font-serif text-xl font-semibold text-forest">Royal Solwezi <span className="text-gold">Lodge</span></span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm lg:flex">
          {nav.map((n) => <Link key={n.href} href={n.href} className="text-forest hover:text-gold-deep">{n.label}</Link>)}
        </nav>
        <button className="rounded-lg p-2 text-forest transition-colors hover:bg-forest/5 lg:hidden" aria-expanded={open} aria-controls="mnav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mnav" aria-label="Mobile" initial={reduce ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: reduce ? 0 : 0.18 }} className="border-t border-line bg-cream px-4 pb-4 lg:hidden">
            {nav.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-line/70 py-3 font-serif text-lg text-forest transition-colors hover:text-gold-deep">{n.label}</Link>)}
          </motion.nav>)}
      </AnimatePresence>
    </header>);
}
