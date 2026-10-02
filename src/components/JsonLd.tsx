import { business, siteUrl } from "@/data/business";
export default function JsonLd() {
  const l = business.location;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org", "@type": ["LodgingBusiness", "LocalBusiness"],
    name: business.name, url: siteUrl, image: `${siteUrl}/images/hero-exterior.jpg`, logo: `${siteUrl}/images/logo.jpg`,
    address: { "@type": "PostalAddress", streetAddress: l.street, addressLocality: l.city, addressRegion: l.region, addressCountry: l.countryCode },
    hasMap: business.googleMapsUrl,
  };
  if (business.phone) data.telephone = business.phone;
  if (business.email) data.email = business.email;
  if (business.rating) data.aggregateRating = { "@type": "AggregateRating", ratingValue: business.rating.value, reviewCount: business.rating.count };
  const site = { "@context": "https://schema.org", "@type": "WebSite", name: business.name, url: siteUrl };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([data, site]) }} />;
}
