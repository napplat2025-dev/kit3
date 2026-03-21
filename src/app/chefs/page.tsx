import type { Metadata } from 'next'
import ChefsClient from './ChefsClient'
export const metadata: Metadata = {
  title: 'Our Chef Roster — Michelin-Starred International Chefs in Egypt',
  description: 'Meet Kitchen Three\'s exclusive roster of 10 international chefs including Michelin-starred Enzo Bonneau, royal event chef Niko Koulousias, and MOF finalist Gérard Livigni. Available for hire in Egypt and MENA.',
  alternates: { canonical: 'https://www.kitchenthree.co/chefs' },
  openGraph: { title: 'Michelin-Starred International Chefs Egypt | Kitchen Three', description: 'Access 10 world-class chefs — Michelin-pedigreed, award-winning, globally experienced — for your culinary project in Egypt.', url: 'https://www.kitchenthree.co/chefs' },
}
export default function ChefsPage() { return <ChefsClient /> }
