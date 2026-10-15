"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { whatsappUrl, hasWhatsApp } from "@/lib/whatsapp";

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

const faqs: FaqItem[] = [
  {
    question: "What are the standard check-in and check-out times?",
    answer:
      "Standard check-in begins at 2:00 PM, and check-out is by 11:00 AM. If you require early check-in or late check-out, please message us on WhatsApp in advance and we will accommodate based on room availability.",
    category: "Stay & Rooms",
  },
  {
    question: "Do you have backup electricity and continuous water?",
    answer:
      "Yes. The lodge is equipped with a dedicated standby power generator and on-site water storage systems to ensure uninterrupted electricity and running water throughout your entire stay.",
    category: "Lodge Facilities",
  },
  {
    question: "Is the Pavilion Restaurant and Bar open to non-lodging guests?",
    answer:
      "Absolutely! Our open-air pavilion restaurant and licensed bar welcome walk-in visitors and diners from Agona Swedru and neighboring areas for breakfast, local specialties, charcoal grills, and evening drinks.",
    category: "Dining & Bar",
  },
  {
    question: "What payment methods are accepted at the lodge?",
    answer:
      "We accept all major Ghanaian Mobile Money services (MTN Mobile Money, Telecel Cash), direct bank transfers, and cash payments at the front desk upon arrival.",
    category: "Payments",
  },
  {
    question: "Is guest parking secure on the property?",
    answer:
      "Yes. Royal Solwezi Lodge is situated within a secure, gated compound with 24/7 security personnel and complimentary on-site parking for all guests and event attendees.",
    category: "Security & Access",
  },
  {
    question: "Can I host a conference, wedding, or celebration at the lodge?",
    answer:
      "Yes. We offer an air-conditioned conference room for corporate meetings and executive sessions, as well as our open-air event center and pavilion for birthdays, family parties, and receptions.",
    category: "Events & Meetings",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-16" id="faq">
      <SectionHeader
        tag="Frequently Asked Questions"
        title="Everything You Need to Know"
        intro="Common questions about accommodation, dining, amenities, and policies at Royal Solwezi Lodge."
      />

      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={faq.question}
              className={`card overflow-hidden transition-all duration-200 ${
                isOpen ? "border-gold/50 shadow-md ring-1 ring-gold/20" : "hover:border-gold/30"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors sm:p-6"
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                      isOpen ? "bg-gold text-forest-dark" : "bg-tint text-forest"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="font-serif text-lg font-medium text-forest sm:text-xl">
                    {faq.question}
                  </span>
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-forest/60 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-gold-deep" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-line/70 px-5 pb-5 pt-4 text-sm leading-relaxed text-ink/75 sm:px-6 sm:pb-6">
                      <p>{faq.answer}</p>
                      {faq.category && (
                        <span className="mt-3 inline-block rounded-full bg-tint px-2.5 py-0.5 text-[11px] font-semibold text-gold-deep">
                          {faq.category}
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Still have questions CTA */}
      <div className="mt-10 rounded-2xl bg-tint/80 border border-line p-6 text-center">
        <HelpCircle size={24} className="mx-auto text-gold-deep" />
        <h3 className="mt-2 font-serif text-xl text-forest">Still Have Questions?</h3>
        <p className="mt-1 text-sm text-ink/70">
          Our front desk team is always available to assist with custom requests and inquiries.
        </p>
        {hasWhatsApp() && (
          <a
            href={whatsappUrl("Hello Royal Solwezi Lodge, I have a question regarding my stay.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-sm mt-4 shadow-sm"
          >
            <MessageCircle size={15} /> Chat with Front Desk on WhatsApp
          </a>
        )}
      </div>
    </section>
  );
}
