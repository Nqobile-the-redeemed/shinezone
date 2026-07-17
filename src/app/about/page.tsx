import type { Metadata } from 'next'
import { brand } from '@/data/shinezone'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'About | Shinezone',
  description: 'Company profile, mission, values and operating structure for Shinezone Ltd.'
}

const values = ['Safety', 'Reliability', 'Respect', 'Accountability', 'Quality', 'Environmental responsibility']
const structure = [
  'Director',
  'Contract manager',
  'Operations or scheduling lead',
  'Cleaning supervisors',
  'Trained cleaning operatives',
  'Approved specialist subcontractors where applicable'
]

export default function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='About Shinezone'
        title='Professionally managed cleaning for property-led organisations'
        text='Shinezone should present verified company information, practical operating roles and a mission focused on safe, dependable service delivery.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8'>
          <article className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
            <h2 className='text-2xl font-bold text-[#08274D]'>Company profile</h2>
            <dl className='mt-5 grid gap-3 text-sm text-[#4a5b6d]'>
              <div>
                <dt className='font-bold text-[#08274D]'>Legal name</dt>
                <dd>{brand.legalName}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Company number</dt>
                <dd>{brand.companyNumber}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Registered address</dt>
                <dd>{brand.address}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Representative</dt>
                <dd>{brand.representative}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Service coverage</dt>
                <dd>{brand.serviceArea}</dd>
              </div>
            </dl>
          </article>
          <article className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
            <h2 className='text-2xl font-bold text-[#08274D]'>Mission</h2>
            <p className='mt-4 leading-7 text-[#4a5b6d]'>
              To provide safe, dependable and professionally managed cleaning services that protect properties, support
              residents and give clients confidence in every completed clean.
            </p>
            <h3 className='mt-8 text-xl font-bold text-[#08274D]'>Values</h3>
            <div className='mt-4 grid gap-3 sm:grid-cols-2'>
              {values.map(value => (
                <div key={value} className='rounded-md bg-[#f8fbfc] p-3 text-sm font-semibold text-[#08274D]'>
                  {value}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
      <section className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#08274D]'>Management structure</h2>
          <div className='mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {structure.map(role => (
              <div
                key={role}
                className='rounded-md border border-[#d6e2ea] bg-[#f8fbfc] p-4 text-sm font-semibold text-[#08274D]'
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
