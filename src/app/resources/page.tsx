import type { Metadata } from 'next'
import ResourcesClient from './ResourcesClient'
export const metadata: Metadata = {
  title: 'Free Resources — F&B Startup Guides, HACCP Checklists & Menu Templates',
  description: 'Free downloadable guides for food entrepreneurs in Egypt: F&B startup checklist, menu engineering templates, HACCP compliance guides, and more from Kitchen Three.',
  keywords: 'F&B startup guide Egypt, HACCP checklist download, menu engineering template, restaurant business plan Egypt, food costing template, culinary resources free',
  alternates: { canonical: 'https://www.kitchenthree.co/resources' },
  openGraph: { title: 'Free F&B Resources Egypt | Kitchen Three', description: 'Free guides and tools for food entrepreneurs: startup checklists, menu templates, HACCP guides, and culinary business resources.', url: 'https://www.kitchenthree.co/resources' },
}
export default function ResourcesPage() { return <ResourcesClient /> }
