import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Egypt's Full-Stack Culinary Consultancy | Kitchen Three · Cairo",
  description: 'Egypt\'s leading B2B culinary consultancy. Michelin-trained chefs, HACCP-certified operations, menu engineering, cloud kitchen services, and F&B brand development. Est. Cairo 2013.',
  keywords: 'culinary consultancy Egypt, F&B consultant Cairo, Michelin chef hire Egypt, cloud kitchen Egypt, menu engineering Cairo, food brand development Egypt, HACCP certified kitchen Egypt',
  metadataBase: new URL('https://www.kitchenthree.co'),
  alternates: { canonical: 'https://www.kitchenthree.co' },
  openGraph: {
    title: "Egypt's Full-Stack Culinary Consultancy | Kitchen Three · Cairo",
    description: 'Egypt\'s leading B2B culinary consultancy since 2013. World-class chefs, HACCP-certified operations, and end-to-end F&B solutions.',
    url: 'https://www.kitchenthree.co',
    siteName: 'Kitchen Three',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/logo.jpg', width: 800, height: 600, alt: 'Kitchen Three — B2B Culinary Consultancy Cairo Egypt' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Egypt's Full-Stack Culinary Consultancy | Kitchen Three · Cairo",
    description: 'Egypt\'s leading B2B culinary consultancy since 2013.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.kitchenthree.co/#organization',
      name: 'Kitchen Three',
      alternateName: 'Kitchen 3',
      url: 'https://www.kitchenthree.co',
      logo: { '@type': 'ImageObject', url: 'https://www.kitchenthree.co/images/logo.jpg' },
      description: 'Egypt\'s leading B2B culinary consultancy. Empowering food businesses since 2013 with world-class chefs, HACCP-certified operations, and end-to-end culinary solutions.',
      foundingDate: '2013',
      foundingLocation: 'Cairo, Egypt',
      areaServed: ['Egypt', 'Middle East', 'North Africa'],
      email: 'kf@kitchenthree.co',
      sameAs: [
        'https://www.facebook.com/kitchenthree',
        'https://www.linkedin.com/company/kitchenthree',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cairo',
        addressCountry: 'EG',
      },
      knowsAbout: [
        'Culinary Consulting',
        'Chef Matchmaking',
        'HACCP Certification',
        'Cloud Kitchen Operations',
        'Menu Engineering',
        'Food Brand Development',
        'F&B Training',
        'Restaurant Technology',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.kitchenthree.co/#localbusiness',
      name: 'Kitchen Three',
      url: 'https://www.kitchenthree.co',
      image: 'https://www.kitchenthree.co/images/logo.jpg',
      description: 'B2B culinary consultancy offering chef matchmaking, menu engineering, cloud kitchen services, and F&B brand development in Egypt.',
      priceRange: '$$$$',
      servesCuisine: 'Culinary Consulting',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cairo',
        addressCountry: 'EG',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.0444,
        longitude: 31.2357,
      },
      openingHours: 'Mo-Fr 09:00-18:00',
      sameAs: [
        'https://www.facebook.com/kitchenthree',
        'https://www.linkedin.com/company/kitchenthree',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.kitchenthree.co/#website',
      url: 'https://www.kitchenthree.co',
      name: 'Kitchen Three',
      publisher: { '@id': 'https://www.kitchenthree.co/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.kitchenthree.co/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WN6H912F31" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WN6H912F31');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
