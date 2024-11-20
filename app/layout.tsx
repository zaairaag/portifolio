'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { SiteHeader } from '@/components/site-header'
import { cn } from '@/lib/utils'
import { LazyFooter, LazyThemeProvider } from '@/lib/lazy-loading'
import { monitorResourceLoading } from '@/lib/performance'
import { initializeMonitoring } from '@/lib/performance-monitor'
import { SkipLink } from '@/components/skip-link'
import { Suspense, useEffect } from 'react'
import QueryProvider from '@/components/providers/query-provider'
import PageTransition from '@/components/page-transition'
import { JsonLd } from '@/components/json-ld'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { KeyboardShortcuts } from '@/components/ui/keyboard-shortcuts'
import { PWAPrompt } from '@/components/pwa-prompt'
import { defaultSEOConfig, jsonLdWebsite, jsonLdPerson } from '@/lib/seo-config'

const inter = Inter({ subsets: ['latin'] })

// A metadata agora está em app/metadata.ts

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    initializeMonitoring()
  }, [])

  // Inicializa o monitoramento de performance no lado do cliente
  if (typeof window !== 'undefined') {
    monitorResourceLoading();
  }

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className
        )}
      >
        <QueryProvider>
          <LazyThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <JsonLd data={jsonLdWebsite} />
            <JsonLd data={jsonLdPerson} />
            <ScrollProgress />
            <PWAPrompt />
            <div className="relative flex min-h-screen flex-col">
              <SkipLink />
              <SiteHeader />
              <KeyboardShortcuts />
              <main id="main-content" className="flex-1">
                <PageTransition>
                  <Suspense fallback={
                    <div className="flex h-[200px] w-full items-center justify-center">
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                    </div>
                  }>
                    {children}
                  </Suspense>
                </PageTransition>
              </main>
              <LazyFooter />
            </div>
            <Toaster />
          </LazyThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
