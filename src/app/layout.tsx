import type { Metadata } from 'next'
import './globals.css'
import { WhatsAppButton } from '@/components/WhatsApp'

export const metadata: Metadata = {
  title: { default: 'Kitchen Three | B2B Culinary Consultancy — Cairo, Egypt', template: '%s | Kitchen Three' },
  description: "Egypt's leading B2B culinary consultancy. Chef matchmaking, food business consulting, HACCP-certified kitchen solutions, menu design, and culinary training — serving HORECA, corporates, and F&B brands since 2013.",
  keywords: ['culinary consultancy Egypt', 'B2B food consultant Cairo', 'chef matchmaking Egypt', 'HACCP training Cairo', 'restaurant consulting Egypt', 'menu design Egypt', 'cloud kitchen Egypt', 'food brand development Egypt', 'HORECA consultant Cairo'],
  openGraph: {
    title: 'Kitchen Three | B2B Culinary Consultancy — Cairo, Egypt',
    description: "Egypt's leading B2B culinary consultancy. Michelin-pedigreed chefs, HACCP-certified operations, and full-service food business consulting since 2013.",
    url: 'https://www.kitchenthree.co',
    siteName: 'Kitchen Three',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.kitchenthree.co' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kitchen Three',
  description: "Egypt's leading B2B culinary consultancy offering chef matchmaking, food business consulting, menu design, culinary training, and HACCP-certified kitchen solutions.",
  url: 'https://www.kitchenthree.co',
  logo: 'https://www.kitchenthree.co/images/logo.jpg',
  foundingDate: '2013',
  address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
  areaServed: ['Egypt', 'MENA'],
  serviceType: ['Culinary Consulting', 'Chef Matchmaking', 'Menu Design', 'HACCP Training', 'Cloud Kitchen Services', 'Food Brand Development'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}