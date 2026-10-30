import ingles from './en.json'
import spanish from './es.json'

const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es'
} as const

export type Locale = (typeof LANGUAGES)[keyof typeof LANGUAGES]

export const getLocale = (currentLocale: string | undefined): Locale =>
  currentLocale === LANGUAGES.ENGLISH ? LANGUAGES.ENGLISH : LANGUAGES.SPANISH

export const getLocalePath = (locale: Locale, pathname: string): string => {
  const pathWithoutLocale = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  const normalizedPath = pathWithoutLocale.endsWith('/')
    ? pathWithoutLocale
    : `${pathWithoutLocale}/`

  if (locale === LANGUAGES.ENGLISH) {
    return normalizedPath === '/' ? '/en/' : `/en${normalizedPath}`
  }

  return normalizedPath
}

export const getI18N = ({
  currentLocale = 'es'
}: {
  currentLocale: string | undefined
}) => {
  if (currentLocale === LANGUAGES.ENGLISH) return ingles
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  return spanish
}