import Reveal, { SectionLabel } from './Reveal'
import { useLang } from '../i18n/LangContext'

/** Two-column split: text + visual (image or arbitrary children) */
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
    <section id={id} className={`${dark ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>
      <div className="container-site py-20 lg:py-28">
        <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${reverse ? '' : ''}`}>
          <div className={reverse ? 'lg:order-2' : ''}>
            <Reveal>
              {label && <SectionLabel light={dark}>{L(label)}</SectionLabel>}
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black leading-[1.05] tracking-[-0.03em]">
                {L(title)}
              </h2>
              {body && (
                <p className={`mt-6 text-base leading-relaxed ${dark ? 'text-mist' : 'text-slatey'}`}>{L(body)}</p>
              )}
              {bullets && (
                <ul className="mt-8 space-y-4">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex gap-4">
                      <span className={`mt-2 h-px w-6 shrink-0 ${dark ? 'bg-mist' : 'bg-ink'}`} />
                      <div>
                        <div className={`text-sm font-bold tracking-tight ${dark ? 'text-paper' : 'text-ink'}`}>
                          {L(b.title)}
                        </div>
                        {b.text && (
                          <div className={`mt-1 text-sm leading-relaxed ${dark ? 'text-mist' : 'text-slatey'}`}>
                            {L(b.text)}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {children}
            </Reveal>
          </div>
          <Reveal delay={0.12} className={reverse ? 'lg:order-1' : ''}>
            {image ? (
              <div className="relative overflow-hidden">
                <img src={image} alt="" className="aspect-[4/3] w-full object-cover img-gray" />
                <div className={`absolute inset-0 border ${dark ? 'border-paper/20' : 'border-ink/10'}`} />
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
