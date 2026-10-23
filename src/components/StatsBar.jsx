import Counter from './Counter'
import Reveal from './Reveal'
import { useLang } from '../i18n/LangContext'

export default function StatsBar({ items, dark = false }) {
  const { L } = useLang()

  return (
    <section className={dark ? 'band' : 'bg-cloud text-app-fg'}>
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {items.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className={`border-t pt-6 ${dark ? 'border-current/30' : 'border-app-fg'}`}>
                <div className="text-[clamp(2rem,5vw,3.2rem)] font-black leading-none tracking-[-0.04em]">
                  <Counter to={s.value} suffix={s.suffix || ''} decimals={s.decimals || 0} />
                </div>
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] opacity-70">
                  {L(s.label)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
