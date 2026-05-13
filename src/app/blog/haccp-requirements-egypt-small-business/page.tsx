'use client'
import HACCPArticle from './HACCPArticleClient'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
export default function HACCPPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: 'https://www.kitchenthree.co' },
          { name: 'Blog', item: 'https://www.kitchenthree.co/blog' },
          { name: 'HACCP Requirements for Small Food Businesses in Egypt', item: 'https://www.kitchenthree.co/blog/haccp-requirements-egypt-small-business' },
        ]}
      />
      <HACCPArticle />
    </>
  )
}
