import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const LangContext = createContext(null)

const LANG_KEY = 'tujo-lang'
const THEME_KEY = 'tujo-theme'

function getInitialLang() {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem(LANG_KEY)
  if (stored === 'es' || stored === 'en') return stored
  const nav = window.navigator.language?.slice(0, 2)
  return nav === 'en' ? 'en' : 'es'
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)
  const [theme, setThemeState] = useState(getInitialTheme)

  useEffect(() => {
    window.localStorage.setItem(LANG_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff')
  }, [theme])

  const setLang = useCallback((next) => {
    if (next === 'es' || next === 'en') setLangState(next)
  }, [])

  const toggleLang = useCallback(() => setLangState((l) => (l === 'es' ? 'en' : 'es')), [])

  const toggleTheme = useCallback(() => setThemeState((t) => (t === 'dark' ? 'light' : 'dark')), [])

  const L = useCallback(
    (obj) => {
      if (obj == null) return ''
      if (typeof obj === 'string' || typeof obj === 'number') return obj
      return obj[lang] ?? obj.es ?? ''
    },
    [lang],
  )

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, L, theme, setTheme: setThemeState, toggleTheme }),
    [lang, setLang, toggleLang, L, theme, toggleTheme],
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
  },
  footer: {
    units: { es: 'Unidades de negocio', en: 'Business units' },
    company: { es: 'Empresa', en: 'Company' },
    resources: { es: 'Recursos', en: 'Resources' },
    legal: { es: 'Legal', en: 'Legal' },
    rights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
    privacy: { es: 'Privacidad', en: 'Privacy' },
    terms: { es: 'Términos', en: 'Terms' },
    from: { es: 'Hecho en Bogotá, Colombia', en: 'Made in Bogotá, Colombia' },
  },
  common: {
    cta: { es: 'Hablemos', en: "Let's talk" },
    explore: { es: 'Explorar', en: 'Explore' },
    exploreUnit: { es: 'Explorar unidad', en: 'Explore unit' },
    learnMore: { es: 'Conocer más', en: 'Learn more' },
    readMore: { es: 'Leer artículo', en: 'Read article' },
    read: { es: 'Leer', en: 'Read' },
    apply: { es: 'Postularme', en: 'Apply' },
    applyJoin: { es: 'Postularme →', en: 'Apply →' },
    send: { es: 'Enviar mensaje', en: 'Send message' },
    viewServices: { es: 'Ver servicios', en: 'View services' },
    aboutCompany: { es: 'Conocer la empresa', en: 'About the company' },
    viewServicesShort: { es: 'Ver servicios', en: 'View services' },
    backToBlog: { es: 'Volver al blog', en: 'Back to blog' },
  },
  a11y: {
    openMenu: { es: 'Abrir menú', en: 'Open menu' },
    closeMenu: { es: 'Cerrar menú', en: 'Close menu' },
    language: { es: 'Idioma', en: 'Language' },
    primaryNav: { es: 'Navegación principal', en: 'Primary navigation' },
    mobileNav: { es: 'Navegación móvil', en: 'Mobile navigation' },
    theme: { es: 'Cambiar tema', en: 'Toggle theme' },
    skip: { es: 'Saltar al contenido', en: 'Skip to content' },
    whatsapp: { es: 'Contactar por WhatsApp', en: 'Contact on WhatsApp' },
  },
}
