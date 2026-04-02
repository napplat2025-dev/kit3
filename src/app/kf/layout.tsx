import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KF Digital Studio | AI-Powered Digital Studio · Cairo',
  description: 'AI-powered website creation, branding, and digital marketing for F&B brands, entrepreneurs, and businesses. Backed by Kitchen Three — Egypt\'s leading culinary consultancy since 2013.',
  openGraph: {
    title: 'KF Digital Studio | AI-Powered Digital Studio · Cairo',
    description: 'AI-powered website creation, branding, and digital marketing. Proposals within 48 hours. Based in Cairo, available worldwide.',
    url: 'https://www.kitchenthree.co/kf',
    siteName: 'KF Digital Studio',
  },
}

export default function KFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
