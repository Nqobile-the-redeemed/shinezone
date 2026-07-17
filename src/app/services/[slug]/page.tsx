import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getService, services } from '@/data/shinezone'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return { title: 'Service Not Found | Shinezone' }
  }

  return {
    title: `${service.title} | Shinezone`,
    description: service.summary
  }
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className='rounded-lg border border-[#d6e2ea] bg-white p-5'>
      <h2 className='text-lg font-bold text-[#08274D]'>{title}</h2>
      <ul className='mt-4 grid gap-2 text-sm leading-6 text-[#4a5b6d]'>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  return (
    <SiteShell>
      <PageIntro eyebrow='Service' title={service.title} text={service.summary} />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8'>
          <div className='relative min-h-[420px] overflow-hidden rounded-lg'>
            <Image
              src={service.image}
              alt=''
              fill
              sizes='(min-width: 1024px) 45vw, 100vw'
              className='object-cover'
              priority
            />
          </div>
          <div className='grid gap-4'>
            <ListBlock title='Suitable client types' items={service.suitableFor} />
            <ListBlock title='Typical property types' items={service.propertyTypes} />
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className='mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8'>
          <ListBlock title='Scope of work' items={service.scope} />
          <ListBlock title='Possible exclusions' items={service.exclusions} />
          <ListBlock title='Operational process' items={service.process} />
          <ListBlock title='Health and safety controls' items={service.controls} />
          <ListBlock title='Equipment and PPE' items={service.equipment} />
          <ListBlock title='Quality assurance' items={service.qa} />
        </div>
      </section>
      <section className='bg-[#eef5f8]'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#08274D]'>Frequently asked questions</h2>
          <div className='mt-6 grid gap-4'>
            {service.faqs.map(faq => (
              <article key={faq.question} className='rounded-lg border border-[#d6e2ea] bg-white p-5'>
                <h3 className='font-bold text-[#08274D]'>{faq.question}</h3>
                <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>{faq.answer}</p>
              </article>
            ))}
          </div>
          <Link
            href='/book'
            className='mt-8 inline-flex rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
          >
            Request this service
          </Link>
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
