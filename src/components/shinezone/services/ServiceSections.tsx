import Image from 'next/image'
import Link from 'next/link'
import type {
  Service,
  ServiceFAQ,
  ServiceFeature,
  ServiceLimitation,
  ServiceLink,
  ServiceOption,
  ServiceProcessStep,
  ServiceRequirement,
  ServiceScenario,
  ServiceScopeGroup
} from '@/data/services'
import { categoryLabels, riskLabels, serviceModeLabels } from '@/data/services'

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div>
      {eyebrow ? <p className='text-sm font-bold text-[#00A652] uppercase'>{eyebrow}</p> : null}
      <h2 className='mt-2 text-3xl leading-tight font-bold text-[#08274D] md:text-4xl'>{title}</h2>
      {text ? <p className='mt-4 max-w-3xl leading-7 text-[#4a5b6d]'>{text}</p> : null}
    </div>
  )
}

function FeatureGrid({ items, columns = 'lg:grid-cols-4' }: { items: ServiceFeature[]; columns?: string }) {
  return (
    <div className={`grid gap-4 md:grid-cols-2 ${columns}`}>
      {items.map(item => (
        <article key={item.title} className='rounded-lg border border-[#d6e2ea] bg-white p-5 shadow-sm'>
          <h3 className='text-lg font-bold text-[#08274D]'>{item.title}</h3>
          <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{item.description}</p>
        </article>
      ))}
    </div>
  )
}

export function ServiceBreadcrumbs({ service }: { service: Service }) {
  const primaryCategory = service.category[0]

  return (
    <nav className='bg-white' aria-label='Breadcrumb'>
      <ol className='mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-4 text-sm text-[#4a5b6d] sm:px-6 lg:px-8'>
        <li>
          <Link href='/' className='font-semibold text-[#08274D] hover:text-[#00A652]'>
            Home
          </Link>
        </li>
        <li aria-hidden='true'>/</li>
        <li>
          <Link href='/services' className='font-semibold text-[#08274D] hover:text-[#00A652]'>
            Services
          </Link>
        </li>
        <li aria-hidden='true'>/</li>
        <li>
          <Link
            href={`/services?category=${primaryCategory}`}
            className='font-semibold text-[#08274D] hover:text-[#00A652]'
          >
            {categoryLabels[primaryCategory]}
          </Link>
        </li>
        <li aria-hidden='true'>/</li>
        <li aria-current='page'>{service.title}</li>
      </ol>
    </nav>
  )
}

