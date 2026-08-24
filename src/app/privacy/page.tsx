import type { Metadata } from 'next'
import Link from 'next/link'
import { brand } from '@/data/shinezone'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Privacy Policy | Shinezone',
  description:
    'Shinezone privacy policy explaining how website, enquiry, booking, client and supplier information is handled.'
}

const sections = [
  {
    title: '1. Who we are',
    body: [
      `${brand.legalName} is a commercial and specialist cleaning provider. For this policy, "Shinezone", "we", "us" and "our" refer to ${brand.legalName}.`,
      `Registered address: ${brand.address}. Company number: ${brand.companyNumber}.`,
      `Contact for privacy questions: ${brand.email}.`
    ]
  },
  {
    title: '2. Information we collect',
    body: [
      'We may collect information submitted through our website forms, telephone calls, emails, bookings, emergency attendance requests and supplier or client communications.',
      'This can include name, organisation, job title, email address, telephone number, site address, access instructions, service requirements, booking details, photographs supplied by a client, complaint information and correspondence.',
      'Where specialist cleaning is required, we may receive limited information about site hazards, occupancy, vulnerable people, contamination, sharps, waste, access restrictions or incident circumstances so that work can be triaged safely.'
    ]
  },
  {
    title: '3. Information we avoid collecting',
    body: [
      'We aim to collect only what is necessary. We do not ask for unrelated medical histories, full care plans, unnecessary resident information, bank details through website forms, passwords or identity documents unless there is a specific lawful reason and a controlled channel has been agreed.',
      'Photographs should not include identifiable people, confidential documents, medication records or personal belongings unless this is strictly necessary and authorised.'
    ]
  },
  {
    title: '4. How we use information',
    items: [
      'Respond to enquiries and quotation requests.',
      'Triage cleaning work, including emergency or specialist attendance.',
      'Plan access, staffing, equipment, PPE, chemicals, waste routes and safety controls.',
      'Provide quotations, booking confirmations, attendance updates and completion records.',
      'Manage complaints, incidents, rectification and quality assurance.',
      'Maintain client, supplier and subcontractor records.',
      'Meet legal, insurance, health and safety, tax, accounting and waste duty-of-care obligations.',
      'Improve our website, forms, processes and customer service.'
    ]
  },
  {
    title: '5. Lawful bases',
    body: [
      'Depending on the situation, we rely on contract, legitimate interests, legal obligation, consent or vital interests. For example, we may use enquiry details to respond to a quotation request, site information to plan safe work, records to meet legal obligations, and consent where optional marketing is requested.'
    ]
  },
  {
    title: '6. Special category or sensitive information',
    body: [
      'Most cleaning enquiries do not require special category information. Where a client provides information about vulnerable people, health-related risks, safeguarding concerns or contamination, we handle it carefully, restrict access and use it only for safety, safeguarding, service delivery or legal purposes.'
    ]
  },
  {
    title: '7. Sharing information',
    body: [
      'We may share necessary information with authorised staff, supervisors, approved subcontractors, waste carriers, insurers, professional advisers, IT providers, payment or accounting providers, emergency services, regulators or public authorities where lawful and necessary.',
      'We do not sell personal information.'
    ]
  },
  {
    title: '8. Website forms and reCAPTCHA',
    body: [
      'Our website forms may use Google reCAPTCHA to reduce spam and automated misuse. reCAPTCHA may process technical information such as IP address, browser and interaction signals under Google terms and privacy documentation.',
      'Form submissions may include a hidden anti-spam field, time checks and source validation to protect the website and our inbox.'
    ]
  },
  {
    title: '9. Retention',
    body: [
      'We keep information only for as long as needed for the purpose collected, including enquiry handling, service delivery, legal, insurance, tax, accounting, contract and complaints requirements.',
      'Operational records, waste records, incident notes, quotations, invoices and contract records may be retained for different periods depending on the nature of the work and applicable obligations.'
    ]
  },
  {
    title: '10. Security',
    body: [
      'We use proportionate controls to protect information, including access limitation, secure systems, controlled sharing, staff awareness, device controls, backup arrangements and secure deletion where appropriate.',
      'No internet transmission is completely secure, so sensitive or high-risk information should be shared through an agreed controlled channel where possible.'
    ]
  },
  {
    title: '11. Your rights',
    body: [
      'You may have rights to access, correct, delete, restrict or object to processing of your personal information, and to withdraw consent where processing is based on consent.',
      'To make a request, contact us using the email above. We may need to confirm identity before acting on a request.'
    ]
  },
  {
    title: '12. Complaints',
    body: [
      'If you are unhappy with how we handle personal information, please contact us first so we can investigate.',
      "You also have the right to complain to the UK Information Commissioner's Office at ico.org.uk."
    ]
  },
  {
    title: '13. Updates',
    body: [
      'We may update this policy when our services, systems, legal obligations or website features change. The latest version will be published on this page.'
    ]
  }
]

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Privacy Policy'
        title='How Shinezone handles personal information'
        text='This privacy policy explains what information we collect, why we use it, how we protect it and the choices available to clients, website visitors, suppliers and other contacts.'
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
                <dt className='font-bold text-[#08274D]'>Applies to</dt>
                <dd>Website visitors, clients, suppliers, referrers and enquiry contacts.</dd>
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
            {sections.map(section => (
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
                <Link href='/cookies' className='rounded-md bg-white px-4 py-2 text-sm font-bold text-[#08274D]'>
                  Cookies
                </Link>
                <Link href='/terms' className='rounded-md bg-white px-4 py-2 text-sm font-bold text-[#08274D]'>
                  Terms
                </Link>
                <Link
                  href='/policies/data-protection'
                  className='rounded-md bg-white px-4 py-2 text-sm font-bold text-[#08274D]'
                >
                  Data protection policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
