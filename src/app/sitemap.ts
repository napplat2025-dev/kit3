import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.kitchenthree.co'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/chefs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/clients`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}