export function ServiceHero({ service }: { service: Service }) {
  const isUrgent = service.category.includes('specialist-reactive')

  return (
    <section className='bg-[#08274D] text-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8'>
        <div>
          <p className='text-sm font-bold text-[#91efbf] uppercase'>
            {service.category.map(category => categoryLabels[category]).join(' / ')}
          </p>
          <h1 className='mt-4 text-4xl leading-tight font-bold md:text-6xl'>{service.title}</h1>
          <p className='mt-6 text-lg leading-8 text-white/88'>{service.valueProposition}</p>
          <p className='mt-4 leading-7 text-white/78'>{service.summary}</p>
          <div className='mt-6 grid gap-3 text-sm sm:grid-cols-2'>
            <div className='rounded-md border border-white/15 bg-white/10 p-4'>
              <span className='font-bold text-white'>Risk route</span>
              <p className='mt-1 text-white/80'>{riskLabels[service.riskLevel]}</p>
            </div>
            <div className='rounded-md border border-white/15 bg-white/10 p-4'>
              <span className='font-bold text-white'>Scheduling</span>
              <p className='mt-1 text-white/80'>{service.schedulingModel}</p>
            </div>
          </div>
          <div className='mt-8 flex flex-wrap gap-3'>
            <Link
              href={`/book?service=${service.slug}`}
              className='rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47] focus:ring-2 focus:ring-white focus:outline-none'
            >
              Request This Service
            </Link>
            <Link
              href={`/book?service=${service.slug}&request=site-survey`}
              className='rounded-md bg-white px-5 py-3 font-semibold text-[#08274D] hover:bg-[#f2f7f5] focus:ring-2 focus:ring-[#00A652] focus:outline-none'
            >
              Book a Site Survey
            </Link>
            {isUrgent ? (
              <Link
                href={`/emergency?service=${service.slug}`}
                className='rounded-md border border-white px-5 py-3 font-semibold text-white hover:bg-white/10 focus:ring-2 focus:ring-white focus:outline-none'
              >
                Submit an Urgent Request
              </Link>
            ) : null}
          </div>
          {isUrgent ? (
            <p className='mt-5 rounded-md border-l-4 border-[#91efbf] bg-white/10 p-4 text-sm leading-6 text-white/85'>
              Attendance is confirmed only after Shinezone reviews the location, access, risks, staffing and equipment
              requirements.
            </p>
          ) : null}
        </div>
        <div className='relative min-h-[420px] overflow-hidden rounded-lg lg:min-h-[560px]'>
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes='(min-width: 1024px) 50vw, 100vw'
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export function ServiceQuickFacts({ service }: { service: Service }) {
  const facts = [
    [
      'Best suited for',
      service.suitableFor
        .slice(0, 2)
        .map(item => item.title)
        .join(', ')
    ],
    ['Property status', service.serviceModes.map(mode => serviceModeLabels[mode]).join(', ')],
    ['Service format', service.schedulingModel],
    ['Typical instruction', service.instructionType],
    ['Site survey', service.surveyRequirement],
    ['Specialist review', riskLabels[service.riskLevel]],
    [
      'Completion evidence',
      service.deliverables
        .map(item => item.title)
        .slice(0, 3)
        .join(', ')
    ]
  ]

  return (
    <section className='bg-[#f6f9fb]'>
      <div className='mx-auto grid max-w-7xl gap-3 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-7 lg:px-8'>
        {facts.map(([label, value]) => (
          <div key={label} className='rounded-lg border border-[#d6e2ea] bg-white p-4'>
            <dt className='text-xs font-bold text-[#00A652] uppercase'>{label}</dt>
            <dd className='mt-2 text-sm leading-6 font-semibold text-[#08274D]'>{value}</dd>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ServicePageNavigation() {
  const links = [
    ['Overview', '#overview'],
    ['Scenarios', '#scenarios'],
    ['Scope', '#scope'],
    ['Process', '#process'],
    ['Prepare', '#prepare'],
    ['Controls', '#controls'],
    ['Evidence', '#evidence'],
    ['FAQs', '#faqs']
  ]

  return (
    <nav
      className='sticky top-[132px] z-30 hidden border-y border-[#d6e2ea] bg-white/95 backdrop-blur lg:block'
      aria-label='On this page'
    >
      <div className='mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8'>
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className='rounded-md px-3 py-2 text-sm font-semibold whitespace-nowrap text-[#08274D] hover:bg-[#eaf6f0] focus:ring-2 focus:ring-[#00A652] focus:outline-none'
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <section id='overview' className='bg-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8'>
        <SectionHeading eyebrow='Service overview' title='What this service solves' text={service.valueProposition} />
        <div className='grid gap-5 leading-7 text-[#4a5b6d]'>
          {service.introduction.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceClientPropertyGrid({ service }: { service: Service }) {
  return (
    <section className='bg-[#eef5f8]'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8'>
        <div>
          <SectionHeading eyebrow='Clients' title='Who this service is for' />
          <div className='mt-6'>
            <FeatureGrid items={service.suitableFor} columns='lg:grid-cols-2' />
          </div>
        </div>
        <div>
          <SectionHeading eyebrow='Properties' title='Property environments covered' />
          <div className='mt-6'>
            <FeatureGrid items={service.propertyTypes} columns='lg:grid-cols-2' />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServiceScenarioGrid({ scenarios }: { scenarios: ServiceScenario[] }) {
  return (
    <section id='scenarios' className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Common scenarios'
          title='When clients typically need this service'
          text='These examples help separate planned cleaning from priority, urgent and specialist-review situations.'
        />
        <div className='mt-8 grid gap-5 md:grid-cols-3'>
          {scenarios.map(scenario => (
            <article key={scenario.title} className='rounded-lg border border-[#d6e2ea] bg-[#f8fbfc] p-5'>
              <p className='text-xs font-bold text-[#00A652] uppercase'>Urgency: {scenario.urgency ?? 'planned'}</p>
              <h3 className='mt-2 text-xl font-bold text-[#08274D]'>{scenario.title}</h3>
              <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{scenario.description}</p>
              <p className='mt-4 rounded-md bg-white p-3 text-sm leading-6 font-semibold text-[#08274D]'>
                {scenario.recommendedAction}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceOutcomeGrid({ outcomes }: { outcomes: ServiceFeature[] }) {
  return (
    <section className='bg-[#08274D] text-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <p className='text-sm font-bold text-[#91efbf] uppercase'>Intended outcomes</p>
        <h2 className='mt-2 max-w-3xl text-3xl leading-tight font-bold md:text-4xl'>
          What a successful service should achieve
        </h2>
        <div className='mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {outcomes.map(outcome => (
            <article key={outcome.title} className='rounded-lg border border-white/15 bg-white/10 p-5'>
              <h3 className='text-lg font-bold'>{outcome.title}</h3>
              <p className='mt-3 text-sm leading-6 text-white/78'>{outcome.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceScopeGroups({ groups }: { groups: ServiceScopeGroup[] }) {
  return (
    <section id='scope' className='bg-[#f6f9fb]'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Detailed scope'
          title='What can be included'
          text='The exact task list is confirmed in the quotation. Scope groups make it clear which areas, surfaces and reporting items are included.'
        />
        <div className='mt-8 grid gap-4'>
          {groups.map(group => (
            <details key={group.title} className='group rounded-lg border border-[#d6e2ea] bg-white p-5 shadow-sm' open>
              <summary className='cursor-pointer text-xl font-bold text-[#08274D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A652]'>
                {group.title}
              </summary>
              {group.description ? (
                <p className='mt-3 max-w-3xl text-sm leading-6 text-[#4a5b6d]'>{group.description}</p>
              ) : null}
              <ul className='mt-4 grid gap-2 text-sm leading-6 text-[#4a5b6d] sm:grid-cols-2 lg:grid-cols-3'>
                {group.items.map(item => (
                  <li key={item} className='rounded-md bg-[#f8fbfc] p-3'>
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function OptionList({ title, items }: { title: string; items: ServiceFeature[] | ServiceOption[] }) {
  return (
    <div>
      <h3 className='text-2xl font-bold text-[#08274D]'>{title}</h3>
      <div className='mt-5 grid gap-4'>
        {items.map(item => (
          <article key={item.title} className='rounded-lg border border-[#d6e2ea] bg-white p-5'>
            <h4 className='font-bold text-[#08274D]'>{item.title}</h4>
            <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>{item.description}</p>
            {'pricedSeparately' in item && item.pricedSeparately ? (
              <p className='mt-3 w-fit rounded-md bg-[#fff8e7] px-3 py-1 text-xs font-bold text-[#5e4a12]'>
                Priced separately where required
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  )
}

export function ServiceOptions({ service }: { service: Service }) {
  return (
    <section className='bg-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8'>
        <OptionList title='Included in the service route' items={service.included} />
        <OptionList title='Optional extras' items={service.optionalExtras} />
        <OptionList title='Service options' items={service.serviceOptions} />
      </div>
    </section>
  )
}

export function ServiceProcessTimeline({ steps }: { steps: ServiceProcessStep[] }) {
  return (
    <section id='process' className='bg-[#eef5f8]'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Operational process'
          title='How the work is planned and delivered'
          text='The process keeps quotation, access, risk, mobilisation, completion and handover decisions visible.'
        />
        <ol className='mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {steps.map(step => (
            <li key={step.step} className='rounded-lg border border-[#d6e2ea] bg-white p-5'>
              <span className='flex h-9 w-9 items-center justify-center rounded-md bg-[#08274D] text-sm font-bold text-white'>
                {step.step}
              </span>
              <h3 className='mt-4 text-lg font-bold text-[#08274D]'>{step.title}</h3>
              <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{step.description}</p>
              {step.clientAction ? (
                <p className='mt-3 text-xs leading-5 font-semibold text-[#006c38]'>Client: {step.clientAction}</p>
              ) : null}
              {step.shinezoneAction ? (
                <p className='mt-2 text-xs leading-5 font-semibold text-[#08274D]'>Shinezone: {step.shinezoneAction}</p>
              ) : null}
              {step.evidenceProduced?.length ? (
                <p className='mt-2 text-xs leading-5 text-[#4a5b6d]'>Evidence: {step.evidenceProduced.join(', ')}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function RequirementList({ title, items }: { title: string; items: ServiceRequirement[] }) {
  return (
    <article>
      <h3 className='text-xl font-bold text-[#08274D]'>{title}</h3>
      <ul className='mt-5 grid gap-3'>
        {items.map(item => (
          <li key={item.title} className='rounded-lg border border-[#d6e2ea] bg-white p-4'>
            <div className='flex flex-wrap items-start justify-between gap-3'>
              <h4 className='font-bold text-[#08274D]'>{item.title}</h4>
              <span className='rounded-md bg-[#eaf6f0] px-2 py-1 text-xs font-bold text-[#006c38]'>
                {item.required ? 'Required' : 'Helpful'}
              </span>
            </div>
            <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>{item.description}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function ServiceClientChecklist({ service }: { service: Service }) {
  return (
    <section id='prepare' className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Preparing for attendance'
          title='What Shinezone needs before confirming the work'
          text='Complete information helps Shinezone decide the right service route, people, equipment and reporting requirements.'
        />
        <div className='mt-8 grid gap-8 lg:grid-cols-3'>
          <RequirementList title='Information required' items={service.clientInformationRequired} />
          <RequirementList title='Site preparation' items={service.sitePreparation} />
          <RequirementList title='Client responsibilities' items={service.clientResponsibilities} />
        </div>
      </div>
    </section>
  )
}

export function ServiceControls({ service }: { service: Service }) {
  const specialist = service.specialistControls ?? []

  return (
    <section id='controls' className='bg-[#f6f9fb]'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Controls'
          title='Health, safety and specialist controls'
          text='Controls are matched to the task, site condition, occupancy and known hazards.'
        />
        <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {[...service.safetyControls, ...specialist].map(control => (
            <article key={control.title} className='rounded-lg border border-[#d6e2ea] bg-white p-5 shadow-sm'>
              <h3 className='text-lg font-bold text-[#08274D]'>{control.title}</h3>
              <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{control.description}</p>
              {control.relatedPolicySlug ? (
                <Link
                  href={`/policies/${control.relatedPolicySlug}`}
                  className='mt-4 inline-flex text-sm font-bold text-[#006c38] hover:text-[#08274D]'
                >
                  Related policy
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceCompetencePanel({ service }: { service: Service }) {
  return (
    <section className='bg-white'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8'>
        <SectionHeading
          eyebrow='People and competence'
          title='People are matched to the task and risk'
          text='Shinezone avoids universal competence claims. The service route determines the briefing, supervision, method and escalation controls required.'
        />
        <FeatureGrid items={service.staffCompetence} columns='lg:grid-cols-2' />
      </div>
    </section>
  )
}

export function ServiceEquipmentPanel({ service }: { service: Service }) {
  return (
    <section id='equipment' className='bg-[#08274D] text-white'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8'>
        <div>
          <p className='text-sm font-bold text-[#91efbf] uppercase'>Equipment</p>
          <h2 className='mt-2 text-3xl leading-tight font-bold md:text-4xl'>
            Equipment selected for the accepted method
          </h2>
          <div className='mt-6 grid gap-4'>
            {service.equipment.map(item => (
              <article key={item.title} className='rounded-lg border border-white/15 bg-white/10 p-5'>
                <h3 className='text-lg font-bold'>{item.title}</h3>
                <p className='mt-2 text-sm leading-6 text-white/78'>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <p className='text-sm font-bold text-[#91efbf] uppercase'>PPE</p>
          <h2 className='mt-2 text-3xl leading-tight font-bold md:text-4xl'>Protection matched to task risk</h2>
          <div className='mt-6 grid gap-4'>
            {service.ppe.map(item => (
              <article key={item.title} className='rounded-lg border border-white/15 bg-white/10 p-5'>
                <h3 className='text-lg font-bold'>{item.title}</h3>
                <p className='mt-2 text-sm leading-6 text-white/78'>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServiceQualitySection({ service }: { service: Service }) {
  return (
    <section id='evidence' className='bg-[#f6f9fb]'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Quality assurance'
          title='Evidence, deliverables and rectification'
          text='Completion evidence is agreed before attendance so clients know what will be recorded, supplied and escalated.'
        />
        <div className='mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]'>
          <FeatureGrid items={service.qualityAssurance} columns='lg:grid-cols-2' />
          <div className='rounded-lg bg-[#08274D] p-6 text-white'>
            <h3 className='text-2xl font-bold'>Rectification approach</h3>
            <ol className='mt-5 grid gap-3 text-sm leading-6 text-white/82'>
              {service.rectificationApproach.map((item, index) => (
                <li key={item}>
                  <span className='font-bold text-[#91efbf]'>{index + 1}. </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className='mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {service.deliverables.map(deliverable => (
            <article key={deliverable.title} className='rounded-lg border border-[#d6e2ea] bg-white p-5'>
              <p className='text-xs font-bold text-[#00A652] uppercase'>{deliverable.availability.replace('-', ' ')}</p>
              <h3 className='mt-2 font-bold text-[#08274D]'>{deliverable.title}</h3>
              <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>{deliverable.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceEnvironmentalSection({ service }: { service: Service }) {
  const waste = service.wasteControls ?? []

  return (
    <section className='bg-white'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8'>
        <div>
          <SectionHeading eyebrow='Environmental controls' title='Products, water and journeys are considered' />
          <div className='mt-6'>
            <FeatureGrid items={service.environmentalControls} columns='lg:grid-cols-2' />
          </div>
        </div>
        {waste.length ? (
          <div>
            <SectionHeading eyebrow='Waste controls' title='Waste is separated from ordinary cleaning scope' />
            <div className='mt-6'>
              <FeatureGrid items={waste} columns='lg:grid-cols-2' />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function ServicePricingFactors({ service }: { service: Service }) {
  return (
    <section className='bg-[#eef5f8]'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Quotation factors'
          title='What affects the quotation'
          text='Shinezone does not publish invented prices. Quotations are shaped by property, condition, access, risk and evidence requirements.'
        />
        <div className='mt-8'>
          <FeatureGrid items={service.pricingFactors} columns='lg:grid-cols-5' />
        </div>
      </div>
    </section>
  )
}

export function ServiceLimitations({ limitations }: { limitations: ServiceLimitation[] }) {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <SectionHeading
          eyebrow='Exclusions'
          title='What is excluded or escalated'
          text='Clear exclusions protect the client, site users and cleaning team from unsafe assumptions.'
        />
        <div className='mt-8 grid gap-5 md:grid-cols-3'>
          {limitations.map(item => (
            <article key={item.title} className='rounded-lg border-l-4 border-[#00A652] bg-[#f8fbfc] p-5'>
              <h3 className='text-lg font-bold text-[#08274D]'>{item.title}</h3>
              <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{item.description}</p>
              {item.escalation ? (
                <p className='mt-4 text-sm leading-6 font-semibold text-[#08274D]'>{item.escalation}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RelatedLinks({ title, links }: { title: string; links: ServiceLink[] }) {
  return (
    <div>
      <h3 className='text-2xl font-bold text-[#08274D]'>{title}</h3>
      <div className='mt-5 grid gap-4'>
        {links.map(link => (
          <Link
            key={`${link.href}-${link.label}`}
            href={link.href}
            className='rounded-lg border border-[#d6e2ea] bg-white p-5 hover:border-[#00A652]'
          >
            <span className='font-bold text-[#08274D]'>{link.label}</span>
            {link.description ? <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>{link.description}</p> : null}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function ServiceRelatedContent({ service }: { service: Service }) {
  return (
    <section className='bg-[#f6f9fb]'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8'>
        <RelatedLinks title='Related services' links={service.relatedServices} />
        <RelatedLinks title='Related sectors' links={service.relatedSectors} />
        <RelatedLinks title='Related policies' links={service.relatedPolicies} />
      </div>
    </section>
  )
}

export function ServiceFAQAccordion({ faqs }: { faqs: ServiceFAQ[] }) {
  return (
    <section id='faqs' className='bg-white'>
      <div className='mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8'>
        <SectionHeading eyebrow='FAQ' title='Frequently asked questions' />
        <div className='mt-8 grid gap-4'>
          {faqs.map(faq => (
            <details key={faq.question} className='rounded-lg border border-[#d6e2ea] bg-[#f8fbfc] p-5'>
              <summary className='cursor-pointer text-lg font-bold text-[#08274D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A652]'>
                {faq.question}
              </summary>
              <p className='mt-4 leading-7 text-[#4a5b6d]'>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceQuoteCTA({ service }: { service: Service }) {
  return (
    <section className='bg-[#eaf6f0]'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
        <div>
          <p className='text-sm font-bold text-[#00A652] uppercase'>Request a quotation</p>
          <h2 className='mt-2 text-3xl font-bold text-[#08274D]'>Request a quotation for {service.title}</h2>
          <p className='mt-3 max-w-3xl leading-7 text-[#4a5b6d]'>
            Provide information about the property, access, condition, preferred dates and known hazards. Shinezone will
            review the request before confirming the scope, quotation and attendance.
          </p>
        </div>
        <div className='flex flex-wrap gap-3'>
          <Link
            href={`/book?service=${service.slug}`}
            className='rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
          >
            Request This Service
          </Link>
          <Link
            href={`/book?service=${service.slug}&request=site-survey`}
            className='rounded-md bg-[#08274D] px-5 py-3 font-semibold text-white hover:bg-[#061e3b]'
          >
            Book a Site Survey
          </Link>
          {service.category.includes('specialist-reactive') ? (
            <Link
              href='/contact'
              className='rounded-md border border-[#08274D] px-5 py-3 font-semibold text-[#08274D] hover:bg-white'
            >
              Discuss the Requirement
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export function ServiceGallery({ service }: { service: Service }) {
  if (!service.gallery?.length) return null

  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <SectionHeading eyebrow='Service imagery' title='Professional cleaning environments' />
        <div className='mt-8 grid gap-5 md:grid-cols-2'>
          {service.gallery.map(image => (
            <figure key={image.src} className='overflow-hidden rounded-lg border border-[#d6e2ea] bg-[#f8fbfc]'>
              <div className='relative aspect-[16/10]'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes='(min-width: 768px) 50vw, 100vw'
                  className='object-cover'
                />
              </div>
              {image.caption ? (
                <figcaption className='p-4 text-sm leading-6 text-[#4a5b6d]'>{image.caption}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
