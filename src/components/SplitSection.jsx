import Reveal, { SectionLabel } from './Reveal'
import { useLang } from '../i18n/LangContext'

/** Two-column split: text + visual (image or custom children in visual slot) */
export default function SplitSection({
  label,
  title,
  body,
  bullets,
  image,
  reverse = false,
  dark = false,
  children,
  id,
}) {
  const { L } = useLang()

  return (
    <section id={id} className={`${dark ? 'band' : 'bg-app text-app-fg'}`}>
      <div className="container-site py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className={reverse ? 'lg:order-2' : ''}>
            <Reveal>
              {label && <SectionLabel light={dark}>{L(label)}</SectionLabel>}
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black leading-[1.05] tracking-[-0.03em]">
                {L(title)}
              </h2>
              {body && (
                <p className="mt-6 text-base leading-relaxed opacity-80">{L(body)}</p>
              )}
              {bullets && (
                <ul className="mt-8 space-y-4">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="mt-2 h-px w-6 shrink-0 bg-current opacity-60" />
                      <div>
                        <div className="text-sm font-bold tracking-tight">{L(b.title)}</div>
                        {b.text && (
                          <div className="mt-1 text-sm leading-relaxed opacity-75">{L(b.text)}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
          <Reveal delay={0.12} className={reverse ? 'lg:order-1' : ''}>
            {image ? (
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={1400}
                  height={1050}
                  className="aspect-[4/3] w-full object-cover img-gray"
                />
                <div className={`absolute inset-0 border ${dark ? 'border-current/20' : 'border-app-fg/10'}`} />
              </div>
            ) : (
              children
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
