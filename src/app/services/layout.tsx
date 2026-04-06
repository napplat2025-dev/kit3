import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'F&B Consulting Services Egypt | Kitchen Three — 8 Service Pillars',
  description: 'Kitchen Three offers 8 integrated F&B consulting services in Egypt: culinary consulting, Michelin chef hire, cloud kitchen rental, brand design, restaurant technology, recruitment & training, site selection, and financial turnaround. Cairo-based since 2013.',
  keywords: 'F&B consulting services Egypt, culinary consulting Cairo, restaurant consulting Egypt, cloud kitchen rental Egypt, Michelin chef hire Egypt, menu engineering Cairo, food brand design Egypt, restaurant technology Egypt, F&B financial turnaround Egypt',
  alternates: { canonical: 'https://www.kitchenthree.co/services' },
  openGraph: {
    title: 'F&B Consulting Services Egypt | Kitchen Three — 8 Service Pillars',
    description: '8 integrated culinary consulting services under one roof — from concept to launch and beyond. Cairo-based, HACCP-certified, Michelin-pedigreed.',
    url: 'https://www.kitchenthree.co/services',
    siteName: 'Kitchen Three',
    type: 'website',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
