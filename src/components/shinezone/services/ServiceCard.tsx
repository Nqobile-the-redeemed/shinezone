import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/data/services'
import { categoryLabels, riskLabels } from '@/data/services'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className='group overflow-hidden rounded-lg border border-[#d6e2ea] bg-white shadow-sm'>
      <div className='relative aspect-[16/10] overflow-hidden'>
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
          className='object-cover transition duration-300 group-hover:scale-[1.03]'
        />
      </div>
      <div className='grid gap-4 p-5'>
        <div>
          <p className='text-xs font-bold tracking-wide text-[#00A652] uppercase'>
            {service.category.map(category => categoryLabels[category]).join(' / ')}
          </p>
          <h2 className='mt-2 text-xl font-bold text-[#08274D]'>{service.title}</h2>
          <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>{service.summary}</p>
        </div>

        <div className='grid gap-2 text-sm'>
          <div className='rounded-md bg-[#eef5f8] p-3'>
            <span className='font-bold text-[#08274D]'>Risk route: </span>
            <span className='text-[#4a5b6d]'>{riskLabels[service.riskLevel]}</span>
          </div>
          <div className='rounded-md bg-[#f0fbf5] p-3'>
            <span className='font-bold text-[#08274D]'>Typical model: </span>
            <span className='text-[#4a5b6d]'>{service.schedulingModel}</span>
          </div>
        </div>

        <div>
          <h3 className='text-sm font-bold text-[#08274D]'>Key outcomes</h3>
          <ul className='mt-2 grid gap-2 text-sm leading-6 text-[#4a5b6d]'>
            {service.outcomes.slice(0, 3).map(outcome => (
              <li key={outcome.title}>{outcome.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='text-sm font-bold text-[#08274D]'>Typical clients</h3>
          <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>
            {service.suitableFor
              .slice(0, 3)
              .map(item => item.title)
              .join(', ')}
          </p>
        </div>

        <div className='flex flex-wrap gap-3 pt-1'>
          <Link
            href={`/services/${service.slug}`}
            className='rounded-md bg-[#08274D] px-4 py-2 text-sm font-semibold text-white hover:bg-[#061e3b] focus:ring-2 focus:ring-[#00A652] focus:outline-none'
          >
            View service
          </Link>
          <Link
            href={`/book?service=${service.slug}`}
            className='rounded-md border border-[#08274D] px-4 py-2 text-sm font-semibold text-[#08274D] hover:bg-[#f6f9fb] focus:ring-2 focus:ring-[#00A652] focus:outline-none'
          >
            Request quote
          </Link>
        </div>
      </div>
    </article>
  )
}
