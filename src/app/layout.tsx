import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'PivotalTech Solutions - Innovative Technology Solutions',
  description: 'Empowering businesses with innovative technology solutions that drive growth, efficiency, and digital transformation. Web development, cloud solutions, and digital transformation services.',
  keywords: 'technology solutions, web development, cloud solutions, digital transformation, business technology, software development',
  authors: [{ name: 'PivotalTech Solutions' }],
  creator: 'PivotalTech Solutions',
  icons: {
    icon: '/pivotaltech_icon.png',
    apple: '/pivotaltech_icon.png',
  },
  openGraph: {
    title: 'PivotalTech Solutions - Innovative Technology Solutions',
    description: 'Empowering businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
