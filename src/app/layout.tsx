import { Outfit } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

import { SidebarProvider } from '@/context/SidebarContext'
import { ThemeProvider } from '@/context/ThemeContext'

const outfit = Outfit({
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Shinezone | Commercial and Specialist Cleaning',
    template: '%s'
  },
  description:
    'Commercial, communal, end-of-tenancy and specialist cleaning services for property professionals, housing providers, care organisations and businesses.',
  openGraph: {
    title: 'Shinezone',
    description: 'Commercial and specialist cleaning services for managed property environments.',
    images: ['/images/shinezone/puroclean-of-fort-worth--dc38HdQR1M-unsplash.jpg']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
