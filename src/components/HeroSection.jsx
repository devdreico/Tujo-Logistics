import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionLabel } from './Reveal'
import { useLang } from '../i18n/LangContext'

export default function HeroSection({
  label,
  title,
  subtitle,
  dark = false,
  primaryCta,
  secondaryCta,
  image,
  align = 'left',
  tall = false,
}) {
  const { L } = useLang()
  const titleText = L(title)
  const center = align === 'center'

  return (
    <section
      className={`relative overflow-hidden ${dark ? 'band on-band' : 'bg-app text-app-fg'}`}
    >
      {image && (
        <div className="pointer-events-none absolute inset-0">
          <img
            src={image}
            alt=""
            loading="eager"
            decoding="async"
            width={1400}
            height={933}
            className={`h-full w-full object-cover img-gray ${dark ? 'opacity-25' : 'opacity-[0.14]'}`}
          />
          <div
            className={`absolute inset-0 ${
              dark
                ? 'bg-gradient-to-r from-band via-band/90 to-band/40'
                : 'bg-gradient-to-r from-app via-app/90 to-app/50'
            }`}
          />
        </div>
      )}
      <div className={`container-site relative ${tall ? 'py-28 lg:py-40' : 'py-20 lg:py-32'} ${center ? 'text-center' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={center ? 'mx-auto max-w-3xl' : 'max-w-3xl'}
        >
          {label && <SectionLabel light={dark}>{L(label)}</SectionLabel>}
          <h1 className="text-[clamp(2.4rem,7vw,4.6rem)] font-black leading-[0.95] tracking-[-0.03em]">
            {titleText}
          </h1>
          {subtitle && (
            <p
              className={`mt-7 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg ${center ? 'mx-auto' : ''}`}
            >
              {L(subtitle)}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className={`mt-10 flex flex-wrap gap-4 ${center ? 'justify-center' : ''}`}>
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className={
                    dark
                      ? 'inline-flex items-center justify-center gap-2 border border-current px-6 py-3.5 text-sm font-semibold tracking-wide transition-all hover:bg-current/10'
                      : 'btn-primary'
                  }
                >
                  {L(primaryCta.label)}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className={
                    dark
                      ? 'inline-flex items-center justify-center gap-2 border border-current/40 px-6 py-3.5 text-sm font-semibold tracking-wide opacity-80 transition-all hover:opacity-100'
                      : 'btn-outline'
                  }
                >
                  {L(secondaryCta.label)}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
      <div className={`h-px w-full ${dark ? 'bg-current/20' : 'bg-line'}`} />
    </section>
  )
}
