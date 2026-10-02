import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/data/rooms";
export default function RoomCard({ room }: { room: Room }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[4/3]"><Image src={room.images[0].src} alt={room.images[0].alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>
        <div className="p-6 md:p-8">
          <h3 className="font-serif text-2xl text-forest">{room.name}</h3>
          <p className="mt-2 text-ink/80">{room.description}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">{room.features.map((f) => <li key={f}>{f}</li>)}</ul>
          {room.price && <p className="mt-3 font-semibold">{room.price.currency} {room.price.amount} / {room.price.period}</p>}
          <Link href={`/contact?room=${encodeURIComponent(room.name)}`} className="btn btn-green mt-6">Enquire About This Room</Link>
        </div>
      </div>
    </article>);
}
