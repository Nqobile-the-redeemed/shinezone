import type { Metadata } from 'next'
import Link from 'next/link'
import { brand } from '@/data/shinezone'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Carbon Management Plan | Shinezone',
  description:
    'Shinezone carbon management plan for reducing environmental impact across cleaning chemicals, waste, travel, procurement and site operations.'
}

const focusAreas = [
  {
    title: 'Cleaning products and COSHH',
    body: 'We aim to select effective products that are suitable for the task, avoid unnecessary overuse, maintain COSHH assessments, control dilution and store chemicals safely.',
    items: [
      'Maintain an approved product list and safety data sheets.',
      'Use correct dilution and application methods to avoid waste.',
      'Choose lower-impact alternatives where safe, suitable and client-approved.',
      'Avoid mixing chemicals and prevent uncontrolled disposal into drains or the environment.'
    ]
  },
  {
    title: 'Waste duty of care',
    body: 'Cleaning can generate general waste, bulky waste, contaminated waste, sharps and specialist waste. Waste must be classified, segregated, contained and transferred through lawful routes.',
    items: [
      'Use authorised waste carriers and receiving facilities where waste transfer is required.',
      'Retain waste transfer or consignment evidence where applicable.',
      'Keep sharps and contaminated waste separate from general waste.',
      'Reject fly-tipping, unauthorised bins, burning, abandonment or inaccurate waste descriptions.'
    ]
  },
  {
    title: 'Travel, routing and attendance planning',
    body: 'Cleaning work often depends on site attendance. We reduce unnecessary travel by planning routes, grouping regional work and collecting enough information before dispatch.',
    items: [
      'Triage sites before attendance to reduce avoidable repeat visits.',
      'Group jobs by geography where scheduling allows.',
      'Use photographs and remote information gathering where safe and appropriate.',
      'Review vehicle use, fuel consumption and mileage as the business grows.'
    ]
  },
  {
    title: 'Equipment, microfibre and water use',
    body: 'We aim to extend equipment life, reduce disposable use where safe, and use water responsibly without compromising hygiene or infection-control requirements.',
    items: [
      'Use reusable microfibre systems where appropriate.',
      'Maintain machines and equipment to avoid inefficient operation.',
      'Avoid excessive water use during pressure washing, carpet extraction and deep cleaning.',
      'Separate specialist contaminated equipment from general cleaning equipment.'
    ]
  },
  {
    title: 'Purchasing and suppliers',
    body: 'Procurement decisions affect packaging, transport, product safety, waste and carbon impact. Environmental considerations should sit alongside safety, effectiveness and value.',
    items: [
      'Review packaging, refill options and concentrated products where suitable.',
      'Consider supplier environmental information before approval.',
      'Prioritise durable tools and PPE appropriate to the risk.',
      'Ask subcontractors and waste partners for relevant assurance evidence.'
    ]
  },
  {
    title: 'Training and behaviour',
    body: 'Carbon reduction depends on everyday choices by managers, supervisors and operatives. Training should connect environmental practice with safety and quality.',
    items: [
      'Brief staff on chemical control, spill prevention and correct disposal.',
      'Use site checklists to reduce missed items and avoid repeat journeys.',
      'Report leaks, overuse, incorrect segregation and waste-route issues.',
      'Encourage practical improvement suggestions from cleaning teams.'
    ]
  }
]

const governance = [
  'Management reviews environmental priorities alongside safety, quality, insurance, client expectations and legal duties.',
  'Higher-risk work, including sharps, bodily fluids, suspected substances and contaminated waste, is assessed before acceptance.',
  'Carbon and waste controls are reviewed when services change, new products are introduced, new suppliers are approved or incidents identify weaknesses.',
  'Environmental claims should be evidence-led. Shinezone should not publish unverified carbon-neutral, net-zero, zero-waste or certification claims.'
]

const milestones = [
  {
    period: 'Foundation',
    actions: [
      'Maintain environmental, COSHH and waste duty-of-care policies.',
      'Create an approved chemical and equipment list.',
      'Record waste-route evidence where applicable.',
      'Include environmental controls in site briefings and RAMS.'
    ]
  },
  {
    period: 'Next stage',
    actions: [
      'Track mileage, fuel use and job geography for operational planning.',
      'Review high-use products and identify lower-impact alternatives where suitable.',
      'Create a supplier assurance checklist for chemicals, PPE, equipment and waste partners.',
      'Add environmental checks to supervisor inspections.'
    ]
  },
  {
    period: 'Future improvement',
    actions: [
      'Set measurable reduction targets once baseline data is reliable.',
      'Publish annual environmental progress summaries.',
      'Assess fleet, energy, packaging and waste performance.',
      'Prepare tender-ready evidence for commissioners and procurement teams.'
    ]
  }
]

