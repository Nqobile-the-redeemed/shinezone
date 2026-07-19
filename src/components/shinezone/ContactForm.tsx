import CaptchaField from '@/components/shinezone/CaptchaField'

const fieldClass =
  'w-full rounded-md border border-[#cbd6df] bg-white px-3 py-2.5 text-sm text-[#102033] outline-none focus:border-[#00A652] focus:ring-2 focus:ring-[#00A652]/20'

export default function ContactForm() {
  return (
    <form className='grid gap-4 rounded-lg border border-[#d6e2ea] bg-white p-6'>
      <div>
        <h2 className='text-2xl font-bold text-[#08274D]'>Send an enquiry</h2>
        <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>
          For quotations and site surveys, the booking form captures more detail. Use this form for general questions.
        </p>
      </div>
      <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
        Name
        <input className={fieldClass} name='name' />
      </label>
      <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
        Organisation
        <input className={fieldClass} name='organisation' />
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
        Message
        <textarea className={fieldClass} name='message' rows={5} />
      </label>
      <CaptchaField action='contact-enquiry' />
      <button type='button' className='rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'>
        Send Enquiry
      </button>
    </form>
  )
}
