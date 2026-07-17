import type { Metadata } from 'next'
import { AdminScaffold } from '@/components/shinezone/AdminScaffold'

export const metadata: Metadata = {
  title: 'Case Studies | Shinezone Admin'
}

export default function AdminCaseStudiesPage() {
  return (
    <AdminScaffold
      title='Case Studies'
      description='Create approved case studies with consented photographs, verified outcomes, client sector, risks controlled, team composition and quality checks.'
    />
  )
}
