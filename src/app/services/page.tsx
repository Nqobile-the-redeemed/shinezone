import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CTASection, SiteShell } from '@/components/shinezone/SiteShell'
import { ServiceCard } from '@/components/shinezone/services/ServiceCard'
import type { ServiceCategory, ServiceMode } from '@/data/services'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services | Shinezone',
  description:
    'Commercial, residential and specialist cleaning services planned around property condition, access, occupancy, risk and completion evidence.',
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'Services | Shinezone',
    description:
      'Explore Shinezone commercial, property-turnaround, sensitive residential and specialist reactive cleaning services.'
  }
}

const categoryOptions: { label: string; value?: ServiceCategory }[] = [
  { label: 'All services' },
  { label: 'Commercial and planned', value: 'commercial-planned' },
  { label: 'Property turnaround', value: 'property-turnaround' },
  { label: 'Sensitive residential', value: 'sensitive-residential' },
  { label: 'Specialist and reactive', value: 'specialist-reactive' }
]

const modeOptions: { label: string; value: ServiceMode }[] = [
  { label: 'Occupied property', value: 'occupied-property' },
  { label: 'Vacant property', value: 'vacant-property' },
  { label: 'Recurring service', value: 'recurring-service' },
  { label: 'One-off service', value: 'one-off-service' },
  { label: 'Specialist risk review', value: 'specialist-risk-review' },
  { label: 'Out-of-hours request', value: 'out-of-hours-request' }
]

const pathways = [
  {
    title: 'Maintain a commercial property',
    text: 'Routine workplace, glazing, floor-care and periodic cleaning for operational premises.',
    services: ['commercial-cleaning', 'window-cleaning', 'carpet-floor-care', 'periodic-specialist-cleaning']
  },
  {
    title: 'Prepare a property for occupation',
    text: 'Turnaround cleaning for vacant, post-tenancy, post-eviction and temporary accommodation settings.',
    services: [
      'end-of-tenancy-cleaning',
      'post-eviction-cleaning',
      'temporary-accommodation-cleaning',
      'carpet-floor-care'
    ]
  },
  {
    title: 'Clean a communal or supported environment',
    text: 'Resident-sensitive cleaning for shared blocks, temporary accommodation and supported living environments.',
    services: ['communal-block-cleaning', 'temporary-accommodation-cleaning', 'supported-living-cleaning']
  },
  {
    title: 'Respond to contamination or urgent hazards',
    text: 'Specialist triage for bodily fluids, sharps, emergency requests and higher-risk property conditions.',
    services: [
      'biohazard-bodily-fluid-cleaning',
      'sharps-drug-paraphernalia-clearance',
      'emergency-specialist-cleaning'
    ]
  }
]

const scopingSteps = [
  'Understand the property',
  'Review occupancy and access',
  'Identify hazards and specialist requirements',
  'Define outcomes and evidence',
  'Allocate suitable people and equipment',
  'Confirm quotation and schedule'
]

const preparationItems = [
  'Property address and postcode',
  'Property type and size',
  'Occupied or vacant status',
  'Photographs where available',
  'Access arrangements',
  'Preferred dates',
  'Known hazards',
  'Waste requirements',
  'Completion deadline',
  'Purchase-order requirements',
  'Reporting and sign-off expectations'
]

function getStringParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

function filterHref(category?: ServiceCategory, mode?: ServiceMode) {
  const params = new URLSearchParams()
  if (category) params.set('category', category)
  if (mode) params.set('mode', mode)
  const query = params.toString()
  return query ? `/services?${query}` : '/services'
}

