import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/image'
import { CalendarDays, User, Tag } from 'lucide-react'

type Post = {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  coverImage?: { asset: { _ref: string }; alt?: string }
  author?: string
  publishedAt?: string
  categories?: string[]
  featured?: boolean
}

export default function PostCard({ post }: { post: Post }) {
  const coverUrl = post.coverImage?.asset?._ref
    ? urlFor(post.coverImage).width(600).height(380).fit('crop').url()
    : null

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-stone-100">
      <Link href={`/blog/${post.slug.current}`} className="block">
        {/* Cover Image */}
        <div className="relative overflow-hidden h-52 bg-stone-100">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={post.coverImage?.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-stone-200">
              <span className="text-stone-400 text-4xl">🏨</span>
            </div>
          )}
          {post.featured && (
            <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.slice(0, 2).map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full"
                >
                  <Tag size={10} />
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className="text-lg font-semibold text-stone-900 mb-2 leading-snug group-hover:text-amber-700 transition-colors line-clamp-2 font-serif">
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-sm text-stone-500 leading-relaxed line-clamp-2 mb-4">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-stone-400 border-t border-stone-100 pt-3">
            {post.author && (
              <span className="flex items-center gap-1">
                <User size={12} />
                {post.author}
              </span>
            )}
            {formattedDate && (
              <span className="flex items-center gap-1">
                <CalendarDays size={12} />
                {formattedDate}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}
