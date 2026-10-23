import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'

/** Fade-up reveal on scroll */
export default function Reveal({ children, delay = 0, className = '', y = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionLabel({ children, light = false }) {
  return (
    <div className={light ? 'label-caps-light mb-5' : 'label-caps mb-5'}>
      <span className="mr-3 inline-block h-px w-8 align-middle" style={{ background: light ? '#a3a3a3' : '#0a0a0a' }} />
      {children}
    </div>
  )
}

/** Section wrapper: white or ink band */
export function Band({ dark = false, className = '', children, id }) {
  return (
    <section
      id={id}
      className={`${dark ? 'bg-ink text-paper' : 'bg-paper text-ink'} ${className}`}
    >
      {children}
    </section>
  )
}

/** Simple bilingual static text helper re-export */
export function T({ es, en }) {
  const { L } = useLang()
  return L({ es, en })
}
