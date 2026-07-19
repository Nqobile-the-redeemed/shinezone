import type { Metadata } from 'next'
import Link from 'next/link'
import { brand } from '@/data/shinezone'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Emergency Cleaning | Shinezone',
  description: 'Urgent specialist cleaning request process with operational triage before attendance is confirmed.'
}

const emergencySteps = [
  'Request received with site and hazard information',
  'Triage reviews danger, access, service area and required controls',
  'Operations team confirms acceptance, crew and expected attendance window',
  'Arrival, work start, completion and rectification timestamps are recorded'
]

export default function EmergencyPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Emergency Cleaning'
        title='Urgent specialist cleaning requests, confirmed after triage'
        text='This page deliberately avoids unsupported response-time claims. Attendance depends on confirmed coverage, availability, access and safety controls.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8'>
          <aside className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
            <h2 className='text-2xl font-bold text-[#08274D]'>Emergency contact</h2>
            <dl className='mt-5 grid gap-4 text-sm text-[#4a5b6d]'>
              <div>
                <dt className='font-bold text-[#08274D]'>Emergency telephone</dt>
                <dd>{brand.emergencyPhone}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Verified response area</dt>
                <dd>{brand.serviceArea}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Emergency-service hours</dt>
                <dd>{brand.emergencyHours}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Existing contract or client reference</dt>
                <dd>Collected in the booking form for faster triage.</dd>
              </div>
            </dl>
            <Link
              href='/book'
              className='mt-6 inline-flex rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
            >
              Request Emergency Attendance
            </Link>
          </aside>
          <div className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
            <h2 className='text-2xl font-bold text-[#08274D]'>Emergency-response workflow</h2>
            <ol className='mt-5 grid gap-3'>
              {emergencySteps.map((step, index) => (
                <li key={step} className='rounded-md bg-[#f8fbfc] p-4 text-sm leading-6 text-[#4a5b6d]'>
                  <span className='font-bold text-[#08274D]'>Step {index + 1}: </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className='mt-6 rounded-md bg-[#fff8e7] p-4 text-sm leading-6 text-[#5e4a12]'>
              For immediate danger, criminal activity or a medical emergency, contact the appropriate emergency service.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
