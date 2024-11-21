export const defaultLocale = 'pt';
export const locales = ['en', 'pt'] as const;

export type Locale = (typeof locales)[number];
