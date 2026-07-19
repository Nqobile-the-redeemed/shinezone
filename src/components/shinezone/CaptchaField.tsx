'use client'

import Script from 'next/script'

export default function CaptchaField({ action = 'shinezone-form' }: { action?: string }) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  if (!siteKey) {
    return (
      <div className='rounded-md border border-dashed border-[#98a9b8] bg-[#f8fbfc] p-4 text-sm leading-6 text-[#4a5b6d]'>
        Captcha protection is ready to enable. Add `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and verify the returned token on the
        backend with `TURNSTILE_SECRET_KEY`.
      </div>
    )
  }

  return (
    <div className='grid gap-2'>
      <Script src='https://challenges.cloudflare.com/turnstile/v0/api.js' strategy='lazyOnload' />
      <div className='cf-turnstile' data-sitekey={siteKey} data-action={action} />
      <p className='text-xs leading-5 text-[#5d6b78]'>
        Protected by captcha. Backend verification is required before accepting submissions.
      </p>
    </div>
  )
}
