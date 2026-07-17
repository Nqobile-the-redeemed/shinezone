import type { Metadata } from 'next'
import { AdminScaffold } from '@/components/shinezone/AdminScaffold'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Shinezone'
}

export default function AdminPage() {
  return (
    <AdminScaffold
      title='Admin Dashboard'
      description='Overview cards should show new requests, emergency requests, today’s bookings, awaiting quotation, confirmed jobs, jobs at risk, missed arrival targets, open rectifications and completed jobs this month.'
    />
  )
}
