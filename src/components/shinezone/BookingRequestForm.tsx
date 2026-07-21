'use client'

import type { FormEvent, ReactNode } from 'react'
import { useMemo, useState } from 'react'
import {
  bookingServiceOptionSlugs,
  bookingServiceOptions,
  bookingServiceQuestions,
  hazardOptions,
  requestTypes,
  timeSlots,
  wasteOptions
} from '@/data/shinezone'
import CaptchaField from '@/components/shinezone/CaptchaField'

const inputClass =
  'w-full rounded-md border border-[#cbd6df] bg-white px-3 py-2.5 text-sm text-[#102033] outline-none focus:border-[#00A652] focus:ring-2 focus:ring-[#00A652]/20'
const labelClass = 'text-sm font-semibold text-[#08274D]'
const requiredStarClass = 'text-[#d92d20]'

const apiBaseUrl = process.env.NEXT_PUBLIC_SHINEZONE_API_URL?.replace(/\/$/, '') || ''
const bookingsEndpoint = `${apiBaseUrl}${apiBaseUrl.endsWith('/api') ? '' : '/api'}/v1/clients/shinezone/bookings`

const bookingTypeByRequest = new Map([
  ['Emergency attendance', 'emergency_request'],
  ['Same-day request', 'service_booking'],
  ['Scheduled clean', 'service_booking'],
  ['Recurring cleaning', 'service_booking'],
  ['Site survey', 'site_visit'],
  ['Quotation only', 'quote_request']
])

const contactMethodByLabel = new Map([
  ['Email', 'email'],
  ['Telephone', 'phone'],
  ['Either', 'either']
])

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

const requiredDeclarations = [
  'I confirm the information supplied is accurate to the best of my knowledge.',
  'I have authority to request this service or quotation.',
  'I acknowledge the privacy notice.',
  'I agree Shinezone may contact me about this request.',
  'I understand submission does not confirm a booking.'
]

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

function RequiredStar() {
  return (
    <span className={requiredStarClass} aria-label='required'>
      *
    </span>
  )
}

function Field({ label, children, required = false }: { label: string; children: ReactNode; required?: boolean }) {
  return (
    <label className='grid gap-2'>
      <span className={labelClass}>
        {label} {required ? <RequiredStar /> : null}
      </span>
      {children}
    </label>
  )
}

function StepSection({
  number,
  title,
  children,
  note
}: {
  number: string
  title: ReactNode
  children: ReactNode
  note?: string
}) {
  return (
    <section className='border-b border-[#dde7ee] py-8 last:border-b-0'>
      <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-start'>
        <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#08274D] text-sm font-bold text-white'>
          {number}
        </span>
        <div>
          <h2 className='text-xl font-bold text-[#08274D]'>{title}</h2>
          {note ? <p className='mt-1 text-sm leading-6 text-[#5d6b78]'>{note}</p> : null}
        </div>
      </div>
      {children}
    </section>
  )
}

