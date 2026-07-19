import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPolicy, policies, policyStatusLabels } from '@/data/assurance'
import { CTASection, PageIntro, SiteShell } from '@/components/shinezone/SiteShell'

export function generateStaticParams() {
  return policies.map(policy => ({ slug: policy.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const policy = getPolicy(slug)

  if (!policy) {
    return { title: 'Policy Not Found | Shinezone' }
  }

  return {
    title: `${policy.title} | Shinezone`,
    description: policy.summary
  }
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const policy = getPolicy(slug)

  if (!policy) {
    notFound()
  }

  return (
    <SiteShell>
      <PageIntro eyebrow='Policy' title={policy.title} text={policy.summary} />
      <section className='bg-[#f6f9fb]'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[300px_1fr] lg:px-8'>
          <aside className='h-fit rounded-lg border border-[#d6e2ea] bg-white p-5 lg:sticky lg:top-32'>
            <Link href='/policies' className='text-sm font-semibold text-[#006c38] hover:text-[#08274D]'>
              Back to policy library
            </Link>
            <div className='mt-5 rounded-md bg-[#fff8e7] p-3 text-sm font-bold text-[#5e4a12]'>
              {policyStatusLabels[policy.status]}
            </div>
            <dl className='mt-5 grid gap-3 text-sm text-[#4a5b6d]'>
              <div>
                <dt className='font-bold text-[#08274D]'>Reference</dt>
                <dd>SZ-POL-{policy.slug.toUpperCase()}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Version</dt>
                <dd>{policy.version}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Owner</dt>
                <dd>{policy.owner}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Approved by</dt>
                <dd>{policy.approvedBy}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Effective date</dt>
                <dd>{policy.effectiveDate}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Last reviewed</dt>
                <dd>{policy.lastReviewed}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Next review</dt>
                <dd>{policy.nextReview}</dd>
              </div>
            </dl>
          </aside>
          <div className='grid gap-6'>
            <section className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
              <h2 className='text-2xl font-bold text-[#08274D]'>Applies to</h2>
              <div className='mt-4 flex flex-wrap gap-2'>
                {policy.appliesTo.map(item => (
                  <span key={item} className='rounded-md bg-[#eaf6f0] px-3 py-2 text-sm font-semibold text-[#08274D]'>
                    {item}
                  </span>
                ))}
              </div>
            </section>
            {policy.sections.map(section => (
              <section key={section.title} className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
                <h2 className='text-2xl font-bold text-[#08274D]'>{section.title}</h2>
                {section.body?.map(paragraph => (
                  <p key={paragraph} className='mt-4 leading-7 text-[#4a5b6d]'>
                    {paragraph}
                  </p>
                ))}
                {section.items ? (
                  <ul className='mt-5 grid gap-3 text-sm leading-6 text-[#4a5b6d] sm:grid-cols-2'>
                    {section.items.map(item => (
                      <li key={item} className='rounded-md bg-[#f8fbfc] p-3'>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            <section className='rounded-lg border border-[#d6e2ea] bg-white p-6'>
              <h2 className='text-2xl font-bold text-[#08274D]'>Related policies and evidence</h2>
              <div className='mt-4 flex flex-wrap gap-3'>
                {policy.relatedPolicies.map(related => (
                  <Link
                    key={related}
                    href={getPolicy(related) ? `/policies/${related}` : '/quality-safety/quality-assurance'}
                    className='rounded-md bg-[#eaf6f0] px-3 py-2 text-sm font-semibold text-[#08274D] hover:bg-[#d8f0e4]'
                  >
                    {related.replaceAll('-', ' ')}
                  </Link>
                ))}
              </div>
              <Link
                href='/assurance/request-documents'
                className='mt-6 inline-flex rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
              >
                Request controlled evidence
              </Link>
            </section>
          </div>
        </div>
      </section>
      <CTASection />
    </SiteShell>
  )
}
