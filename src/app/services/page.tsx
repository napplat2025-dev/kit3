import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Culinary Consulting Services Egypt — Chef Matchmaking, Cloud Kitchen, Menu Design',
  description: 'Kitchen Three offers 6 B2B culinary services in Cairo, Egypt: culinary consulting, chef matchmaking, design services, recruitment & training, cloud kitchen operations, and restaurant technology.',
  alternates: { canonical: 'https://www.kitchenthree.co/services' },
  openGraph: { title: 'Culinary Consulting Services Egypt | Kitchen Three', description: 'Six integrated B2B culinary service pillars — from concept to operational excellence. Serving HORECA, corporates, and F&B brands across Egypt.', url: 'https://www.kitchenthree.co/services' },
}

export default function ServicesPage() { return <ServicesClient /> }
