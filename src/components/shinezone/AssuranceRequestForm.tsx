import { assuranceDocumentCategories } from '@/data/assurance'
import CaptchaField from '@/components/shinezone/CaptchaField'

const fieldClass =
  'w-full rounded-md border border-[#cbd6df] bg-white px-3 py-2.5 text-sm text-[#102033] outline-none focus:border-[#00A652] focus:ring-2 focus:ring-[#00A652]/20'

export default function AssuranceRequestForm() {
  return (
    <form className='rounded-lg border border-[#d6e2ea] bg-white p-6 shadow-sm'>
      <div>
        <h2 className='text-2xl font-bold text-[#08274D]'>Request controlled evidence</h2>
        <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>
          Requests are reviewed before documents are shared. Sensitive files should be supplied through secure links,
          not public email attachments.
        </p>
      </div>
      <div className='mt-6 grid gap-4 md:grid-cols-2'>
        <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
          Full name
          <input className={fieldClass} name='fullName' />
        </label>
        <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
          Organisation
          <input className={fieldClass} name='organisation' />
        </label>
        <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
          Role
          <input className={fieldClass} name='role' />
        </label>
        <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
          Work email
          <input className={fieldClass} name='email' type='email' />
        </label>
        <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
          Phone
          <input className={fieldClass} name='phone' type='tel' />
        </label>
        <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
          Procurement or contract reference
          <input className={fieldClass} name='reference' />
        </label>
        <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
          Required date
          <input className={fieldClass} name='requiredDate' type='date' />
        </label>
      </div>
      <fieldset className='mt-6'>
        <legend className='text-sm font-semibold text-[#08274D]'>Requested categories/documents</legend>
        <div className='mt-3 grid gap-3 md:grid-cols-2'>
          {assuranceDocumentCategories.map(category => (
            <label
              key={category.title}
              className='rounded-md border border-[#d6e2ea] bg-[#f8fbfc] p-4 text-sm text-[#4a5b6d]'
            >
              <span className='flex items-center gap-3 font-bold text-[#08274D]'>
                <input type='checkbox' className='h-4 w-4 rounded accent-[#00A652]' />
                {category.title}
              </span>
              <span className='mt-2 block leading-6'>{category.documents.join(', ')}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className='mt-6 grid gap-2 text-sm font-semibold text-[#08274D]'>
        Reason for request
        <textarea className={fieldClass} name='reason' rows={5} />
      </label>
      <label className='mt-5 flex items-start gap-3 text-sm font-semibold text-[#08274D]'>
        <input type='checkbox' className='mt-1 h-4 w-4 rounded accent-[#00A652]' />I acknowledge Shinezone may review
        this request before supplying controlled evidence and may decline sensitive or unauthorised requests.
      </label>
      <div className='mt-5'>
        <CaptchaField action='assurance-request' />
      </div>
      <button
        type='button'
        className='mt-6 rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
      >
        Submit Evidence Request
      </button>
    </form>
  )
}
