import type { Metadata } from 'next'
import ClientsClient from './ClientsClient'
export const metadata: Metadata = {
  title: 'Our Clients — F&B Brands, Corporates & HORECA Partners',
  description: 'Kitchen Three has worked with AUC, Nestlé Egypt, Maggi, Norwegian Embassy, ILO, Prime Holding, Sea Queen Fleet, and more. Trusted B2B culinary consultancy across Egypt since 2013.',
  alternates: { canonical: 'https://www.kitchenthree.co/clients' },
  openGraph: { title: 'Client Portfolio | Kitchen Three Culinary Consultancy Egypt', description: 'Trusted by 15+ major clients across FMCG, HORECA, corporate, and diplomatic sectors in Egypt and MENA.', url: 'https://www.kitchenthree.co/clients' },
}
export default function ClientsPage() { return <ClientsClient /> }
