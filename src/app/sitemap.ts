import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.kitchenthree.co'
  const chefSlugs = [
    'yann-bonneau', 'enzo-bonneau', 'niko-koulousias', 'hadil-amasheh',
    'gerard-livigni', 'ramy-somoeil', 'walid-karim', 'giovani-mascari',
    'luca-montersino', 'luca-borgioli'
  ]
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/chefs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/clients`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/academy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/invest`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/our-story`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...chefSlugs.map(slug => ({
      url: `${base}/chefs/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
