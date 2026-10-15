"use client";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { business, nav } from "@/data/business";

export default function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const shadow = useTransform(scrollY, [0, 40], ["0 0 0 0 transparent", "0 2px 16px 0 rgba(7,61,7,0.10)"]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      style={{ boxShadow: reduce ? undefined : shadow }}
      className="sticky top-0 z-40 border-b border-line bg-cream/97 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={`${business.name} home`}>
          <Image src="/logo.jpg" alt="" width={48} height={46} className="h-11 w-auto rounded-lg" priority />
          <span className="font-serif text-xl font-semibold text-forest">
            Royal Solwezi <span className="text-gold">Lodge</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 text-sm lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative px-3 py-1.5 rounded-lg font-medium transition-colors ${
                isActive(n.href)
                  ? "text-forest bg-forest/8"
                  : "text-ink/70 hover:text-forest hover:bg-forest/5"
              }`}
            >
              {n.label}
              {isActive(n.href) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-gold"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop Book CTA */}
          <Link
            href="/book"
            className="btn btn-gold btn-sm hidden lg:inline-flex"
          >
            Book Now
          </Link>

          {/* Mobile hamburger */}
          <button
            className="rounded-xl p-2 text-forest transition-colors hover:bg-forest/8 lg:hidden"
            aria-expanded={open}
            aria-controls="mnav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={23} aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={23} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mnav"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-cream px-4 lg:hidden"
          >
            <div className="py-3 space-y-0.5">
              {nav.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 font-serif text-lg transition-colors ${
                      isActive(n.href)
                        ? "bg-forest/8 text-forest font-semibold"
                        : "text-ink hover:bg-forest/5 hover:text-forest"
                    }`}
                  >
                    {n.label}
                    {isActive(n.href) && (
                      <span className="h-2 w-2 rounded-full bg-gold" />
                    )}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 pb-1">
                <Link href="/book" onClick={() => setOpen(false)} className="btn btn-gold w-full">
                  Book Your Stay
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
