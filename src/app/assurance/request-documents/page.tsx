import type { Metadata } from 'next'
import { assuranceRequestStatuses } from '@/data/assurance'
import AssuranceRequestForm from '@/components/shinezone/AssuranceRequestForm'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Request Assurance Documents | Shinezone',
  description: 'Request controlled Shinezone assurance documents through a reviewed evidence process.'
}

export default function RequestDocumentsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Request Evidence'
        title='Request controlled assurance documents'
        text='Authorised clients and procurement teams can request appropriate evidence. Sensitive records are reviewed before release and shared through controlled channels.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:px-8'>
          <AssuranceRequestForm />
          <aside className='h-fit rounded-lg border border-[#d6e2ea] bg-white p-6'>
            <h2 className='text-2xl font-bold text-[#08274D]'>Request statuses</h2>
            <div className='mt-4 grid gap-2'>
              {assuranceRequestStatuses.map(status => (
                <div key={status} className='rounded-md bg-[#f8fbfc] p-3 text-sm font-semibold text-[#08274D]'>
                  {status}
                </div>
              ))}
            </div>
            <p className='mt-5 text-sm leading-6 text-[#4a5b6d]'>
              The backend should store request status history, reviewer notes, secure-link records, expiry and audit
              logs.
            </p>
          </aside>
        </div>
      </section>
    </SiteShell>
  )
}
