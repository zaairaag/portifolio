'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { locales } from '@/i18n.config';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LanguageSelector() {
  const router = useRouter();
  const pathName = usePathname();
  const [currentLocale, setCurrentLocale] = useState<string>('pt');

  useEffect(() => {
    const currentPath = pathName?.split('/')[1];
    if (currentPath && locales.includes(currentPath as any)) {
      setCurrentLocale(currentPath);
    }

    if (!currentPath) {
      const browserLang = navigator.language.split('-')[0];
      const defaultLocale = locales.includes(browserLang as any) ? browserLang : 'pt';
      setCurrentLocale(defaultLocale);
    }
  }, [pathName]);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/' + locale;
    
    const segments = pathName.split('/');
    if (segments.length >= 2) {
      segments[1] = locale;
    } else {
      segments.push(locale);
    }
    return segments.join('/');
  };

  const handleLanguageChange = (locale: string) => {
    const newPath = redirectedPathName(locale);
    
    // Store scroll position before navigation
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    }
    
    // Disable smooth scroll temporarily
    document.documentElement.style.scrollBehavior = 'auto';
    
    router.push(newPath);
    
    // Restore smooth scroll after navigation
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = '';
    });
  };

  // Restore scroll position after navigation
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo({
        top: parseInt(scrollPosition),
        behavior: 'instant'
      });
      sessionStorage.removeItem('scrollPosition');
    }
  }, [pathName]);

  return (
    <Select
      value={currentLocale}
      onValueChange={handleLanguageChange}
    >
      <SelectTrigger className="w-[70px] bg-transparent border-none focus:ring-0 focus:ring-offset-0 hover:bg-accent/50">
        <SelectValue>{currentLocale.toUpperCase()}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
