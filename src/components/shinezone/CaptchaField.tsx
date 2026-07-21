'use client'

import Script from 'next/script'

export default function CaptchaField({ action = 'shinezone-form' }: { action?: string }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_SHINEZONE_RECAPTCHA_SITE_KEY

  if (!siteKey) {
    return (
      <div className='rounded-md border border-dashed border-[#98a9b8] bg-[#f8fbfc] p-4 text-sm leading-6 text-[#4a5b6d]'>
        Captcha protection is ready to enable. Add `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and verify the returned token on the
        backend with `SHINEZONE_RECAPTCHA_SECRET`.
      </div>
    )
  }

  return (
    <div className='grid gap-2'>
      <Script
        id={`google-recaptcha-${action}`}
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy='lazyOnload'
      />
      <p className='text-xs leading-5 text-[#5d6b78]'>
        Protected by Google reCAPTCHA. Backend verification is required before accepting submissions.
      </p>
    </div>
  )
}
