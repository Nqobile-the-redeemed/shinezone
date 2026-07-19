import type { Metadata } from 'next'
import AssuranceTopicPage from '@/components/shinezone/AssuranceTopicPage'

export const metadata: Metadata = {
  title: 'Training & Competence | Shinezone',
  description: 'Training, competence, induction and refresher controls for Shinezone cleaning work.'
}

export default function TrainingCompetencePage() {
  return <AssuranceTopicPage slug='training-competence' />
}