export default function BookingRequestForm({
  selectedServiceSlug,
  selectedRequest
}: {
  selectedServiceSlug?: string
  selectedRequest?: string
}) {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), [])
  const selectedQuestions = selectedServiceSlug ? bookingServiceQuestions[selectedServiceSlug] : undefined
  const serviceSlugByOption = useMemo(() => new Map<string, string>(bookingServiceOptionSlugs), [])
  const formStartedAt = useMemo(() => Math.floor(Date.now() / 1000), [])
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>()
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

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
    setValidationErrors([])

    const form = event.currentTarget
    if (!form.reportValidity()) {
      return
    }

    const formData = new FormData(form)
    const requestType = stringValue(formData, 'requestType') || requestTypes[0]
    const selectedServices = checkedValues(formData, 'serviceType')
    const selectedDeclarations = checkedValues(formData, 'declarations')
    const firstService = selectedServices[0]
    const firstServiceSlug = firstService ? serviceSlugByOption.get(firstService) : selectedServiceSlug
    const contactName = stringValue(formData, 'contactName') || ''
    const email = stringValue(formData, 'email') || ''
    const phone = stringValue(formData, 'telephone') || ''
    const nextValidationErrors: string[] = []

    if (!requestType) {
      nextValidationErrors.push('Choose a request type.')
    }

    if (selectedServices.length === 0) {
      nextValidationErrors.push('Choose at least one service type.')
    }

    if (selectedDeclarations.length !== requiredDeclarations.length) {
      nextValidationErrors.push('Confirm all required review and declaration statements.')
    }

    if (nextValidationErrors.length > 0) {
      setStatus('error')
      setMessage('Please complete the required booking fields.')
      setValidationErrors(nextValidationErrors)
      return
    }

    setStatus('submitting')
    setMessage(undefined)
    setValidationErrors([])

    try {
      const recaptchaToken = await createRecaptchaToken('booking_request')

      const response = await fetch(bookingsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: contactName,
          email,
          phone,
          booking_type: bookingTypeByRequest.get(requestType) || 'quote_request',
          service_slug: firstServiceSlug,
          service_name: firstService,
          preferred_date: stringValue(formData, 'preferredDate'),
          alternative_date: stringValue(formData, 'alternativeDate'),
          preferred_time: stringValue(formData, 'preferredTimeSlot'),
          alternative_time: stringValue(formData, 'alternativeTimeSlot'),
          preferred_contact_method:
            contactMethodByLabel.get(stringValue(formData, 'preferredContactMethod') || '') || 'either',
          address: {
            line1: stringValue(formData, 'address1'),
            line2: stringValue(formData, 'address2'),
            city: stringValue(formData, 'townCity'),
            postcode: stringValue(formData, 'postcode'),
            country: 'United Kingdom'
          },
          property_type: stringValue(formData, 'propertyType'),
          urgency:
            requestType === 'Emergency attendance'
              ? 'emergency'
              : requestType === 'Same-day request'
                ? 'urgent'
                : 'standard',
          notes: stringValue(formData, 'additionalNotes') || stringValue(formData, 'wasteNotes'),
          recaptcha_token: recaptchaToken,
          recaptcha_action: 'booking_request',
          form_started_at: formStartedAt,
          booking: {
            request_type: requestType,
            selected_services: selectedServices,
            organisation_name: stringValue(formData, 'organisationName'),
            client_sector: stringValue(formData, 'clientSector'),
            job_title: stringValue(formData, 'jobTitle'),
            contract_reference: stringValue(formData, 'contractReference'),
            existing_client: formData.has('existingClient'),
            purchase_order_required: formData.has('purchaseOrderRequired'),
            occupancy_status: stringValue(formData, 'occupancyStatus'),
            bedrooms: stringValue(formData, 'bedrooms'),
            floors: stringValue(formData, 'floors'),
            corridors: stringValue(formData, 'corridors'),
            square_metres: stringValue(formData, 'squareMetres'),
            lift_availability: stringValue(formData, 'liftAvailability'),
            parking: stringValue(formData, 'parking'),
            water_availability: stringValue(formData, 'waterAvailability'),
            electricity_availability: stringValue(formData, 'electricityAvailability'),
            site_contact: stringValue(formData, 'siteContact'),
            access_process: stringValue(formData, 'accessProcess'),
            alarm_lockup: stringValue(formData, 'alarmLockup'),
            access_start: stringValue(formData, 'accessStart'),
            access_end: stringValue(formData, 'accessEnd'),
            hazards: checkedValues(formData, 'hazards'),
            waste: {
              types: checkedValues(formData, 'wasteTypes'),
              quantity: stringValue(formData, 'wasteQuantity'),
              quotation_required: formData.has('wasteQuotationRequired'),
              notes: stringValue(formData, 'wasteNotes')
            },
            flexibility: stringValue(formData, 'flexibility'),
            completion_deadline: stringValue(formData, 'completionDeadline'),
            out_of_hours_permitted: formData.has('outOfHoursPermitted'),
            recurring_frequency: stringValue(formData, 'recurringFrequency'),
            declarations: selectedDeclarations,
            marketing_consent: formData.has('marketingConsent')
          },
          metadata: {
            source: 'shinezone-booking-form',
            selected_service_slug: selectedServiceSlug,
            selected_request: selectedRequest
          }
        })
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(result?.message || 'We could not submit the booking request.')
      }

      setStatus('success')
      setMessage(result?.message || 'Your booking request has been submitted.')
      setIsSuccessModalOpen(true)
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'We could not submit the booking request.')
    }
  }

  return (
    <>
      <form className='rounded-lg border border-[#d6e2ea] bg-white px-4 py-2 shadow-sm sm:px-6' onSubmit={handleSubmit}>
        <div className='border-b border-[#dde7ee] py-5'>
          <p className='rounded-md border-l-4 border-[#00A652] bg-[#f0fbf5] p-4 text-sm leading-6 text-[#284154]'>
            This is a request and confirmation workflow. Submitting this form does not confirm attendance until
            Shinezone accepts the request after triage.
          </p>
        </div>

        <StepSection
          number='1'
          title={
            <>
              Request type <RequiredStar />
            </>
          }
          note='Emergency requests are routed for urgent triage and do not promise automatic attendance.'
        >
          <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {requestTypes.map(type => (
              <label
                key={type}
                className='flex items-center gap-3 rounded-md border border-[#d6e2ea] p-3 text-sm font-semibold text-[#102033]'
              >
                <input
                  type='radio'
                  name='requestType'
                  value={type}
                  required
                  className='h-4 w-4 accent-[#00A652]'
                  defaultChecked={selectedRequest === 'site-survey' ? type === 'Site survey' : type === requestTypes[0]}
                />
                {type}
              </label>
            ))}
          </div>
          <p className='mt-4 rounded-md bg-[#fff8e7] p-4 text-sm leading-6 text-[#5e4a12]'>
            For immediate danger, criminal activity or a medical emergency, contact the appropriate emergency service.
            Submitting this request does not confirm Shinezone attendance until accepted by the operations team.
          </p>
        </StepSection>

        <StepSection
          number='2'
          title={
            <>
              Service type <RequiredStar />
            </>
          }
        >
          <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {bookingServiceOptions.map(option => (
              <label
                key={option}
                className='flex items-center gap-3 rounded-md border border-[#d6e2ea] p-3 text-sm text-[#102033]'
              >
                <input
                  type='checkbox'
                  name='serviceType'
                  value={option}
                  className='h-4 w-4 rounded accent-[#00A652]'
                  defaultChecked={selectedServiceSlug ? serviceSlugByOption.get(option) === selectedServiceSlug : false}
                />
                {option}
              </label>
            ))}
          </div>
          {selectedQuestions ? (
            <div className='mt-6 rounded-md border border-[#b9e7ce] bg-[#f0fbf5] p-4'>
              <h3 className='font-bold text-[#08274D]'>Helpful details for this service</h3>
              <ul className='mt-3 grid gap-2 text-sm leading-6 text-[#284154] md:grid-cols-2'>
                {selectedQuestions.map(question => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </StepSection>

        <StepSection number='3' title='Client details'>
          <div className='grid gap-4 md:grid-cols-2'>
            <Field label='Organisation name'>
              <input className={inputClass} name='organisationName' />
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
            <Field label='Contact name' required>
              <input className={inputClass} name='contactName' required minLength={2} />
            </Field>
            <Field label='Job title'>
              <input className={inputClass} name='jobTitle' />
            </Field>
            <Field label='Email' required>
              <input className={inputClass} name='email' type='email' required />
            </Field>
            <Field label='Telephone' required>
              <input className={inputClass} name='telephone' type='tel' required />
            </Field>
            <Field label='Preferred contact method'>
              <select className={inputClass} name='preferredContactMethod'>
                <option>Email</option>
                <option>Telephone</option>
                <option>Either</option>
              </select>
            </Field>
            <Field label='Contract or purchase-order reference'>
              <input className={inputClass} name='contractReference' />
            </Field>
            <label className='flex items-center gap-3 text-sm font-semibold text-[#08274D]'>
              <input type='checkbox' name='existingClient' className='h-4 w-4 rounded accent-[#00A652]' />
              Existing client
            </label>
            <label className='flex items-center gap-3 text-sm font-semibold text-[#08274D]'>
              <input type='checkbox' name='purchaseOrderRequired' className='h-4 w-4 rounded accent-[#00A652]' />
              Purchase order required
            </label>
          </div>
        </StepSection>

        <StepSection number='4' title='Site details'>
          <div className='grid gap-4 md:grid-cols-2'>
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
            <Field label='Number of bedrooms'>
              <input className={inputClass} name='bedrooms' type='number' min='0' />
            </Field>
            <Field label='Number of floors'>
              <input className={inputClass} name='floors' type='number' min='0' />
            </Field>
            <Field label='Number of corridors'>
              <input className={inputClass} name='corridors' type='number' min='0' />
            </Field>
            <Field label='Approximate square metres'>
              <input className={inputClass} name='squareMetres' type='number' min='0' />
            </Field>
            <Field label='Lift availability'>
              <select className={inputClass} name='liftAvailability'>
                <option>Available</option>
                <option>Not available</option>
                <option>Not applicable</option>
                <option>Unknown</option>
              </select>
            </Field>
            <Field label='Parking information'>
              <input className={inputClass} name='parking' />
            </Field>
            <Field label='Water availability'>
              <select className={inputClass} name='waterAvailability'>
                <option>Available</option>
                <option>Not available</option>
                <option>Unknown</option>
              </select>
            </Field>
            <Field label='Electricity availability'>
              <select className={inputClass} name='electricityAvailability'>
                <option>Available</option>
                <option>Not available</option>
                <option>Unknown</option>
              </select>
            </Field>
            <Field label='Site contact'>
              <input className={inputClass} name='siteContact' />
            </Field>
            <Field label='Key or access process'>
              <input className={inputClass} name='accessProcess' />
            </Field>
            <Field label='Alarm or lock-up requirements'>
              <input className={inputClass} name='alarmLockup' />
            </Field>
            <div className='grid gap-4 sm:grid-cols-2'>
              <Field label='Access start time'>
                <input className={inputClass} name='accessStart' type='time' />
              </Field>
              <Field label='Access end time'>
                <input className={inputClass} name='accessEnd' type='time' />
              </Field>
            </div>
          </div>
        </StepSection>

        <StepSection
          number='5'
          title='Risk and hazard screening'
          note='Use checkboxes only. Do not enter resident diagnoses, medical histories or unnecessary sensitive personal information.'
        >
          <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {hazardOptions.map(option => (
              <label
                key={option}
                className='flex items-center gap-3 rounded-md border border-[#d6e2ea] p-3 text-sm text-[#102033]'
              >
                <input type='checkbox' name='hazards' value={option} className='h-4 w-4 rounded accent-[#00A652]' />
                {option}
              </label>
            ))}
          </div>
        </StepSection>

        <StepSection number='6' title='Waste'>
          <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
            {wasteOptions.map(option => (
              <label
                key={option}
                className='flex items-center gap-3 rounded-md border border-[#d6e2ea] p-3 text-sm text-[#102033]'
              >
                <input type='checkbox' name='wasteTypes' value={option} className='h-4 w-4 rounded accent-[#00A652]' />
                {option}
              </label>
            ))}
          </div>
          <div className='mt-4 grid gap-4 md:grid-cols-2'>
            <Field label='Estimated quantity'>
              <input className={inputClass} name='wasteQuantity' />
            </Field>
            <label className='flex items-center gap-3 text-sm font-semibold text-[#08274D]'>
              <input type='checkbox' name='wasteQuotationRequired' className='h-4 w-4 rounded accent-[#00A652]' />
              Waste quotation required
            </label>
            <Field label='Waste notes'>
              <textarea className={inputClass} name='wasteNotes' rows={4} />
            </Field>
          </div>
        </StepSection>

        <StepSection number='7' title='Date and time'>
          <div className='grid gap-4 md:grid-cols-2'>
            <Field label='Preferred date' required>
              <input className={inputClass} name='preferredDate' type='date' min={today} required />
            </Field>
            <Field label='Alternative date'>
              <input className={inputClass} name='alternativeDate' type='date' min={today} />
            </Field>
            <Field label='Preferred time slot' required>
              <select className={inputClass} name='preferredTimeSlot' required defaultValue=''>
                <option value='' disabled>
                  Select a time slot
                </option>
                {timeSlots.map(slot => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>
            </Field>
            <Field label='Alternative time slot'>
              <select className={inputClass} name='alternativeTimeSlot'>
                {timeSlots.map(slot => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>
            </Field>
            <Field label='Fixed or flexible appointment'>
              <select className={inputClass} name='flexibility'>
                <option>Fixed</option>
                <option>Flexible</option>
                <option>Must be completed by deadline</option>
              </select>
            </Field>
            <Field label='Required completion deadline'>
              <input className={inputClass} name='completionDeadline' type='date' min={today} />
            </Field>
            <label className='flex items-center gap-3 text-sm font-semibold text-[#08274D]'>
              <input type='checkbox' name='outOfHoursPermitted' className='h-4 w-4 rounded accent-[#00A652]' />
              Out-of-hours permitted
            </label>
            <Field label='Recurring frequency'>
              <input className={inputClass} name='recurringFrequency' placeholder='Weekly, monthly, one-off...' />
            </Field>
          </div>
        </StepSection>

        <StepSection number='8' title='File upload'>
          <Field label='Upload photos or documents'>
            <input
              className={inputClass}
              name='attachments'
              type='file'
              accept='.jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf'
              multiple
            />
          </Field>
          <p className='mt-2 text-sm text-[#5d6b78]'>
            Allowed formats: JPG, PNG and PDF. Maximum five files, 10 MB per file once backend validation is enabled.
          </p>
        </StepSection>

        <StepSection number='9' title='Review and declaration'>
          <div className='grid gap-3'>
            <p className='text-sm font-semibold text-[#08274D]'>
              Required declarations <RequiredStar />
            </p>
            {requiredDeclarations.map(item => (
              <label key={item} className='flex items-start gap-3 text-sm font-semibold text-[#08274D]'>
                <input
                  type='checkbox'
                  name='declarations'
                  value={item}
                  className='mt-1 h-4 w-4 rounded accent-[#00A652]'
                />
                {item}
              </label>
            ))}
            <label className='flex items-start gap-3 text-sm text-[#4a5b6d]'>
              <input type='checkbox' name='marketingConsent' className='mt-1 h-4 w-4 rounded accent-[#00A652]' />
              Optional: I consent to receive occasional Shinezone service updates and marketing.
            </label>
          </div>
          <div className='mt-5'>
            <Field label='Additional notes'>
              <textarea className={inputClass} name='additionalNotes' rows={4} />
            </Field>
          </div>
          <div className='mt-5'>
            <CaptchaField action='booking-request' />
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
          {message && status !== 'success' ? (
            <p className='mt-5 rounded-md bg-[#fff3f0] p-4 text-sm leading-6 text-[#8a2b16]'>{message}</p>
          ) : null}
          <button
            type='submit'
            disabled={status === 'submitting'}
            className='mt-6 rounded-md bg-[#00A652] px-6 py-3 font-semibold text-white hover:bg-[#008f47] focus:ring-2 focus:ring-[#00A652] focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-[#7dcfa4]'
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
          </button>
        </StepSection>
      </form>

      {isSuccessModalOpen ? (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-[#041936]/70 px-4 py-8'
          role='dialog'
          aria-modal='true'
          aria-labelledby='booking-success-title'
        >
          <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-xl'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f8ef] text-2xl font-bold text-[#006c38]'>
              ✓
            </div>
            <h2 id='booking-success-title' className='mt-4 text-2xl font-bold text-[#08274D]'>
              Booking request sent
            </h2>
            <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>
              {message ||
                'Your booking request has been received. Shinezone will review the details and contact you shortly.'}
            </p>
            <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>
              This confirms submission only. Attendance is confirmed after Shinezone triage.
            </p>
            <button
              type='button'
              className='mt-6 w-full rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47] focus:ring-2 focus:ring-[#00A652] focus:ring-offset-2 focus:outline-none'
              onClick={() => setIsSuccessModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
