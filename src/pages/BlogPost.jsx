import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import JsonLd, { articleLd } from '../components/JsonLd'
import usePageMeta from '../hooks/usePageMeta'
import { ui, useLang } from '../i18n/LangContext'
import { blogPosts, getPost } from '../data/blogPosts'
import { formatDate } from '../utils/format'

export default function BlogPost() {
  const { slug } = useParams()
  const { L, lang } = useLang()
  const post = getPost(slug)

  usePageMeta({
    title: post ? L(post.title) : L({ es: 'Artículo no encontrado', en: 'Article not found' }),
    description: post ? L(post.excerpt) : '',
    path: `/blog/${slug || ''}`,
    type: 'article',
  })

  if (!post) {
    return (
      <section className="container-site py-32 text-center">
        <h1 className="text-3xl font-black tracking-tight">
          {L({ es: 'Artículo no encontrado', en: 'Article not found' })}
        </h1>
        <Link to="/blog" className="btn-primary mt-8">
          {L(ui.common.backToBlog)}
        </Link>
      </section>
    )
  }

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)
  const date = formatDate(post.date, lang, { long: true })

  return (
    <>
      <JsonLd data={articleLd(post, `https://tujologistics.com/blog/${post.slug}`)} />

      <article>
        <div className="border-b border-line bg-app text-app-fg">
          <div className="container-site max-w-4xl py-16 lg:py-24">
            <Reveal>
              <Link to="/blog" className="label-caps hover:opacity-80">
                ← {L(ui.nav.blog)}
              </Link>
              <div className="mt-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-hint">
                <span>{L(post.category)}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.date}>{date}</time>
              </div>
              <h1 className="mt-5 text-[clamp(2rem,5vw,3.2rem)] font-black leading-[1.02] tracking-[-0.03em]">
                {L(post.title)}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">{L(post.excerpt)}</p>
            </Reveal>
          </div>
        </div>

        <div className="container-site max-w-4xl py-14 lg:py-20">
          <Reveal>
            <img
              src={post.image}
              alt={L(post.title)}
              loading="lazy"
              decoding="async"
              width={1400}
              height={933}
              className="aspect-[16/9] w-full object-cover img-gray"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="prose-tujo mt-12">
              {L(post.body).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      <section className="border-t border-line bg-cloud text-app-fg">
        <div className="container-site py-16">
          <div className="label-caps mb-8">{L({ es: 'Sigue leyendo', en: 'Keep reading' })}</div>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card bg-app p-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-hint">{L(p.category)}</div>
                <h3 className="mt-2 text-base font-black leading-snug tracking-tight">{L(p.title)}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={{ es: '¿Quieres hablar con el equipo?', en: 'Want to talk to the team?' }}
        subtitle={{
          es: 'Estamos en Bogotá y operamos en todo el ecosistema Tujo Logistics.',
          en: 'We are in Bogotá and operate across the Tujo Logistics ecosystem.',
        }}
      />
    </>
  )
}
