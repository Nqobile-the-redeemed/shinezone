import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  capabilityStrip,
  caseStudies,
  imagePaths,
  qualityControls,
  sectors,
  services,
  socialValueCommitments,
  workflowSteps
} from '@/data/shinezone'
import { CTASection, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Shinezone | Commercial and Specialist Cleaning',
  description:
    'Tender-ready commercial, communal, end-of-tenancy and specialist cleaning services for property professionals, housing providers and businesses.'
}

export default function Home() {
  return (
    <SiteShell>
      <section className='relative min-h-[650px] overflow-hidden bg-[#08274D] text-white'>
        <Image
          src={imagePaths.hero}
          alt='Professional cleaning of a surface with protective gloves'
          fill
          priority
          sizes='100vw'
          className='object-cover opacity-45'
        />
        <div className='absolute inset-0 bg-[#08274D]/55' />
        <div className='relative mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8'>
          <p className='max-w-fit rounded-md bg-[#00A652] px-3 py-2 text-sm font-bold text-white'>Shinezone Ltd.</p>
          <h1 className='mt-6 max-w-4xl text-4xl leading-tight font-bold md:text-6xl'>
            Specialist cleaning for commercial property, housing and supported living environments
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-white/88'>
            Shinezone delivers dependable commercial, communal, end-of-tenancy and specialist cleaning services for
            property professionals, housing providers, care organisations and businesses across the UK.
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <Link
              href='/book'
              className='rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
            >
              Request a Quote
            </Link>
            <Link
              href='/book'
              className='rounded-md bg-white px-5 py-3 font-semibold text-[#08274D] hover:bg-[#f2f7f5]'
            >
              Book a Site Survey
            </Link>
            <Link
              href='/emergency'
              className='rounded-md border border-white px-5 py-3 font-semibold text-white hover:bg-white/10'
            >
              Emergency Cleaning
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto grid max-w-7xl gap-3 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 xl:grid-cols-6'>
          {capabilityStrip.map(item => (
            <div
              key={item}
              className='rounded-md border border-[#d6e2ea] bg-[#f8fbfc] p-4 text-sm font-semibold text-[#08274D]'
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-sm font-bold text-[#00A652] uppercase'>Core Services</p>
              <h2 className='mt-3 text-3xl font-bold text-[#08274D] md:text-4xl'>
                Structured cleaning support for managed properties
              </h2>
            </div>
            <Link href='/services' className='font-semibold text-[#006c38] hover:text-[#08274D]'>
              View all services
            </Link>
          </div>
          <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {services.slice(0, 9).map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className='group overflow-hidden rounded-lg border border-[#d6e2ea] bg-white shadow-sm'
              >
                <div className='relative aspect-[16/9]'>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes='(min-width: 1024px) 33vw, 100vw'
                    className='object-cover transition duration-300 group-hover:scale-105'
                  />
                </div>
                <div className='p-5'>
                  <h3 className='text-lg font-bold text-[#08274D]'>{service.title}</h3>
                  <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>{service.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8'>
          <div>
            <p className='text-sm font-bold text-[#00A652] uppercase'>Sectors Served</p>
            <h2 className='mt-3 text-3xl font-bold text-[#08274D]'>
              Built for public-sector, housing and property teams
            </h2>
            <p className='mt-4 leading-7 text-[#4a5b6d]'>
              The site avoids unsupported claims and focuses on the operating systems clients need to see: risk
              controls, communication, evidence and rectification.
            </p>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            {sectors.map(sector => (
              <div key={sector.title} className='rounded-lg border border-[#d6e2ea] p-5'>
                <h3 className='font-bold text-[#08274D]'>{sector.title}</h3>
                <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>{sector.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#08274D] text-white'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <p className='text-sm font-bold text-[#91efbf] uppercase'>How Shinezone Works</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold md:text-4xl'>
            A clear operating process from enquiry to sign-off
          </h2>
          <ol className='mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {workflowSteps.map((step, index) => (
              <li key={step} className='rounded-lg border border-white/15 bg-white/8 p-5'>
                <span className='text-sm font-bold text-[#91efbf]'>Step {index + 1}</span>
                <p className='mt-2 font-semibold'>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8'>
          <div>
            <p className='text-sm font-bold text-[#00A652] uppercase'>Quality and Compliance</p>
            <h2 className='mt-3 text-3xl font-bold text-[#08274D]'>
              Operational controls for higher-risk cleaning work
            </h2>
            <p className='mt-4 leading-7 text-[#4a5b6d]'>
              Tender evaluators need evidence of safe systems, not vague promises. Shinezone should use this page to
              show how work is assessed, controlled, documented and improved.
            </p>
            <Link
              href='/quality-safety'
              className='mt-6 inline-flex rounded-md bg-[#08274D] px-5 py-3 font-semibold text-white hover:bg-[#061e3b]'
            >
              View Quality & Safety
            </Link>
          </div>
          <ul className='grid gap-3'>
            {qualityControls.slice(0, 8).map(control => (
              <li
                key={control}
                className='rounded-md border border-[#d6e2ea] bg-[#f8fbfc] p-4 text-sm font-semibold text-[#102033]'
              >
                {control}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='bg-[#eef5f8]'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8'>
          <div className='relative min-h-[420px] overflow-hidden rounded-lg'>
            <Image
              src={imagePaths.pressure}
              alt='Specialist pressure cleaning outside a commercial property'
              fill
              sizes='(min-width: 1024px) 50vw, 100vw'
              className='object-cover'
            />
          </div>
          <div>
            <p className='text-sm font-bold text-[#00A652] uppercase'>Emergency Process</p>
            <h2 className='mt-3 text-3xl font-bold text-[#08274D]'>Urgent requests are triaged before acceptance</h2>
            <p className='mt-4 leading-7 text-[#4a5b6d]'>
              Emergency attendance depends on hazard type, access, service area, crew availability and risk controls.
              The website records the operational timestamps needed for later KPI reporting.
            </p>
            <ul className='mt-6 grid gap-3 text-sm font-semibold text-[#102033]'>
              {[
                'Request received',
                'Triage completed',
                'Dispatch confirmed',
                'Arrival recorded',
                'Work completed',
                'Recall or rectification tracked'
              ].map(item => (
                <li key={item} className='rounded-md bg-white p-4'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <p className='text-sm font-bold text-[#00A652] uppercase'>Evidence Library</p>
          <h2 className='mt-3 text-3xl font-bold text-[#08274D]'>
            Case-study placeholders ready for verified projects
          </h2>
          <div className='mt-8 grid gap-5 md:grid-cols-3'>
            {caseStudies.map(study => (
              <article key={study.title} className='rounded-lg border border-[#d6e2ea] p-5'>
                <p className='text-sm font-bold text-[#00A652]'>{study.sector}</p>
                <h3 className='mt-2 text-lg font-bold text-[#08274D]'>{study.title}</h3>
                <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{study.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <p className='text-sm font-bold text-[#00A652] uppercase'>Social Value</p>
          <h2 className='mt-3 text-3xl font-bold text-[#08274D]'>
            Measurable commitments, published only when approved
          </h2>
          <div className='mt-8 grid gap-5 md:grid-cols-3'>
            {socialValueCommitments.map(group => (
              <div key={group.title} className='rounded-lg border border-[#d6e2ea] bg-white p-5'>
                <h3 className='font-bold text-[#08274D]'>{group.title}</h3>
                <ul className='mt-4 grid gap-2 text-sm leading-6 text-[#4a5b6d]'>
                  {group.items.slice(0, 4).map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  )
}
