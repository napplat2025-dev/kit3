import type { Metadata } from 'next'
import ChefsClient from './ChefsClient'
export const metadata: Metadata = {
  title: 'Michelin-Pedigreed Chef Hire Egypt — 10 International Chefs | Kitchen Three',
  description: 'Meet Kitchen Three\'s exclusive roster of 10 international chefs including Michelin-pedigreed Enzo Bonneau, royal event chef Niko Koulousias, and MOF finalist Gérard Livigni. Available for hire in Egypt and MENA.',
  keywords: 'Michelin chef hire Egypt, international chefs Cairo, chef matchmaking Egypt, French pastry chef Egypt, Italian chef hire MENA, culinary talent Egypt, chef placement agency Cairo',
  alternates: { canonical: 'https://www.kitchenthree.co/chefs' },
  openGraph: { title: 'Michelin-Pedigreed International Chefs Egypt | Kitchen Three', description: 'Access 10 world-class chefs — Michelin-pedigreed, award-winning, globally experienced — for your culinary project in Egypt.', url: 'https://www.kitchenthree.co/chefs' },
}
export default function ChefsPage() { return <ChefsClient /> }
