import type { Metadata } from 'next'
import { sectors } from '@/data/shinezone'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Sectors | Shinezone',
  description:
    'Cleaning support for councils, housing associations, supported living providers, agents and property managers.'
}

export default function SectorsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Sectors'
        title='Cleaning services for managed property environments'
        text='Shinezone is positioned for organisations that need reliable cleaning, evidence, risk control and respectful working methods.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8'>
          {sectors.map(sector => (
            <article key={sector.title} className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
              <h2 className='text-xl font-bold text-[#08274D]'>{sector.title}</h2>
              <p className='mt-3 leading-7 text-[#4a5b6d]'>{sector.summary}</p>
              <div className='mt-5 grid gap-4 sm:grid-cols-3'>
                <div>
                  <h3 className='font-bold text-[#08274D]'>Challenges</h3>
                  <ul className='mt-2 grid gap-1 text-sm text-[#4a5b6d]'>
                    {sector.challenges.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='font-bold text-[#08274D]'>Approach</h3>
                  <ul className='mt-2 grid gap-1 text-sm text-[#4a5b6d]'>
                    {sector.approach.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className='font-bold text-[#08274D]'>Services</h3>
                  <ul className='mt-2 grid gap-1 text-sm text-[#4a5b6d]'>
                    {sector.services.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
