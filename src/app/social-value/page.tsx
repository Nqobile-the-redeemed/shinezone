import type { Metadata } from 'next'
import { socialValueCommitments } from '@/data/shinezone'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Social Value | Shinezone',
  description: 'Local employment, training, environmental responsibility and community value commitments.'
}

export default function SocialValuePage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Social Value'
        title='Local, environmental and community value'
        text='Commitments should be measurable, approved and backed by delivery evidence before they are presented as live promises.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8'>
          {socialValueCommitments.map(group => (
            <article key={group.title} className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
              <h2 className='text-xl font-bold text-[#08274D]'>{group.title}</h2>
              <ul className='mt-5 grid gap-3 text-sm leading-6 text-[#4a5b6d]'>
                {group.items.map(item => (
                  <li key={item} className='rounded-md bg-[#f8fbfc] p-3'>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
