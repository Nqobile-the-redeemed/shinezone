import type { Metadata } from 'next'
import { sensitiveClaims } from '@/data/shinezone'
import { AdminScaffold } from '@/components/shinezone/AdminScaffold'

export const metadata: Metadata = {
  title: 'Settings | Shinezone Admin'
}

export default function AdminSettingsPage() {
  return (
    <div>
      <AdminScaffold
        title='Settings'
        description={`Claim-control settings should include: ${sensitiveClaims.join(', ')}. Keep these off until supporting evidence is approved.`}
      />
    </div>
  )
}
