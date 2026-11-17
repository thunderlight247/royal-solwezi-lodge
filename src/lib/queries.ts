import { client } from '@/sanity/client'

// Fetch all published posts (listing page)
export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post" && defined(slug.current) && defined(publishedAt)] | order(featured desc, publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      author,
      publishedAt,
      categories,
      featured
    }`
  )
}

// Fetch a single post by slug
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
      body,
      seoTitle,
      seoDescription
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
