'use client'

import type { FormEvent, ReactNode } from 'react'
import { useMemo, useState } from 'react'
import CaptchaField from '@/components/shinezone/CaptchaField'

const inputClass =
  'w-full rounded-md border border-[#cbd6df] bg-white px-3 py-2.5 text-sm text-[#102033] outline-none focus:border-[#00A652] focus:ring-2 focus:ring-[#00A652]/20'
const apiBaseUrl = process.env.NEXT_PUBLIC_SHINEZONE_API_URL?.replace(/\/$/, '') || ''
const apiV1BaseUrl = apiBaseUrl.endsWith('/v1') ? apiBaseUrl : `${apiBaseUrl}/v1`
const emergencyEndpoint = `${apiV1BaseUrl}/clients/shinezone/emergency-requests`

const emergencyIncidentTypes = [
  'Bodily fluid contamination',
  'Sharps or drug paraphernalia',
  'Sudden death or unattended death clean',
  'Suspected suicide-related clean',
  'Body cleanup or post-incident contamination',
  'Urgent void or post-eviction condition',
  'Unknown substance or odour concern',
  'Other urgent specialist clean'
]

const requiredDeclarations = [
  'I confirm the information supplied is accurate to the best of my knowledge.',
  'I have authority to request this emergency attendance review.',
  'I understand Shinezone attendance is not confirmed until triage accepts the request.',
  'I understand immediate danger, criminal activity, fire or medical emergencies must be directed to the appropriate emergency service.',
  'I agree Shinezone may contact me urgently about this request.'
]

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

function checkedValues(formData: FormData, name: string) {
  return formData.getAll(name).filter((value): value is string => typeof value === 'string' && value.trim() !== '')
}

function recaptchaAction(action: string) {
  return action.replace(/[^A-Za-z0-9/_]/g, '_')
}

function Field({ label, children, required = false }: { label: string; children: ReactNode; required?: boolean }) {
  return (
    <label className='grid gap-2'>
      <span className='text-sm font-semibold text-[#08274D]'>
        {label} {required ? <span className='text-[#d92d20]'>*</span> : null}
      </span>
      {children}
    </label>
  )
}

