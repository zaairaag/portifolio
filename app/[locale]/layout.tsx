import '../globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Toaster } from '@/components/ui/sonner'
import { Footer } from '@/components/footer-new'

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

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Navigation />
        {children}
        <Footer />
        <Toaster />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
