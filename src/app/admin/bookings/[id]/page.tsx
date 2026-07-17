import type { Metadata } from 'next'
import { AdminScaffold } from '@/components/shinezone/AdminScaffold'

export const metadata: Metadata = {
  title: 'Booking Detail | Shinezone Admin'
}

export default function AdminBookingDetailPage() {
  return (
    <AdminScaffold
      title='Booking Detail'
      description='Show client, site, service, risk flags, waste, requested dates, files, status timeline, assigned staff, timestamps, notes, documents and audit history.'
    />
  )
}