export default function EmergencyRequestForm({ selectedServiceSlug }: { selectedServiceSlug?: string }) {
  const formStartedAt = useMemo(() => Math.floor(Date.now() / 1000), [])
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>()
  const [validationErrors, setValidationErrors] = useState<string[]>([])

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
    const declarations = checkedValues(formData, 'declarations')
    const nextValidationErrors: string[] = []

    if (declarations.length !== requiredDeclarations.length) {
      nextValidationErrors.push('Confirm all required emergency declarations.')
    }

    if (nextValidationErrors.length > 0) {
      setStatus('error')
      setMessage('Please complete the required emergency request fields.')
      setValidationErrors(nextValidationErrors)
      return
    }

    setStatus('submitting')
    setMessage(undefined)
    setValidationErrors([])

    try {
      const recaptchaToken = await createRecaptchaToken('emergency_request')
      const incidentType = stringValue(formData, 'incidentType')

      const response = await fetch(emergencyEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: stringValue(formData, 'contactName'),
          email: stringValue(formData, 'email'),
          phone: stringValue(formData, 'telephone'),
          booking_type: 'emergency_request',
          service_slug: selectedServiceSlug || 'emergency-specialist-cleaning',
          service_name: 'Emergency Specialist Cleaning',
          preferred_date: stringValue(formData, 'preferredDate'),
          preferred_time: stringValue(formData, 'preferredTime'),
          preferred_contact_method: 'phone',
          address: {
            line1: stringValue(formData, 'address1'),
            line2: stringValue(formData, 'address2'),
            city: stringValue(formData, 'townCity'),
            postcode: stringValue(formData, 'postcode'),
            country: 'United Kingdom'
          },
          property_type: stringValue(formData, 'propertyType'),
          urgency: 'emergency',
          notes: stringValue(formData, 'additionalNotes'),
          recaptcha_token: recaptchaToken,
          recaptcha_action: 'emergency_request',
          form_started_at: formStartedAt,
          booking: {
            request_type: 'Emergency attendance',
            selected_services: ['Emergency Specialist Cleaning'],
            incident_type: incidentType,
            immediate_danger: stringValue(formData, 'immediateDanger'),
            emergency_services_status: stringValue(formData, 'emergencyServicesStatus'),
            scene_status: stringValue(formData, 'sceneStatus'),
            caller_authority: stringValue(formData, 'callerAuthority'),
            organisation_name: stringValue(formData, 'organisationName'),
            client_sector: stringValue(formData, 'clientSector'),
            occupancy_status: stringValue(formData, 'occupancyStatus'),
            vulnerable_people_present: stringValue(formData, 'vulnerablePeoplePresent'),
            hazards: checkedValues(formData, 'hazards'),
            access_process: stringValue(formData, 'accessProcess'),
            site_contact: stringValue(formData, 'siteContact'),
            safe_photos_available: stringValue(formData, 'safePhotosAvailable'),
            containment_actions: stringValue(formData, 'containmentActions'),
            declarations,
            marketing_consent: false
          },
          metadata: {
            source: 'shinezone-emergency-request-form',
            selected_service_slug: selectedServiceSlug
          }
        })
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(result?.message || 'We could not submit the emergency request.')
      }

      setStatus('success')
      setMessage(result?.message || 'Your emergency request has been received for triage.')
      form.reset()
    } catch (error) {
      setStatus('error')
      const errorMessage = error instanceof Error ? error.message : 'We could not submit the emergency request.'
      setMessage(
        errorMessage === 'Failed to fetch'
          ? 'Could not reach the emergency request API. Please call Shinezone if this is urgent.'
          : errorMessage
      )
    }
  }

  return (
    <form className='rounded-lg border border-[#d6e2ea] bg-white p-6 shadow-sm' onSubmit={handleSubmit}>
      <div className='rounded-md bg-[#fff8e7] p-4 text-sm leading-6 text-[#5e4a12]'>
        For immediate danger, criminal activity, fire or a medical emergency, contact the appropriate emergency service
        first. This form requests Shinezone triage and does not confirm attendance.
      </div>

      <section className='mt-6 grid gap-4 md:grid-cols-2'>
        <Field label='Contact name' required>
          <input className={inputClass} name='contactName' required minLength={2} />
        </Field>
        <Field label='Organisation'>
          <input className={inputClass} name='organisationName' />
        </Field>
        <Field label='Email' required>
          <input className={inputClass} name='email' type='email' required />
        </Field>
        <Field label='Urgent phone number' required>
          <input className={inputClass} name='telephone' type='tel' required />
        </Field>
        <Field label='Client sector' required>
          <select className={inputClass} name='clientSector' required defaultValue=''>
            <option value='' disabled>
              Select a sector
            </option>
            <option>Local authority or public sector</option>
            <option>Housing association</option>
            <option>Temporary accommodation provider</option>
            <option>Supported living or care organisation</option>
            <option>Estate or letting agent</option>
            <option>Property manager or landlord</option>
            <option>Commercial organisation</option>
          </select>
        </Field>
        <Field label='Your authority to request attendance' required>
          <input
            className={inputClass}
            name='callerAuthority'
            required
            placeholder='Owner, manager, authorised agent...'
          />
        </Field>
      </section>

      <section className='mt-8 grid gap-4 md:grid-cols-2'>
        <Field label='Incident type' required>
          <select className={inputClass} name='incidentType' required defaultValue=''>
            <option value='' disabled>
              Select an incident type
            </option>
            {emergencyIncidentTypes.map(type => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field label='Immediate danger present?' required>
          <select className={inputClass} name='immediateDanger' required defaultValue=''>
            <option value='' disabled>
              Select one
            </option>
            <option>No immediate danger reported</option>
            <option>Unsure - needs triage</option>
            <option>Yes - emergency services should be contacted first</option>
          </select>
        </Field>
        <Field label='Emergency services or safeguarding status' required>
          <select className={inputClass} name='emergencyServicesStatus' required defaultValue=''>
            <option value='' disabled>
              Select status
            </option>
            <option>Not required based on current information</option>
            <option>Police/fire/ambulance contacted</option>
            <option>Safeguarding or responsible authority contacted</option>
            <option>Unsure - needs advice from authorised contact</option>
          </select>
        </Field>
        <Field label='Scene status' required>
          <select className={inputClass} name='sceneStatus' required defaultValue=''>
            <option value='' disabled>
              Select status
            </option>
            <option>Controlled and accessible</option>
            <option>Access restricted</option>
            <option>Awaiting authority or clearance</option>
            <option>Unknown</option>
          </select>
        </Field>
      </section>

      <section className='mt-8 grid gap-4 md:grid-cols-2'>
        <Field label='Address line 1' required>
          <input className={inputClass} name='address1' required />
        </Field>
        <Field label='Address line 2'>
          <input className={inputClass} name='address2' />
        </Field>
        <Field label='Town or city' required>
          <input className={inputClass} name='townCity' required />
        </Field>
        <Field label='Postcode' required>
          <input className={inputClass} name='postcode' required />
        </Field>
        <Field label='Property type' required>
          <input className={inputClass} name='propertyType' required />
        </Field>
        <Field label='Occupied or vacant' required>
          <select className={inputClass} name='occupancyStatus' required>
            <option>Occupied</option>
            <option>Vacant</option>
            <option>Partly occupied</option>
            <option>Unknown</option>
          </select>
        </Field>
      </section>

      <section className='mt-8 grid gap-4 md:grid-cols-2'>
        <Field label='Preferred attendance date' required>
          <input
            className={inputClass}
            name='preferredDate'
            type='date'
            min={new Date().toISOString().slice(0, 10)}
            required
          />
        </Field>
        <Field label='Preferred contact or attendance window' required>
          <input
            className={inputClass}
            name='preferredTime'
            required
            placeholder='ASAP, this evening, tomorrow morning...'
          />
        </Field>
        <Field label='Site contact if different'>
          <input className={inputClass} name='siteContact' />
        </Field>
        <Field label='Access process'>
          <input className={inputClass} name='accessProcess' />
        </Field>
      </section>

      <section className='mt-8'>
        <p className='text-sm font-semibold text-[#08274D]'>Known hazards</p>
        <div className='mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
          {[
            'Bodily fluids',
            'Sharps',
            'Drug paraphernalia',
            'Unknown substance',
            'Odour',
            'Waste',
            'Pests',
            'Structural or electrical concern',
            'Security concern'
          ].map(hazard => (
            <label
              key={hazard}
              className='flex items-center gap-3 rounded-md border border-[#d6e2ea] p-3 text-sm text-[#102033]'
            >
              <input type='checkbox' name='hazards' value={hazard} className='h-4 w-4 rounded accent-[#00A652]' />
              {hazard}
            </label>
          ))}
        </div>
      </section>

      <section className='mt-8 grid gap-4'>
        <Field label='Vulnerable people, residents or public present?' required>
          <select className={inputClass} name='vulnerablePeoplePresent' required>
            <option>No</option>
            <option>Yes</option>
            <option>Unknown</option>
          </select>
        </Field>
        <Field label='Safe photographs available?'>
          <select className={inputClass} name='safePhotosAvailable'>
            <option>No</option>
            <option>Yes</option>
            <option>Can be provided if safe</option>
          </select>
        </Field>
        <Field label='Actions already taken to contain or restrict the area'>
          <textarea className={inputClass} name='containmentActions' rows={3} />
        </Field>
        <Field label='Additional notes'>
          <textarea className={inputClass} name='additionalNotes' rows={5} />
        </Field>
      </section>

      <section className='mt-8 grid gap-3'>
        <p className='text-sm font-semibold text-[#08274D]'>
          Required declarations <span className='text-[#d92d20]'>*</span>
        </p>
        {requiredDeclarations.map(item => (
          <label key={item} className='flex items-start gap-3 text-sm font-semibold text-[#08274D]'>
            <input type='checkbox' name='declarations' value={item} className='mt-1 h-4 w-4 rounded accent-[#00A652]' />
            {item}
          </label>
        ))}
      </section>

      <div className='mt-6'>
        <CaptchaField action='emergency-request' />
      </div>

      {validationErrors.length > 0 ? (
        <div className='mt-5 rounded-md bg-[#fff3f0] p-4 text-sm leading-6 text-[#8a2b16]'>
          <p className='font-semibold'>Please fix the following:</p>
          <ul className='mt-2 list-disc pl-5'>
            {validationErrors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {message ? (
        <p
          className={`mt-5 rounded-md p-4 text-sm leading-6 ${
            status === 'success' ? 'bg-[#e6f8ef] text-[#006c38]' : 'bg-[#fff3f0] text-[#8a2b16]'
          }`}
        >
          {message}
        </p>
      ) : null}

      <button
        type='submit'
        disabled={status === 'submitting'}
        className='mt-6 rounded-md bg-[#00A652] px-6 py-3 font-semibold text-white hover:bg-[#008f47] disabled:cursor-not-allowed disabled:bg-[#7dcfa4]'
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Emergency Request'}
      </button>
    </form>
  )
}
