import type { Metadata } from 'next'
import { Amiri, IBM_Plex_Sans_Arabic } from 'next/font/google'
import { siteUrl } from '@/i18n/config'

/**
 * Cormorant Garamond and DM Sans carry no Arabic glyphs, so the Arabic tree
 * loads its own pair and remaps --serif / --sans inside .rtl-root.
 * Amiri mirrors Cormorant's classical feel; IBM Plex Sans Arabic mirrors DM Sans.
 */
const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-serif-ar',
  display: 'swap',
})

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans-ar',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'استشارات الطهي المتكاملة في مصر | Kitchen Three · القاهرة',
  description:
    'شركة استشارات طهوية رائدة في مصر لقطاع الأعمال منذ 2013. طهاة عالميون، وعمليات معتمدة وفق HACCP، وهندسة قوائم الطعام، والمطابخ السحابية، وتطوير العلامات الغذائية.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/ar`,
    languages: {
      en: siteUrl,
      ar: `${siteUrl}/ar`,
      'x-default': siteUrl,
    },
  },
  openGraph: {
    title: 'استشارات الطهي المتكاملة في مصر | Kitchen Three',
    description: 'شركة استشارات طهوية رائدة في مصر لقطاع الأعمال منذ 2013.',
    url: `${siteUrl}/ar`,
    siteName: 'Kitchen Three',
    locale: 'ar_EG',
    type: 'website',
    images: [{ url: '/images/logo.jpg', width: 800, height: 600, alt: 'Kitchen Three' }],
  },
  robots: { index: true, follow: true },
}

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ar" dir="rtl" className={`${amiri.variable} ${plexArabic.variable} rtl-root`}>
      {children}
    </div>
  )
}
