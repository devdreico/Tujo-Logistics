import HeroSection from '../components/HeroSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import AppMockup from '../components/AppMockup'
import RateSimulator from '../components/RateSimulator'
import CTABanner from '../components/CTABanner'
import usePageTitle from '../hooks/usePageTitle'
import { useLang } from '../i18n/LangContext'
import { images } from '../data/units'

const features = [
  {
    title: { es: 'Subasta entre usuarios', en: 'User-to-user auction' },
    text: {
      es: 'Publica el envío o la recolección; los transportistas ofertan y tú eliges con información completa.',
      en: 'Post the send or pickup; carriers bid and you choose with full information.',
    },
  },
  {
    title: { es: 'Trueque democratizado', en: 'Democratized barter' },
    text: {
      es: 'Intercambia mercancías de distintos rangos de precio con reglas claras y recomendaciones ultra específicas.',
      en: 'Exchange goods across price ranges with clear rules and ultra-specific recommendations.',
    },
  },
  {
    title: { es: 'Tarifa mínima justa', en: 'Fair minimum fare' },
    text: {
      es: 'Cuota mínima por kilómetro nacida del debate de usuarios y del análisis de mercado de Tujo.',
      en: 'Minimum fare per kilometer born from user debate and Tujo’s market analysis.',
    },
  },
  {
    title: { es: 'Calificación entre pares', en: 'Peer ratings' },
    text: {
      es: 'Sistema de calificación y clasificación que hace confiable el intercambio entre desconocidos.',
      en: 'Rating and classification system that makes stranger-to-stranger exchange trustworthy.',
    },
  },
]

export default function TujoGo() {
  const { L } = useLang()
  usePageTitle('Tujo Go')

  return (
    <>
      <HeroSection
        dark
        image={images.moto}
        label={{ es: 'Unidad 03 · App', en: 'Unit 03 · App' }}
        title="Tujo Go"
        subtitle={{
          es: 'Sistema de servicios de envío y recolección de mercancías de diferentes rangos de precio, al estilo subasta entre usuarios. Democratizamos el trueque con reglas claras y tarifas mínimas justas.',
          en: 'Send & collect service system for goods across price ranges, auction-style between users. We democratize barter with clear rules and fair minimum fares.',
        }}
        primaryCta={{ to: '/rastreo', label: { es: 'Probar rastreo', en: 'Try tracking' } }}
      />

      <section className="bg-paper">
        <div className="container-site grid items-center gap-14 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal>
            <SectionLabel>{L({ es: 'La app', en: 'The app' })}</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({
                es: 'Una sola app para la logística natural de la sociedad.',
                en: 'One app for society’s natural logistics.',
              })}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slatey">
              {L({
                es: 'Tujo Go delimita restricciones y recomendaciones ultra específicas para cada intercambio: qué se puede mover, cómo se protege, quién califica a quién y cómo se resuelve un desacuerdo. Estabilidad donde antes había improvisación.',
                en: 'Tujo Go sets ultra-specific restrictions and recommendations for each exchange: what can move, how it is protected, who rates whom and how disputes are resolved. Stability where there used to be improvisation.',
              })}
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <li key={i} className="border border-fog p-5">
                  <div className="text-sm font-black tracking-tight">{L(f.title)}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slatey">{L(f.text)}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <AppMockup
              variant="go"
              title={{ es: 'Envío en curso', en: 'Shipment in progress' }}
              badge={{ es: 'Subasta abierta', en: 'Auction open' }}
              rows={[
                { k: { es: 'Ruta', en: 'Route' }, v: { es: 'Chapinero → Usaquén', en: 'Chapinero → Usaquén' } },
                { k: { es: 'Medio', en: 'Mode' }, v: { es: 'Moto', en: 'Motorcycle' } },
                { k: { es: 'Peso', en: 'Weight' }, v: { es: '1.8 kg', en: '1.8 kg' } },
                { k: { es: 'Oferta', en: 'Bid' }, v: { es: '$12.400 COP', en: '$12,400 COP' } },
                { k: { es: 'Rating', en: 'Rating' }, v: { es: '★ 4.9', en: '★ 4.9' } },
              ]}
              footerNote={{
                es: 'La tarifa final la acuerdan las partes sobre la cuota mínima por km.',
                en: 'The final fare is agreed in-app on top of the per-km minimum.',
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel light>{L({ es: 'Tarifas', en: 'Fares' })}</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({
                es: 'La cuota mínima nace del debate, no de una tabla cerrada.',
                en: 'The minimum quota is born from debate, not a closed table.',
              })}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist">
              {L({
                es: 'Los usuarios argumentan y median la cuota mínima por kilómetro recorrido en moto, carro o a pie. Paquetes pequeños de menos de 2.5 kg mantienen tarifas mínimas según el medio de transporte. Simula aquí:',
                en: 'Users argue and mediate the minimum fare per kilometer by motorcycle, car or on foot. Small packages under 2.5 kg keep mode-based minimum fares. Simulate here:',
              })}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12">
              <RateSimulator />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        dark={false}
        title={{ es: 'Mueve lo tuyo con Tujo Go.', en: 'Move your things with Tujo Go.' }}
        subtitle={{
          es: 'Descarga la app, publica tu primer envío o recolección y únete a la logística entre usuarios.',
          en: 'Download the app, post your first send or pickup and join peer logistics.',
        }}
        to="/contacto"
        ctaLabel={{ es: 'Quiero acceso', en: 'Get access' }}
      />
    </>
  )
}