export default function CarbonManagementPlanPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Carbon Management Plan'
        title='Reducing environmental impact while delivering safe cleaning'
        text='Shinezone handles cleaning chemicals, equipment, water, waste, vehicles and specialist site risks. This plan sets out how environmental responsibility is built into day-to-day cleaning decisions.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <div className='grid gap-6 lg:grid-cols-[1fr_0.8fr]'>
            <article className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
              <p className='text-sm font-bold text-[#00A652] uppercase'>Policy intent</p>
              <h2 className='mt-3 text-2xl font-bold text-[#08274D]'>
                Practical, evidence-led environmental management
              </h2>
              <div className='mt-4 grid gap-3 text-sm leading-7 text-[#4a5b6d]'>
                <p>
                  Shinezone aims to reduce avoidable environmental impact while maintaining safe, hygienic and effective
                  cleaning outcomes. The plan supports cleaning work across commercial, communal, end-of-tenancy,
                  supported living, property management and specialist environments.
                </p>
                <p>
                  This page should be read alongside Shinezone&apos;s environmental sustainability, COSHH, sharps and
                  contaminated waste, and waste duty-of-care policies.
                </p>
              </div>
            </article>
            <aside className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
              <p className='text-sm font-bold text-[#00A652] uppercase'>Document status</p>
              <dl className='mt-5 grid gap-4 text-sm text-[#4a5b6d]'>
                <div>
                  <dt className='font-bold text-[#08274D]'>Owner</dt>
                  <dd>Shinezone management</dd>
                </div>
                <div>
                  <dt className='font-bold text-[#08274D]'>Last updated</dt>
                  <dd>28 July 2026</dd>
                </div>
                <div>
                  <dt className='font-bold text-[#08274D]'>Applies to</dt>
                  <dd>Cleaning operations, supervisors, operatives, subcontractors and relevant suppliers.</dd>
                </div>
                <div>
                  <dt className='font-bold text-[#08274D]'>Contact</dt>
                  <dd>
                    <a href={`mailto:${brand.email}`} className='text-[#006c38] underline'>
                      {brand.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {focusAreas.map(area => (
              <article key={area.title} className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
                <h2 className='text-xl font-bold text-[#08274D]'>{area.title}</h2>
                <p className='mt-3 text-sm leading-7 text-[#4a5b6d]'>{area.body}</p>
                <ul className='mt-5 grid gap-2 text-sm leading-6 text-[#4a5b6d]'>
                  {area.items.map(item => (
                    <li key={item} className='rounded-md bg-[#f8fbfc] p-3'>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className='mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]'>
            <article className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
              <h2 className='text-2xl font-bold text-[#08274D]'>Governance and monitoring</h2>
              <ul className='mt-5 grid gap-3 text-sm leading-6 text-[#4a5b6d]'>
                {governance.map(item => (
                  <li key={item} className='rounded-md bg-[#f8fbfc] p-3'>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
              <h2 className='text-2xl font-bold text-[#08274D]'>Implementation roadmap</h2>
              <div className='mt-5 grid gap-4'>
                {milestones.map(milestone => (
                  <section key={milestone.period} className='rounded-lg border border-[#d6e2ea] p-4'>
                    <h3 className='font-bold text-[#006c38]'>{milestone.period}</h3>
                    <ul className='mt-3 grid gap-2 text-sm leading-6 text-[#4a5b6d]'>
                      {milestone.actions.map(action => (
                        <li key={action}>{action}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          </div>

          <div className='mt-8 rounded-lg border border-[#b8d9c9] bg-[#eaf6f0] p-6'>
            <h2 className='text-2xl font-bold text-[#08274D]'>Related environmental controls</h2>
            <p className='mt-3 max-w-3xl text-sm leading-7 text-[#4a5b6d]'>
              Clients and procurement teams can review public policy summaries in the assurance library. Controlled
              evidence, waste documentation and site-specific RAMS may be shared through an authorised document request.
            </p>
            <div className='mt-5 flex flex-wrap gap-3'>
              <Link
                href='/policies/environmental-sustainability'
                className='rounded-md bg-white px-4 py-2 text-sm font-bold text-[#08274D]'
              >
                Environmental policy
              </Link>
              <Link
                href='/policies/waste-duty-of-care'
                className='rounded-md bg-white px-4 py-2 text-sm font-bold text-[#08274D]'
              >
                Waste duty of care
              </Link>
              <Link
                href='/assurance/request-documents'
                className='rounded-md bg-white px-4 py-2 text-sm font-bold text-[#08274D]'
              >
                Request assurance evidence
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