export default async function ServicesPage({
  searchParams
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const activeCategory = getStringParam(resolvedSearchParams?.category) as ServiceCategory | undefined
  const activeMode = getStringParam(resolvedSearchParams?.mode) as ServiceMode | undefined

  const filteredServices = services.filter(service => {
    const categoryMatch = activeCategory ? service.category.includes(activeCategory) : true
    const modeMatch = activeMode ? service.serviceModes.includes(activeMode) : true
    return categoryMatch && modeMatch
  })

  return (
    <SiteShell>
      <section className='bg-white'>
        <div className='mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8'>
          <div>
            <p className='text-sm font-bold text-[#00A652] uppercase'>Services</p>
            <h1 className='mt-4 max-w-4xl text-4xl leading-tight font-bold text-[#08274D] md:text-6xl'>
              Commercial, residential and specialist cleaning planned around your property
            </h1>
            <p className='mt-6 text-lg leading-8 text-[#4a5b6d]'>
              Shinezone provides routine, turnaround and specialist cleaning services for businesses, housing providers,
              supported-living organisations, landlords and property professionals. Every request is reviewed according
              to scope, property condition, access, occupancy, known hazards and the evidence required at completion.
            </p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <Link
                href='/book'
                className='rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
              >
                Request a Quote
              </Link>
              <Link
                href='/book?request=site-survey'
                className='rounded-md bg-[#08274D] px-5 py-3 font-semibold text-white hover:bg-[#061e3b]'
              >
                Book a Site Survey
              </Link>
              <Link
                href='/emergency'
                className='rounded-md border border-[#08274D] px-5 py-3 font-semibold text-[#08274D] hover:bg-[#f6f9fb]'
              >
                Need urgent assistance?
              </Link>
            </div>
          </div>
          <div className='relative min-h-[470px] overflow-hidden rounded-lg'>
            <Image
              src='/images/shinezone/new-images/pexels-tima-miroshnichenko-6195129.jpg'
              alt='Cleaning team preparing equipment for a managed property service'
              fill
              priority
              sizes='(min-width: 1024px) 50vw, 100vw'
              className='object-cover'
            />
          </div>
        </div>
      </section>

      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
            <div>
              <p className='text-sm font-bold text-[#00A652] uppercase'>Service finder</p>
              <h2 className='mt-2 text-3xl font-bold text-[#08274D]'>Find the right service route</h2>
              <p className='mt-3 max-w-3xl leading-7 text-[#4a5b6d]'>
                Filters are links, so the service finder works with keyboard navigation and without client-side scripts.
              </p>
            </div>
            <p className='rounded-md bg-white px-4 py-3 text-sm font-bold text-[#08274D]'>
              Showing {filteredServices.length} of {services.length} services
            </p>
          </div>

          <div className='mt-8 grid gap-6'>
            <div>
              <h3 className='text-sm font-bold text-[#08274D]'>Service category</h3>
              <div className='mt-3 flex flex-wrap gap-2'>
                {categoryOptions.map(option => {
                  const active = option.value ? option.value === activeCategory : !activeCategory
                  return (
                    <Link
                      key={option.label}
                      href={filterHref(option.value, activeMode)}
                      className={`rounded-md px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-[#00A652] focus:outline-none ${
                        active
                          ? 'bg-[#08274D] text-white'
                          : 'border border-[#d6e2ea] bg-white text-[#08274D] hover:bg-[#eaf6f0]'
                      }`}
                    >
                      {option.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className='text-sm font-bold text-[#08274D]'>Property or instruction type</h3>
              <div className='mt-3 flex flex-wrap gap-2'>
                <Link
                  href={filterHref(activeCategory)}
                  className={`rounded-md px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-[#00A652] focus:outline-none ${
                    !activeMode
                      ? 'bg-[#00A652] text-white'
                      : 'border border-[#d6e2ea] bg-white text-[#08274D] hover:bg-[#eaf6f0]'
                  }`}
                >
                  All types
                </Link>
                {modeOptions.map(option => {
                  const active = option.value === activeMode
                  return (
                    <Link
                      key={option.value}
                      href={filterHref(activeCategory, option.value)}
                      className={`rounded-md px-4 py-2 text-sm font-semibold focus:ring-2 focus:ring-[#00A652] focus:outline-none ${
                        active
                          ? 'bg-[#00A652] text-white'
                          : 'border border-[#d6e2ea] bg-white text-[#08274D] hover:bg-[#eaf6f0]'
                      }`}
                    >
                      {option.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <p className='text-sm font-bold text-[#00A652] uppercase'>Featured pathways</p>
          <h2 className='mt-2 text-3xl font-bold text-[#08274D] md:text-4xl'>Choose by property problem</h2>
          <div className='mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
            {pathways.map(pathway => (
              <article key={pathway.title} className='rounded-lg border border-[#d6e2ea] bg-[#f8fbfc] p-5'>
                <h3 className='text-xl font-bold text-[#08274D]'>{pathway.title}</h3>
                <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{pathway.text}</p>
                <ul className='mt-5 grid gap-2 text-sm'>
                  {pathway.services.map(slug => {
                    const service = services.find(item => item.slug === slug)
                    return service ? (
                      <li key={slug}>
                        <Link href={`/services/${slug}`} className='font-semibold text-[#006c38] hover:text-[#08274D]'>
                          {service.shortTitle}
                        </Link>
                      </li>
                    ) : null
                  })}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#eef5f8]'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <p className='text-sm font-bold text-[#00A652] uppercase'>Expanded services</p>
          <h2 className='mt-2 text-3xl font-bold text-[#08274D] md:text-4xl'>
            Services by scope, risk, outcomes and evidence
          </h2>
          <div className='mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {filteredServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8'>
          <div>
            <p className='text-sm font-bold text-[#00A652] uppercase'>Scoping</p>
            <h2 className='mt-2 text-3xl font-bold text-[#08274D] md:text-4xl'>How Shinezone scopes services</h2>
            <p className='mt-4 leading-7 text-[#4a5b6d]'>
              Every quotation starts with the property, not just a task list. This keeps routine cleaning, sensitive
              residential work and specialist reactive work separated.
            </p>
          </div>
          <ol className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {scopingSteps.map((step, index) => (
              <li key={step} className='rounded-lg border border-[#d6e2ea] bg-[#f8fbfc] p-5'>
                <span className='flex h-9 w-9 items-center justify-center rounded-md bg-[#08274D] text-sm font-bold text-white'>
                  {index + 1}
                </span>
                <p className='mt-4 font-bold text-[#08274D]'>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className='bg-[#08274D] text-white'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8'>
          <div>
            <p className='text-sm font-bold text-[#91efbf] uppercase'>Client preparation</p>
            <h2 className='mt-2 text-3xl font-bold md:text-4xl'>What clients should prepare</h2>
            <p className='mt-4 leading-7 text-white/78'>
              Better information improves triage, quotation quality and completion evidence.
            </p>
          </div>
          <ul className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {preparationItems.map(item => (
              <li
                key={item}
                className='rounded-md border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white/88'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8'>
          <div>
            <p className='text-sm font-bold text-[#00A652] uppercase'>Quality and safety</p>
            <h2 className='mt-2 text-3xl font-bold text-[#08274D] md:text-4xl'>
              Service pages link back to the relevant controls
            </h2>
            <p className='mt-4 leading-7 text-[#4a5b6d]'>
              Health and safety, COSHH, safeguarding, sharps, waste, lone-working and quality-assurance controls are
              connected to the services where they matter.
            </p>
            <Link
              href='/quality-safety'
              className='mt-6 inline-flex rounded-md bg-[#08274D] px-5 py-3 font-semibold text-white hover:bg-[#061e3b]'
            >
              Explore Quality & Safety
            </Link>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            {[
              'Health and safety controls',
              'COSHH controls',
              'Safeguarding arrangements',
              'Sharps procedure',
              'Waste duty-of-care controls',
              'Lone-working controls',
              'Quality-assurance process',
              'Rectification route'
            ].map(item => (
              <div key={item} className='rounded-lg border border-[#d6e2ea] bg-white p-5 font-bold text-[#08274D]'>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#eaf6f0]'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
          <div>
            <p className='text-sm font-bold text-[#00A652] uppercase'>Next step</p>
            <h2 className='mt-2 text-3xl font-bold text-[#08274D]'>Not sure which service fits your property?</h2>
            <p className='mt-3 max-w-3xl leading-7 text-[#4a5b6d]'>
              Tell us about the site, property condition, occupancy and required outcome. Shinezone will review the
              information and recommend an appropriate service route.
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='/book'
              className='rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
            >
              Describe Your Requirement
            </Link>
            <Link
              href='/book?request=site-survey'
              className='rounded-md bg-[#08274D] px-5 py-3 font-semibold text-white hover:bg-[#061e3b]'
            >
              Book a Site Survey
            </Link>
            <Link
              href='/contact'
              className='rounded-md border border-[#08274D] px-5 py-3 font-semibold text-[#08274D] hover:bg-white'
            >
              Speak to the Team
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
