import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getPreloadFontUrls } from '@/utilities/getPreloadFontUrls'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const preloadFontItems = await getPreloadFontUrls()()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        {preloadFontItems.map((item) => (
          <link
            key={item.url}
            rel="preload"
            href={item.url}
            as="font"
            type={item.type}
            crossOrigin="anonymous"
          />
        ))}
      </head>
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  /**
   * Favicon: .ico activo (`sizes: 'any'` por ICO 256×256 real).
   * SVG desactivado a propósito; descomenta la línea siguiente si quieres usarlo de nuevo.
   */
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      // { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
