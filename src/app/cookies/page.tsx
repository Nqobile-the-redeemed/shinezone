import type { Metadata } from 'next'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Cookies | Shinezone',
  description: 'Cookie notice status for Shinezone.'
}

export default function CookiesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Cookies'
        title='Cookie notice'
        text='The approved cookie list, consent mechanism and analytics settings are pending formal approval before non-essential cookies are enabled.'
      />
    </SiteShell>
  )
}
