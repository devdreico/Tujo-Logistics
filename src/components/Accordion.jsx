import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  const baseId = useId()

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        const btnId = `${baseId}-btn-${i}`
        const panelId = `${baseId}-panel-${i}`
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                id={btnId}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 hover:opacity-80"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="text-base font-semibold tracking-tight sm:text-lg">{item.q}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-transform duration-300 ${
                    isOpen ? 'rotate-45 border-app-fg bg-app-fg text-app' : 'border-line text-app-fg'
                  }`}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="prose-tujo max-w-3xl pb-7">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
