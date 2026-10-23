import HeroSection from '../components/HeroSection'
import SplitSection from '../components/SplitSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import StatsBar from '../components/StatsBar'
import CTABanner from '../components/CTABanner'
import usePageTitle from '../hooks/usePageTitle'
import { useLang } from '../i18n/LangContext'
import { images } from '../data/units'

const services = [
  {
    title: { es: 'Cadena de frío con seguimiento', en: 'Monitored cold chain' },
    text: {
      es: 'Sensores de temperatura y humedad que viajan con el lote y disparan alertas accionables en tránsito.',
      en: 'Temperature and humidity sensors that travel with the batch and trigger actionable in-transit alerts.',
    },
  },
  {
    title: { es: 'Abastecimiento de cocinas', en: 'Kitchen supply' },
    text: {
      es: 'Programación de despachos alineada al servicio de cada cocina: ventanas cortas, frescura verificada.',
      en: 'Dispatch scheduling aligned to each kitchen’s service: short windows, verified freshness.',
    },
  },
  {
    title: { es: 'Distribución de insumos', en: 'Ingredient distribution' },
    text: {
      es: 'Rutas dedicadas para lácteos, carnes, vegetales y productos de mayor sensibilidad térmica.',
      en: 'Dedicated routes for dairy, meat, vegetables and thermally sensitive products.',
    },
  },
  {
    title: { es: 'Cumplimiento sanitario', en: 'Health compliance' },
    text: {
      es: 'Trazabilidad documental y protocolos alineados a normativa alimentaria colombiana.',
      en: 'Documentary traceability and protocols aligned with Colombian food regulation.',
    },
  },
]

export default function Mehdtujo() {
  const { L } = useLang()
  usePageTitle('MEHD Tujo')

  return (
    <>
      <HeroSection
        dark
        image={images.produce}
        label={{ es: 'Unidad 01 · Alimentos', en: 'Unit 01 · Food' }}
        title="MEHD Tujo"
        subtitle={{
          es: 'Expertise en logística de comida: seguimiento de cadenas de frío, procesos de abastecimiento de cocinas y distribución de alimentos de punta a punta.',
          en: 'Food logistics expertise: cold chain tracking, kitchen supply processes and end-to-end food distribution.',
        }}
        primaryCta={{ to: '/contacto', label: { es: 'Cotizar operación', en: 'Request a quote' } }}
      />

      <StatsBar
        items={[
          { value: 2, suffix: '°C', label: { es: 'Ventana fría objetivo', en: 'Target cold window' } },
          { value: 100, suffix: '%', label: { es: 'Lotes trazables', en: 'Traceable batches' } },
          { value: 24, suffix: '/7', label: { es: 'Monitoreo en tránsito', en: 'In-transit monitoring' } },
          { value: 0, label: { es: 'Tolerancia a rupturas', en: 'Tolerance for breaks' } },
        ]}
      />

      <SplitSection
        label={{ es: 'Enfoque', en: 'Approach' }}
        title={{ es: 'La comida no perdona la improvisación', en: 'Food does not forgive improvisation' }}
        body={{
          es: 'MEHD Tujo existe porque la ruptura térmica casi nunca ocurre donde todos la buscan: ocurre en las transiciones. Cargamos, esperamos, cruzamos la ciudad y descargamos — y en cada salto, la temperatura puede traicionar el lote. Instrumentamos esos saltos.',
          en: 'MEHD Tujo exists because thermal breaks almost never happen where everyone looks for them: they happen during transitions. We load, wait, cross the city and unload — and at every hop, temperature can betray the batch. We instrument those hops.',
        }}
        image={images.food}
      />

      <section className="bg-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel>{L({ es: 'Servicios', en: 'Services' })}</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({ es: 'Lo que operamos', en: 'What we operate' })}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-fog bg-fog sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="h-full bg-paper p-8">
                  <h3 className="text-base font-black tracking-tight">{L(s.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slatey">{L(s.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <div className="max-w-3xl">
              <SectionLabel light>{L({ es: 'Proceso', en: 'Process' })}</SectionLabel>
              <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
                {L({
                  es: 'Del proveedor a la cocina sin rupturas.',
                  en: 'From supplier to kitchen without breaks.',
                })}
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: '01',
                t: { es: 'Recepción', en: 'Receiving' },
                d: {
                  es: 'Verificación térmica y documental del lote en origen.',
                  en: 'Thermal and documentary batch verification at origin.',
                },
              },
              {
                n: '02',
                t: { es: 'Consolidación', en: 'Consolidation' },
                d: {
                  es: 'Armado de rutas por zona y sensibilidad del producto.',
                  en: 'Route building by zone and product sensitivity.',
                },
              },
              {
                n: '03',
                t: { es: 'Tránsito', en: 'Transit' },
                d: {
                  es: 'Monitoreo continuo y alertas si el sensor se desvía.',
                  en: 'Continuous monitoring and alerts if the sensor drifts.',
                },
              },
              {
                n: '04',
                t: { es: 'Entrega', en: 'Delivery' },
                d: {
                  es: 'Cierre en la cocina con evidencia y firma digital.',
                  en: 'Close-out at the kitchen with evidence and digital sign-off.',
                },
              },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="border-t border-paper/30 pt-6">
                  <div className="text-[11px] font-black tracking-[0.24em] text-mist">{p.n}</div>
                  <h3 className="mt-4 text-base font-black tracking-tight">{L(p.t)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{L(p.d)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={{ es: '¿Tu cocina necesita suministro que no falle?', en: 'Does your kitchen need supply that never fails?' }}
        subtitle={{
          es: 'Diseñamos la operación de frío y abastecimiento a la medida de tu servicio.',
          en: 'We design cold-chain and supply operations around your service.',
        }}
      />
    </>
  )
}
