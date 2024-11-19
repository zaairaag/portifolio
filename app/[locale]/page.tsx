import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';

type Props = {
  params: { locale: string }
};

export default function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
    </main>
  );
}
