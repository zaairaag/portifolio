'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`px-2 py-1 rounded ${
          language === 'pt' ? 'bg-primary text-white' : 'bg-gray-200'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en' ? 'bg-primary text-white' : 'bg-gray-200'
        }`}
      >
        EN
      </button>
    </div>
  );
}
