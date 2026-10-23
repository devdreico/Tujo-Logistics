import HeroSection from '../components/HeroSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import SplitSection from '../components/SplitSection'
import CTABanner from '../components/CTABanner'
import usePageTitle from '../hooks/usePageTitle'
import { useLang } from '../i18n/LangContext'
import { images } from '../data/units'

const modes = [
  {
    title: { es: 'Puerto', en: 'Port' },
    text: {
      es: 'Carga marítima FCL y LCL con consolidación, documentación y seguimiento de puerto a puerto.',
      en: 'FCL and LCL sea freight with consolidation, documentation and port-to-port tracking.',
    },
    image: images.port,
  },
  {
    title: { es: 'Aire', en: 'Air' },
    text: {
      es: 'Envíos prioritarios con tiempos controlados para mercancía de alto valor o alta urgencia.',
      en: 'Priority shipments with controlled timelines for high-value or high-urgency goods.',
    },
    image: images.plane,
  },
]

export default function International() {
  const { L } = useLang()
  usePageTitle('Tujo International Service')

  return (
    <>
      <HeroSection
        dark
        tall
        image={images.port}
        label={{ es: 'Unidad 05 · Premium', en: 'Unit 05 · Premium' }}
        title={{
          es: 'Tujo International Service',
          en: 'Tujo International Service',
        }}
        subtitle={{
          es: 'El escalón final: transporte de mercancía internacional propio y premium. Puertos, aviones, aduanas y logística global — todo en un solo departamento.',
          en: 'The final tier: own, premium international freight. Ports, air cargo, customs and global logistics — all in one department.',
        }}
        primaryCta={{ to: '/contacto', label: { es: 'Cotizar flete', en: 'Quote freight' } }}
      />

      <section className="bg-paper">
        <div className="container-site grid gap-8 py-20 lg:grid-cols-2 lg:py-28">
          {modes.map((m, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="group h-full border border-fog">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={m.image}
                    alt=""
                    className="h-full w-full object-cover img-gray transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <h3 className="absolute bottom-5 left-6 text-2xl font-black uppercase tracking-[0.06em] text-paper">
                    {L(m.title)}
                  </h3>
                </div>
                <p className="p-6 text-sm leading-relaxed text-slatey">{L(m.text)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <SplitSection
        dark
        label={{ es: 'Servicio premium', en: 'Premium service' }}
        title={{ es: 'Un solo interlocutor global', en: 'A single global counterpart' }}
        body={{
          es: 'Tujo International Service concentra en un solo departamento lo que normalmente exige cinco: agente de carga, consolidador, agencia aduanera, transportista terrestre y follow-up. Un punto de contacto, una factura, una narrativa clara del estado de tu carga.',
          en: 'Tujo International Service concentrates in one department what usually takes five: freight forwarder, consolidator, customs broker, ground carrier and follow-up. One contact, one invoice, one clear narrative of your cargo status.',
        }}
        bullets={[
          {
            title: { es: 'Aduanas', en: 'Customs' },
            text: {
              es: 'Preparación documental y acompañamiento en despacho.',
              en: 'Document preparation and clearance support.',
            },
          },
          {
            title: { es: 'Seguimiento', en: 'Tracking' },
            text: {
              es: 'Visibilidad de hitos marítimos y aéreos en un tablero.',
              en: 'Sea and air milestone visibility on one dashboard.',
            },
          },
          {
            title: { es: 'Seguro y handleo', en: 'Insurance & handling' },
            text: {
              es: 'Protección de mercancía de alto valor en cada transbordo.',
              en: 'High-value cargo protection at every transfer.',
            },
          },
        ]}
        image={images.plane}
        reverse
      />

      <section className="bg-cloud">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel>{L({ es: 'Alcance', en: 'Coverage' })}</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({
                es: 'Desde Bogotá hacia los principales corredores comerciales.',
                en: 'From Bogotá to the main trade corridors.',
              })}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {[
              { r: { es: 'Norteamérica', en: 'North America' }, d: { es: 'Corredores aéreos prioritarios.', en: 'Priority air corridors.' } },
              { r: { es: 'Europa', en: 'Europe' }, d: { es: 'Marítimo consolidado y aéreo.', en: 'Consolidated sea and air.' } },
              { r: { es: 'Asia-Pacífico', en: 'Asia-Pacific' }, d: { es: 'Importación con handleo aduanero.', en: 'Import with customs handling.' } },
              { r: { es: 'Latinoamérica', en: 'Latin America' }, d: { es: 'Traslados regionales terrestres.', en: 'Regional ground transfers.' } },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="h-full bg-cloud p-7">
                  <div className="text-base font-black uppercase tracking-[0.08em]">{L(c.r)}</div>
                  <p className="mt-3 text-sm leading-relaxed text-slatey">{L(c.d)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={{ es: 'Tu carga internacional, en manos premium.', en: 'Your international cargo, in premium hands.' }}
        subtitle={{
          es: 'Habla con el departamento de International Service y recibe una propuesta a medida.',
          en: 'Talk to the International Service desk and get a tailored proposal.',
        }}
      />
    </>
  )
}
