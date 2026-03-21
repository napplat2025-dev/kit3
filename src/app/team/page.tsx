import type { Metadata } from 'next'
import TeamClient from './TeamClient'
export const metadata: Metadata = {
  title: 'Our Team — The People Behind Kitchen Three',
  description: 'Meet the team behind Kitchen Three — Egypt\'s leading B2B culinary consultancy. Founded by Karim Fayed and Hadil Amasheh in 2013, with a powerhouse of culinary and business expertise.',
  alternates: { canonical: 'https://www.kitchenthree.co/team' },
  openGraph: { title: 'Meet Our Team | Kitchen Three Culinary Consultancy', description: 'The people and expertise behind Kitchen Three — Cairo\'s premier B2B food business consultancy since 2013.', url: 'https://www.kitchenthree.co/team' },
}
export default function TeamPage() { return <TeamClient /> }
