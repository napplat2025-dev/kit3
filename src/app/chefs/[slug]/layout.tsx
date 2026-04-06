import type { Metadata } from 'next'

const chefMeta: Record<string, { title: string; description: string; keywords: string }> = {
  'yann-bonneau': {
    title: 'Yann Bonneau — Michelin Pastry Chef for Hire in Egypt | Kitchen Three',
    description: 'Yann Bonneau is a French Michelin-pedigreed pastry chef and international consultant available for hire in Egypt through Kitchen Three. Specialising in patisserie, concept development, and culinary training for hotels and F&B brands.',
    keywords: 'Yann Bonneau chef, French pastry chef Egypt, Michelin pastry chef Cairo, pastry consultant Egypt, patisserie chef hire Egypt',
  },
  'enzo-bonneau': {
    title: 'Enzo Bonneau — Michelin-Trained Pastry Chef Egypt | Kitchen Three',
    description: 'Enzo Bonneau is a Michelin-trained French pastry chef and consultant available for hire in Egypt through Kitchen Three. Expert in high-end patisserie, dessert concept development, and culinary masterclasses.',
    keywords: 'Enzo Bonneau chef, Michelin trained pastry chef Egypt, French chef Cairo, pastry chef hire Egypt, dessert consultant Egypt',
  },
  'niko-koulousias': {
    title: 'Niko Koulousias — Executive Chef & Royal Event Specialist Egypt | Kitchen Three',
    description: 'Niko Koulousias is a Greek executive chef and royal event specialist available for hire in Egypt through Kitchen Three. Experienced in high-profile diplomatic events, luxury hospitality, and Mediterranean cuisine.',
    keywords: 'Niko Koulousias chef, Greek chef Egypt, executive chef hire Cairo, royal event chef Egypt, Mediterranean chef consultant',
  },
  'hadil-amasheh': {
    title: 'Hadil Amasheh — F&B Consultant & Culinary Expert Egypt | Kitchen Three',
    description: 'Hadil Amasheh is a Jordanian-Egyptian F&B entrepreneur and culinary consultant, and co-founder of Kitchen Three. Specialising in food business development, menu engineering, and culinary concept creation in Egypt.',
    keywords: 'Hadil Amasheh chef, F&B consultant Egypt, culinary consultant Cairo, food business consultant Egypt, menu engineering Cairo',
  },
  'gerard-livigni': {
    title: 'Gerard Livigni — MOF Finalist & Master Baker Egypt | Kitchen Three',
    description: 'Gerard Livigni is a French MOF finalist and master baker available for hire in Egypt through Kitchen Three. Specialising in artisan bread, viennoiserie, and French bakery concept development.',
    keywords: 'Gerard Livigni chef, MOF finalist baker Egypt, French baker Cairo, artisan bread consultant Egypt, bakery concept development Egypt',
  },
  'ramy-somoeil': {
    title: 'Ramy Somoeil — Mediterranean & Levantine Cuisine Chef Egypt | Kitchen Three',
    description: 'Ramy Somoeil is an Egyptian chef specialising in Mediterranean and Levantine cuisine, available through Kitchen Three for concept development, menu engineering, and culinary training in Egypt.',
    keywords: 'Ramy Somoeil chef, Mediterranean chef Egypt, Levantine cuisine consultant Cairo, Egyptian chef hire, menu development Egypt',
  },
  'walid-karim': {
    title: 'Walid Karim — Pizza Master & Italian Cuisine Specialist Egypt | Kitchen Three',
    description: 'Walid Karim is an Egyptian pizza master and Italian cuisine specialist available through Kitchen Three. Expert in Neapolitan pizza, Italian concept development, and culinary training for restaurant operators in Egypt.',
    keywords: 'Walid Karim chef, pizza chef Egypt, Italian cuisine consultant Cairo, Neapolitan pizza Egypt, pizza restaurant consultant',
  },
  'giovani-mascari': {
    title: 'Giovani Mascari — Executive Pizzaiolo & Innovation Chef Egypt | Kitchen Three',
    description: 'Giovani Mascari is an Italian executive pizzaiolo and innovation chef available for hire in Egypt through Kitchen Three. Specialising in pizza innovation, Italian F&B concepts, and culinary product development.',
    keywords: 'Giovani Mascari chef, Italian pizzaiolo Egypt, pizza innovation consultant Cairo, Italian chef hire Egypt, F&B innovation chef',
  },
  'luca-montersino': {
    title: 'Luca Montersino — Pastry Celebrity Chef Egypt | Kitchen Three',
    description: 'Luca Montersino is a celebrated Italian pastry chef and F&B empire builder available through Kitchen Three. Known globally for his pastry television presence and innovative approach to Italian patisserie and chocolate.',
    keywords: 'Luca Montersino chef, Italian pastry celebrity chef Egypt, chocolate consultant Cairo, pastry chef hire MENA, Italian patisserie Egypt',
  },
  'luca-borgioli': {
    title: 'Luca Borgioli — World Panettone Champion Egypt | Kitchen Three',
    description: 'Luca Borgioli is the World Panettone Champion and Italian artisan pastry chef available for hire in Egypt through Kitchen Three. Expert in panettone, artisan Italian baking, and premium bakery concept development.',
    keywords: 'Luca Borgioli chef, World Panettone Champion Egypt, Italian artisan baker Cairo, panettone consultant Egypt, premium bakery concept Egypt',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const meta = chefMeta[slug]

  if (!meta) {
    return {
      title: 'Chef Profile | Kitchen Three',
      description: 'International Michelin-pedigreed chef available for hire in Egypt through Kitchen Three culinary consultancy.',
    }
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: `https://www.kitchenthree.co/chefs/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.kitchenthree.co/chefs/${slug}`,
      siteName: 'Kitchen Three',
      type: 'profile',
    },
  }
}

export default function ChefLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
