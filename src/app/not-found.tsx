import Link from "next/link";
import { PageHero } from "@/components/Section";

export default function NotFound() {
  return (
    <>
      <PageHero
        tag="404"
        title="Page Not Found"
        intro="The page you are looking for does not exist or has been moved."
      />
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <p className="mb-6 text-sm text-ink/70">
          We couldn&apos;t find the accommodation or service page you requested. Please return home or explore our rooms.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-gold">
            Return to Homepage
          </Link>
          <Link href="/rooms" className="btn btn-outline">
            View Guest Rooms
          </Link>
        </div>
      </div>
    </>
  );
}
