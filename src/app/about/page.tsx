import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { brand } from '@/data/shinezone'
import { SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'About Shinezone | Founder-Led Commercial and Specialist Cleaning',
  description:
    'Meet Knowledge Madzibuko and learn how Shinezone Ltd brings care, responsibility and professional management to commercial and specialist cleaning.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About Shinezone | Founder-Led Commercial and Specialist Cleaning',
    description:
      'Learn how Shinezone combines founder-led accountability, practical service experience and professionally managed cleaning standards.'
  }
}

const aboutImages = {
  hero: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6195274.jpg',
  story: '/images/shinezone/new-images/ashwini-chaudhary-monty--4KzDiyZjgw-unsplash.jpg',
  experience: '/images/shinezone/new-images/pexels-michelangelo-buonarroti-4176042.jpg',
  operations: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6195129.jpg',
  property: '/images/shinezone/new-images/pexels-rdne-4921525.jpg'
}

const leadershipProfiles = [
  {
    name: 'Knowledge Madzibuko',
    role: 'Company Representative',
    biography: [
      'Knowledge represents Shinezone with a practical focus on safe service delivery, clear communication and dependable cleaning standards.',
      'His background gives Shinezone an understanding of supported-living settings, residential environments, frontline teams, property teams and service commissioners.',
      'Within Shinezone, Knowledge focuses on client relationships, operational oversight, service standards, staff conduct and making sure the company values are reflected in day-to-day delivery.'
    ],
    details: [
      ['Background', 'Service coordination and operational support'],
      ['Specialist interest', 'Quality, operations and client relationships'],
      [
        'Responsibilities',
        'Client relationships, scheduling, mobilisation, workforce coordination and operational oversight'
      ]
    ]
  }
]

const principles = [
  [
    'Care for the environment',
    'A property is treated as a working, living or service environment, not simply as a list of cleaning tasks.'
  ],
  [
    'Respect for the people within it',
    'Staff conduct, privacy and communication matter as much as the physical standard of the clean.'
  ],
  [
    'Accountability for the completed work',
    'Work should be planned, checked, communicated and improved when something falls short.'
  ]
]

const experienceCards = [
  [
    'Dignity and privacy',
    'Cleaning teams may work in private homes, supported-living settings, temporary accommodation and communal residential environments. Shinezone expects staff to respect personal space, avoid unnecessary discussion of residents, protect confidential information and work without judgement.'
  ],
  [
    'Safeguarding awareness',
    'Health and social care experience reinforces the importance of recognising and reporting concerns appropriately. Cleaning staff are not expected to investigate safeguarding matters, but they should understand professional boundaries and escalation routes.'
  ],
  [
    'Working around vulnerable people',
    'Some residents may experience anxiety, mental ill health, learning disabilities, mobility limitations, communication difficulties or distress. Shinezone aims to plan work in a way that reduces unnecessary disruption and supports respectful interaction.'
  ],
  [
    'Risk-aware service delivery',
    'Care environments require attention to risk, documentation and accountability. Shinezone applies these principles through pre-attendance information gathering, site-specific controls, suitable staff allocation, PPE and escalation.'
  ],
  [
    'Clear communication',
    'Good service delivery depends on timely and accurate communication about attendance, access issues, delays, hazards, completed work, exclusions and recommended follow-up.'
  ],
  [
    'Continuity and reliability',
    "Clients depend on cleaning services to support safe and usable environments. Shinezone's approach includes scheduling, staff-cover arrangements, equipment readiness, supervisor oversight and early escalation."
  ]
]

const values = [
  [
    'Safety',
    'We plan work around the risks of the property, task and people affected. Staff should not continue work where the required controls, competence or equipment are not available.'
  ],
  [
    'Respect',
    'We treat clients, residents, colleagues, subcontractors and members of the public with dignity. Every property has a human context.'
  ],
  [
    'Reliability',
    'We aim to attend as agreed, communicate early when circumstances change and maintain suitable arrangements for scheduling, supervision and service continuity.'
  ],
  [
    'Accountability',
    'We take ownership of our work, record important decisions, respond to concerns and use rectification and learning processes when standards are not achieved.'
  ],
  [
    'Quality',
    'We define expected outcomes, use suitable cleaning methods, inspect completed work and retain appropriate evidence.'
  ],
  [
    'Environmental responsibility',
    'We aim to reduce avoidable waste, chemical use, water consumption and unnecessary journeys while maintaining safe and effective cleaning outcomes.'
  ]
]

