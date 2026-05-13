import ClientsClient from './ClientsClient'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export default function ClientsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: 'https://www.kitchenthree.co' },
          { name: 'Clients', item: 'https://www.kitchenthree.co/clients' },
        ]}
      />
      <ClientsClient />
    </>
  )
}
