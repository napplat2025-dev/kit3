import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story — Kitchen Three | From Cookies & Pies to Egypt\'s Leading Culinary Consultancy',
  description: 'The Kitchen Three story: from a home kitchen in 2013 to Egypt\'s leading B2B culinary consultancy. 13 years of building cloud kitchens, training chefs, and transforming food businesses across Cairo and beyond.',
  keywords: 'Kitchen Three story, culinary consultancy Egypt history, Cookies and Pies Cairo, cloud kitchen Egypt, HACCP certified kitchen Cairo, food business Egypt',
  alternates: { canonical: 'https://www.kitchenthree.co/our-story' },
  openGraph: {
    title: 'Our Story — Kitchen Three | Est. 2013 Cairo Egypt',
    description: 'From a home kitchen to Egypt\'s leading culinary consultancy. 13 years of cloud kitchens, Michelin chefs, and food business transformation.',
    url: 'https://www.kitchenthree.co/our-story',
    siteName: 'Kitchen Three',
    type: 'website',
  },
}

export default function OurStoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
