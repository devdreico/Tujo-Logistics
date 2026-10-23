import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import { useLang } from '../i18n/LangContext'
import { blogPosts } from '../data/blogPosts'

function formatDate(iso, lang) {
  const d = new Date(iso + 'T12:00:00')
  return d.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-CO', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function Blog() {
  const { L, lang } = useLang()
  usePageTitle(L({ es: 'Blog', en: 'Blog' }))

  const [featured, ...rest] = blogPosts

  return (
    <>
      <HeroSection
        label={{ es: 'Blog', en: 'Blog' }}
        title={{ es: 'Ideas del ecosistema Tujo.', en: 'Ideas from the Tujo ecosystem.' }}
        subtitle={{
          es: 'Artículos sobre estrategia logística, cadena de frío, tarifas democráticas y operación en entornos caóticos.',
          en: 'Articles on logistics strategy, cold chain, democratic fares and operations in chaotic environments.',
        }}
      />

      <section className="bg-paper">
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="group grid gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="relative overflow-hidden">
                <img
                  src={featured.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover img-gray transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-mist">
                  <span>{L(featured.category)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{formatDate(featured.date, lang)}</span>
                </div>
                <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.4rem)] font-black leading-[1.08] tracking-[-0.03em] group-hover:text-slatey">
                  {L(featured.title)}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slatey">{L(featured.excerpt)}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em]">
                  {L({ es: 'Leer artículo', en: 'Read article' })}
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-20 border-t border-fog pt-14">
            <div className="label-caps mb-10">{L({ es: 'Más artículos', en: 'More articles' })}</div>
            <div className="grid gap-8 md:grid-cols-2">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.1}>
                  <Link to={`/blog/${p.slug}`} className="card group flex h-full flex-col overflow-hidden">
                    <div className="aspect-[16/9] overflow-hidden bg-cloud">
                      <img
                        src={p.image}
                        alt=""
                        className="h-full w-full object-cover img-gray transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-mist">
                        <span>{L(p.category)}</span>
                        <span aria-hidden="true">·</span>
                        <span>{formatDate(p.date, lang)}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-black leading-snug tracking-tight">{L(p.title)}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slatey">{L(p.excerpt)}</p>
                      <span className="mt-6 text-[12px] font-bold uppercase tracking-[0.18em]">
                        {L({ es: 'Leer →', en: 'Read →' })}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
