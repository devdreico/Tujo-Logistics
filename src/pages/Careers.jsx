import HeroSection from '../components/HeroSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import usePageTitle from '../hooks/usePageTitle'
import { useLang } from '../i18n/LangContext'
import { jobs } from '../data/content'
import { images } from '../data/units'

const culture = [
  {
    title: { es: 'Calle primero', en: 'Street first' },
    text: {
      es: 'Toda decisión se contrasta con la realidad operativa, no con el slide perfecto.',
      en: 'Every decision is tested against operational reality, not the perfect slide.',
    },
  },
  {
    title: { es: 'Datos con criterio', en: 'Data with judgment' },
    text: {
      es: 'Medimos todo lo que importa, pero sabemos cuándo el criterio humano manda.',
      en: 'We measure what matters, but know when human judgment rules.',
    },
  },
  {
    title: { es: 'Sistemas, no héroes', en: 'Systems, not heroes' },
    text: {
      es: 'Preferimos un proceso estable a una persona salvando el día cada vez.',
      en: 'We prefer a stable process over a person saving the day every time.',
    },
  },
]

export default function Careers() {
  const { L } = useLang()
  usePageTitle(L({ es: 'Trabaja con nosotros', en: 'Careers' }))

  return (
    <>
      <HeroSection
        image={images.team}
        label={{ es: 'Carreras', en: 'Careers' }}
        title={{ es: 'Construye sistemas que mueven ciudades.', en: 'Build systems that move cities.' }}
        subtitle={{
          es: 'Buscamos personas que entiendan la logística como un sistema vivo: operadores, ingenieros, coordinadores y mentes curiosas.',
          en: 'We look for people who treat logistics as a living system: operators, engineers, coordinators and curious minds.',
        }}
      />

      <section className="bg-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel>{L({ es: 'Cultura', en: 'Culture' })}</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({ es: 'Cómo trabajamos aquí', en: 'How we work here' })}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-fog bg-fog md:grid-cols-3">
            {culture.map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full bg-paper p-8">
                  <h3 className="text-base font-black tracking-tight">{L(c.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slatey">{L(c.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel light>{L({ es: 'Vacantes abiertas', en: 'Open roles' })}</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({ es: 'Únete al equipo', en: 'Join the team' })}
            </h2>
          </Reveal>
          <div className="mt-12 space-y-px bg-paper/15">
            {jobs.map((j, i) => (
              <Reveal key={j.id} delay={i * 0.07}>
                <div className="flex flex-col gap-6 bg-ink p-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="text-lg font-black tracking-tight">{L(j.title)}</h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-mist">
                      <span>{L(j.area)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{L(j.type)}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-mist">{L(j.description)}</p>
                  </div>
                  <a href="mailto:hola@tujologistics.com" className="btn-light shrink-0">
                    {L({ es: 'Postularme', en: 'Apply' })}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        dark={false}
        title={{ es: '¿No ves tu rol, pero encajas?', en: 'No role listed, but you fit?' }}
        subtitle={{
          es: 'Envía tu perfil espontáneo. Siempre hay espacio para mentes que aman la operación.',
          en: 'Send an open application. There is always room for minds that love operations.',
        }}
        ctaLabel={{ es: 'Postulación abierta', en: 'Open application' }}
      />
    </>
  )
}
