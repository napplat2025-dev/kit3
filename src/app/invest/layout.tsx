import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'F&B Investment Opportunities Egypt | Kitchen Three',
  description: 'Kitchen Three co-invests in Egypt F&B ventures — from HACCP-certified cloud kitchen infrastructure to culinary concept development. Partnering with investors, operators, and capital partners from Egypt, the GCC, and globally. Est. Cairo 2013.',
  keywords: 'F&B investment Egypt, food and beverage investment Cairo, cloud kitchen investment Egypt, restaurant investment Egypt, GCC investor Egypt F&B, culinary venture Egypt, F&B co-investment Egypt, Egypt food sector investment',
  alternates: { canonical: 'https://www.kitchenthree.co/invest' },
  openGraph: {
    title: 'F&B Investment Opportunities Egypt | Kitchen Three',
    description: 'Co-invest in Egypt\'s fastest-growing F&B sector with Kitchen Three — cloud kitchen infrastructure, culinary concepts, and production facilities. GCC and global investors welcome.',
    url: 'https://www.kitchenthree.co/invest',
    siteName: 'Kitchen Three',
    type: 'website',
  },
}

export default function InvestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
