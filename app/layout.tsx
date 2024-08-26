import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/ui/crisp-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat-GPT Creator',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider/>
        <body className={inter.className}>
          <title>Chat-GPT Creator AI Platform</title>
          <ModalProvider />
          <ToasterProvider/>
          {children}
        </body>
      </html>
      </ClerkProvider>
  )
}
