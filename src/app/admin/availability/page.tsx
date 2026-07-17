import type { Metadata } from 'next'
import { AdminScaffold } from '@/components/shinezone/AdminScaffold'

export const metadata: Metadata = {
  title: 'Availability | Shinezone Admin'
}

export default function AdminAvailabilityPage() {
  return (
    <AdminScaffold
      title='Availability'
      description='Configure operating hours, emergency hours, slot duration, lead time, capacity, concurrent jobs, blackout dates, holidays and service-specific rules.'
    />
  )
}
