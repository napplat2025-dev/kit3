import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'F&B Business Insights Egypt | Kitchen Three Blog',
  description: 'Expert insights on F&B business, menu engineering, cloud kitchen operations, HACCP compliance, and culinary consulting in Egypt. Written by Kitchen Three — Cairo\'s leading culinary consultancy since 2013.',
  keywords: 'F&B business tips Egypt, restaurant management advice Cairo, menu engineering guide Egypt, cloud kitchen Egypt guide, HACCP compliance Egypt, culinary business Egypt, food entrepreneur Egypt, F&B startup Egypt',
  alternates: { canonical: 'https://www.kitchenthree.co/blog' },
  openGraph: {
    title: 'F&B Business Insights Egypt | Kitchen Three Blog',
    description: 'Expert insights on F&B business, menu engineering, cloud kitchen operations, and culinary consulting in Egypt — from Kitchen Three\'s team of specialists.',
    url: 'https://www.kitchenthree.co/blog',
    siteName: 'Kitchen Three',
    type: 'website',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
