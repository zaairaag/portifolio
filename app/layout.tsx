import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Navigation } from '@/components/navigation'
import { Toaster } from '@/components/ui/sonner'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zaíra Gonçalves | Programadora de Software',
  description: 'Desenvolvedora Full Stack apaixonada por criar soluções inovadoras.',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
