'use client'

import { Toaster } from '@/components/ui/sonner'
import { SiteHeader } from '@/components/site-header'
import { LazyFooter } from '@/lib/lazy-loading'
import { SkipLink } from '@/components/skip-link'
import { Suspense } from 'react'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

export function RootLayoutClient({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SkipLink />
        <div className="relative flex min-h-screen flex-col">
          <Suspense fallback={null}>
            <ScrollProgress />
          </Suspense>
          <SiteHeader />
          <main id="main" className={cn('flex-1', className)}>
            {children}
          </main>
          <LazyFooter />
        </div>
        <Toaster />
      </ThemeProvider>
    </>
  )
}
