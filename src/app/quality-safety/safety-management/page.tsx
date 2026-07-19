import type { Metadata } from 'next'
import AssuranceTopicPage from '@/components/shinezone/AssuranceTopicPage'

export const metadata: Metadata = {
  title: 'Safety Management | Shinezone',
  description: 'Safety management from instruction to completion for Shinezone cleaning work.'
}

export default function SafetyManagementPage() {
  return <AssuranceTopicPage slug='safety-management' />
}
