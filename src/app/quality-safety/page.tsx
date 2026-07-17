import type { Metadata } from 'next'
import { qualityControls, supplierDocuments } from '@/data/shinezone'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Quality & Safety | Shinezone',
  description: 'Risk assessments, COSHH, safeguarding awareness, PPE, waste controls, inspections and rectification.'
}

const assuranceAreas = [
  'Health and safety management',
  'Risk assessments and method statements',
  'Dynamic risk assessment',
  'Incident and near-miss reporting',
  'Fire and evacuation induction',
  'Slips, trips and wet-floor controls',
  'Manual handling',
  'Working at height',
  'Lone working',
  'Out-of-hours arrangements',
  'Equipment inspection',
  'Site security',
  'Data protection',
  'Business continuity'
]

export default function QualitySafetyPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Quality & Safety'
        title='Evidence-led assurance for specialist cleaning'
        text='This page frames Shinezone as an operationally managed supplier, with placeholders for policies and evidence that should be verified before publication.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8'>
          <div className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
            <h2 className='text-2xl font-bold text-[#08274D]'>Safety management</h2>
            <ul className='mt-5 grid gap-3 text-sm leading-6 text-[#4a5b6d]'>
              {assuranceAreas.map(item => (
                <li key={item} className='rounded-md bg-[#f8fbfc] p-3'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
            <h2 className='text-2xl font-bold text-[#08274D]'>Specialist controls</h2>
            <ul className='mt-5 grid gap-3 text-sm leading-6 text-[#4a5b6d]'>
              {qualityControls.map(item => (
                <li key={item} className='rounded-md bg-[#f8fbfc] p-3'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#08274D]'>Supplier assurance documents available on request</h2>
          <p className='mt-4 max-w-3xl leading-7 text-[#4a5b6d]'>
            Sensitive internal documents, staff records, insurance numbers and full risk assessments should not be
            published openly. They should be supplied through controlled procurement or client channels.
          </p>
          <div className='mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {supplierDocuments.map(document => (
              <div
                key={document}
                className='rounded-md border border-[#d6e2ea] bg-[#f8fbfc] p-4 text-sm font-semibold text-[#08274D]'
              >
                {document}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