const operationalExperience = [
  'Staff scheduling and allocation',
  'Client communication',
  'Handling urgent requests',
  'Service monitoring',
  'Maintaining professional boundaries',
  'Responding to complaints',
  'Supporting staff',
  'Managing absence and continuity',
  'Record keeping',
  'Quality checks',
  'Property and environmental awareness',
  'Working with external professionals',
  'Escalating risk',
  'Reviewing performance',
  'Learning from incidents'
]

const managementRoles = [
  [
    'Founder and Company Representative',
    'Responsible for strategy, governance, client relationships and approval of key policies.'
  ],
  [
    'Contract management',
    'Responsible for service scope, client communication, reporting, meetings and performance oversight.'
  ],
  [
    'Operations and scheduling',
    'Responsible for job planning, workforce allocation, equipment readiness, service continuity and escalation.'
  ],
  [
    'Supervisors',
    'Responsible for briefings, site checks, staff support, quality inspections, records and rectification.'
  ],
  [
    'Cleaning operatives',
    'Responsible for following instructions, risk controls, task standards, professional conduct and incident reporting.'
  ],
  [
    'Specialist subcontractors',
    'Used only where approved and where work requires additional competence, equipment, registration or capacity.'
  ]
]

const sectors = [
  [
    'Housing associations',
    'Planned and reactive cleaning for communal and residential environments, with attention to access, residents, risks, waste and quality assurance.'
  ],
  [
    'Local authorities',
    'Service delivery shaped around accountability, documentation, sensitive properties and operational communication.'
  ],
  [
    'Temporary accommodation providers',
    'Cleaning planned around occupancy, turnaround pressure, shared spaces and respectful resident interaction.'
  ],
  [
    'Supported-living organisations',
    'Cleaning delivered with awareness of privacy, dignity, safeguarding, shared spaces and the need to work around residents and support teams.'
  ],
  [
    'Care providers',
    'Property cleaning that respects care environments while staying clear that Shinezone does not provide regulated personal care through this cleaning service.'
  ],
  [
    'Estate and letting agents',
    'Responsive end-of-tenancy and pre-let cleaning supported by clear communication, condition reporting and completion evidence.'
  ],
  [
    'Property managers',
    'Routine and specialist cleaning with practical attention to access, multiple sites, reporting and issue escalation.'
  ],
  [
    'Landlords',
    'Property cleaning support for occupancy changes, post-eviction situations and ongoing presentation standards.'
  ],
  [
    'Commercial businesses',
    'Cleaning for workspaces and client-facing premises where reliability, presentation and communication matter.'
  ],
  [
    'Property developers',
    'Initial and builders cleans shaped around handover standards, programme pressure and site coordination.'
  ]
]

const assuranceLinks = [
  ['Quality & Safety', '/quality-safety'],
  ['Safety Management', '/quality-safety/safety-management'],
  ['Specialist Controls', '/quality-safety/specialist-controls'],
  ['Policy Library', '/policies'],
  ['Training and Competence', '/quality-safety/training-competence'],
  ['Assurance Documents', '/quality-safety/assurance-documents'],
  ['Request a Site Survey', '/book']
]

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div>
      {eyebrow ? <p className='text-sm font-bold text-[#00A652] uppercase'>{eyebrow}</p> : null}
      <h2 className='mt-2 text-3xl leading-tight font-bold text-[#08274D] md:text-4xl'>{title}</h2>
      {text ? <p className='mt-4 max-w-3xl leading-7 text-[#4a5b6d]'>{text}</p> : null}
    </div>
  )
}

function TextCard({ title, text }: { title: string; text: string }) {
  return (
    <article className='rounded-lg border border-[#d6e2ea] bg-white p-5 shadow-sm'>
      <h3 className='text-lg font-bold text-[#08274D]'>{title}</h3>
      <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{text}</p>
    </article>
  )
}

