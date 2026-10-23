import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionLabel } from './Reveal'
import { useLang } from '../i18n/LangContext'

/**
 * Hero: white monumental or dark band variant.
 * title may be a string or bilingual {es,en}
 */
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
    <section className={`relative overflow-hidden ${dark ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>
      {image && (
        <div className="pointer-events-none absolute inset-0">
          <img
            src={image}
            alt=""
            className={`h-full w-full object-cover img-gray ${dark ? 'opacity-25' : 'opacity-[0.14]'}`}
          />
          <div className={`absolute inset-0 ${dark ? 'bg-gradient-to-r from-ink via-ink/85 to-ink/40' : 'bg-gradient-to-r from-paper via-paper/90 to-paper/50'}`} />
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
            <p className={`mt-7 max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? 'text-mist' : 'text-slatey'} ${center ? 'mx-auto' : ''}`}>
              {L(subtitle)}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className={`mt-10 flex flex-wrap gap-4 ${center ? 'justify-center' : ''}`}>
              {primaryCta && (
                <Link to={primaryCta.to} className={dark ? 'btn-light' : 'btn-primary'}>
                  {L(primaryCta.label)}
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.to} className={dark ? 'btn-light' : 'btn-outline'}>
                  {L(secondaryCta.label)}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
      <div className={`h-px w-full ${dark ? 'bg-paper/15' : 'bg-fog'}`} />
    </section>
  )
}
