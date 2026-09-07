import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deniz - Geotechnical Research',
  description: 'Sheet Pile Walls • Marshall Test PINN • CBR Prediction • Physics-Informed Neural Networks',
  keywords: 'geotechnical engineering, machine learning, PINN, research',
  authors: [{ name: 'Deniz Haltuntaş' }],
  openGraph: {
    title: 'Deniz - Geotechnical Research',
    description: 'Geotechnical Engineering & Materials Science Research',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen bg-gradient-dark text-gray-100">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
