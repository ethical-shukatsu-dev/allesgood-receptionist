'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations } from './i18n'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ja')
  const [translations2, setTranslations] = useState(translations[language])

  // Set language and store it in localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang)
    }
  }

  // Initialize language from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferredLanguage') as Language | null
      if (savedLanguage && (savedLanguage === 'ja' || savedLanguage === 'en')) {
        setLanguageState(savedLanguage)
      }
    }
  }, [])

  // Update translations when language changes
  useEffect(() => {
    setTranslations(translations[language])
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations2 }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 