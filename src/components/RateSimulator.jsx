import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Counter from './Counter'
import { useLang } from '../i18n/LangContext'

const MODES = [
  {
    id: 'walk',
    name: { es: 'A pie', en: 'Walking' },
    base: 2000,
    perKm: 1200,
    maxKg: 5,
  },
  {
    id: 'moto',
    name: { es: 'Moto', en: 'Motorcycle' },
    base: 4000,
    perKm: 2200,
    maxKg: 25,
  },
  {
    id: 'car',
    name: { es: 'Carro', en: 'Car' },
    base: 8000,
    perKm: 3500,
    maxKg: 150,
  },
]

/**
 * Tujo Go minimum fare simulator.
 * Rates are illustrative community-agreed minimums (COP).
 */
export default function RateSimulator() {
  const { L } = useLang()
  const [modeId, setModeId] = useState('moto')
  const [km, setKm] = useState(4)
  const [kg, setKg] = useState(1.5)

  const mode = MODES.find((m) => m.id === modeId)

  const { total, overWeight } = useMemo(() => {
    const base = mode.base + mode.perKm * km
    const extra = kg > mode.maxKg ? Math.ceil((kg - mode.maxKg) / 10) * 2500 : 0
    return { total: base + extra, overWeight: extra > 0 }
  }, [mode, km, kg])

  return (
    <div className="border border-paper/20 bg-coal p-6 sm:p-8">
      <div className="label-caps-light mb-6">{L({ es: 'Simulador de tarifa mínima', en: 'Minimum fare simulator' })}</div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-7">
          <div>
            <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-mist">
              {L({ es: 'Medio de transporte', en: 'Transport mode' })}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {MODES.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setModeId(m.id)}
                  className={`border px-3 py-3 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors ${
                    modeId === m.id
                      ? 'border-paper bg-paper text-ink'
                      : 'border-paper/25 text-mist hover:border-paper hover:text-paper'
                  }`}
                  aria-pressed={modeId === m.id}
                >
                  {L(m.name)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-mist">
                {L({ es: 'Distancia', en: 'Distance' })}
              </span>
              <span className="text-sm font-black tabular-nums">{km} km</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="30"
              step="0.5"
              value={km}
              onChange={(e) => setKm(Number(e.target.value))}
              className="w-full accent-white"
              aria-label="Distancia en kilómetros"
            />
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-mist">
                {L({ es: 'Peso del paquete', en: 'Package weight' })}
              </span>
              <span className="text-sm font-black tabular-nums">{kg.toFixed(1)} kg</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="150"
              step="0.1"
              value={kg}
              onChange={(e) => setKg(Number(e.target.value))}
              className="w-full accent-white"
              aria-label="Peso en kilogramos"
            />
            <p className="mt-2 text-[11px] text-mist">
              {L({
                es: 'Paquetes pequeños (< 2.5 kg) mantienen la tarifa mínima del medio.',
                en: 'Small packages (< 2.5 kg) keep the mode minimum fare.',
              })}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between border-t border-paper/15 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-mist">
              {L({ es: 'Tarifa mínima estimada', en: 'Estimated minimum fare' })}
            </div>
            <motion.div
              key={total}
              initial={{ opacity: 0.4, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-[clamp(2.4rem,6vw,3.6rem)] font-black leading-none tracking-[-0.04em]"
            >
              $<Counter to={total} duration={0.6} />
              <span className="ml-2 text-lg font-bold text-mist">COP</span>
            </motion.div>
            <div className="mt-4 space-y-1.5 text-[12px] text-mist">
              <div className="flex justify-between border-b border-paper/10 pb-2">
                <span>{L({ es: 'Base', en: 'Base' })}</span>
                <span className="tabular-nums">${mode.base.toLocaleString('es-CO')}</span>
              </div>
              <div className="flex justify-between border-b border-paper/10 pb-2">
                <span>
                  {L({ es: 'Por km', en: 'Per km' })} × {km}
                </span>
                <span className="tabular-nums">${(mode.perKm * km).toLocaleString('es-CO')}</span>
              </div>
              {overWeight && (
                <div className="flex justify-between border-b border-paper/10 pb-2 text-paper">
                  <span>{L({ es: 'Sobrepeso', en: 'Overweight' })}</span>
                  <span className="tabular-nums">+${overWeight.toLocaleString('es-CO')}</span>
                </div>
              )}
            </div>
          </div>
          <p className="mt-8 text-[11px] leading-relaxed text-mist">
            {L({
              es: 'Valores ilustrativos COP derivados del debate abierto de tarifas de Tujo Go. La cuota final la acuerdan las partes en la app.',
              en: 'Illustrative COP values from Tujo Go’s open fare debate. The final quote is agreed in-app by both parties.',
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
