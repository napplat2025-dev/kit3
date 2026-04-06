import { MetadataRoute } from 'next'
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: '7aa58hgk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://www.kitchenthree.co'

  const chefSlugs = [
    'yann-bonneau', 'enzo-bonneau', 'niko-koulousias', 'hadil-amasheh',
    'gerard-livigni', 'ramy-somoeil', 'walid-karim', 'giovani-mascari',
    'luca-montersino', 'luca-borgioli'
  ]

  // Fetch all published blog article slugs from Sanity
  let blogSlugs: string[] = []
  try {
    const articles = await client.fetch<{ slug: { current: string }; publishedAt: string }[]>(
      `*[_type == "article" && defined(slug.current)] | order(publishedAt desc) { slug, publishedAt }`
    )
    blogSlugs = articles.map(a => a.slug.current)
  } catch (e) {
    // Fallback to known slugs if Sanity fetch fails
    blogSlugs = [
      'cloud-kitchen-egypt-guide',
      'haccp-requirements-egypt',
      'menu-engineering-food-costing-egypt',
      'food-brand-development-egypt',
      'what-does-a-culinary-consultant-do-egypt',
      'how-to-hire-michelin-star-chef-egypt',
    ]
  }

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/chefs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/clients`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/academy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/invest`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/our-story`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...chefSlugs.map(slug => ({
      url: `${base}/chefs/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...blogSlugs.map(slug => ({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
