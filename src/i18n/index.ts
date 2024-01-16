import ingles from './en.json'
import spanish from './es.json'

const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es'
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