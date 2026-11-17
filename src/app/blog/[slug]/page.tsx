import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { getPostBySlug, getAllPostSlugs } from '@/lib/queries'
import { portableTextComponents } from '@/components/blog/PortableTextComponents'
import RelatedPosts from '@/components/blog/RelatedPosts'
import { urlFor } from '@/sanity/image'
import { business, siteUrl } from '@/data/business'
import type { Metadata } from 'next'
import { CalendarDays, User, ArrowLeft, Tag } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs()
    return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  let post: Awaited<ReturnType<typeof getPostBySlug>> = null

  try {
    post = await getPostBySlug(slug)
  } catch {
    // ignore
  }

  if (!post) {
    return { title: 'Post Not Found' }
  }

  const title = post.seoTitle || post.title
  const description = post.seoDescription || post.excerpt || `Read ${post.title} on the Royal Solwezi Lodge blog.`
  const coverUrl = post.coverImage?.asset?._ref
    ? urlFor(post.coverImage).width(1200).height(630).fit('crop').url()
    : `${siteUrl}/images/exterior/front.jpg`

  return {
    title: `${title} | ${business.name}`,
    description,
    alternates: { canonical: `${siteUrl}/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/blog/${slug}`,
      siteName: business.name,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author || business.name],
      images: [{ url: coverUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [coverUrl],
    },
  }
}

export const revalidate = 60

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  let post: Awaited<ReturnType<typeof getPostBySlug>> = null

  try {
    post = await getPostBySlug(slug)
  } catch {
    // Sanity not configured
  }

  if (!post) notFound()

  const coverUrl = post.coverImage?.asset?._ref
    ? urlFor(post.coverImage).width(1200).height(600).fit('crop').url()
    : null

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

  // JSON-LD Article Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || '',
    image: coverUrl || `${siteUrl}/images/exterior/front.jpg`,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author || business.name,
    },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      url: siteUrl,
    },
    url: `${siteUrl}/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white">
        {/* Cover Image */}
        {coverUrl && (
          <div className="relative w-full h-72 md:h-96 bg-stone-900">
            <Image
              src={coverUrl}
              alt={post.coverImage?.alt || post.title}
              fill
              className="object-cover opacity-80"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-900/60" />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-amber-700 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat: string) => (
                <Link
                  key={cat}
                  href={`/blog/category/${encodeURIComponent(cat)}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-full transition-colors"
                >
                  <Tag size={10} />
                  {cat}
                </Link>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4 font-serif">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-stone-400 border-b border-stone-100 pb-6 mb-8">
            {post.author && (
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {post.author}
              </span>
            )}
            {formattedDate && (
              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} />
                {formattedDate}
              </span>
            )}
          </div>

          {/* Body */}
          {post.body ? (
            <div className="prose-custom">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>
          ) : (
            <p className="text-stone-500 italic">No content yet.</p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-stone-100">
              <span className="text-xs text-stone-400 font-medium self-center mr-1">Tags:</span>
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Related Posts */}
          <RelatedPosts posts={post.relatedPosts ?? []} />

          {/* Footer CTA */}
          <div className="mt-16 p-6 bg-amber-50 rounded-2xl text-center border border-amber-100">
            <h3 className="font-serif text-xl font-semibold text-stone-800 mb-2">
              Stay with us in Agona Swedru
            </h3>
            <p className="text-stone-600 text-sm mb-4">
              Book a comfortable room at Royal Solwezi Lodge — your base for exploring Central Region Ghana.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm px-6 py-2.5 rounded-full transition-colors"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
