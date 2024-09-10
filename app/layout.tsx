import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/ui/crisp-provider'
import { GoogleAnalytics} from '@next/third-parties/google'
import Script from 'next/script'




  


const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chat-GPT Creator',
  description: 'The power of artificial intelligence to revolutionize the way businesses and individuals interact with technology. Our cutting-edge AI solutions provide automation, predictive insights, and intelligent decision.',

}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GADS_TRACKING_ID}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <CrispProvider />
        
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
        <GoogleAnalytics gaId={`${process.env.GA_TRACKING_ID}`} />
      </html>
    </ClerkProvider>
  )
}


