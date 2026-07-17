import type { Metadata } from 'next'
import { AdminScaffold } from '@/components/shinezone/AdminScaffold'

export const metadata: Metadata = {
  title: 'Calendar | Shinezone Admin'
}

export default function AdminCalendarPage() {
  return (
    <AdminScaffold
      title='Calendar'
      description='Day, week and month views should support filters by service, status, team and service area, with conflict and capacity warnings.'
    />
  )
}
