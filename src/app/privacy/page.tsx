import type { Metadata } from 'next'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Privacy | Shinezone',
  description: 'Privacy notice status for Shinezone.'
}

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Privacy'
        title='Privacy notice'
        text="Shinezone's detailed UK GDPR privacy notice, retention periods, lawful bases, data-subject rights process and processor details are pending formal approval."
      />
    </SiteShell>
  )
}
