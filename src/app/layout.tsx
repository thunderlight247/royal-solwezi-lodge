import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { business, siteUrl } from "@/data/business";
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-serif" });
const sans = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sans" });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${business.name} | Lodge in Agona Swedru, Central Region, Ghana`, template: `%s | ${business.name}` },
  description: `Stay at ${business.name} in Agona Swedru, Central Region, Ghana. View rooms and facilities, find the lodge on Google Maps and enquire on WhatsApp.`,
  alternates: { canonical: "/" },
  openGraph: { siteName: business.name, type: "website", locale: "en_GH", images: ["/images/hero-exterior.jpg"] },
  icons: { icon: "/images/logo.jpg" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        <Header /><main id="main">{children}</main><Footer /><JsonLd /></body>
    </html>);
}
