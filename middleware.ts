import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n.config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['pt', 'en', 'es'],
  
  // Used when no locale matches
  defaultLocale: defaultLocale,

  // Prevent access to top-level route
  localePrefix: 'always'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
