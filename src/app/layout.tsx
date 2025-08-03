import type { Metadata } from "next"
import { Toaster } from 'react-hot-toast'
import { Geist, Geist_Mono } from "next/font/google"
import { ClerkProvider } from '@clerk/nextjs'
import Header from '../app/components/Header'
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tier-Based Event Showcase",
  description: "View events based on your membership tier",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
                    <Header />

          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
