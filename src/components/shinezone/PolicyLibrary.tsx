'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { policies, policyStatusLabels } from '@/data/assurance'

const categories = [
  'All',
  'Safety',
  'Workforce',
  'Specialist cleaning',
  'Quality',
  'Environmental',
  'Governance',
  'Data/privacy',
  'Supply chain'
]

export default function PolicyLibrary() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filteredPolicies = useMemo(() => {
    const lowerQuery = query.toLowerCase()

    return policies.filter(policy => {
      const matchesCategory = category === 'All' || policy.category === category
      const matchesQuery =
        !lowerQuery ||
        policy.title.toLowerCase().includes(lowerQuery) ||
        policy.summary.toLowerCase().includes(lowerQuery) ||
        policy.category.toLowerCase().includes(lowerQuery)

      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <div>
      <div className='rounded-lg border border-[#d6e2ea] bg-white p-5'>
        <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
          Search policies
          <input
            value={query}
            onChange={event => setQuery(event.target.value)}
            className='rounded-md border border-[#cbd6df] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#00A652] focus:ring-2 focus:ring-[#00A652]/20'
            placeholder='Search by title, category or summary'
          />
        </label>
        <div className='mt-4 flex flex-wrap gap-2'>
          {categories.map(item => (
            <button
              key={item}
              type='button'
              onClick={() => setCategory(item)}
              className={`rounded-md px-3 py-2 text-sm font-semibold ${
                category === item ? 'bg-[#00A652] text-white' : 'bg-[#eaf6f0] text-[#08274D] hover:bg-[#d8f0e4]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className='mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {filteredPolicies.map(policy => (
          <Link
            key={policy.slug}
            href={`/policies/${policy.slug}`}
            className='rounded-lg border border-[#d6e2ea] bg-white p-5 shadow-sm hover:border-[#00A652]'
          >
            <div className='flex flex-wrap items-center gap-2'>
              <span className='rounded-md bg-[#eaf6f0] px-2 py-1 text-xs font-bold text-[#006c38]'>
                {policy.category}
              </span>
              <span className='rounded-md bg-[#fff8e7] px-2 py-1 text-xs font-bold text-[#5e4a12]'>
                {policyStatusLabels[policy.status]}
              </span>
            </div>
            <h2 className='mt-4 text-xl font-bold text-[#08274D]'>{policy.title}</h2>
            <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{policy.summary}</p>
            <dl className='mt-4 grid gap-1 text-xs text-[#5d6b78]'>
              <div>
                <dt className='font-bold text-[#08274D]'>Version</dt>
                <dd>{policy.version}</dd>
              </div>
              <div>
                <dt className='font-bold text-[#08274D]'>Next review</dt>
                <dd>{policy.nextReview}</dd>
              </div>
            </dl>
          </Link>
        ))}
      </div>
    </div>
  )
}
