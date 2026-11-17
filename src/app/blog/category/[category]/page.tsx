import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostsByCategory, getAllCategorySlugs } from '@/lib/queries'
import { pageMeta } from '@/lib/metadata'
import PostCard from '@/components/blog/PostCard'
import { ArrowLeft, Tag } from 'lucide-react'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ category: string }>
}

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

export async function generateStaticParams() {
  try {
    return await getAllCategorySlugs()
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const label = decodeURIComponent(category)
  return pageMeta(
    `${label} — Blog`,
    `Browse all Royal Solwezi Lodge blog posts about ${label}. Stories, travel tips and news from Agona Swedru, Central Region Ghana.`,
    `/blog/category/${category}`,
    { keywords: [label, 'Royal Solwezi Lodge', 'Agona Swedru'] }
  )
}

export const revalidate = 60

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const label = decodeURIComponent(category)
  let posts: Post[] = []

  try {
    posts = await getPostsByCategory(label)
  } catch {
    // Sanity not configured
  }

  if (posts.length === 0) notFound()

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
            <Tag size={14} />
            Category
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-3">
            {label}
          </h1>
          <p className="text-stone-400 text-sm">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'}
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-amber-700 transition-colors mb-10"
        >
          <ArrowLeft size={15} />
          All Posts
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}
