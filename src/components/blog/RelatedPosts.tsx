import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/image'
import { CalendarDays } from 'lucide-react'

type RelatedPost = {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  coverImage?: { asset: { _ref: string }; alt?: string }
  publishedAt?: string
  categories?: string[]
}

export default function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="mt-16 pt-10 border-t border-stone-200">
      <h2 className="text-xl font-bold font-serif text-stone-800 mb-6">
        You might also enjoy
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {posts.map((post) => {
          const coverUrl = post.coverImage?.asset?._ref
            ? urlFor(post.coverImage).width(400).height(240).fit('crop').url()
            : null
          const date = post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric',
              })
            : null

          return (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group bg-stone-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow border border-stone-100"
            >
              <div className="relative h-36 bg-stone-200">
                {coverUrl ? (
                  <Image
                    src={coverUrl}
                    alt={post.coverImage?.alt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-stone-200">
                    <span className="text-3xl">🏨</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-stone-800 leading-snug group-hover:text-amber-700 transition-colors line-clamp-2 font-serif">
                  {post.title}
                </p>
                {date && (
                  <p className="flex items-center gap-1 text-xs text-stone-400 mt-2">
                    <CalendarDays size={11} />
                    {date}
                  </p>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
