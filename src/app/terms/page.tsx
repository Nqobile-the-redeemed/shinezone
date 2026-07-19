import type { Metadata } from 'next'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Terms | Shinezone',
  description: 'Website terms status for Shinezone.'
}

export default function TermsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Terms'
        title='Website terms'
        text="Shinezone's detailed website terms, quotation terms, booking confirmation wording and limitation language are pending formal approval."
      />
    </SiteShell>
  )
}
