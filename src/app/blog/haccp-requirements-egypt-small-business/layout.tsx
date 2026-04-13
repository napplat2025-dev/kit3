import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HACCP Requirements for Small Food Businesses in Egypt | Kitchen Three Blog',
  description: 'Complete guide to HACCP certification requirements for small food businesses in Egypt. Learn about NFSA compliance, food safety standards, and how to get HACCP certified in Cairo and across Egypt.',
  keywords: 'HACCP requirements Egypt, HACCP certification small business Egypt, NFSA food safety, food safety compliance Cairo, HACCP certified kitchen Egypt, food business regulations Egypt',
  alternates: { canonical: 'https://www.kitchenthree.co/blog/haccp-requirements-egypt-small-business' },
  openGraph: {
    title: 'HACCP Requirements for Small Food Businesses in Egypt',
    description: 'What every Egyptian food entrepreneur needs to know about HACCP certification and food safety compliance.',
    url: 'https://www.kitchenthree.co/blog/haccp-requirements-egypt-small-business',
    siteName: 'Kitchen Three',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HACCP Requirements for Small Food Businesses in Egypt',
    description: 'What every Egyptian food entrepreneur needs to know about HACCP certification and food safety compliance.',
  },
}

export default function HACCPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
