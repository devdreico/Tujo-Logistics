import HeroSection from '../components/HeroSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import AppMockup from '../components/AppMockup'
import SplitSection from '../components/SplitSection'
import CTABanner from '../components/CTABanner'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LangContext'
import { images } from '../data/units'

const strategies = [
  {
    title: { es: 'Restaurantes afiliados', en: 'Affiliated restaurants' },
    text: {
      es: 'Red curada de cocinas con estándares de empaque, tiempos de entrega y calidad mínimos garantizados.',
      en: 'Curated kitchen network with guaranteed minimum standards for packaging, delivery times and quality.',
    },
  },
  {
    title: { es: 'Densidad local', en: 'Local density' },
    text: {
      es: 'Rutas agrupadas por zona para maximizar entregas por hora sin castigar la temperatura del plato.',
      en: 'Routes grouped by zone to maximize hourly deliveries without hurting dish temperature.',
    },
  },
  {
    title: { es: 'Picos controlados', en: 'Controlled peaks' },
    text: {
      es: 'Capacidad flexible para almuerzos y cenas: más couriers cuando la ciudad come, no después.',
      en: 'Flexible capacity for lunch and dinner: more couriers while the city eats, not after.',
    },
  },
  {
    title: { es: 'Experiencia en la app', en: 'In-app experience' },
    text: {
      es: 'Seguimiento vivo, recomendaciones específicas y calificación mutua entre restaurante y cliente.',
      en: 'Live tracking, specific recommendations and mutual ratings between restaurant and customer.',
    },
  },
]

export default function TujoFood() {
  const { L } = useLang()
  usePageMeta({ title: 'Tujo Food', description: 'App de comida con restaurantes afiliados y logística local maximizada.', path: '/tujo-food' })

  return (
    <>
      <HeroSection
        dark
        image={images.food}
        label={{ es: 'Unidad 04 · App de comida', en: 'Unit 04 · Food app' }}
        title="Tujo Food"
        subtitle={{
          es: 'La segunda app de Tujo Logistics, centrada únicamente en el apartado de comidas. Restaurantes afiliados, procesos logísticos que mejoran y maximizan la distribución local, y la misma estabilidad del ecosistema Tujo.',
          en: 'Tujo Logistics’ second app, focused solely on food. Affiliated restaurants, logistics processes that improve and maximize local delivery, and the stability of the Tujo ecosystem.',
        }}
        primaryCta={{ to: '/contacto', label: { es: 'Afiliar restaurante', en: 'Affiliate restaurant' } }}
      />

      <section className="bg-app">
        <div className="container-site grid items-center gap-14 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal delay={0.08} className="lg:order-1">
            <AppMockup
              variant="food"
              title={{ es: 'Pedido cercano', en: 'Nearby order' }}
              badge={{ es: 'Repartidor en camino', en: 'Courier on the way' }}
              rows={[
                { k: { es: 'Restaurante', en: 'Restaurant' }, v: { es: 'Cocina Local #12', en: 'Local Kitchen #12' } },
                { k: { es: 'ETA', en: 'ETA' }, v: { es: '18 min', en: '18 min' } },
                { k: { es: 'Distancia', en: 'Distance' }, v: { es: '2.1 km', en: '2.1 km' } },
                { k: { es: 'Rating', en: 'Rating' }, v: { es: '★ 4.8', en: '★ 4.8' } },
              ]}
              footerNote={{
                es: 'Logística local maximizada: rutas agrupadas y picos cubiertos.',
                en: 'Maximized local logistics: grouped routes and covered peaks.',
              }}
            />
          </Reveal>
          <Reveal className="lg:order-2">
            <SectionLabel>{L({ es: 'Estrategia', en: 'Strategy' })}</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({
                es: 'Comida que llega como salió de la cocina.',
                en: 'Food that arrives the way it left the kitchen.',
              })}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {L({
                es: 'Tujo Food aplica estrategias diferentes a Tujo Go porque la comida exige otra logística: ventanas más cortas, packaging sensible y horarios que se alinean con el hambre de la ciudad, no con el capricho del algoritmo.',
                en: 'Tujo Food applies different strategies than Tujo Go because food demands different logistics: shorter windows, sensitive packaging and schedules that align with the city’s hunger, not an algorithm’s whim.',
              })}
            </p>
            <div className="mt-8 grid gap-4">
              {strategies.map((s, i) => (
                <div key={i} className="border-l-2 border-ink pl-5">
                  <div className="text-sm font-black tracking-tight">{L(s.title)}</div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{L(s.text)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SplitSection
        dark
        reverse
        label={{ es: 'Restaurantes', en: 'Restaurants' }}
        title={{ es: 'Afilia tu cocina', en: 'Affiliate your kitchen' }}
        body={{
          es: 'Entra a la red de Tujo Food y recibe pedidos con logística maximizada: visibilidad en la app, rutas de alta densidad y soporte de proceso desde la cocina hasta la puerta del cliente.',
          en: 'Join the Tujo Food network and receive orders with maximized logistics: app visibility, high-density routes and process support from kitchen to customer door.',
        }}
        bullets={[
          {
            title: { es: 'Onboarding guiado', en: 'Guided onboarding' },
            text: { es: 'Menú, tiempos y empaque estandarizados.', en: 'Menu, timing and packaging standardized.' },
          },
          {
            title: { es: 'Panel de pedidos', en: 'Order panel' },
            text: { es: 'Control claro de picos y capacidad.', en: 'Clear control of peaks and capacity.' },
          },
        ]}
        image={images.food}
      />

      <CTABanner
        dark={false}
        title={{ es: 'Tu restaurante merece logística a su altura.', en: 'Your restaurant deserves logistics to match.' }}
        subtitle={{
          es: 'Únete a Tujo Food y lleva tu cocina a más mesas con estabilidad operativa.',
          en: 'Join Tujo Food and take your kitchen to more tables with operational stability.',
        }}
        to="/aliados"
        ctaLabel={{ es: 'Quiero afiliarme', en: 'I want to join' }}
      />
    </>
  )
}
