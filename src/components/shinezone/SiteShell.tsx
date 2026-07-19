import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { brand, mainNav } from '@/data/shinezone'

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen bg-[#f6f9fb] text-[#102033]'>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 border-b border-white/20 bg-white/95 backdrop-blur'>
      <div className='bg-[#08274D] text-white'>
        <div className='mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8'>
          <p className='flex items-center gap-2'>
            <Image src='/images/shinezone/favicon.svg' alt='' width={22} height={20} className='h-5 w-5 bg-white px-0.5 rounded' />
            Need an urgent specialist clean? Contact our emergency response team.
          </p>
          <div className='flex flex-wrap items-center gap-3'>
            <span>{brand.emergencyPhone}</span>
            <Link
              href='/emergency'
              className='rounded-md bg-[#00A652] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#008f47] focus:ring-2 focus:ring-white focus:outline-none'
            >
              Request Emergency Attendance
            </Link>
          </div>
        </div>
      </div>
      <div className='mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
        <Link href='/' className='flex w-fit items-center' aria-label='Shinezone home'>
          <Image
            src='/images/shinezone/shinezone-logo.svg'
            alt='Shinezone'
            width={220}
            height={48}
            priority
            className='h-auto w-[178px] sm:w-[220px]'
          />
        </Link>
        <nav
          aria-label='Main navigation'
          className='flex flex-wrap items-center gap-2 text-sm font-semibold text-[#08274D]'
        >
          {mainNav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className='rounded-md px-3 py-2 hover:bg-[#eaf6f0] focus:ring-2 focus:ring-[#00A652] focus:outline-none'
            >
              {item.label}
            </Link>
          ))}
          <Link
            href='/emergency'
            className='rounded-md bg-[#08274D] px-4 py-2 text-white hover:bg-[#061e3b] focus:ring-2 focus:ring-[#00A652] focus:outline-none'
          >
            Emergency Cleaning
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className='bg-[#08274D] text-white'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8'>
        <div>
          <Image
            src='/images/shinezone/shinezone-logo.svg'
            alt='Shinezone'
            width={220}
            height={48}
            className='h-auto w-[200px] rounded-md bg-white p-3'
          />
          <div className='mt-4 flex items-center gap-2 text-sm font-semibold text-white/85'>
            <Image
              src='/images/shinezone/favicon.svg'
              alt=''
              width={24}
              height={22}
              className='h-6 w-6 rounded bg-white p-1'
            />
            Quality, safety and assurance-led cleaning
          </div>
          <p className='mt-5 max-w-xl text-sm leading-6 text-white/80'>
            Commercial and specialist cleaning for property professionals, housing providers, care organisations and
            businesses. Attendance and response times are confirmed after operational triage.
          </p>
          <dl className='mt-6 grid gap-2 text-sm text-white/80'>
            <div>
              <dt className='font-semibold text-white'>Legal name</dt>
              <dd>{brand.legalName}</dd>
            </div>
            <div>
              <dt className='font-semibold text-white'>Company number</dt>
              <dd>{brand.companyNumber}</dd>
            </div>
            <div>
              <dt className='font-semibold text-white'>Registered address</dt>
              <dd>{brand.address}</dd>
            </div>
          </dl>
        </div>
        <div>
          <h2 className='text-base font-semibold'>Site</h2>
          <ul className='mt-4 grid gap-2 text-sm text-white/80'>
            {mainNav.map(item => (
              <li key={item.href}>
                <Link href={item.href} className='hover:text-white'>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href='/case-studies' className='hover:text-white'>
                Case Studies
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:text-white'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-base font-semibold'>Assurance</h2>
          <ul className='mt-4 grid gap-2 text-sm text-white/80'>
            <li>
              <Link href='/privacy' className='hover:text-white'>
                Privacy
              </Link>
            </li>
            <li>
              <Link href='/cookies' className='hover:text-white'>
                Cookies
              </Link>
            </li>
            <li>
              <Link href='/terms' className='hover:text-white'>
                Terms
              </Link>
            </li>
            <li>
              <Link href='/accessibility' className='hover:text-white'>
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-t border-white/10 px-4 py-5 text-center text-sm text-white/70'>
        &copy; {new Date().getFullYear()} {brand.legalName} All rights reserved.
      </div>
    </footer>
  )
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <p className='text-sm font-bold text-[#00A652] uppercase'>{eyebrow}</p>
        <h1 className='mt-3 max-w-4xl text-4xl leading-tight font-bold text-[#08274D] md:text-5xl'>{title}</h1>
        <p className='mt-5 max-w-3xl text-lg leading-8 text-[#4a5b6d]'>{text}</p>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className='bg-[#eaf6f0]'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
        <div>
          <p className='text-sm font-bold text-[#00A652] uppercase'>Next step</p>
          <h2 className='mt-2 text-3xl font-bold text-[#08274D]'>
            Tell us about your property and receive a tailored proposal.
          </h2>
          <p className='mt-3 max-w-2xl text-[#4a5b6d]'>
            The form captures property, access, risk and date preferences so Shinezone can triage the work properly.
          </p>
        </div>
        <div className='flex flex-wrap gap-3'>
          <Link href='/book' className='rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'>
            Request a Quote
          </Link>
          <Link
            href='/contact'
            className='rounded-md border border-[#08274D] px-5 py-3 font-semibold text-[#08274D] hover:bg-white'
          >
            Speak to the Team
          </Link>
        </div>
      </div>
    </section>
  )
}
