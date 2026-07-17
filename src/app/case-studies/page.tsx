import type { Metadata } from 'next'
import { caseStudies } from '@/data/shinezone'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Case Studies | Shinezone',
  description: 'Case-study template and verified evidence placeholders for Shinezone cleaning projects.'
}

const templateFields = [
  'Client sector',
  'Property type',
  'Service provided',
  'Initial condition',
  'Risks identified',
  'Team composition',
  'Equipment and materials',
  'Timeframe',
  'Quality-control process',
  'Outcome',
  'Client feedback',
  'Photographs where consent exists'
]

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Case Studies'
        title='Evidence templates for real, approved projects'
        text='The tender specification is clear: do not invent clients, testimonials, figures or contract values. These placeholders show the structure to complete once evidence exists.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8'>
          {caseStudies.map(study => (
            <article key={study.title} className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
              <p className='text-sm font-bold text-[#00A652]'>{study.sector}</p>
              <h2 className='mt-2 text-xl font-bold text-[#08274D]'>{study.title}</h2>
              <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{study.challenge}</p>
              <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{study.outcome}</p>
            </article>
          ))}
        </div>
      </section>
      <section className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#08274D]'>Repeatable case-study fields</h2>
          <div className='mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
            {templateFields.map(field => (
              <div
                key={field}
                className='rounded-md border border-[#d6e2ea] bg-[#f8fbfc] p-4 text-sm font-semibold text-[#08274D]'
              >
                {field}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
