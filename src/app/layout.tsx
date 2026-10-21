import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FloatingActions from "@/components/FloatingActions";
import { business, siteUrl } from "@/data/business";
import { media } from "@/data/media";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${business.name} | Lodge in Agona Swedru, Central Region, Ghana`, template: `%s | ${business.name}` },
  description: `Stay at ${business.name} in Agona Swedru, Central Region, Ghana. Comfortable guest rooms, summer hut relaxation, conference hall, and warm Ghanaian hospitality.`,
  alternates: { canonical: "/" },
  openGraph: { siteName: business.name, type: "website", locale: "en_GH", images: [media.hero] },
  icons: { icon: "/logo.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <JsonLd />
      </body>
    </html>
  );
}
