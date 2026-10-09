import { Phone, MessageCircle, Crown } from "lucide-react";
import { pageMeta } from "@/lib/metadata";
import { business } from "@/data/business";
import BookingForm from "@/components/BookingForm";
import { PageHero } from "@/components/Section";
import { whatsappUrl } from "@/lib/whatsapp";
export const metadata = pageMeta("Book Your Stay", "Send a booking request to Royal Solwezi Lodge in Agona Swedru, Ghana. Your request is prepared for WhatsApp.", "/book");
export default async function Book({ searchParams }: { searchParams: Promise<{ room?: string }> }) {
  const { room } = await searchParams;
  return (<><PageHero tag="Reservations" title="Book Your Stay" intro="Send us your dates and we will confirm availability." />
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 lg:grid-cols-3">
      <div className="lg:col-span-2"><BookingForm defaultRoom={room ?? ""} /></div>
      <aside className="space-y-6">
        <div className="card p-6"><h3 className="font-serif text-xl">Need Assistance?</h3>
          <p className="mt-2 text-sm">Talk to the lodge directly.</p>
          <p className="mt-3 flex items-center gap-2 text-forest"><Phone size={16} className="text-gold" /> <a href={`tel:${business.phone}`}>{business.phone}</a></p>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 text-forest"><MessageCircle size={16} className="text-gold" /> Chat on WhatsApp</a></div>
        <div className="rounded-2xl bg-forest p-6 text-white"><h3 className="flex items-center gap-2 font-serif text-xl text-white"><Crown size={18} className="text-gold" /> Why Book Direct?</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/85"><li>Speak to the lodge team directly</li><li>Quick replies on WhatsApp</li><li>Ask about room options and upgrades</li></ul></div>
      </aside>
    </div></>);
}
