import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deniz - Geotechnical & Materials Research',
  description: 'Personal research website showcasing geotechnical engineering and materials science research',
  keywords: ['Geotechnical', 'Materials Science', 'Sheet Pile', 'Marshall Test', 'PINN', 'Machine Learning'],
  authors: [{ name: 'Deniz' }],
  openGraph: {
    title: 'Deniz - Research',
    description: 'Geotechnical Engineering & Materials Science',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
