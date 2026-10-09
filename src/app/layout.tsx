import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { business, siteUrl } from "@/data/business";
import { media } from "@/data/media";
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${business.name} & Restaurant | Lodge in Agona Swedru, Central Region, Ghana`, template: `%s | ${business.name}` },
  description: `Stay and dine at ${business.name} in Agona Swedru, Central Region, Ghana. View rooms and the pavilion menu, then book or order on WhatsApp.`,
  alternates: { canonical: "/" },
  openGraph: { siteName: business.name, type: "website", locale: "en_GH", images: [media.hero] },
  icons: { icon: "/logo.jpg" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        <Header /><main id="main">{children}</main><Footer /><JsonLd /></body>
    </html>);
}
