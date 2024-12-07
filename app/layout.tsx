import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Toaster } from 'sonner'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics as GoogleAnalytics } from '@/components/analytics'

// Otimização de fonte com display swap
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Zaira Gonçalves",
              "url": "https://zairagoncalves.com",
              "jobTitle": "Desenvolvedora Frontend",
              "knowsAbout": ["React", "Next.js", "TypeScript", "UI Design", "Frontend Development"],
              "sameAs": [
                "https://github.com/zairagoncalves",
                "https://linkedin.com/in/zairagoncalves"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <Toaster />
        </Providers>
        <VercelAnalytics />
        <GoogleAnalytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
