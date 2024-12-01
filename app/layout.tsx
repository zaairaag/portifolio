import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zaira Gonçalves - Portfolio',
  description: 'Portfolio de Zaira Gonçalves - Desenvolvedora Full Stack',
  keywords: [
    'portfolio',
    'desenvolvedor',
    'full stack',
    'web developer',
    'react',
    'next.js',
    'typescript',
  ],
  authors: [
    {
      name: 'Zaira Gonçalves',
      url: 'https://zairagoncalves.com',
    },
  ],
  creator: 'Zaira Gonçalves',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/favicon.svg',
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
    <html lang="pt" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  )
}
