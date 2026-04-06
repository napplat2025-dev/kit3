import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Kitchen Three | Hire a Culinary Consultant in Cairo, Egypt',
  description: 'Get in touch with Kitchen Three — Egypt\'s leading B2B culinary consultancy. Available for F&B consulting, Michelin chef hire, cloud kitchen rental, menu engineering, and restaurant technology projects across Egypt and the MENA region. Cairo-based since 2013.',
  keywords: 'contact culinary consultant Egypt, hire F&B consultant Cairo, culinary consultancy contact Egypt, restaurant consultant enquiry Cairo, Kitchen Three contact, F&B consulting enquiry Egypt, Michelin chef hire enquiry',
  alternates: { canonical: 'https://www.kitchenthree.co/contact' },
  openGraph: {
    title: 'Contact Kitchen Three | Hire a Culinary Consultant in Cairo, Egypt',
    description: 'Ready to start your F&B project? Contact Kitchen Three in Cairo — available for consulting engagements across Egypt and the MENA region.',
    url: 'https://www.kitchenthree.co/contact',
    siteName: 'Kitchen Three',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
