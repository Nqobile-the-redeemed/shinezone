import type { Metadata } from 'next'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Accessibility | Shinezone',
  description: 'Accessibility statement placeholder for Shinezone.'
}

export default function AccessibilityPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Accessibility'
        title='Accessibility statement'
        text='Shinezone should maintain WCAG 2.2 AA standards with keyboard navigation, visible focus states, clear labels, sufficient contrast and accessible booking forms.'
      />
    </SiteShell>
  )
}
