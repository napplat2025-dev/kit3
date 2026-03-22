import { defineQuery } from 'groq'

export const ARTICLES_QUERY = defineQuery(`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    readTime,
    featured,
    publishedAt,
  }
`)

export const ARTICLE_QUERY = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    excerpt,
    readTime,
    featured,
    publishedAt,
    body,
  }
`)
