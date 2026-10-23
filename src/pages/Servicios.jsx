import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import usePageTitle from '../hooks/usePageTitle'
import { useLang } from '../i18n/LangContext'
import { images, units } from '../data/units'

const capabilities = [
  {
    title: { es: 'Diseño de red y rutas', en: 'Network & route design' },
    text: {
      es: 'Topología de bodegas, rutas primarias y secundarias, y buffers para absorber picos de demanda.',
      en: 'Warehouse topology, primary and secondary routes, and buffers to absorb demand peaks.',
    },
  },
  {
    title: { es: 'Control de temperatura', en: 'Temperature control' },
    text: {
      es: 'Instrumentación de cadena de frío con alertas en tránsito y protocolos de contingencia.',
      en: 'Cold chain instrumentation with in-transit alerts and contingency protocols.',
    },
  },
  {
    title: { es: 'Inventario y bodegas', en: 'Inventory & warehousing' },
    text: {
      es: 'Visibilidad de stock multi-ubicación, despacho programado y reconciliación continua.',
      en: 'Multi-location stock visibility, scheduled dispatch and continuous reconciliation.',
    },
  },
  {
    title: { es: 'Marketplace logístico', en: 'Logistics marketplace' },
    text: {
      es: 'Tarifas democráticas, calificación entre usuarios y reglas de intercambio ultra específicas.',
      en: 'Democratic fares, peer ratings and ultra-specific exchange rules.',
    },
  },
  {
    title: { es: 'Última milla urbana', en: 'Urban last mile' },
    text: {
      es: 'Operación con moto, carro y a pie, con seguimiento vivo y gestión de excepciones.',
      en: 'Motorcycle, car and foot operations with live tracking and exception handling.',
    },
  },
  {
    title: { es: 'Flete internacional', en: 'International freight' },
    text: {
      es: 'Coordinación puerto-aire-aduana con un solo punto de contacto premium.',
      en: 'Port–air–customs coordination with a single premium point of contact.',
    },
  },
]

const flow = [
  { n: '01', label: { es: 'Diagnóstico', en: 'Diagnosis' } },
  { n: '02', label: { es: 'Diseño del sistema', en: 'System design' } },
  { n: '03', label: { es: 'Piloto controlado', en: 'Controlled pilot' } },
  { n: '04', label: { es: 'Operación a escala', en: 'Scaled operation' } },
  { n: '05', label: { es: 'Mejora continua', en: 'Continuous improvement' } },
]

export default function Servicios() {
  const { L } = useLang()
  usePageTitle(L({ es: 'Servicios', en: 'Services' }))

  return (
    <>
      <HeroSection
        image={images.truck}
        label={{ es: 'Servicios', en: 'Services' }}
        title={{
          es: 'Capacidades logísticas integradas.',
          en: 'Integrated logistics capabilities.',
        }}
        subtitle={{
          es: 'No vendemos piezas sueltas: diseñamos el sistema completo y lo operamos a través de nuestras unidades especializadas.',
          en: 'We do not sell loose parts: we design the full system and operate it through our specialized units.',
        }}
        primaryCta={{ to: '/contacto', label: { es: 'Solicitar diagnóstico', en: 'Request diagnosis' } }}
      />

      <section className="bg-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel>{L({ es: 'Capacidades', en: 'Capabilities' })}</SectionLabel>
            <h2 className="max-w-3xl text-[clamp(1.8rem,4.5vw,2.8rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({
                es: 'Seis capacidades que se combinan según el desafío.',
                en: 'Six capabilities combined around each challenge.',
              })}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-fog bg-fog sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className="h-full bg-paper p-8">
                  <div className="text-[11px] font-black tracking-[0.24em] text-mist">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-5 text-base font-black tracking-tight">{L(c.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slatey">{L(c.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel>{L({ es: 'Metodología', en: 'Methodology' })}</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(1.8rem,4.5vw,2.8rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({ es: 'De diagnóstico a mejora continua', en: 'From diagnosis to continuous improvement' })}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {flow.map((f, i) => (
              <Reveal key={f.n} delay={i * 0.08}>
                <div className="relative h-full border border-ink bg-paper p-6">
                  <div className="text-[11px] font-black tracking-[0.24em]">{f.n}</div>
                  <div className="mt-4 text-sm font-bold tracking-tight">{L(f.label)}</div>
                  {i < flow.length - 1 && (
                    <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-ink lg:block" aria-hidden="true" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel light>{L({ es: 'Unidades operativas', en: 'Operating units' })}</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(1.8rem,4.5vw,2.8rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({
                es: 'Las capacidades viven en unidades concretas.',
                en: 'Capabilities live in concrete units.',
              })}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-paper/15 sm:grid-cols-2 lg:grid-cols-5">
            {units.map((u, i) => (
              <Reveal key={u.id} delay={i * 0.06}>
                <Link to={u.to} className="group flex h-full flex-col bg-ink p-6 transition-colors hover:bg-coal">
                  <span className="text-[10px] font-black tracking-[0.24em] text-mist">{u.index}</span>
                  <span className="mt-4 text-sm font-black uppercase tracking-[0.08em]">{L(u.name)}</span>
                  <span className="mt-2 text-[11px] uppercase tracking-[0.14em] text-mist">{L(u.tagline)}</span>
                  <span className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em]">
                    {L({ es: 'Explorar →', en: 'Explore →' })}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        dark={false}
        title={{ es: 'Diseñemos tu sistema logístico.', en: 'Let’s design your logistics system.' }}
        subtitle={{
          es: 'Agenda un diagnóstico con el equipo de Tujo Logistics en Bogotá.',
          en: 'Book a diagnosis with the Tujo Logistics team in Bogotá.',
        }}
      />
    </>
  )
}
