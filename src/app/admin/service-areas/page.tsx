import type { Metadata } from 'next'
import { AdminScaffold } from '@/components/shinezone/AdminScaffold'

export const metadata: Metadata = {
  title: 'Service Areas | Shinezone Admin'
}

export default function AdminServiceAreasPage() {
  return (
    <AdminScaffold
      title='Service Areas'
      description='Manage scheduled service areas, emergency-response postcodes, manual-review areas and public wording so the site never promises unsupported coverage.'
    />
  )
}
