import type { Metadata } from 'next'
import Link from 'next/link'
import CaptchaField from '@/components/shinezone/CaptchaField'

export const metadata: Metadata = {
  title: 'Admin Login | Shinezone'
}

export default function AdminLoginPage() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-[#f6f9fb] px-4 py-12'>
      <section className='w-full max-w-md rounded-lg border border-[#d6e2ea] bg-white p-6 shadow-sm'>
        <p className='text-sm font-bold text-[#00A652] uppercase'>Shinezone Operations</p>
        <h1 className='mt-2 text-3xl font-bold text-[#08274D]'>Admin login</h1>
        <p className='mt-3 text-sm leading-6 text-[#4a5b6d]'>
          Authentication is reserved for the backend phase. Connect this page to the shared API admin auth endpoints.
        </p>
        <form className='mt-6 grid gap-4'>
          <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
            Email
            <input
              className='rounded-md border border-[#cbd6df] px-3 py-2.5 outline-none focus:border-[#00A652] focus:ring-2 focus:ring-[#00A652]/20'
              type='email'
            />
          </label>
          <label className='grid gap-2 text-sm font-semibold text-[#08274D]'>
            Password
            <input
              className='rounded-md border border-[#cbd6df] px-3 py-2.5 outline-none focus:border-[#00A652] focus:ring-2 focus:ring-[#00A652]/20'
              type='password'
            />
          </label>
          <CaptchaField action='admin-login' />
          <button
            type='button'
            className='rounded-md bg-[#00A652] px-5 py-3 font-semibold text-white hover:bg-[#008f47]'
          >
            Sign in
          </button>
        </form>
        <Link href='/' className='mt-5 inline-flex text-sm font-semibold text-[#08274D] hover:text-[#00A652]'>
          Back to public site
        </Link>
      </section>
    </main>
  )
}
