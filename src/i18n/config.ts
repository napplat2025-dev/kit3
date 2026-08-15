export const locales = ['en', 'ar'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

/** English lives at the root (no /en prefix) so existing URLs and their SEO are untouched. */
export const localeHome: Record<Locale, string> = {
  en: '/',
  ar: '/ar',
}

export const localeDir: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl',
}

/** Label shown in the language switcher for the OTHER locale. */
export const localeSwitchLabel: Record<Locale, string> = {
  en: 'العربية',
  ar: 'English',
}

export const siteUrl = 'https://www.kitchenthree.co'
