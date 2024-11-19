'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>('pt');
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    // Carregar o idioma salvo no cookie ou usar o idioma do navegador
    const savedLanguage = Cookies.get('language') as Language;
    const browserLanguage = navigator.language.startsWith('pt') ? 'pt' : 'en';
    const initialLanguage = savedLanguage || browserLanguage;
    
    setLanguageState(initialLanguage);
    loadTranslations(initialLanguage);
  }, []);

  const loadTranslations = async (lang: Language) => {
    try {
      const translations = await import(`@/messages/${lang}.json`);
      setTranslations(translations);
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    Cookies.set('language', lang, { expires: 365 });
    loadTranslations(lang);
    router.refresh();
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations;
    
    for (const k of keys) {
      if (current?.[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      current = current[k];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
