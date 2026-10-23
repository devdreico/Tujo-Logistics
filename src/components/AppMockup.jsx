import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'

/**
 * Animated CSS phone mockup.
 * variant: 'go' | 'food'
 * screens: array of { title, rows: [{k,v}], badge }
 */
export default function AppMockup({ variant = 'go', title, badge, rows = [], footerNote }) {
  const { L } = useLang()
  const isGo = variant === 'go'

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2.2rem] border-[6px] border-ink bg-ink p-2 shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
      >
        <div className="overflow-hidden rounded-[1.6rem] bg-paper">
          <div className="flex items-center justify-between bg-ink px-4 pb-3 pt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-mist">
            <span>9:41</span>
            <span className="h-1.5 w-14 rounded-full bg-paper/20" />
            <span>5G</span>
          </div>

          <div className="bg-cloud px-4 py-4">
            <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-mist">
              {isGo ? 'Tujo Go' : 'Tujo Food'}
            </div>
            <div className="mt-1 text-base font-black tracking-tight text-ink">{L(title)}</div>
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-3 inline-flex items-center gap-2 bg-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-paper"
              >
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-paper" />
                {L(badge)}
              </motion.div>
            )}
          </div>

          <div className="space-y-2.5 px-4 py-4">
            {rows.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.12, duration: 0.45 }}
                className="flex items-center justify-between border border-fog px-3 py-2.5"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-mist">{L(row.k)}</span>
                <span className="text-[11px] font-bold tracking-tight text-ink">{L(row.v)}</span>
              </motion.div>
            ))}
          </div>

          {isGo && (
            <div className="px-4 pb-4">
              <div className="relative h-24 overflow-hidden border border-fog bg-cloud">
                <svg viewBox="0 0 260 96" className="h-full w-full" aria-hidden="true">
                  <path d="M0 70 C60 70 80 30 130 40 S220 80 260 50" stroke="#a3a3a3" strokeWidth="2" fill="none" strokeDasharray="6 5" />
                  <path d="M0 78 C70 78 90 55 140 60 S210 30 260 38" stroke="#e5e5e5" strokeWidth="8" fill="none" />
                  <circle r="5" fill="#0a0a0a">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M0 70 C60 70 80 30 130 40 S220 80 260 50" />
                  </circle>
                </svg>
                <span className="absolute bottom-2 left-2 bg-paper px-2 py-1 text-[8px] font-bold uppercase tracking-[0.14em]">
                  {L({ es: 'En ruta', en: 'On route' })}
                </span>
              </div>
            </div>
          )}

          {!isGo && (
            <div className="px-4 pb-4">
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
                    className="aspect-square overflow-hidden border border-fog bg-cloud"
                  >
                    <div className="h-full w-full bg-[linear-gradient(135deg,#e5e5e5_0%,#f5f5f5_50%,#a3a3a3_100%)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-fog px-4 py-3">
            <div className="text-[9px] leading-snug text-mist">{L(footerNote)}</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-3 -top-4 h-16 w-16 border border-ink/15 bg-paper/80 backdrop-blur-sm"
      />
    </div>
  )
}
