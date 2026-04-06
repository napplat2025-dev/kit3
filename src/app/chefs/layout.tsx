import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Michelin Chef Hire Egypt | International Chefs Cairo | Kitchen Three',
  description: 'Access Kitchen Three\'s exclusive roster of 10 international Michelin-pedigreed chefs available for hire in Egypt and the MENA region. French, Italian, Greek and Egyptian cuisine specialists — available for concept development, events, masterclasses, and long-term placements.',
  keywords: 'Michelin chef hire Egypt, international chef Cairo, chef hire Egypt, French chef Egypt, Italian chef Cairo, pastry chef Egypt, executive chef hire Cairo, culinary talent Egypt, chef placement MENA',
  alternates: { canonical: 'https://www.kitchenthree.co/chefs' },
  openGraph: {
    title: 'Michelin Chef Hire Egypt | International Chefs Cairo | Kitchen Three',
    description: '10 international Michelin-pedigreed chefs available for concept development, events, masterclasses, and placements across Egypt and MENA.',
    url: 'https://www.kitchenthree.co/chefs',
    siteName: 'Kitchen Three',
    type: 'website',
  },
}

export default function ChefsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
