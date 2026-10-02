import { pageMeta } from "@/lib/metadata";
import { business } from "@/data/business";
import EnquiryForm from "@/components/EnquiryForm";
import { PageHero, Section } from "@/components/Section";
export const metadata = pageMeta("Contact & Reservation Enquiry", "Enquire about a stay at Royal Solwezi Lodge in Agona Swedru, Ghana. Send your dates and details on WhatsApp.", "/contact");
export default async function Contact({ searchParams }: { searchParams: Promise<{ room?: string }> }) {
  const { room } = await searchParams;
  return (<><PageHero title="Reserve / Enquire" intro="Fill in your details and we will prepare a WhatsApp message for you to send." />
    <Section><div className="mx-auto max-w-3xl"><EnquiryForm defaultRoom={room ?? ""} />
      <p className="mt-6 text-sm">{business.phone && <>Call: <a className="underline" href={`tel:${business.phone}`}>{business.phone}</a> · </>}{business.email && <>Email: <a className="underline" href={`mailto:${business.email}`}>{business.email}</a></>}</p></div></Section></>);
}
