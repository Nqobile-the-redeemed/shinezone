'use client'

import type { ReactNode } from 'react'
import { useMemo } from 'react'
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

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className='grid gap-2'>
      <span className={labelClass}>{label}</span>
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
  title: string
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

  return (
    <form className='rounded-lg border border-[#d6e2ea] bg-white px-4 py-2 shadow-sm sm:px-6'>
      <div className='border-b border-[#dde7ee] py-5'>
        <p className='rounded-md border-l-4 border-[#00A652] bg-[#f0fbf5] p-4 text-sm leading-6 text-[#284154]'>
          This is a request and confirmation workflow. Submitting this form does not confirm attendance until Shinezone
          accepts the request after triage.
        </p>
      </div>

      <StepSection
        number='1'
        title='Request type'
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
                className='h-4 w-4 accent-[#00A652]'
                defaultChecked={selectedRequest === 'site-survey' ? type === 'Site survey' : false}
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

      <StepSection number='2' title='Service type'>
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
          <Field label='Client sector'>
            <select className={inputClass} name='clientSector'>
              <option>Select a sector</option>
              <option>Local authority or public sector</option>
              <option>Housing association</option>
              <option>Temporary accommodation provider</option>
              <option>Supported living or care organisation</option>
              <option>Estate or letting agent</option>
              <option>Property manager or landlord</option>
              <option>Commercial organisation</option>
            </select>
          </Field>
          <Field label='Contact name'>
            <input className={inputClass} name='contactName' />
          </Field>
          <Field label='Job title'>
            <input className={inputClass} name='jobTitle' />
          </Field>
          <Field label='Email'>
            <input className={inputClass} name='email' type='email' />
          </Field>
          <Field label='Telephone'>
            <input className={inputClass} name='telephone' type='tel' />
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
            <input type='checkbox' className='h-4 w-4 rounded accent-[#00A652]' />
            Existing client
          </label>
          <label className='flex items-center gap-3 text-sm font-semibold text-[#08274D]'>
            <input type='checkbox' className='h-4 w-4 rounded accent-[#00A652]' />
            Purchase order required
          </label>
        </div>
      </StepSection>

      <StepSection number='4' title='Site details'>
        <div className='grid gap-4 md:grid-cols-2'>
          <Field label='Address line 1'>
            <input className={inputClass} name='address1' />
          </Field>
          <Field label='Address line 2'>
            <input className={inputClass} name='address2' />
          </Field>
          <Field label='Town or city'>
            <input className={inputClass} name='townCity' />
          </Field>
          <Field label='Postcode'>
            <input className={inputClass} name='postcode' />
          </Field>
          <Field label='Property type'>
            <input className={inputClass} name='propertyType' />
          </Field>
          <Field label='Occupied or vacant'>
            <select className={inputClass} name='occupancyStatus'>
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
              <input type='checkbox' className='h-4 w-4 rounded accent-[#00A652]' />
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
              <input type='checkbox' className='h-4 w-4 rounded accent-[#00A652]' />
              {option}
            </label>
          ))}
        </div>
        <div className='mt-4 grid gap-4 md:grid-cols-2'>
          <Field label='Estimated quantity'>
            <input className={inputClass} name='wasteQuantity' />
          </Field>
          <label className='flex items-center gap-3 text-sm font-semibold text-[#08274D]'>
            <input type='checkbox' className='h-4 w-4 rounded accent-[#00A652]' />
            Waste quotation required
          </label>
          <Field label='Waste notes'>
            <textarea className={inputClass} name='wasteNotes' rows={4} />
          </Field>
        </div>
      </StepSection>

      <StepSection number='7' title='Date and time'>
        <div className='grid gap-4 md:grid-cols-2'>
          <Field label='Preferred date'>
            <input className={inputClass} name='preferredDate' type='date' min={today} />
          </Field>
          <Field label='Alternative date'>
            <input className={inputClass} name='alternativeDate' type='date' min={today} />
          </Field>
          <Field label='Preferred time slot'>
            <select className={inputClass} name='preferredTimeSlot'>
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
            <input type='checkbox' className='h-4 w-4 rounded accent-[#00A652]' />
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
          {[
            'I confirm the information supplied is accurate to the best of my knowledge.',
            'I have authority to request this service or quotation.',
            'I acknowledge the privacy notice.',
            'I agree Shinezone may contact me about this request.',
            'I understand submission does not confirm a booking.'
          ].map(item => (
            <label key={item} className='flex items-start gap-3 text-sm font-semibold text-[#08274D]'>
              <input type='checkbox' className='mt-1 h-4 w-4 rounded accent-[#00A652]' />
              {item}
            </label>
          ))}
          <label className='flex items-start gap-3 text-sm text-[#4a5b6d]'>
            <input type='checkbox' className='mt-1 h-4 w-4 rounded accent-[#00A652]' />
            Optional: I consent to receive occasional Shinezone service updates and marketing.
          </label>
        </div>
        <div className='mt-5'>
          <CaptchaField action='booking-request' />
        </div>
        <button
          type='button'
          className='mt-6 rounded-md bg-[#00A652] px-6 py-3 font-semibold text-white hover:bg-[#008f47] focus:ring-2 focus:ring-[#00A652] focus:ring-offset-2 focus:outline-none'
        >
          Submit Request
        </button>
      </StepSection>
    </form>
  )
}