function FounderProfileCard({ founder }: { founder: (typeof leadershipProfiles)[number] }) {
  return (
    <article className='rounded-lg border border-[#d6e2ea] bg-white p-6 shadow-sm'>
      <p className='text-sm font-bold text-[#00A652] uppercase'>{founder.role}</p>
      <h3 className='mt-2 text-2xl font-bold text-[#08274D]'>{founder.name}</h3>
      <div className='mt-5 grid gap-4'>
        {founder.biography.map(paragraph => (
          <p key={paragraph} className='leading-7 text-[#4a5b6d]'>
            {paragraph}
          </p>
        ))}
      </div>
      <dl className='mt-6 grid gap-3 text-sm'>
        {founder.details.map(([label, value]) => (
          <div key={label} className='rounded-md bg-[#f8fbfc] p-3'>
            <dt className='font-bold text-[#08274D]'>{label}</dt>
            <dd className='mt-1 text-[#4a5b6d]'>{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

export default function AboutPage() {
  const organisationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.legalName,
    alternateName: brand.name,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    telephone: brand.phone,
    email: brand.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7 Bowles Way',
      addressLocality: 'Dunstable',
      postalCode: 'LU6 3LX',
      addressCountry: 'GB'
    }
  }

  return (
    <SiteShell>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />

      <section className='bg-white'>
        <div className='mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8'>
          <div>
            <p className='text-sm font-bold text-[#00A652] uppercase'>About Shinezone</p>
            <h1 className='mt-4 text-4xl leading-tight font-bold text-[#08274D] md:text-6xl'>
              A founder-led cleaning company built on care, responsibility and professional service
            </h1>
            <p className='mt-6 text-lg leading-8 text-[#4a5b6d]'>
              Shinezone is represented by Knowledge Madzibuko, bringing together practical experience in service
              coordination, operational planning and the day-to-day responsibilities involved in supporting people,
              maintaining safe environments and delivering dependable cleaning services.
            </p>
            <p className='mt-4 leading-7 text-[#4a5b6d]'>
              His background has shaped a cleaning company that looks beyond appearances. Shinezone focuses on safety,
              dignity, communication, accountability and the practical needs of the people who live, work in and manage
              each property.
            </p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <a
                href='#founders'
                className='rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
              >
                Meet Knowledge
              </a>
              <Link
                href='/book'
                className='rounded-md bg-[#08274D] px-5 py-3 font-semibold text-white hover:bg-[#061e3b]'
              >
                Request a Quote
              </Link>
              <Link
                href='/book'
                className='rounded-md border border-[#08274D] px-5 py-3 font-semibold text-[#08274D] hover:bg-[#f6f9fb]'
              >
                Book a Site Survey
              </Link>
            </div>
            <p className='mt-6 rounded-md border-l-4 border-[#00A652] bg-[#f0fbf5] p-4 text-sm font-bold text-[#08274D]'>
              Founder-led. Professionally managed. Focused on safe and dependable service delivery.
            </p>
          </div>
          <div className='relative min-h-[520px] overflow-hidden rounded-lg'>
            <Image
              src={aboutImages.hero}
              alt='Cleaning team working in a maintained property environment'
              fill
              priority
              sizes='(min-width: 1024px) 50vw, 100vw'
              className='object-cover'
            />
          </div>
        </div>
      </section>

      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8'>
          <div>
            <SectionHeading eyebrow='The Shinezone Story' title='Why we created Shinezone' />
            <div className='mt-6 grid gap-4 leading-7 text-[#4a5b6d]'>
              <p>
                Shinezone was developed after recognising that cleaning in commercial, residential and supported
                environments requires more than completing a list of tasks.
              </p>
              <p>
                Through practical service experience, Knowledge understands how strongly the condition of an environment
                can affect a person&apos;s comfort, dignity, safety and confidence. Shinezone also understands the
                operational pressures faced by care providers, housing organisations, landlords, property managers and
                frontline teams when cleaning services are unreliable, poorly communicated or not delivered with
                appropriate sensitivity.
              </p>
              <p>
                Shinezone was created to provide a more accountable service: one where work is properly planned, staff
                understand the environment they are entering, clients receive clear communication and every clean is
                approached with respect for the property and the people connected to it.
              </p>
            </div>
            <div className='mt-8 grid gap-4 md:grid-cols-3'>
              {principles.map(([title, text]) => (
                <TextCard key={title} title={title} text={text} />
              ))}
            </div>
          </div>
          <div className='relative min-h-[460px] overflow-hidden rounded-lg'>
            <Image
              src={aboutImages.story}
              alt='Commercial corridor cleaning representing managed property service delivery'
              fill
              sizes='(min-width: 1024px) 40vw, 100vw'
              className='object-cover'
            />
          </div>
        </div>
      </section>

      <section id='founders' className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Meet the Representative'
            title='Meet Knowledge Madzibuko'
            text='Knowledge is the public representative for Shinezone and the named contact for company accountability, service standards and client relationships.'
          />
          <div className='mt-8 grid max-w-3xl gap-6'>
            {leadershipProfiles.map(founder => (
              <FounderProfileCard key={founder.name} founder={founder} />
            ))}
          </div>
          <div className='mt-8 rounded-lg bg-[#08274D] p-6 text-white'>
            <p className='text-lg leading-8'>
              Shinezone is built around a simple principle: every property deserves a professional standard of service,
              and every person connected to that property deserves to be treated with respect.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-[#eef5f8]'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Experience'
            title='Experience that influences how we work'
            text='Health and social care experience does not replace specialist cleaning training, risk assessment or technical competence. It does, however, influence how Shinezone understands people, risk, communication and accountability.'
          />
          <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {experienceCards.map(([title, text]) => (
              <TextCard key={title} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8'>
          <div className='relative min-h-[440px] overflow-hidden rounded-lg'>
            <Image
              src={aboutImages.experience}
              alt='Specialist cleaning operative preparing protective gloves'
              fill
              sizes='(min-width: 1024px) 40vw, 100vw'
              className='object-cover'
            />
          </div>
          <div>
            <SectionHeading title='Understanding the connection between people and place' />
            <p className='mt-5 leading-7 text-[#4a5b6d]'>
              A clean environment is not simply a presentation issue. In residential, care and supported settings, it
              can affect infection control, personal dignity, confidence, accessibility, staff effectiveness and the
              overall experience of a service.
            </p>
            <div className='mt-8 grid gap-5 md:grid-cols-2'>
              <article className='rounded-lg border border-[#d6e2ea] bg-[#f8fbfc] p-5'>
                <h3 className='text-xl font-bold text-[#08274D]'>What the client sees</h3>
                <ul className='mt-4 grid gap-2 text-sm leading-6 text-[#4a5b6d]'>
                  {[
                    'Clean floors and surfaces',
                    'Cleared waste',
                    'Sanitised areas',
                    'Restored presentation',
                    'Completed checklist'
                  ].map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className='rounded-lg border border-[#d6e2ea] bg-[#f8fbfc] p-5'>
                <h3 className='text-xl font-bold text-[#08274D]'>What Shinezone manages behind the service</h3>
                <ul className='mt-4 grid gap-2 text-sm leading-6 text-[#4a5b6d]'>
                  {[
                    'Access and security',
                    'Occupancy and disruption',
                    'Staff suitability',
                    'Hazards and controls',
                    'Chemicals and PPE',
                    'Waste routes',
                    'Communication',
                    'Inspection',
                    'Evidence and sign-off',
                    'Follow-up and rectification'
                  ].map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#08274D] text-white'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <p className='text-sm font-bold text-[#91efbf] uppercase'>Our Mission</p>
          <h2 className='mt-3 max-w-4xl text-3xl leading-tight font-bold md:text-4xl'>
            To provide safe, dependable and professionally managed cleaning services that protect properties, respect
            the people who use them and give clients confidence in every completed clean.
          </h2>
          <p className='mt-6 max-w-3xl leading-7 text-white/85'>
            We aim to build long-term client relationships through honest communication, consistent standards and
            responsible service delivery.
          </p>
        </div>
      </section>

      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <SectionHeading eyebrow='Values' title='The values guiding Shinezone' />
          <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {values.map(([title, text]) => (
              <TextCard key={title} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8'>
          <div>
            <SectionHeading
              eyebrow='Operations'
              title='Built from practical service-management experience'
              text='Shinezone is built on practical experience of the responsibilities involved in running and supporting service-based operations.'
            />
            <p className='mt-5 leading-7 text-[#4a5b6d]'>
              This experience included coordinating people, responding to client needs, maintaining service standards,
              managing competing priorities, dealing with unexpected issues and ensuring that agreed tasks were
              completed.
            </p>
            <div className='mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
              {operationalExperience.map(item => (
                <div
                  key={item}
                  className='rounded-md border border-[#d6e2ea] bg-[#f8fbfc] p-3 text-sm font-semibold text-[#08274D]'
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className='relative min-h-[460px] overflow-hidden rounded-lg'>
            <Image
              src={aboutImages.operations}
              alt='Cleaning team with equipment representing operational planning and service delivery'
              fill
              sizes='(min-width: 1024px) 40vw, 100vw'
              className='object-cover'
            />
          </div>
        </div>
      </section>

      <section className='bg-[#eef5f8]'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Professional Management'
            title='Founder-led does not mean informally managed'
            text="Shinezone's services are intended to be governed through clear roles, documented controls and professional accountability."
          />
          <div className='mt-8 grid gap-4 lg:grid-cols-6'>
            {managementRoles.map(([role, text]) => (
              <article key={role} className='rounded-lg border border-[#d6e2ea] bg-white p-5 lg:col-span-2'>
                <h3 className='text-lg font-bold text-[#08274D]'>{role}</h3>
                <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{text}</p>
              </article>
            ))}
          </div>
          <p className='mt-6 rounded-md bg-white p-4 text-sm leading-6 text-[#4a5b6d]'>
            During early growth, one person may hold more than one responsibility. What matters is that responsibilities
            are clear, documented and reviewed.
          </p>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Who We Work With'
            title='Supporting organisations that manage people, property and service standards'
          />
          <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {sectors.map(([title, text]) => (
              <TextCard key={title} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8'>
          <div className='relative min-h-[420px] overflow-hidden rounded-lg'>
            <Image
              src={aboutImages.property}
              alt='Cleaning in a maintained property environment'
              fill
              sizes='(min-width: 1024px) 40vw, 100vw'
              className='object-cover'
            />
          </div>
          <div>
            <SectionHeading
              eyebrow='Growth'
              title='Growing carefully without losing accountability'
              text="Shinezone's ambition is to build a trusted cleaning company capable of supporting clients across multiple properties and regions. Growth must not come at the expense of safety, staff competence, service quality or communication."
            />
            <div className='mt-8 grid gap-4 md:grid-cols-2'>
              {[
                ['Recruit carefully', 'Select people who can work respectfully in sensitive property environments.'],
                ['Train before deployment', 'Match work to competence, supervision, equipment and risk controls.'],
                [
                  'Expand only where capacity exists',
                  'Avoid promising coverage or response levels that cannot be evidenced.'
                ],
                ['Maintain founder oversight', 'Keep founder-led accountability while building management depth.']
              ].map(([title, text]) => (
                <TextCard key={title} title={title} text={text} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Quality and Assurance'
            title='More than a founder story'
            text="Clients should not rely solely on the values or intentions of a company's founders. Shinezone's commitments must be supported by practical controls, evidence and measurable service management."
          />
          <div className='mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
            {assuranceLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className='rounded-md border border-[#d6e2ea] bg-[#f8fbfc] p-4 text-sm font-bold text-[#08274D] hover:border-[#00A652]'
              >
                {label}
              </Link>
            ))}
          </div>
          <p className='mt-8 rounded-lg border-l-4 border-[#00A652] bg-[#f0fbf5] p-5 leading-7 text-[#4a5b6d]'>
            Authorised clients and procurement teams may request relevant policies, insurance evidence, registration
            details, example risk-assessment templates, method-statement templates and training-framework information
            through a controlled process.
          </p>
        </div>
      </section>

      <section className='bg-[#08274D] text-white'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:px-8'>
          <div>
            <p className='text-sm font-bold text-[#91efbf] uppercase'>A Founder-Led Message</p>
            <h2 className='mt-3 text-3xl font-bold md:text-4xl'>
              Practical skill with respect, responsibility and clear communication
            </h2>
            <p className='mt-5 leading-7 text-white/85'>
              Shinezone exists because professional cleaning should combine practical skill with respect, responsibility
              and clear communication. Knowledge&apos;s service experience informs how the company thinks about safe
              environments, professional conduct and the importance of doing what has been agreed.
            </p>
          </div>
          <div className='rounded-lg bg-white/10 p-6'>
            <h3 className='text-xl font-bold'>Company information</h3>
            <dl className='mt-4 grid gap-3 text-sm text-white/85'>
              <div>
                <dt className='font-bold text-white'>Legal name</dt>
                <dd>{brand.legalName}</dd>
              </div>
              <div>
                <dt className='font-bold text-white'>Company number</dt>
                <dd>{brand.companyNumber}</dd>
              </div>
              <div>
                <dt className='font-bold text-white'>Registered address</dt>
                <dd>{brand.address}</dd>
              </div>
              <div>
                <dt className='font-bold text-white'>Representative</dt>
                <dd>{brand.representative}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className='bg-[#eaf6f0]'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
          <div>
            <p className='text-sm font-bold text-[#00A652] uppercase'>Work with Shinezone</p>
            <h2 className='mt-2 text-3xl font-bold text-[#08274D]'>
              Tell us about your property, service or cleaning requirement
            </h2>
            <p className='mt-3 max-w-3xl leading-7 text-[#4a5b6d]'>
              Whether you manage one property or a wider portfolio, Shinezone will review your requirements, identify
              important site considerations and propose an appropriate service.
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='/book'
              className='rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
            >
              Request a Quote
            </Link>
            <Link
              href='/book'
              className='rounded-md bg-[#08274D] px-5 py-3 font-semibold text-white hover:bg-[#061e3b]'
            >
              Book a Site Survey
            </Link>
            <Link
              href='/contact'
              className='rounded-md border border-[#08274D] px-5 py-3 font-semibold text-[#08274D] hover:bg-white'
            >
              Speak to Shinezone
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
