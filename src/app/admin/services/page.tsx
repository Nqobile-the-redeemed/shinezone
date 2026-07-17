import type { Metadata } from 'next'
import { AdminScaffold } from '@/components/shinezone/AdminScaffold'

export const metadata: Metadata = {
  title: 'Services | Shinezone Admin'
}

export default function AdminServicesPage() {
  return (
    <AdminScaffold
      title='Services'
      description='Edit service content, scope, exclusions, hazards, equipment, PPE, FAQs and visibility once the backend content model is in place.'
    />
  )
}
