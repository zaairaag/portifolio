'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { SiteHeader } from '@/components/site-header'
import { cn } from '@/lib/utils'
import { LazyFooter } from '@/lib/lazy-loading'
import { SkipLink } from '@/components/skip-link'
import { Suspense } from 'react'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <SkipLink />
            <ScrollProgress />
            <SiteHeader />
            <main>{children}</main>
            <LazyFooter />
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
