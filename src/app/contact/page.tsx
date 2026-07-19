import type { Metadata } from 'next'
import Link from 'next/link'
import { brand } from '@/data/shinezone'
import ContactForm from '@/components/shinezone/ContactForm'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Contact | Shinezone',
  description: 'Contact Shinezone for quotations, site surveys, urgent cleaning requests and company details.'
}

const faqs = [
  'Which areas do you cover?',
  'Do you clean occupied properties?',
  'Can you work in supported living environments?',
  'Do staff hold DBS checks?',
  'Can you remove sharps?',
  'Do you remove bulky waste?',
  'Do you provide waste-transfer records?',
  'Can I book outside normal hours?',
  'Do you provide before-and-after photographs?',
  'How are emergency requests confirmed?'
]

export default function ContactPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Contact'
        title='Speak to Shinezone about your property'
        text='Use the booking route for structured quotations and site surveys, or contact Shinezone directly using the details below.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8'>
          <article className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
            <h2 className='text-2xl font-bold text-[#08274D]'>Contact details</h2>
            <dl className='mt-5 grid gap-4 text-sm text-[#4a5b6d]'>
              <div>
                <dt className='font-bold text-[#08274D]'>General telephone</dt>
                <dd>{brand.phone}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Emergency telephone</dt>
                <dd>{brand.emergencyPhone}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>General email</dt>
                <dd>{brand.email}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Quotations email</dt>
                <dd>{brand.quotationsEmail}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Registered address</dt>
                <dd>{brand.address}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Operating hours</dt>
                <dd>{brand.normalHours}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Emergency hours</dt>
                <dd>{brand.emergencyHours}</dd>
              </div>
            </dl>
          </article>
          <article className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
            <h2 className='text-2xl font-bold text-[#08274D]'>Enquiry options</h2>
            <div className='mt-5 grid gap-3'>
              {[
                ['Request a quotation', '/book'],
                ['Book a site survey', '/book'],
                ['Request urgent or emergency attendance', '/emergency']
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className='rounded-md border border-[#d6e2ea] bg-[#f8fbfc] p-4 font-semibold text-[#08274D] hover:border-[#00A652]'
                >
                  {label}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto max-w-3xl px-4 pb-14 sm:px-6 lg:px-8'>
          <ContactForm />
        </div>
      </section>
      <section className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#08274D]'>Frequently asked questions</h2>
          <div className='mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {faqs.map(faq => (
              <div
                key={faq}
                className='rounded-md border border-[#d6e2ea] bg-[#f8fbfc] p-4 text-sm font-semibold text-[#08274D]'
              >
                {faq}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
