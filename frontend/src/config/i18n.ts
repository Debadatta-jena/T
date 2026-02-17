// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';

export const locales = ['en', 'hi', 'es', 'de', 'fr', 'ja'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hi: 'हिंदी',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語'
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  hi: '🇮🇳',
  es: '🇪🇸',
  de: '🇩🇪',
  fr: '🇫🇷',
  ja: '🇯🇵'
};

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: defaultLocale,
//     lng: defaultLocale,
//     debug: process.env.NODE_ENV === 'development',

//     interpolation: {
//       escapeValue: false,
//     },

//     detection: {
//       order: ['localStorage', 'navigator', 'htmlTag'],
//       caches: ['localStorage'],
//       lookupLocalStorage: 'i18nextLng',
//     },

//     backend: {
//       loadPath: '/locales/{{lng}}/{{ns}}.json',
//     },

//     ns: ['common', 'home', 'services', 'about', 'contact', 'blog', 'careers', 'legal'],
//     defaultNS: 'common',

//     react: {
//       useSuspense: false,
//     },
//   });

// Empty export to satisfy module requirements
const emptyExport: Record<string, never> = {};
export default emptyExport;

