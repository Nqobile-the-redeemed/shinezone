import type { Metadata } from 'next'
import BookingRequestForm from '@/components/shinezone/BookingRequestForm'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Book a Service | Shinezone',
  description: 'Request a quotation, site survey, scheduled clean or emergency specialist cleaning attendance.'
}

export default function BookPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Booking Request'
        title='Request a quotation, site survey or cleaning attendance'
        text='This form captures the details needed to estimate crew size, duration, risks, waste, access and scheduling. It is not an instant booking engine.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8'>
          <BookingRequestForm />
        </div>
      </section>
    </SiteShell>
  )
}
