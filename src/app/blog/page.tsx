import type { Metadata } from 'next'
import BlogClient from './BlogClient'
export const metadata: Metadata = {
  title: 'Blog — Culinary Business Insights, F&B Trends & Expert Advice',
  description: 'Insights, trends, and expert advice from Kitchen Three — Egypt\'s leading B2B culinary consultancy. Articles on food business strategy, chef management, HACCP compliance, menu engineering, and more.',
  alternates: { canonical: 'https://www.kitchenthree.co/blog' },
  openGraph: { title: 'Culinary Business Blog | Kitchen Three Egypt', description: 'Expert insights on food business consulting, restaurant management, chef matchmaking, and F&B industry trends in Egypt and MENA.', url: 'https://www.kitchenthree.co/blog' },
}
export default function BlogPage() { return <BlogClient /> }
