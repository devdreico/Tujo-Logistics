import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ui, useLang } from '../i18n/LangContext'

export default function PageTransition({ children }) {
  const location = useLocation()
  const mainRef = useRef(null)
  const first = useRef(true)
  const { L } = useLang()

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    mainRef.current?.focus({ preventScroll: true })
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.main
        id="main"
        ref={mainRef}
        tabIndex={-1}
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="outline-none"
        aria-label={L({ es: 'Contenido principal', en: 'Main content' })}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export function SkipLink() {
  const { L } = useLang()
  return (
    <a href="#main" className="skip-link">
      {L(ui.a11y.skip)}
    </a>
  )
}
