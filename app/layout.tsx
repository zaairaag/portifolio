import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Toaster } from '@/components/ui/sonner'
import { MagneticCursor } from '@/components/ui/magnetic-cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zaíra Gonçalves | Frontend Developer',
  description: 'Frontend Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MagneticCursor />
          <Navigation />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}