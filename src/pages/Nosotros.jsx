import HeroSection from '../components/HeroSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import SplitSection from '../components/SplitSection'
import CTABanner from '../components/CTABanner'
import usePageTitle from '../hooks/usePageTitle'
import { useLang } from '../i18n/LangContext'
import { images } from '../data/units'

const values = [
  {
    title: { es: 'Criterio sobre protocolo ciego', en: 'Judgment over blind protocol' },
    text: {
      es: 'El protocolo importa, pero en la calle manda el criterio. Formamos equipos que deciden cerca del punto crítico.',
      en: 'Protocol matters, but on the street judgment wins. We train teams that decide at the critical point.',
    },
  },
  {
    title: { es: 'Transparencia operativa', en: 'Operational transparency' },
    text: {
      es: 'Datos visibles para todas las partes: rutas, temperaturas, inventarios y tarifas sin cajas negras.',
      en: 'Data visible to every party: routes, temperatures, inventory and fares with no black boxes.',
    },
  },
  {
    title: { es: 'Diseño para el caos', en: 'Designed for chaos' },
    text: {
      es: 'No optimizamos para el escenario ideal: diseñamos para el día real, con sus rupturas y sus picos.',
      en: 'We do not optimize for the ideal scenario: we design for the real day, with its breaks and peaks.',
    },
  },
  {
    title: { es: 'Escala con propósito', en: 'Scale with purpose' },
    text: {
      es: 'Crecemos cuando el sistema aguanta. La estabilidad precede a la expansión.',
      en: 'We grow when the system holds. Stability comes before expansion.',
    },
  },
]

const timeline = [
  {
    year: '2019',
    title: { es: 'Origen en Bogotá', en: 'Born in Bogotá' },
    text: {
      es: 'Primeras operaciones de coordinación logística para cocinas y microbodegas en la ciudad.',
      en: 'First logistics coordination operations for kitchens and micro-warehouses in the city.',
    },
  },
  {
    year: '2021',
    title: { es: 'MEHD Tujo', en: 'MEHD Tujo' },
    text: {
      es: 'Nace la vertical de alimentos con cadena de frío instrumentada y abastecimiento de cocinas.',
      en: 'The food vertical launches with instrumented cold chain and kitchen supply.',
    },
  },
  {
    year: '2023',
    title: { es: 'Wholesales + Go', en: 'Wholesales + Go' },
    text: {
      es: 'Expandimos a distribución mayorista y lanzamos Tujo Go, el sistema de trueque entre usuarios.',
      en: 'We expand into wholesale distribution and launch Tujo Go, the peer barter system.',
    },
  },
  {
    year: '2025',
    title: { es: 'Food + International', en: 'Food + International' },
    text: {
      es: 'Segunda app enfocada en restaurantes y el escalón premium de transporte internacional.',
      en: 'Second app focused on restaurants plus the premium international freight tier.',
    },
  },
]

export default function Nosotros() {
  const { L } = useLang()
  usePageTitle(L({ es: 'Nosotros', en: 'About' }))

  return (
    <>
      <HeroSection
        image={images.team}
        label={{ es: 'Nosotros', en: 'About' }}
        title={{
          es: 'Organización compleja para realidades complejas.',
          en: 'Complex organization for complex realities.',
        }}
        subtitle={{
          es: 'SomosTujo Logistics: una casa de sistemas logísticos nacida en Bogotá, construida para entornos donde el caos es la norma y no la excepción.',
          en: 'We are Tujo Logistics: a logistics systems house born in Bogotá, built for environments where chaos is the norm, not the exception.',
        }}
      />

      <SplitSection
        label={{ es: 'Historia', en: 'Story' }}
        title={{ es: 'De la necesidad al sistema', en: 'From need to system' }}
        body={{
          es: 'Empezamos coordinando lo que otros daban por perdido: entregas que se rompían en la última milla, cocinas sin insumos puntuales, bodegas con inventarios opacos. Cada frustración se convirtió en un proceso; cada proceso, en una unidad de negocio.',
          en: 'We started by coordinating what others wrote off: deliveries breaking in the last mile, kitchens without on-time ingredients, warehouses with opaque inventory. Every frustration became a process; every process, a business unit.',
        }}
        bullets={[
          {
            title: { es: 'Ciencia aplicada', en: 'Applied science' },
            text: {
              es: 'Modelos de ruteo, control de cadena de frío y análisis de mercado continuo.',
              en: 'Routing models, cold chain control and continuous market analysis.',
            },
          },
          {
            title: { es: 'Tecnología propia', en: 'Own technology' },
            text: {
              es: 'Apps y tableros que hacen visible la operación en tiempo real.',
              en: 'Apps and dashboards that make operations visible in real time.',
            },
          },
          {
            title: { es: 'Gente en la calle', en: 'People on the street' },
            text: {
              es: 'Operadores, couriers y coordinadores con poder de decisión.',
              en: 'Operators, couriers and coordinators with decision power.',
            },
          },
        ]}
        image={images.city}
      />

      <section className="bg-ink text-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel light>{L({ es: 'Valores', en: 'Values' })}</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(1.8rem,4.5vw,2.8rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({ es: 'Lo que no negociamos', en: 'What we do not negotiate' })}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-paper/15 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full bg-ink p-8 lg:p-10">
                  <h3 className="text-base font-black tracking-tight">{L(v.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{L(v.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel>{L({ es: 'Trayectoria', en: 'Timeline' })}</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(1.8rem,4.5vw,2.8rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({ es: 'Hitos del sistema', en: 'System milestones' })}
            </h2>
          </Reveal>
          <div className="mt-14 space-y-0 border-l border-fog pl-8 sm:pl-12">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full border-2 border-ink bg-paper sm:-left-[57px]" />
                  <div className="text-[11px] font-black tracking-[0.24em] text-mist">{t.year}</div>
                  <h3 className="mt-2 text-lg font-black tracking-tight">{L(t.title)}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slatey">{L(t.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={{ es: '¿Quieres construir con nosotros?', en: 'Want to build with us?' }}
        subtitle={{
          es: 'Buscamos operadores, aliados y mentes que entiendan la logística como un sistema vivo.',
          en: 'We look for operators, partners and minds that treat logistics as a living system.',
        }}
        to="/careers"
        ctaLabel={{ es: 'Ver vacantes', en: 'See openings' }}
      />
    </>
  )
}
