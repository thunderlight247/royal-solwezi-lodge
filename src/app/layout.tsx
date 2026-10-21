import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FloatingActions from "@/components/FloatingActions";
import { business, siteUrl } from "@/data/business";
import { media } from "@/data/media";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Accommodation & Lodge in Agona Swedru, Ghana`,
    template: `%s | ${business.name}`,
  },
  description: `Welcome to ${business.name} in Agona Swedru, Central Region, Ghana. 17 comfortable guest rooms (Executive, Deluxe & Standard), peaceful summer hut relaxation, conference hall, and authentic hospitality.`,
  keywords: [
    "Royal Solwezi Lodge",
    "Royal Solwezi",
    "Hotels in Agona Swedru",
    "Lodging Agona Swedru",
    "Agona Swedru guest house",
    "Ekwamkrom Police Barrier hotel",
    "Central Region Ghana lodge",
    "Executive rooms Agona Swedru",
    "Deluxe rooms Agona Swedru",
    "Conference hall Agona Swedru",
    "Summer hut Agona Swedru",
    "Affordable rooms Swedru",
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${business.name} | Peaceful Lodging in Agona Swedru`,
    description: `17 air-conditioned and fan-cooled rooms, breezy summer hut, conference hall, and event grounds in Agona Swedru, Ghana.`,
    url: siteUrl,
    siteName: business.name,
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: `${siteUrl}${media.hero}`,
        width: 1200,
        height: 800,
        alt: `${business.name} - Front View & Summer Hut`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Agona Swedru, Ghana`,
    description: `Stay in serene comfort at Royal Solwezi Lodge in Agona Swedru, Central Region, Ghana.`,
    images: [`${siteUrl}${media.hero}`],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  verification: {
    google: "GjEZwEuaUdlCm7EfFKzPTiKtPqyb4CtclzSn7Vse5C0",
  },
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
