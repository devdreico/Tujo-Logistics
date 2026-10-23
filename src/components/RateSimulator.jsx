import { useMemo, useState } from 'react'

import { useLang } from '../i18n/LangContext'
import { formatNumber } from '../utils/format'

const MODES = [
  { id: 'walk', name: { es: 'A pie', en: 'Walking' }, base: 2000, perKm: 1200, maxKg: 5 },
  { id: 'moto', name: { es: 'Moto', en: 'Motorcycle' }, base: 4000, perKm: 2200, maxKg: 25 },
  { id: 'car', name: { es: 'Carro', en: 'Car' }, base: 8000, perKm: 3500, maxKg: 150 },
]

export default function RateSimulator() {
  const { L, lang } = useLang()
  const [modeId, setModeId] = useState('moto')
  const [km, setKm] = useState(4)
  const [kg, setKg] = useState(1.5)

  const mode = MODES.find((m) => m.id === modeId) ?? MODES[1]
  const overweight = kg > mode.maxKg

  const { total, extra } = useMemo(() => {
    const base = mode.base + mode.perKm * km
    const over = kg > mode.maxKg ? Math.ceil((kg - mode.maxKg) / 10) * 2500 : 0
    return { total: base + over, extra: over }
  }, [mode, km, kg])

  const handleMode = (id) => {
    setModeId(id)
  }

  return (
    <div className="border border-current/20 bg-band-soft p-6 sm:p-8">
      <div className="label-caps-light mb-6">{L({ es: 'Simulador de tarifa mínima', en: 'Minimum fare simulator' })}</div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-7">
          <div>
            <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em] opacity-70">
              {L({ es: 'Medio de transporte', en: 'Transport mode' })}
            </div>
            <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label={L({ es: 'Medio de transporte', en: 'Transport mode' })}>
              {MODES.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  role="radio"
                  aria-checked={modeId === m.id}
                  onClick={() => handleMode(m.id)}
                  className={`border px-3 py-3 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors ${
                    modeId === m.id
                      ? 'border-band-fg bg-band-fg text-band'
                      : 'border-current/25 opacity-70 hover:opacity-100'
                  }`}
                >
                  {L(m.name)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label htmlFor="sim-km" className="text-[12px] font-bold uppercase tracking-[0.16em] opacity-70">
                {L({ es: 'Distancia', en: 'Distance' })}
              </label>
              <span className="text-sm font-black tabular-nums">{formatNumber(km, lang, { decimals: 1 })} km</span>
            </div>
            <input
              id="sim-km"
              type="range"
              min="0.5"
              max="30"
              step="0.5"
              value={km}
              onChange={(e) => setKm(Number(e.target.value))}
              className="w-full accent-current"
            />
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label htmlFor="sim-kg" className="text-[12px] font-bold uppercase tracking-[0.16em] opacity-70">
                {L({ es: 'Peso del paquete', en: 'Package weight' })}
              </label>
              <span className="text-sm font-black tabular-nums">{formatNumber(kg, lang, { decimals: 1 })} kg</span>
            </div>
            <input
              id="sim-kg"
              type="range"
              min="0.1"
              max="150"
              step="0.1"
              value={kg}
              onChange={(e) => setKg(Number(e.target.value))}
              className="w-full accent-current"
            />
            <p className="mt-2 text-[11px] opacity-70">
              {L({
                es: `Máximo para ${L(mode.name)}: ${mode.maxKg} kg. Paquetes pequeños (< 2.5 kg) mantienen la tarifa mínima.`,
                en: `Max for ${L(mode.name)}: ${mode.maxKg} kg. Small packages (< 2.5 kg) keep the mode minimum fare.`,
              })}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between border-t border-current/15 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.16em] opacity-70">
              {L({ es: 'Tarifa mínima estimada', en: 'Estimated minimum fare' })}
            </div>
            <div className="mt-4 text-[clamp(2.4rem,6vw,3.6rem)] font-black leading-none tracking-[-0.04em]">
              <span aria-hidden="true">
                ${formatNumber(total, lang)}
              </span>
              <span className="sr-only">{L({ es: `${formatNumber(total, lang)} pesos colombianos`, en: `${formatNumber(total, lang)} Colombian pesos` })}</span>
              <span className="ml-2 text-lg font-bold opacity-60">COP</span>
            </div>
            <div className="mt-4 space-y-1.5 text-[12px] opacity-75">
              <div className="flex justify-between border-b border-current/10 pb-2">
                <span>{L({ es: 'Base', en: 'Base' })}</span>
                <span className="tabular-nums">${formatNumber(mode.base, lang)}</span>
              </div>
              <div className="flex justify-between border-b border-current/10 pb-2">
                <span>
                  {L({ es: 'Por km', en: 'Per km' })} × {formatNumber(km, lang, { decimals: 1 })}
                </span>
                <span className="tabular-nums">${formatNumber(mode.perKm * km, lang)}</span>
              </div>
              {extra > 0 && (
                <div className="flex justify-between border-b border-current/10 pb-2 font-semibold">
                  <span>{L({ es: 'Sobrepeso', en: 'Overweight' })}</span>
                  <span className="tabular-nums">+${formatNumber(extra, lang)}</span>
                </div>
              )}
            </div>
            {overweight && (
              <p className="mt-4 text-[12px] font-semibold">
                {L({
                  es: 'El peso supera el máximo sugerido para este medio. Considera carro.',
                  en: 'Weight exceeds the suggested max for this mode. Consider a car.',
                })}
              </p>
            )}
          </div>
          <p className="mt-8 text-[11px] leading-relaxed opacity-70">
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
