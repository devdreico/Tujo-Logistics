import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { useLang } from '../i18n/LangContext'

export default function CTABanner({
  title,
  subtitle,
  to = '/contacto',
  ctaLabel,
  dark = true,
}) {
  const { L } = useLang()

  return (
    <section className={dark ? 'bg-ink text-paper' : 'bg-cloud text-ink'}>
      <div className="container-site py-20 lg:py-28">
        <Reveal>
          <div className={`flex flex-col gap-8 ${dark ? '' : ''} lg:flex-row lg:items-end lg:justify-between`}>
            <div className="max-w-2xl">
              <h2 className="text-[clamp(1.8rem,4.5vw,3rem)] font-black leading-[1.02] tracking-[-0.03em]">
                {L(title)}
              </h2>
              {subtitle && (
                <p className={`mt-5 text-base leading-relaxed ${dark ? 'text-mist' : 'text-slatey'}`}>
                  {L(subtitle)}
                </p>
              )}
            </div>
            <Link to={to} className={dark ? 'btn-light shrink-0' : 'btn-primary shrink-0'}>
              {L(ctaLabel || { es: 'Hablemos', en: "Let's talk" })}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
