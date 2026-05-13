import ServicesClient from './ServicesClient'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: 'https://www.kitchenthree.co' },
          { name: 'Services', item: 'https://www.kitchenthree.co/services' },
        ]}
      />
      <ServicesClient />
    </>
  )
}
