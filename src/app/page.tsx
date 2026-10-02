import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { rooms } from "@/data/rooms";
import { amenities } from "@/data/amenities";
import RoomCard from "@/components/RoomCard";
import { Section } from "@/components/Section";
export default function Home() {
  return (<>
    <section className="relative isolate flex min-h-[78vh] items-end text-white">
      <Image src="/images/hero-exterior.jpg" alt="Two-storey Royal Solwezi Lodge building" fill priority unoptimized sizes="100vw" className="-z-10 object-cover object-[center_58%] brightness-110 saturate-110" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-dark/75 via-forest-dark/10 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-dark/40 via-forest-dark/10 to-transparent" />
      <div className="mx-auto w-full max-w-6xl px-4 pb-16">
        <p className="text-sm uppercase tracking-widest text-gold">Agona Swedru, Ghana</p>
        <h1 className="mt-2 font-serif text-5xl leading-tight md:text-7xl">Royal Solwezi Lodge</h1>
        <p className="mt-3 max-w-xl text-lg text-white/90">A calm, welcoming place to rest in Agona Swedru.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-gold">Reserve / Enquire on WhatsApp</Link>
          <Link href="/rooms" className="btn btn-line">Explore Rooms</Link>
        </div>
      </div>
    </section>
    <Section title="Welcome to the lodge">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <p className="text-lg leading-relaxed">Royal Solwezi Lodge sits on the {business.location.street} in {business.location.city}, in Ghana&apos;s {business.location.region}. Guests find a quiet compound, 15 air-conditioned rooms, a welcoming reception and open-air spaces to unwind. Send us a message on WhatsApp and we will help you plan your stay.</p>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src="/images/courtyard.jpg" alt="Royal Solwezi Lodge courtyard with gazebo and thatched pavilion" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>
      </div>
    </Section>
    <Section title="Rooms & accommodation">
      <div className="space-y-6">{rooms.map((r) => <RoomCard key={r.slug} room={r} />)}</div>
      <p className="mt-6 text-sm text-ink/70">Rates and availability are confirmed directly with the lodge. <Link href="/rooms" className="underline">See all rooms</Link></p>
    </Section>
    <div className="bg-white"><Section title="Spaces to enjoy">
      <div className="grid gap-6 sm:grid-cols-2">
        {amenities.slice(0, 2).map((a) => (
          <article key={a.name}>
            {a.image && <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={a.image} alt={a.name} fill sizes="(min-width:640px) 50vw, 100vw" className="object-cover" /></div>}
            <h3 className="mt-3 font-serif text-2xl text-forest">{a.name}</h3><p className="text-ink/80">{a.description}</p>
          </article>))}
      </div>
      <Link href="/amenities" className="btn btn-green mt-8">All amenities</Link>
    </Section></div>
    {business.rating && <Section title="Guest reputation"><p className="text-xl">{business.rating.value.toFixed(1)} ★ from {business.rating.count}+ Google reviews. <a className="underline" href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer">Read them on Google</a></p></Section>}
    <section className="bg-forest text-center text-white"><div className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="font-serif text-4xl">Planning a stay in Agona Swedru?</h2>
      <p className="mt-3 text-white/85">Tell us your dates and we will reply on WhatsApp to confirm availability.</p>
      <Link href="/contact" className="btn btn-gold mt-6">Reserve / Enquire</Link>
    </div></section>
  </>);
}
