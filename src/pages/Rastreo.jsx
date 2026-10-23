import HeroSection from '../components/HeroSection'
import TrackingDemo from '../components/TrackingDemo'
import Reveal, { SectionLabel } from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LangContext'
import { images } from '../data/units'

export default function Rastreo() {
  const { L } = useLang()
  usePageMeta({
    title: L({ es: 'Rastreo de envíos', en: 'Shipment tracking' }),
    description: L({
      es: 'Demo de rastreo de envíos Tujo Logistics: estados del paquete en tiempo simulado.',
      en: 'Tujo Logistics shipment tracking demo: simulated package states.',
    }),
    path: '/rastreo',
  })

  return (
    <>
      <HeroSection
        image={images.truck}
        label={{ es: 'Rastreo', en: 'Tracking' }}
        title={{ es: 'Sigue tu envío.', en: 'Track your shipment.' }}
        subtitle={{
          es: 'Demo interactiva del seguimiento de estados de Tujo Logistics. Ingresa un código y observa la simulación del trayecto.',
          en: 'Interactive demo of Tujo Logistics shipment states. Enter a code and watch the simulated journey.',
        }}
      />

      <section className="bg-app">
        <div className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-7">
            <TrackingDemo />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <SectionLabel>{L({ es: 'Cómo leer el rastreo', en: 'How to read tracking' })}</SectionLabel>
            <h2 className="text-2xl font-black leading-tight tracking-tight">
              {L({
                es: 'Cuatro estados. Cero ambigüedad.',
                en: 'Four states. Zero ambiguity.',
              })}
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  t: { es: 'Envío registrado', en: 'Shipment registered' },
                  d: {
                    es: 'El paquete entró al sistema con origen, destino y restricciones declaradas.',
                    en: 'The package entered the system with origin, destination and declared restrictions.',
                  },
                },
                {
                  t: { es: 'Recolección confirmada', en: 'Pickup confirmed' },
                  d: {
                    es: 'El transportista aceptó la oferta y tomó la mercancía.',
                    en: 'The carrier accepted the offer and took the goods.',
                  },
                },
                {
                  t: { es: 'En tránsito', en: 'In transit' },
                  d: {
                    es: 'La unidad se mueve por la ruta planificada con seguimiento vivo.',
                    en: 'The unit moves along the planned route with live tracking.',
                  },
                },
                {
                  t: { es: 'Entregado', en: 'Delivered' },
                  d: {
                    es: 'Cierre con evidencia y calificación disponible para ambas partes.',
                    en: 'Close-out with evidence and ratings available to both parties.',
                  },
                },
              ].map((s, i) => (
                <div key={i} className="border-t border-line pt-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-app-fg text-[10px] font-bold text-app">
                      {i + 1}
                    </span>
                    <span className="text-sm font-black tracking-tight">{L(s.t)}</span>
                  </div>
                  <p className="mt-2 pl-9 text-sm leading-relaxed text-muted">{L(s.d)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        dark={false}
        title={{ es: '¿Necesitas rastreo operativo real?', en: 'Need real operational tracking?' }}
        subtitle={{
          es: 'El seguimiento en vivo está en las apps de cada unidad: Tujo Go, Tujo Food y las operaciones de MEHD y Wholesales.',
          en: 'Live tracking lives in each unit’s apps: Tujo Go, Tujo Food and MEHD & Wholesales operations.',
        }}
        to="/servicios"
        ctaLabel={{ es: 'Ver unidades', en: 'See units' }}
      />
    </>
  )
}
