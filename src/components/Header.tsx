"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { business, nav } from "@/data/business";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-3" aria-label={`${business.name} home`}>
          <Image src="/images/logo.jpg" alt="" width={48} height={46} className="h-11 w-auto" priority />
          <span className="font-serif text-xl font-semibold text-forest">{business.name}</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm lg:flex">
          {nav.map((n) => <Link key={n.href} href={n.href} className="hover:text-forest-dark hover:underline underline-offset-4">{n.label}</Link>)}
          <Link href="/contact" className="btn btn-green">Reserve / Enquire</Link>
        </nav>
        <button className="lg:hidden rounded p-2" aria-expanded={open} aria-controls="mnav" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-forest mb-1.5" /><span className="block h-0.5 w-6 bg-forest mb-1.5" /><span className="block h-0.5 w-6 bg-forest" />
        </button>
      </div>
      {open && (
        <nav id="mnav" aria-label="Mobile" className="lg:hidden border-t border-forest/10 bg-cream px-4 pb-4">
          {nav.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-serif">{n.label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-green mt-2 w-full">Reserve / Enquire</Link>
        </nav>
      )}
    </header>
  );
}
