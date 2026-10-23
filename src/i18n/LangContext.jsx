import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LangContext = createContext(null)

const STORAGE_KEY = 'tujo-lang'

function getInitialLang() {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored
  return 'es'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === 'es' ? 'en' : 'es')),
      /** Pick a field from a bilingual object { es, en } */
      L: (obj) => {
        if (obj == null) return ''
        if (typeof obj === 'string' || typeof obj === 'number') return obj
        return obj[lang] ?? obj.es ?? ''
      },
    }),
    [lang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

/** UI strings shared across layout chrome */
export const ui = {
  nav: {
    home: { es: 'Inicio', en: 'Home' },
    about: { es: 'Nosotros', en: 'About' },
    services: { es: 'Servicios', en: 'Services' },
    units: { es: 'Unidades', en: 'Units' },
    blog: { es: 'Blog', en: 'Blog' },
    contact: { es: 'Contacto', en: 'Contact' },
    careers: { es: 'Carreras', en: 'Careers' },
    partners: { es: 'Aliados', en: 'Partners' },
    tracking: { es: 'Rastreo', en: 'Tracking' },
    faq: { es: 'FAQ', en: 'FAQ' },
    all: { es: 'Ver todo', en: 'View all' },
  },
  footer: {
    units: { es: 'Unidades de negocio', en: 'Business units' },
    company: { es: 'Empresa', en: 'Company' },
    resources: { es: 'Recursos', en: 'Resources' },
    legal: { es: 'Legal', en: 'Legal' },
    rights: {
      es: 'Todos los derechos reservados.',
      en: 'All rights reserved.',
    },
    privacy: { es: 'Privacidad', en: 'Privacy' },
    terms: { es: 'Términos', en: 'Terms' },
    from: { es: 'Hecho en Bogotá, Colombia', en: 'Made in Bogotá, Colombia' },
  },
  common: {
    learnMore: { es: 'Conocer más', en: 'Learn more' },
    cta: { es: 'Hablemos', en: "Let's talk" },
    explore: { es: 'Explorar unidad', en: 'Explore unit' },
    back: { es: 'Volver', en: 'Back' },
    allUnits: { es: 'Todas las unidades', en: 'All units' },
    send: { es: 'Enviar mensaje', en: 'Send message' },
    apply: { es: 'Postularme', en: 'Apply' },
    readMore: { es: 'Leer artículo', en: 'Read article' },
  },
}
