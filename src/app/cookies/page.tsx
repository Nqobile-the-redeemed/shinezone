import type { Metadata } from 'next'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Cookies | Shinezone',
  description: 'Cookie notice placeholder for Shinezone.'
}

export default function CookiesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Cookies'
        title='Cookie notice'
        text='[VERIFY BEFORE PUBLICATION] Add the approved cookie list, consent mechanism and analytics settings before enabling non-essential cookies.'
      />
    </SiteShell>
  )
}
