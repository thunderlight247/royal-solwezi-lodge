import { getAllPosts, getAllCategories } from '@/lib/queries'
import { pageMeta } from '@/lib/metadata'
import PostCard from '@/components/blog/PostCard'
import { BookOpen, Tag } from 'lucide-react'
import Link from 'next/link'

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

export const metadata = pageMeta(
  'Blog',
  'Stay up to date with the latest news, travel tips, and stories from Royal Solwezi Lodge in Agona Swedru, Central Region Ghana.',
  '/blog',
  {
    keywords: [
      'Royal Solwezi Lodge blog',
      'Agona Swedru travel tips',
      'Ghana lodge news',
      'Central Region Ghana tourism',
    ],
  }
)

export const revalidate = 60

export default async function BlogPage() {
  let posts: Post[] = []
  let categories: string[] = []

  try {
    ;[posts, categories] = await Promise.all([getAllPosts(), getAllCategories()])
  } catch {
    // Sanity not configured yet — show empty state
  }

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-800 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-500/20 mb-5">
            <BookOpen className="text-amber-400" size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Our Blog
          </h1>
          <p className="text-stone-300 text-lg max-w-xl mx-auto">
            Stories, tips &amp; news from Royal Solwezi Lodge — your home away from home in Agona Swedru.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      {categories.length > 0 && (
        <section className="bg-white border-b border-stone-100 sticky top-0 z-10 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <Link
              href="/blog"
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-medium bg-amber-600 text-white px-4 py-1.5 rounded-full"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog/category/${encodeURIComponent(cat)}`}
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 bg-stone-100 hover:bg-amber-50 hover:text-amber-700 px-4 py-1.5 rounded-full transition-colors"
              >
                <Tag size={11} />
                {cat}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">✍️</div>
            <h2 className="text-2xl font-semibold text-stone-700 mb-2 font-serif">
              Coming Soon
            </h2>
            <p className="text-stone-500 max-w-sm mx-auto">
              We&apos;re working on some great content. Check back soon for stories and travel tips from our lodge.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: Post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
