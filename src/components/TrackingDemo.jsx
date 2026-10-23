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

/** Codes ending in "000" are treated as not found (demo). */
function hashSteps(code) {
  const seed = code.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return (seed % STEPS.length) + 1
}

export default function TrackingDemo() {
  const { L } = useLang()
  const [code, setCode] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
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
    setLoading(true)
    setResult(null)
    window.setTimeout(() => {
      setLoading(false)
      if (clean.endsWith('000') || clean === 'NOTFOUND') {
        setResult({ code: clean, notFound: true })
        return
      }
      const activeSteps = hashSteps(clean)
      setResult({ code: clean, steps: STEPS.slice(0, activeSteps), complete: activeSteps === STEPS.length, notFound: false })
    }, 650)
  }

  return (
    <div className="border border-line bg-app">
      <form onSubmit={onSubmit} className="border-b border-line p-6 sm:p-8">
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
            aria-describedby="track-hint"
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading
              ? L({ es: 'Rastreando…', en: 'Tracking…' })
              : L({ es: 'Rastrear', en: 'Track' })}
          </button>
        </div>
        {error && (
          <p role="alert" className="mt-3 text-sm font-semibold">{error}</p>
        )}
        <p id="track-hint" className="mt-3 text-[12px] text-muted">
          {L({
            es: 'Demo: cualquier código muestra un estado simulado. Usa un código terminado en 000 para ver el estado "no encontrado".',
            en: 'Demo: any code shows a simulated status. Use a code ending in 000 to see the "not found" state.',
          })}
        </p>
      </form>

      <div aria-live="polite" role="status">
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3 p-8"
            >
              <span className="h-2 w-2 animate-pulse-soft rounded-full bg-app-fg" aria-hidden="true" />
              <span className="text-sm font-semibold">{L({ es: 'Consultando estado…', en: 'Checking status…' })}</span>
            </motion.div>
          )}
          {!loading && result?.notFound && (
            <motion.div
              key="nf"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-8"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                {L({ es: 'Sin resultados', en: 'No results' })}
              </div>
              <div className="mt-2 text-xl font-black tracking-tight">{result.code}</div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {L({
                  es: 'No encontramos envíos con ese código. Verifica el formato o contacta soporte.',
                  en: 'No shipments found with that code. Check the format or contact support.',
                })}
              </p>
            </motion.div>
          )}
          {!loading && result && !result.notFound && (
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
                    result.complete ? 'bg-app-fg text-app' : 'bg-cloud text-app-fg'
                  }`}
                >
                  {result.complete
                    ? L({ es: 'Completado', en: 'Completed' })
                    : L({ es: 'En curso', en: 'In progress' })}
                </span>
              </div>

              <ol className="mt-8">
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
                          className={`absolute left-[11px] top-6 h-full w-px ${done ? 'bg-app-fg' : 'bg-line'}`}
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                          done ? 'border-app-fg bg-app-fg' : 'border-line bg-app'
                        }`}
                      >
                        {done && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.12 + 0.1 }}
                            className="h-1.5 w-1.5 rounded-full bg-app"
                          />
                        )}
                      </span>
                      <div className="flex flex-1 items-baseline justify-between gap-4">
                        <span className={`text-sm font-semibold ${done ? 'text-app-fg' : 'text-hint'}`}>
                          {L(stepLabels[s.key])}
                        </span>
                        <span className={`text-[12px] tabular-nums ${done ? 'text-muted' : 'text-hint'}`}>
                          {done ? s.time : '—'}
                        </span>
                      </div>
                      {current && (
                        <span className="absolute -right-1 top-1 h-2 w-2 animate-pulse-soft rounded-full bg-app-fg" aria-hidden="true" />
                      )}
                    </motion.li>
                  )
                })}
              </ol>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
