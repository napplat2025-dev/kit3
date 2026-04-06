import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Clients | Kitchen Three — F&B Consultancy Portfolio Egypt',
  description: 'Kitchen Three has delivered world-class culinary consulting to leading organisations across Egypt including AUC, Nestlé Egypt, Maggi, the Norwegian Embassy, ILO, Prime Holding, and Sea Queen Fleet. 15+ major clients since 2013.',
  keywords: 'Kitchen Three clients Egypt, culinary consultancy portfolio Cairo, F&B consulting clients Egypt, AUC culinary consulting, Nestle Egypt food consultant, hospitality clients Cairo, restaurant consulting portfolio Egypt',
  alternates: { canonical: 'https://www.kitchenthree.co/clients' },
  openGraph: {
    title: 'Our Clients | Kitchen Three — F&B Consultancy Portfolio Egypt',
    description: 'Trusted by AUC, Nestlé Egypt, the Norwegian Embassy, ILO, Prime Holding and more. 15+ major clients across corporate, HORECA, diplomatic, and F&B brand sectors.',
    url: 'https://www.kitchenthree.co/clients',
    siteName: 'Kitchen Three',
    type: 'website',
  },
}

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
