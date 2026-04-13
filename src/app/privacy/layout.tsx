import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Kitchen Three',
  description: 'Kitchen Three\'s privacy policy. How we collect, use, and protect your personal data. Compliant with Egypt\'s Personal Data Protection Law No. 151 of 2020.',
  alternates: { canonical: 'https://www.kitchenthree.co/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
