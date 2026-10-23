import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import usePageMeta from '../hooks/usePageMeta'
import { ui, useLang } from '../i18n/LangContext'
import { partners } from '../data/content'
import { images } from '../data/units'

function partnerUnitId(p) {
  const u = Lsafe(p.unit)
  if (u.includes('Food') || u.includes('MEHD')) return 'mehd'
  if (u.includes('Wholesale')) return 'wholesales'
  if (u.includes('Go')) return 'go'
  if (u.includes('International')) return 'intl'
  return 'general'
}

function Lsafe(obj) {
  return typeof obj === 'string' ? obj : `${obj?.es || ''} ${obj?.en || ''}`
}

export default function Aliados() {
  const { L } = useLang()
  usePageMeta({
    title: L({ es: 'Aliados y proveedores', en: 'Partners & suppliers' }),
    description: L({
      es: 'Únete a Tujo Logistics como restaurante, proveedor mayorista, transportador u operador internacional.',
      en: 'Join Tujo Logistics as a restaurant, wholesale supplier, carrier or international operator.',
    }),
    path: '/aliados',
  })

  return (
    <>
      <HeroSection
        image={images.boxes}
        label={{ es: 'Aliados', en: 'Partners' }}
        title={{ es: 'Crece con el ecosistema Tujo.', en: 'Grow with the Tujo ecosystem.' }}
        subtitle={{
          es: 'Restaurantes, proveedores mayoristas, transportadores independientes y operadores internacionales: la red se construye contigo.',
          en: 'Restaurants, wholesale suppliers, independent carriers and international operators: the network is built with you.',
        }}
      />

      <section className="bg-app">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel>{L({ es: 'Perfiles', en: 'Profiles' })}</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({ es: 'Cuatro formas de entrar', en: 'Four ways in' })}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {partners.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card flex h-full flex-col p-8">
                  <div className="text-[11px] font-black uppercase tracking-[0.2em] text-hint">{L(p.unit)}</div>
                  <h3 className="mt-4 text-lg font-black tracking-tight">{L(p.name)}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{L(p.description)}</p>
                  <Link
                    to={`/contacto?unit=${partnerUnitId(p)}`}
                    className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em]"
                  >
                    {L(ui.common.applyJoin)}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel>{L({ es: 'Proceso de afiliación', en: 'Onboarding process' })}</SectionLabel>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                n: '01',
                t: { es: 'Postulación', en: 'Application' },
                d: {
                  es: 'Completas el formulario indicando unidad e interés comercial.',
                  en: 'You complete the form indicating unit and commercial interest.',
                },
              },
              {
                n: '02',
                t: { es: 'Evaluación', en: 'Review' },
                d: {
                  es: 'Validamos perfil, capacidad operativa y cumplimiento.',
                  en: 'We validate profile, operating capacity and compliance.',
                },
              },
              {
                n: '03',
                t: { es: 'Integración', en: 'Integration' },
                d: {
                  es: 'Sesión de onboarding, capacitación y primeros pedidos.',
                  en: 'Onboarding session, training and first orders.',
                },
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="border-t-2 border-ink pt-6">
                  <div className="text-[11px] font-black tracking-[0.24em] text-hint">{s.n}</div>
                  <h3 className="mt-4 text-base font-black tracking-tight">{L(s.t)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{L(s.d)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={{ es: '¿Listo para integrarte?', en: 'Ready to integrate?' }}
        subtitle={{
          es: 'Cuéntanos qué ofreces y qué unidad encaja mejor con tu operación.',
          en: 'Tell us what you offer and which unit fits your operation best.',
        }}
      />
    </>
  )
}
