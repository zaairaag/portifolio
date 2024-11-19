'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function RootPage() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}