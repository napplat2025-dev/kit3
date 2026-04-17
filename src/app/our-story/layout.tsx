import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story — Kitchen Three | From Cookies & Pies to Cairo\'s Leading F&B Consultancy',
  description: 'The Kitchen Three story — thirteen years of building, operating, and learning. From Cookies & Pies in 2013 to Fresco jams, an infant food venture, school cafeteria contracts, frozen retail, a culinary school, and Kitchen Hive — Egypt\'s HACCP-certified cloud kitchen. The operating history behind Cairo\'s leading B2B culinary consultancy.',
  keywords: 'Kitchen Three story, Kitchen Three history, Cookies and Pies Cairo, Fresco jams Egypt, infant food Egypt, culinary school Cairo, cloud kitchen Egypt, Kitchen Hive, HACCP certified kitchen Egypt, F&B consultancy Cairo, food operator Egypt, CPG brand Egypt',
  alternates: { canonical: 'https://www.kitchenthree.co/our-story' },
  openGraph: {
    title: 'Our Story — Kitchen Three | Thirteen Years of Building F&B in Cairo',
    description: 'From a home kitchen bakery to Cairo\'s leading culinary consultancy. Thirteen years of operating cloud kitchens, retail brands, a culinary school, and HACCP-certified facilities. Kitchen Three advises from inside the work.',
    url: 'https://www.kitchenthree.co/our-story',
    siteName: 'Kitchen Three',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story — Kitchen Three | Thirteen Years of Building F&B in Cairo',
    description: 'Thirteen years of operating cloud kitchens, retail brands, a culinary school, and HACCP-certified facilities in Cairo.',
  },
}

export default function OurStoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
