import { client } from '@/sanity/client'

// Shared post projection fields
const POST_CARD_FIELDS = `
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  author,
  publishedAt,
  categories,
  tags,
  featured
`

// Fetch all published posts (listing page)
export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post" && defined(slug.current) && defined(publishedAt)]
     | order(featured desc, publishedAt desc) {
      ${POST_CARD_FIELDS}
    }`
  )
}

// Fetch posts by category slug (URL-safe category name)
export async function getPostsByCategory(category: string) {
  // Category in URL is lowercased + hyphenated; match against stored values
  return client.fetch(
    `*[_type == "post" && defined(slug.current) && defined(publishedAt)
      && $category in categories]
     | order(featured desc, publishedAt desc) {
      ${POST_CARD_FIELDS}
    }`,
    { category }
  )
}

// Get all unique categories across published posts
export async function getAllCategories(): Promise<string[]> {
  const posts = await client.fetch(
    `*[_type == "post" && defined(publishedAt)] { categories }`
  )
  const all: string[] = posts.flatMap((p: { categories?: string[] }) => p.categories ?? [])
  return [...new Set(all)].sort()
}

// Fetch a single post by slug (full content + related posts)
export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      author,
      publishedAt,
      categories,
      tags,
      body,
      seoTitle,
      seoDescription,
      "relatedPosts": relatedPosts[]->{
        ${POST_CARD_FIELDS}
      }
    }`,
    { slug }
  )
}

// Fetch all slugs (for generateStaticParams)
export async function getAllPostSlugs() {
  return client.fetch(
    `*[_type == "post" && defined(slug.current)] { "slug": slug.current }`
  )
}

// Fetch all category slugs (for generateStaticParams on /blog/category/[category])
export async function getAllCategorySlugs() {
  const categories = await getAllCategories()
  return categories.map((cat) => ({ category: cat }))
}
