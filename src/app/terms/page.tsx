import type { Metadata } from 'next'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Terms | Shinezone',
  description: 'Terms and conditions placeholder for Shinezone.'
}

export default function TermsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Terms'
        title='Website terms'
        text='[VERIFY BEFORE PUBLICATION] Add Shinezone’s approved website terms, quotation terms, booking confirmation wording and limitation language.'
      />
    </SiteShell>
  )
}
