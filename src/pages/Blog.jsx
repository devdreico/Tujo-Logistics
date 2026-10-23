import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { ui, useLang } from '../i18n/LangContext'
import { blogPosts, getFeatured } from '../data/blogPosts'
import { formatDate } from '../utils/format'

export default function Blog() {
  const { L, lang } = useLang()
  usePageMeta({
    title: L({ es: 'Blog', en: 'Blog' }),
    description: L({
      es: 'Artículos de Tujo Logistics sobre estrategia logística, cadena de frío, tarifas democráticas y operación en entornos caóticos.',
      en: 'Tujo Logistics articles on logistics strategy, cold chain, democratic fares and chaotic-environment operations.',
    }),
    path: '/blog',
    type: 'website',
  })

  if (!blogPosts.length) {
    return (
      <section className="container-site py-32 text-center">
        <h1 className="text-3xl font-black tracking-tight">{L({ es: 'Blog', en: 'Blog' })}</h1>
        <p className="mt-4 text-muted">{L({ es: 'No hay artículos todavía.', en: 'No articles yet.' })}</p>
      </section>
    )
  }

  const featured = getFeatured()
  const rest = blogPosts.filter((p) => p.slug !== featured.slug)

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

      <section className="bg-app text-app-fg">
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="group grid gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="relative overflow-hidden">
                <img
                  src={featured.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={1400}
                  height={933}
                  className="aspect-[16/10] w-full object-cover img-gray transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-hint">
                  <span>{L(featured.category)}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={featured.date}>{formatDate(featured.date, lang)}</time>
                </div>
                <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.4rem)] font-black leading-[1.08] tracking-[-0.03em] group-hover:opacity-80">
                  {L(featured.title)}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">{L(featured.excerpt)}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em]">
                  {L(ui.common.readMore)}
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-20 border-t border-line pt-14">
            <div className="label-caps mb-10">{L({ es: 'Más artículos', en: 'More articles' })}</div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                  <Link to={`/blog/${p.slug}`} className="card group flex h-full flex-col overflow-hidden">
                    <div className="aspect-[16/9] overflow-hidden bg-cloud">
                      <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        width={1400}
                        height={933}
                        className="h-full w-full object-cover img-gray transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-hint">
                        <span>{L(p.category)}</span>
                        <span aria-hidden="true">·</span>
                        <time dateTime={p.date}>{formatDate(p.date, lang)}</time>
                      </div>
                      <h3 className="mt-3 text-lg font-black leading-snug tracking-tight">{L(p.title)}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{L(p.excerpt)}</p>
                      <span className="mt-6 text-[12px] font-bold uppercase tracking-[0.18em]">
                        {L(ui.common.read)} →
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
