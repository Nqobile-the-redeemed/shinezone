import type { Metadata } from 'next'
import Link from 'next/link'
import { brand } from '@/data/shinezone'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Shinezone',
  description: 'Website and service enquiry terms and conditions for Shinezone.'
}

const terms = [
  {
    title: '1. About these terms',
    body: [
      `These terms apply to use of the Shinezone website and to enquiries submitted through the website. Shinezone is operated by ${brand.legalName}, company number ${brand.companyNumber}.`,
      'Separate written quotation, contract, purchase order, framework agreement or service-specific terms may apply to actual cleaning work. If there is a conflict, the signed or agreed service document will normally take priority for that work.'
    ]
  },
  {
    title: '2. Website information',
    body: [
      'The website provides general information about commercial, specialist, communal, end-of-tenancy, emergency and property cleaning services.',
      'Website content is provided for general guidance and does not guarantee that a service, response time, attendance slot, specialist method or outcome is available for every site.'
    ]
  },
  {
    title: '3. Enquiries and bookings',
    body: [
      'Submitting a form, sending a message, opening a WhatsApp chat or requesting emergency attendance does not create a confirmed booking.',
      'A booking is confirmed only when Shinezone has reviewed the request, accepted the scope, agreed access and pricing, and confirmed attendance in writing or through another approved communication route.'
    ],
    items: [
      'We may request photographs, access details, occupancy details, risk information or a site survey before quoting.',
      'We may decline work that is unsafe, outside competence, outside service area, not lawfully authorised or unsuitable for available resources.',
      'Emergency and urgent work is subject to triage, crew availability, travel, PPE, equipment, waste-route availability and site safety.'
    ]
  },
  {
    title: '4. Quotations and pricing',
    body: [
      'Quotations are based on the information available at the time. If the actual site condition, access, hazards, waste volume, contamination, occupancy status or scope differs from the information provided, the price, duration or method may change.',
      'Unless expressly stated, quotations do not include out-of-scope waste removal, specialist subcontractors, parking, congestion charges, keys or locksmiths, pest treatment, structural repair, hazardous waste routes or additional attendance.'
    ]
  },
  {
    title: '5. Client responsibilities',
    items: [
      'Provide accurate site, access, contact and hazard information.',
      'Confirm authority to instruct cleaning and waste removal.',
      'Ensure access, keys, alarms, parking and utilities are available where required.',
      'Tell us about vulnerable occupants, pets, resident sensitivities, security arrangements and site restrictions.',
      'Disclose known sharps, bodily fluids, suspected substances, unknown chemicals, pests, mould, asbestos warnings, structural damage or electrical hazards.',
      'Remove valuables, confidential documents, medication, cash, personal records and fragile items unless agreed otherwise.',
      'Confirm whether photographs, completion evidence or waste documentation are required.'
    ]
  },
  {
    title: '6. Safety and stop-work authority',
    body: [
      'Shinezone may stop, pause, refuse or reschedule work if conditions are unsafe, materially different from the instruction, outside agreed scope or outside the competence, equipment or PPE available.',
      'Examples include concealed sharps, suspected controlled substances, uncontrolled biohazard, unsafe electrics, structural instability, aggression, blocked escape routes, asbestos concerns, inaccessible areas or unlawful waste instructions.'
    ]
  },
  {
    title: '7. Waste and environmental controls',
    body: [
      'Waste handling is subject to duty-of-care requirements, waste classification, segregation, authorised carriers, lawful transfer and appropriate documentation where required.',
      'Clients must not ask Shinezone to dispose of waste through unauthorised routes. Additional costs may apply for bulky, hazardous, contaminated, electrical, sharps or specialist waste.'
    ]
  },
  {
    title: '8. Photographs and evidence',
    body: [
      'Where agreed, Shinezone may take before-and-after photographs or completion evidence for quality, reporting, insurance, complaint handling or client sign-off.',
      'Photographs should avoid identifiable people, personal documents, medical information, confidential papers and unnecessary personal data.'
    ]
  },
  {
    title: '9. Website availability and security',
    body: [
      'We aim to keep the website available, secure and accurate, but we do not guarantee uninterrupted access or error-free content.',
      'You must not misuse the website, attempt unauthorised access, submit malicious code, overload forms, scrape content unlawfully or use the site for fraudulent or harmful activity.'
    ]
  },
  {
    title: '10. Intellectual property',
    body: [
      'Website text, layout, graphics, branding, images and other content belong to Shinezone or its licensors unless otherwise stated. You may view the site for normal business enquiry purposes, but you must not copy, reproduce or reuse content commercially without permission.'
    ]
  },
  {
    title: '11. Liability',
    body: [
      'Nothing in these terms excludes liability that cannot be excluded by law.',
      'To the extent permitted by law, Shinezone is not responsible for loss arising from inaccurate information supplied by a client, unavailable access, undisclosed hazards, unauthorised waste instructions, third-party systems, website downtime or use of general website information as a substitute for a site-specific assessment.'
    ]
  },
  {
    title: '12. Privacy',
    body: [
      'Personal information submitted through the website is handled according to our privacy policy. Website forms may use spam protection such as reCAPTCHA, honeypot fields, timing checks and source validation.'
    ]
  },
  {
    title: '13. Changes to these terms',
    body: [
      'We may update these terms from time to time. The version published on this page applies to website use from the date it is published.'
    ]
  },
  {
    title: '14. Governing law',
    body: [
      'These terms are governed by the laws of England and Wales. The courts of England and Wales will have jurisdiction, subject to any mandatory legal rights that apply.'
    ]
  }
]

export default function TermsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Terms and Conditions'
        title='Website and service enquiry terms'
        text='These terms explain how the Shinezone website may be used, how enquiries are handled, and what clients should understand before a cleaning request is confirmed.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.75fr_1.5fr] lg:px-8'>
          <aside className='h-fit rounded-lg border border-[#d6e2ea] bg-white p-6'>
            <p className='text-sm font-bold text-[#00A652] uppercase'>Document details</p>
            <dl className='mt-5 grid gap-4 text-sm text-[#4a5b6d]'>
              <div>
                <dt className='font-bold text-[#08274D]'>Last updated</dt>
                <dd>28 July 2026</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Legal entity</dt>
                <dd>{brand.legalName}</dd>
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
          <div className='grid gap-5'>
            {terms.map(section => (
              <article key={section.title} className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
                <h2 className='text-xl font-bold text-[#08274D]'>{section.title}</h2>
                {section.body && (
                  <div className='mt-4 grid gap-3 text-sm leading-7 text-[#4a5b6d]'>
                    {section.body.map(paragraph => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.items && (
                  <ul className='mt-4 grid gap-2 text-sm leading-6 text-[#4a5b6d]'>
                    {section.items.map(item => (
                      <li key={item} className='rounded-md bg-[#f8fbfc] p-3'>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
            <div className='rounded-lg border border-[#b8d9c9] bg-[#eaf6f0] p-6'>
              <h2 className='text-xl font-bold text-[#08274D]'>Related pages</h2>
              <div className='mt-4 flex flex-wrap gap-3'>
                <Link href='/privacy' className='rounded-md bg-white px-4 py-2 text-sm font-bold text-[#08274D]'>
                  Privacy policy
                </Link>
                <Link
                  href='/carbon-management-plan'
                  className='rounded-md bg-white px-4 py-2 text-sm font-bold text-[#08274D]'
                >
                  Carbon management plan
                </Link>
                <Link href='/book' className='rounded-md bg-white px-4 py-2 text-sm font-bold text-[#08274D]'>
                  Request a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
