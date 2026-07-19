import Image from 'next/image'
import Link from 'next/link'
import { getAssurancePage } from '@/data/assurance'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

function ContentSection({ title, body, items }: { title: string; body?: string[]; items?: string[] }) {
  return (
    <section
      id={title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
      className='rounded-lg border border-[#d6e2ea] bg-white p-6'
    >
      <h2 className='text-2xl font-bold text-[#08274D]'>{title}</h2>
      {body?.map(paragraph => (
        <p key={paragraph} className='mt-4 leading-7 text-[#4a5b6d]'>
          {paragraph}
        </p>
      ))}
      {items ? (
        <ul className='mt-5 grid gap-3 text-sm leading-6 text-[#4a5b6d] sm:grid-cols-2'>
          {items.map(item => (
            <li key={item} className='rounded-md bg-[#f8fbfc] p-3'>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

export default function AssuranceTopicPage({ slug }: { slug: string }) {
  const page = getAssurancePage(slug)

  if (!page) {
    return null
  }

  return (
    <SiteShell>
      <PageIntro eyebrow='Quality, Safety & Assurance' title={page.title} text={page.summary} />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8'>
          <aside className='h-fit rounded-lg border border-[#d6e2ea] bg-white p-5 lg:sticky lg:top-32'>
            <h2 className='font-bold text-[#08274D]'>Contents</h2>
            <nav className='mt-4 grid gap-2 text-sm text-[#4a5b6d]'>
              {page.sections.map(section => (
                <a
                  key={section.title}
                  href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className='rounded-md px-3 py-2 hover:bg-[#eaf6f0]'
                >
                  {section.title}
                </a>
              ))}
            </nav>
            <div className='mt-5 border-t border-[#d6e2ea] pt-5'>
              <Link href='/policies' className='font-semibold text-[#006c38] hover:text-[#08274D]'>
                View policy library
              </Link>
            </div>
          </aside>
          <div className='grid gap-6'>
            <div className='relative min-h-[360px] overflow-hidden rounded-lg'>
              <Image src={page.image} alt='' fill sizes='(min-width: 1024px) 70vw, 100vw' className='object-cover' />
            </div>
            {slug === 'specialist-controls' ? (
              <section className='rounded-lg border-l-4 border-[#00A652] bg-[#08274D] p-6 text-white'>
                <h2 className='text-2xl font-bold'>Stop and escalate</h2>
                <p className='mt-3 leading-7 text-white/85'>
                  Stop work and escalate when unknown substances, suspected asbestos, structural instability,
                  uncontrolled aggression, missing PPE or work beyond competence is present.
                </p>
              </section>
            ) : null}
            {page.sections.map(section => (
              <ContentSection key={section.title} {...section} />
            ))}
            <section className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
              <h2 className='text-2xl font-bold text-[#08274D]'>Related policies</h2>
              <div className='mt-4 flex flex-wrap gap-3'>
                {page.relatedPolicies.map(policy => (
                  <Link
                    key={policy}
                    href={`/policies/${policy}`}
                    className='rounded-md bg-[#eaf6f0] px-3 py-2 text-sm font-semibold text-[#08274D] hover:bg-[#d8f0e4]'
                  >
                    {policy.replaceAll('-', ' ')}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
