import type { Metadata } from 'next'
import EmergencyRequestForm from '@/components/shinezone/EmergencyRequestForm'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Request Emergency Attendance | Shinezone',
  description: 'Submit an urgent specialist cleaning triage request to Shinezone.'
}

function getStringParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default async function EmergencyRequestPage({
  searchParams
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const selectedServiceSlug = getStringParam(resolvedSearchParams?.service)

  return (
    <SiteShell>
      <PageIntro
        eyebrow='Emergency Request'
        title='Request urgent specialist cleaning triage'
        text='Provide the incident, site, safety, access and contact details Shinezone needs before deciding whether attendance can be accepted.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8'>
          <EmergencyRequestForm selectedServiceSlug={selectedServiceSlug} />
        </div>
      </section>
    </SiteShell>
  )
}
