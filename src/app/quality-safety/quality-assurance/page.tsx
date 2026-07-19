import type { Metadata } from 'next'
import AssuranceTopicPage from '@/components/shinezone/AssuranceTopicPage'

export const metadata: Metadata = {
  title: 'Quality Assurance | Shinezone',
  description: 'Quality assurance, inspection, complaint, rectification and KPI controls.'
}

export default function QualityAssurancePage() {
  return <AssuranceTopicPage slug='quality-assurance' />
}
