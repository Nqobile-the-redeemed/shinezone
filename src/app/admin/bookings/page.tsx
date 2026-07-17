import type { Metadata } from 'next'
import { AdminScaffold } from '@/components/shinezone/AdminScaffold'

export const metadata: Metadata = {
  title: 'Bookings | Shinezone Admin'
}

export default function AdminBookingsPage() {
  return (
    <AdminScaffold
      title='Bookings'
      description='List, filter and triage booking requests by reference, status, priority, service, postcode, hazard flags, date, client and assigned team.'
    />
  )
}
