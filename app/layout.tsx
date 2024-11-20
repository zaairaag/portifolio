import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { Footer } from '@/components/footer-new'
import { SiteHeader } from '@/components/site-header'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zaíra Gonçalves | Programadora de Software',
  description:
    'Desenvolvedora Full Stack especializada em criar experiências web modernas e aplicações de alta performance.',
  openGraph: {
    title: 'Zaíra Gonçalves | Programadora de Software',
    description:
      'Desenvolvedora Full Stack especializada em criar experiências web modernas e aplicações de alta performance.',
    url: 'https://zairagoncalves.com',
    siteName: 'Zaíra Gonçalves',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}