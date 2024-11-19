export const defaultLocale = 'pt';
export const locales = ['pt', 'en', 'es'] as const;

export type Locale = (typeof locales)[number];

export default {
  defaultLocale,
  locales,
  localePrefix: 'always'
} as const;
