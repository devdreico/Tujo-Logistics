import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'

const STEPS = [
  { id: 1, key: 'received', time: '10:02' },
  { id: 2, key: 'pickup', time: '10:35' },
  { id: 3, key: 'transit', time: '11:10' },
  { id: 4, key: 'delivered', time: '12:04' },
]

const stepLabels = {
  received: { es: 'Envío registrado', en: 'Shipment registered' },
  pickup: { es: 'Recolección confirmada', en: 'Pickup confirmed' },
  transit: { es: 'En tránsito', en: 'In transit' },
  delivered: { es: 'Entregado', en: 'Delivered' },
}

export default function TrackingDemo() {
  const { L } = useLang()
  const [code, setCode] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const clean = code.trim().toUpperCase()
    if (clean.length < 4) {
      setError(L({ es: 'Ingresa un código válido (mín. 4 caracteres).', en: 'Enter a valid code (min. 4 characters).' }))
      setResult(null)
      return
    }
    setError('')
    const seed = clean.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
    const activeSteps = (seed % STEPS.length) + 1
    setResult({ code: clean, steps: STEPS.slice(0, activeSteps), complete: activeSteps === STEPS.length })
  }

  return (
    <div className="border border-fog bg-paper">
      <form onSubmit={onSubmit} className="border-b border-fog p-6 sm:p-8">
        <label htmlFor="track-code" className="label-caps">
          {L({ es: 'Código de rastreo', en: 'Tracking code' })}
        </label>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            id="track-code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={L({ es: 'Ej. TJ-BOG-2024-X', en: 'e.g. TJ-BOG-2024-X' })}
            className="field flex-1 uppercase tracking-widest"
            autoComplete="off"
          />
          <button type="submit" className="btn-primary">
            {L({ es: 'Rastrear', en: 'Track' })}
          </button>
        </div>
        {error && <p className="mt-3 text-sm font-semibold text-ink">{error}</p>}
        <p className="mt-3 text-[12px] text-mist">
          {L({
            es: 'Demo interactiva: cualquier código muestra un estado simulado del envío.',
            en: 'Interactive demo: any code shows a simulated shipment status.',
          })}
        </p>
      </form>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key={result.code + result.steps.length}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="label-caps">{L({ es: 'Resultado', en: 'Result' })}</div>
                <div className="mt-1 text-xl font-black tracking-tight">{result.code}</div>
              </div>
              <span
                className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] ${
                  result.complete ? 'bg-ink text-paper' : 'bg-cloud text-ink'
                }`}
              >
                {result.complete
                  ? L({ es: 'Completado', en: 'Completed' })
                  : L({ es: 'En curso', en: 'In progress' })}
              </span>
            </div>

            <ol className="mt-8 space-y-0">
              {STEPS.map((s, i) => {
                const done = i < result.steps.length
                const current = i === result.steps.length - 1
                return (
                  <motion.li
                    key={s.key}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12, duration: 0.35 }}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {i < STEPS.length - 1 && (
                      <span
                        className={`absolute left-[11px] top-6 h-full w-px ${done ? 'bg-ink' : 'bg-fog'}`}
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={`relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                        done ? 'border-ink bg-ink' : 'border-fog bg-paper'
                      }`}
                    >
                      {done && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.12 + 0.1 }}
                          className="h-1.5 w-1.5 rounded-full bg-paper"
                        />
                      )}
                    </span>
                    <div className="flex flex-1 items-baseline justify-between gap-4">
                      <span className={`text-sm font-semibold ${done ? 'text-ink' : 'text-mist'}`}>
                        {L(stepLabels[s.key])}
                      </span>
                      <span className={`text-[12px] tabular-nums ${done ? 'text-slatey' : 'text-mist'}`}>
                        {done ? s.time : '—'}
                      </span>
                    </div>
                    {current && (
                      <span className="absolute -right-1 top-1 h-2 w-2 animate-pulse-soft rounded-full bg-ink" aria-hidden="true" />
                    )}
                  </motion.li>
                )
              })}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
