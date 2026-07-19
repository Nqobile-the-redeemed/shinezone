import type { Metadata } from 'next'
import PolicyLibrary from '@/components/shinezone/PolicyLibrary'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Policy Library | Shinezone',
  description: 'Shinezone draft public policy library with statuses, metadata and controlled evidence requests.'
}

export default function PoliciesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Policy Library'
        title='Policies with status, ownership and review controls'
        text='Policies are displayed as Draft for approval until Shinezone formally approves them and can evidence the training, equipment, registrations, records and operational processes described.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <PolicyLibrary />
        </div>
      </section>
    </SiteShell>
  )
}
