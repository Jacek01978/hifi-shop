import React, { createContext, useContext, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext()

const detectLanguage = () => {
  const lang = navigator.language || navigator.userLanguage || 'de'
  return lang.toLowerCase().startsWith('de') ? 'de' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage)
  const t = translations[lang]
  const toggleLang = () => setLang(l => l === 'de' ? 'en' : 'de')

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
