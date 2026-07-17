import Link from 'next/link'

const adminLinks = [
  ['/admin', 'Dashboard'],
  ['/admin/bookings', 'Bookings'],
  ['/admin/calendar', 'Calendar'],
  ['/admin/availability', 'Availability'],
  ['/admin/service-areas', 'Service Areas'],
  ['/admin/services', 'Services'],
  ['/admin/case-studies', 'Case Studies'],
  ['/admin/settings', 'Settings']
]

export function AdminScaffold({ title, description }: { title: string; description: string }) {
  return (
    <div className='min-h-screen bg-[#f6f9fb] text-[#102033]'>
      <header className='border-b border-[#d6e2ea] bg-white'>
        <div className='mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
          <div>
            <p className='text-sm font-bold text-[#00A652] uppercase'>Shinezone Operations</p>
            <h1 className='text-2xl font-bold text-[#08274D]'>{title}</h1>
          </div>
          <Link
            href='/'
            className='rounded-md border border-[#08274D] px-4 py-2 text-sm font-semibold text-[#08274D] hover:bg-white'
          >
            Public Site
          </Link>
        </div>
      </header>
      <div className='mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8'>
        <aside className='rounded-lg border border-[#d6e2ea] bg-white p-3'>
          <nav className='grid gap-1' aria-label='Admin navigation'>
            {adminLinks.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className='rounded-md px-3 py-2 text-sm font-semibold text-[#08274D] hover:bg-[#eaf6f0]'
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
          <p className='text-lg leading-8 text-[#4a5b6d]'>{description}</p>
          <div className='mt-6 rounded-md border border-[#d6e2ea] bg-[#f8fbfc] p-5'>
            <h2 className='text-lg font-bold text-[#08274D]'>Backend status</h2>
            <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>
              This route is scaffolded for Phase 2. Connect it to the shared API once authentication, bookings,
              availability, audit logs and file storage are implemented.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
