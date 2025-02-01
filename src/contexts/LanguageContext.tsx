import React, { createContext, useState, useContext } from 'react'

type Language = 'en' | 'zh'

type TranslationKey = 
  | 'nav.home' 
  | 'nav.services' 
  | 'nav.about' 
  | 'nav.contact'
  | 'home.title'
  | 'home.subtitle'
  | 'services.title'
  | 'services.description'
  | 'about.title'
  | 'about.description'
  | 'contact.title'
  | 'contact.description'
  | 'button.learnMore'
  | 'button.contact'
  | 'button.callNow'
  | 'button.freeEstimate'

type Translations = Record<TranslationKey, string>

type TranslationSet = Record<Language, Translations>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const translations: TranslationSet = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'home.title': 'Transform Your Space',
    'home.subtitle': 'Professional Renovation Services',
    'services.title': 'Our Services',
    'services.description': 'Comprehensive renovation solutions',
    'about.title': 'About Us',
    'about.description': 'Your trusted renovation partner',
    'contact.title': 'Contact Us',
    'contact.description': 'Get in touch with us',
    'button.learnMore': 'Learn More',
    'button.contact': 'Contact Us',
    'button.callNow': 'Call Now',
    'button.freeEstimate': 'Free Estimate'
  },
  zh: {
    'nav.home': '首页',
    'nav.services': '服务',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    'home.title': '改造您的空间',
    'home.subtitle': '专业装修服务',
    'services.title': '我们的服务',
    'services.description': '全面的装修解决方案',
    'about.title': '关于我们',
    'about.description': '您值得信赖的装修伙伴',
    'contact.title': '联系我们',
    'contact.description': '与我们取得联系',
    'button.learnMore': '了解更多',
    'button.contact': '联系我们',
    'button.callNow': '立即致电',
    'button.freeEstimate': '免费估价'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: TranslationKey): string => {
    return translations[language][key]
  }

  const value = {
    language,
    setLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 