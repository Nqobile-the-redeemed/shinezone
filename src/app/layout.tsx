import type { Metadata } from 'next'
import './globals.css'

import { SidebarProvider } from '@/context/SidebarContext'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Shinezone | Commercial and Specialist Cleaning',
    template: '%s'
  },
  description:
    'Commercial, communal, end-of-tenancy and specialist cleaning services for property professionals, housing providers, care organisations and businesses.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/images/shinezone/favicon.svg'
  },
  openGraph: {
    title: 'Shinezone',
    description: 'Commercial and specialist cleaning services for managed property environments.',
    images: ['/images/shinezone/new-images/pexels-tima-miroshnichenko-6195129.jpg']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='font-outfit dark:bg-gray-900'>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
