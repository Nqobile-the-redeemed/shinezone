import type { Metadata } from 'next'
import AssuranceTopicPage from '@/components/shinezone/AssuranceTopicPage'

export const metadata: Metadata = {
  title: 'Emergency Response Controls | Shinezone',
  description: 'Emergency and out-of-hours triage, allocation, dispatch, welfare and contingency controls.'
}

export default function EmergencyResponseControlsPage() {
  return <AssuranceTopicPage slug='emergency-response' />
}
