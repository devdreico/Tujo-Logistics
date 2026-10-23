import { motion } from 'framer-motion'

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
      <span
        className="mr-3 inline-block h-px w-8 align-middle"
        style={{ background: light ? 'currentColor' : 'currentColor', opacity: light ? 0.45 : 1 }}
      />
      {children}
    </div>
  )
}

/** Section wrapper: app surface or band */
export function Band({ dark = false, className = '', children, id }) {
  return (
    <section id={id} className={`${dark ? 'band text-band-fg' : 'bg-app text-app-fg'} ${className}`}>
      {children}
    </section>
  )
}
