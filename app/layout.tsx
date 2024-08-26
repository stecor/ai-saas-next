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

          
          <script async 
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          
          
        </head>
        
        <CrispProvider/>
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider/>
          {children}
        </body>
      </html>
      </ClerkProvider>
  )
}
