"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { gallery } from "@/data/gallery";
export default function GalleryGrid() {
  const [i, setI] = useState<number | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setI(null); if (i !== null && e.key === "ArrowRight") setI((i + 1) % gallery.length); if (i !== null && e.key === "ArrowLeft") setI((i + gallery.length - 1) % gallery.length); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [i]);
  return (<>
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {gallery.map((g, n) => (
        <li key={g.src} className={n % 5 === 0 ? "md:col-span-2" : ""}>
          <button onClick={() => setI(n)} className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl" aria-label={`Enlarge: ${g.alt}`}>
            <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <span className="absolute bottom-2 left-2 rounded-full bg-black/55 px-3 py-1 text-xs text-white">{g.cat}</span>
          </button>
        </li>))}
    </ul>
    {i !== null && (
      <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setI(null)}>
        <button className="absolute right-4 top-4 text-3xl text-white" aria-label="Close" onClick={() => setI(null)}>×</button>
        <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
          <Image src={gallery[i].src} alt={gallery[i].alt} fill sizes="100vw" className="object-contain" />
        </div>
      </div>)}
  </>);
}
