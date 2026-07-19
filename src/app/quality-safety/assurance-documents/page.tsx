import type { Metadata } from 'next'
import Link from 'next/link'
import { assuranceDocumentCategories, restrictedEvidence } from '@/data/assurance'
import { PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export const metadata: Metadata = {
  title: 'Assurance Documents | Shinezone',
  description: 'Controlled assurance evidence for authorised Shinezone clients and procurement teams.'
}

export default function AssuranceDocumentsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow='Controlled Evidence'
        title='Controlled assurance evidence for clients and procurement teams'
        text='Shinezone provides appropriate evidence to authorised clients, commissioners, landlords and procurement teams through controlled channels.'
      />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {assuranceDocumentCategories.map(category => (
              <article key={category.title} className='rounded-lg border border-[#d6e2ea] bg-white p-5'>
                <h2 className='text-xl font-bold text-[#08274D]'>{category.title}</h2>
                <ul className='mt-4 grid gap-2 text-sm leading-6 text-[#4a5b6d]'>
                  {category.documents.map(document => (
                    <li key={document}>{document}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <section className='mt-8 rounded-lg border border-[#d6e2ea] bg-white p-6'>
            <h2 className='text-2xl font-bold text-[#08274D]'>Never publicly exposed</h2>
            <div className='mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
              {restrictedEvidence.map(item => (
                <div key={item} className='rounded-md bg-[#f8fbfc] p-3 text-sm font-semibold text-[#08274D]'>
                  {item}
                </div>
              ))}
            </div>
          </section>
          <Link
            href='/assurance/request-documents'
            className='mt-8 inline-flex rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
          >
            Request Documents
          </Link>
        </div>
      </section>
    </SiteShell>
  )
}
