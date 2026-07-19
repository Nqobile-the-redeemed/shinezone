import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { assuranceNavigation, assurancePrinciples, controlledEvidenceStatement } from '@/data/assurance'
import { imagePaths } from '@/data/shinezone'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Quality & Safety | Shinezone',
  description:
    'Shinezone quality, safety and assurance centre covering safety management, specialist controls, policies and controlled evidence.'
}

export default function QualitySafetyPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Quality, Safety & Assurance'
        title='Cleaning services governed by clear controls, competent people and auditable standards'
        text='Shinezone’s quality and safety framework is designed to protect clients, residents, visitors, employees, subcontractors, property and the environment throughout routine, deep and specialist cleaning work.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8'>
          <div className='relative min-h-[420px] overflow-hidden rounded-lg'>
            <Image
              src={imagePaths.assurance}
              alt=''
              fill
              sizes='(min-width: 1024px) 45vw, 100vw'
              className='object-cover'
            />
          </div>
          <div className='grid content-center gap-5'>
            <p className='leading-7 text-[#4a5b6d]'>
              Shinezone reviews each instruction before attendance to understand the required service, property
              condition, occupancy, access arrangements, known hazards, time constraints and additional controls for
              vulnerable residents, bodily fluids, sharps, contaminated waste, lone working or out-of-hours attendance.
            </p>
            <p className='leading-7 text-[#4a5b6d]'>
              The controls described on this website are public summaries of Shinezone’s management system.
              Site-specific risk assessments, method statements, COSHH assessments, training records, quality audits and
              corrective-action evidence are maintained as controlled operational records.
            </p>
            <div className='rounded-lg border-l-4 border-[#00A652] bg-white p-5 text-sm leading-6 text-[#4a5b6d]'>
              {controlledEvidenceStatement}
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#08274D]'>Six assurance principles</h2>
          <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {assurancePrinciples.map(principle => (
              <article key={principle.title} className='rounded-lg border border-[#d6e2ea] bg-[#f8fbfc] p-5'>
                <h3 className='text-lg font-bold text-[#08274D]'>{principle.title}</h3>
                <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className='bg-[#eef5f8]'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-[#08274D]'>Assurance centre</h2>
          <div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {assuranceNavigation.map(card => (
              <Link
                key={card.href}
                href={card.href}
                className='rounded-lg border border-[#d6e2ea] bg-white p-5 shadow-sm hover:border-[#00A652]'
              >
                <h3 className='text-xl font-bold text-[#08274D]'>{card.title}</h3>
                <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{card.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className='bg-[#08274D] text-white'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold'>Process timeline</h2>
          <div className='mt-8 grid gap-3 md:grid-cols-3 lg:grid-cols-9'>
            {[
              'Instruction',
              'Triage',
              'Risk review',
              'Resource allocation',
              'Site controls',
              'Cleaning',
              'Inspection',
              'Sign-off',
              'Learning'
            ].map(step => (
              <div key={step} className='rounded-md border border-white/15 bg-white/8 p-4 text-sm font-bold'>
                {step}
              </div>
            ))}
          </div>
          <p className='mt-8 max-w-4xl text-white/85'>
            Shinezone does not treat a website statement as evidence on its own. A policy is effective only when
            supported by accountable management, competent staff, appropriate equipment, training, records, supervision,
            monitoring and corrective action.
          </p>
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
