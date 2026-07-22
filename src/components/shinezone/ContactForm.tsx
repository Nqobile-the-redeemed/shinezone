'use client'

import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import CaptchaField from '@/components/shinezone/CaptchaField'

const fieldClass =
  'w-full rounded-md border border-[#cbd6df] bg-white px-3 py-2.5 text-sm text-[#102033] outline-none focus:border-[#00A652] focus:ring-2 focus:ring-[#00A652]/20'
const apiBaseUrl = process.env.NEXT_PUBLIC_SHINEZONE_API_URL?.replace(/\/$/, '') || ''
const apiV1BaseUrl = apiBaseUrl.endsWith('/v1') ? apiBaseUrl : `${apiBaseUrl}/v1`
const contactEndpoint = `${apiV1BaseUrl}/clients/shinezone/queries`

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

function stringValue(formData: FormData, name: string) {
  const value = formData.get(name)

  return typeof value === 'string' && value.trim() ? value.trim() : undefined
}

function recaptchaAction(action: string) {
  return action.replace(/[^A-Za-z0-9/_]/g, '_')
}

export default function ContactForm() {
  const formStartedAt = useMemo(() => Math.floor(Date.now() / 1000), [])
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>()

  async function createRecaptchaToken(action: string) {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_SHINEZONE_RECAPTCHA_SITE_KEY

    if (!siteKey) {
      return undefined
    }

    if (!window.grecaptcha) {
      throw new Error('Google reCAPTCHA is still loading. Please try again in a moment.')
    }

    return new Promise<string>((resolve, reject) => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha
          ?.execute(siteKey, { action: recaptchaAction(action) })
          .then(resolve)
          .catch(() => reject(new Error('Google reCAPTCHA verification could not start. Please try again.')))
      })
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.reportValidity()) {
      return
    }

    const formData = new FormData(form)
    setStatus('submitting')
    setMessage(undefined)

    try {
      const recaptchaToken = await createRecaptchaToken('contact_enquiry')
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: stringValue(formData, 'name'),
          email: stringValue(formData, 'email'),
          phone: stringValue(formData, 'phone'),
          subject: stringValue(formData, 'subject') || 'ShineZone website enquiry',
          message: stringValue(formData, 'message'),
          enquiry_type: 'website_contact',
          details: {
            organisation: stringValue(formData, 'organisation') || '',
            contact_route: 'Speak to a Team form'
          },
          recaptcha_token: recaptchaToken,
          recaptcha_action: 'contact_enquiry',
          form_started_at: formStartedAt
        })
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(result?.message || 'We could not submit your enquiry.')
      }

      setStatus('success')
      setMessage(result?.message || 'Thank you. Your enquiry has been sent.')
      form.reset()
    } catch (error) {
      setStatus('error')
      const errorMessage = error instanceof Error ? error.message : 'We could not submit your enquiry.'
      setMessage(
        errorMessage === 'Failed to fetch'
          ? 'Could not reach the enquiry API. Please try again or contact Shinezone by phone.'
          : errorMessage
      )
    }
  }

  return (
    <form className='grid gap-4 rounded-lg border border-[#d6e2ea] bg-white p-6' onSubmit={handleSubmit}>
      <div>
        <h2 className='text-2xl font-bold text-[#08274D]'>Send an enquiry</h2>
        <p className='mt-2 text-sm leading-6 text-[#4a5b6d]'>
          For quotations and site surveys, the booking form captures more detail. Use this form for general questions.
        </p>
      </div>
      <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
        Name <span className='text-[#d92d20]'>*</span>
        <input className={fieldClass} name='name' required minLength={2} />
      </label>
      <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
        Organisation
        <input className={fieldClass} name='organisation' />
      </label>
      <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
        Work email <span className='text-[#d92d20]'>*</span>
        <input className={fieldClass} name='email' type='email' required />
      </label>
      <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
        Phone
        <input className={fieldClass} name='phone' type='tel' />
      </label>
      <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
        Subject
        <input className={fieldClass} name='subject' />
      </label>
      <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
        Message <span className='text-[#d92d20]'>*</span>
        <textarea className={fieldClass} name='message' rows={5} required minLength={10} />
      </label>
      <CaptchaField action='contact-enquiry' />
      {message ? (
        <p
          className={`rounded-md p-4 text-sm leading-6 ${
            status === 'success' ? 'bg-[#e6f8ef] text-[#006c38]' : 'bg-[#fff3f0] text-[#8a2b16]'
          }`}
        >
          {message}
        </p>
      ) : null}
      <button
        type='submit'
        disabled={status === 'submitting'}
        className='rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47] disabled:cursor-not-allowed disabled:bg-[#7dcfa4]'
      >
        {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  )
}
