import { business, siteUrl } from "@/data/business";
import { media } from "@/data/media";
import { rooms } from "@/data/rooms";

export default function JsonLd() {
  const l = business.location;
  const fullHeroUrl = `${siteUrl}${media.hero}`;
  const fullLogoUrl = `${siteUrl}/logo.jpg`;

  // 1. Primary LodgingBusiness Schema
  const lodgingBusiness: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "Motel", "BedAndBreakfast"],
    "@id": `${siteUrl}/#lodging`,
    name: business.name,
    legalName: business.name,
    url: siteUrl,
    logo: fullLogoUrl,
    image: [
      fullHeroUrl,
      `${siteUrl}/images/exterior/exterior-1.jpeg`,
      `${siteUrl}/images/exterior/exterior-2.jpeg`,
      `${siteUrl}/images/interior/lobby-stairs.jpeg`,
    ],
    description:
      "Royal Solwezi Lodge offers 17 comfortable guest rooms (Executive, Deluxe with air conditioning, and Standard with fan cooling), an outdoor summer hut, conference hall, and event grounds in Agona Swedru, Central Region, Ghana.",
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    currenciesAccepted: "GHS",
    paymentAccepted: "Cash, Mobile Money (MTN MoMo, Telecel Cash), Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: l.street,
      addressLocality: l.city,
      addressRegion: l.region,
      addressCountry: l.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      // Agona Swedru coordinate approximation
      latitude: 5.5333,
      longitude: -0.7000,
    },
    hasMap: business.googleMapsUrl,
    checkinTime: "12:00:00",
    checkoutTime: "14:00:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Standby Power Generator", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Security", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Gated Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Conference Room", value: true },
      { "@type": "LocationFeatureSpecification", name: "Summer Hut Relaxation Area", value: true },
      { "@type": "LocationFeatureSpecification", name: "Laundry & Ironing Services", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
    ],
    containsPlace: rooms.map((r) => ({
      "@type": "HotelRoom",
      name: r.title,
      description: r.description,
      bed: {
        "@type": "BedDetails",
        numberOfBeds: 1,
        typeOfBed: r.specs.bedType,
      },
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: r.specs.maxGuests,
      },
    })),
  };

  if (business.rating) {
    lodgingBusiness.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
    };
  }

  // 2. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: business.name,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#lodging`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([lodgingBusiness, websiteSchema]),
      }}
    />
  );
}
