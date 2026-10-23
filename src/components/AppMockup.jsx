import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'

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
        className="relative rounded-[2.2rem] border-[6px] border-app-fg bg-app-fg p-2 shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
      >
        <div className="overflow-hidden rounded-[1.6rem] bg-app text-app-fg">
          <div className="flex items-center justify-between bg-app-fg px-4 pb-3 pt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-app opacity-90">
            <span>9:41</span>
            <span className="h-1.5 w-14 rounded-full bg-app/20" />
            <span>5G</span>
          </div>

          <div className="bg-cloud px-4 py-4">
            <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-hint">
              {isGo ? 'Tujo Go' : 'Tujo Food'}
            </div>
            <div className="mt-1 text-base font-black tracking-tight">{L(title)}</div>
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-3 inline-flex items-center gap-2 bg-app-fg px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-app"
              >
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-app" />
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
                className="flex items-center justify-between border border-line px-3 py-2.5"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-hint">{L(row.k)}</span>
                <span className="text-[11px] font-bold tracking-tight">{L(row.v)}</span>
              </motion.div>
            ))}
          </div>

          {isGo && (
            <div className="px-4 pb-4">
              <div className="relative h-24 overflow-hidden border border-line bg-cloud">
                <svg viewBox="0 0 260 96" className="h-full w-full" aria-hidden="true">
                  <path d="M0 70 C60 70 80 30 130 40 S220 80 260 50" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="6 5" opacity="0.4" />
                  <path d="M0 78 C70 78 90 55 140 60 S210 30 260 38" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.08" />
                  <circle r="5" fill="currentColor">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M0 70 C60 70 80 30 130 40 S220 80 260 50" />
                  </circle>
                </svg>
                <span className="absolute bottom-2 left-2 bg-app px-2 py-1 text-[8px] font-bold uppercase tracking-[0.14em]">
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
                    className="aspect-square overflow-hidden border border-line bg-cloud"
                  >
                    <div className="h-full w-full bg-[linear-gradient(135deg,var(--color-fog)_0%,var(--color-cloud)_50%,var(--color-hint)_100%)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-line px-4 py-3">
            <div className="text-[9px] leading-snug text-hint">{L(footerNote)}</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-3 -top-4 h-16 w-16 border border-line bg-app/80 backdrop-blur-sm"
      />
    </div>
  )
}
