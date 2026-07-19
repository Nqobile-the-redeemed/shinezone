import type { Metadata } from 'next'
import AssuranceTopicPage from '@/components/shinezone/AssuranceTopicPage'

export const metadata: Metadata = {
  title: 'Specialist Controls | Shinezone',
  description: 'Specialist controls for complex, sensitive and contaminated cleaning environments.'
}

export default function SpecialistControlsPage() {
  return <AssuranceTopicPage slug='specialist-controls' />
}
