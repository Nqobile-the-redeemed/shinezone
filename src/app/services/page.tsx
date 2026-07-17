import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/data/shinezone'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Services | Shinezone',
  description: 'Commercial, communal, end-of-tenancy, biohazard, sharps, emergency and specialist cleaning services.'
}

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Services'
        title='Commercial and specialist cleaning services'
        text='Each service is structured around scope, risk controls, equipment, quality assurance and the information needed before Shinezone confirms attendance.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8'>
          {services.map(service => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className='group overflow-hidden rounded-lg border border-[#d6e2ea] bg-white shadow-sm'
            >
              <div className='relative aspect-[16/10]'>
                <Image
                  src={service.image}
                  alt=''
                  fill
                  sizes='(min-width: 1024px) 33vw, 100vw'
                  className='object-cover transition duration-300 group-hover:scale-105'
                />
              </div>
              <div className='p-5'>
                <h2 className='text-xl font-bold text-[#08274D]'>{service.title}</h2>
                <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>{service.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
