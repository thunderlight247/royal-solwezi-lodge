"use client";
import Image from "next/image";
import { useState } from "react";
// If a remote photo fails to load, show a neutral tint instead of a broken image.
export default function SafeImage({ src, alt, sizes, className = "", priority = false }: { src: string; alt: string; sizes: string; className?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={alt} className="absolute inset-0 bg-tint" />;
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} onError={() => setFailed(true)} />;
}
