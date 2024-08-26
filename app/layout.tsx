import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/ui/crisp-provider'
import { GoogleTagManager } from '@next/third-parties/google' 
import * as gtag from "../gtag"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat-GPT Creator',
  description: 'The power of artificial intelligence to revolutionize the way businesses and individuals interact with technology. Our cutting-edge AI solutions provide automation, predictive insights, and intelligent decision.',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <ClerkProvider>
      <html lang="en">
        
        <head>
  
          <link rel="icon"  type="image/x-icon" href="/favicon.png" />
          <title>Chat-GPT Creator AI Platform</title>
          <GoogleTagManager gtmId={`${gtag.GA_TRACKING_ID}`} />
   
        </head>
        
        <CrispProvider />
        
        <body className={inter.className}>
          <noscript><iframe src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            height="0" width="0" style={{ display:"none",visibility:"hidden"}}></iframe></noscript>

          <ModalProvider />
          <ToasterProvider/>
          {children}
        </body>
      </html>
      </ClerkProvider>
  )
}
