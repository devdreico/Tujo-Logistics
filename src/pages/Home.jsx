import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import StatsBar from '../components/StatsBar'
import UnitCard from '../components/UnitCard'
import CTABanner from '../components/CTABanner'
import usePageTitle from '../hooks/usePageTitle'
import { useLang } from '../i18n/LangContext'
import { images, units } from '../data/units'

const pillars = [
  {
    n: '01',
    title: { es: 'Sistemas de organización', en: 'Organization systems' },
    text: {
      es: 'Estrategias complejas diseñadas para entornos caóticos reales: rutas, buffers, reglas y criterio humano en la última milla.',
      en: 'Complex strategies built for real chaotic environments: routes, buffers, rules and human judgment in the last mile.',
    },
  },
  {
    n: '02',
    title: { es: 'IA, ciencia y tecnología', en: 'AI, science & technology' },
    text: {
      es: 'Impulsamos cada proceso con datos en tránsito, modelos de decisión y sensores que convierten el desorden en señal.',
      en: 'We power every process with in-transit data, decision models and sensors that turn disorder into signal.',
    },
  },
  {
    n: '03',
    title: { es: 'Procesos hacia toda la logística', en: 'Processes across all logistics' },
    text: {
      es: 'Desde alimentos y bodegas hasta trueque entre usuarios y transporte internacional premium, en un solo ecosistema.',
      en: 'From food and warehouses to peer barter and premium international freight, in a single ecosystem.',
    },
  },
]

export default function Home() {
  const { L } = useLang()
  usePageTitle(null)

  return (
    <>
      <HeroSection
        tall
        image={images.warehouse}
        label={{ es: 'Coordinación logística · Bogotá', en: 'Logistics coordination · Bogotá' }}
        title={{ es: 'Tujo Logistics', en: 'Tujo Logistics' }}
        subtitle={{
          es: 'Creamos sistemas y estrategias de organización compleja aplicables a entornos caóticos reales. Los impulsamos con IA, ciencia y tecnología, y generamos procesos logísticos eficientes en todas las ramas de la logística.',
          en: 'We build complex organization systems and strategies for real chaotic environments. Powered by AI, science and technology, we generate efficient logistics processes across every branch of logistics.',
        }}
        primaryCta={{ to: '/servicios', label: { es: 'Ver servicios', en: 'View services' } }}
        secondaryCta={{ to: '/contacto', label: { es: 'Contactar', en: 'Contact' } }}
      />

      <StatsBar
        items={[
          { value: 5, label: { es: 'Unidades de negocio', en: 'Business units' } },
          { value: 24, suffix: '/7', label: { es: 'Operación coordinada', en: 'Coordinated operation' } },
          { value: 100, suffix: '%', label: { es: 'Enfoque en eficiencia', en: 'Efficiency focus' } },
          { value: 1, label: { es: 'Ecosistema logístico', en: 'Logistics ecosystem' } },
        ]}
      />

      <section className="bg-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel>{L({ es: 'Cómo trabajamos', en: 'How we work' })}</SectionLabel>
            <h2 className="max-w-3xl text-[clamp(1.8rem,4.5vw,3rem)] font-black leading-[1.02] tracking-[-0.03em]">
              {L({
                es: 'El caos no se elimina. Se organiza.',
                en: 'Chaos is not eliminated. It is organized.',
              })}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-fog bg-fog md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="h-full bg-paper p-8 lg:p-10">
                  <div className="text-[11px] font-black tracking-[0.24em] text-mist">{p.n}</div>
                  <h3 className="mt-6 text-lg font-black tracking-tight">{L(p.title)}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slatey">{L(p.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-site py-20 lg:py-28">
          <Reveal>
            <SectionLabel light>{L({ es: 'Unidades de negocio', en: 'Business units' })}</SectionLabel>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-2xl text-[clamp(1.8rem,4.5vw,3rem)] font-black leading-[1.02] tracking-[-0.03em]">
                {L({
                  es: 'Cinco unidades. Un solo ecosistema.',
                  en: 'Five units. One ecosystem.',
                })}
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-mist">
                {L({
                  es: 'Cada unidad ataca una rama específica de la logística y se conecta con las demás cuando el encargo lo exige.',
                  en: 'Each unit owns a specific logistics branch and connects with the others when the job demands it.',
                })}
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {units.map((u, i) => (
              <Reveal key={u.id} delay={i * 0.07}>
                <UnitCard {...u} />
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <Link
                to="/servicios"
                className="group flex h-full min-h-[280px] flex-col justify-between border border-paper/25 p-8 transition-colors hover:border-paper"
              >
                <span className="text-[11px] font-black tracking-[0.24em] text-mist">06</span>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-[0.06em]">
                    {L({ es: 'Integración total', en: 'Full integration' })}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {L({
                      es: 'Descubre cómo las unidades se articulan en operaciones cruzadas.',
                      en: 'See how the units come together in cross operations.',
                    })}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em]">
                    {L({ es: 'Ver servicios', en: 'View services' })}
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-paper">
        <div className="border-y border-fog">
          <div className="flex w-max animate-marquee gap-12 py-5">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-12">
                {[
                  'MEHD TUJO',
                  'WHOLESALES',
                  'TUJO GO',
                  'TUJO FOOD',
                  'INTERNATIONAL',
                  'CADENA DE FRÍO',
                  'ÚLTIMA MILLA',
                  'BODEGAS',
                  'PUERTOS',
                  'TRUEQUE',
                ].map((w) => (
                  <span key={w + k} className="whitespace-nowrap text-sm font-black uppercase tracking-[0.3em] text-fog">
                    {w}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal>
            <div className="relative">
              <img src={images.team} alt="" className="aspect-[4/3] w-full object-cover img-gray" />
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 border border-ink bg-paper p-6 sm:-right-8"
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-mist">
                  {L({ es: 'Sede', en: 'Headquarters' })}
                </div>
                <div className="mt-1 text-lg font-black tracking-tight">Bogotá, Colombia</div>
              </motion.div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel>{L({ es: 'Quiénes somos', en: 'Who we are' })}</SectionLabel>
            <h2 className="text-[clamp(1.7rem,4vw,2.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
              {L({
                es: 'Una empresa que trata la logística como un sistema vivo.',
                en: 'A company that treats logistics as a living system.',
              })}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slatey">
              {L({
                es: 'Tujo Logistics nace en Bogotá para resolver lo que el manual no contempla: demanda impredecible, tráfico real, inventarios compartidos y decisiones que no pueden esperar. Unimos ciencia, tecnología y criterio operativo para entregar procesos eficientes de punta a punta.',
                en: 'Tujo Logistics was born in Bogotá to solve what the manual never covers: unpredictable demand, real traffic, shared inventories and decisions that cannot wait. We combine science, technology and operational judgment to deliver end-to-end efficient processes.',
              })}
            </p>
            <Link to="/nosotros" className="btn-outline mt-9">
              {L({ es: 'Conocer la empresa', en: 'About the company' })}
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title={{
          es: '¿Tienes un desafío logístico que no encaja en una casilla?',
          en: 'Got a logistics challenge that does not fit a checkbox?',
        }}
        subtitle={{
          es: 'Cuéntanos el contexto real. Diseñamos la coordinación a la medida de tu operación.',
          en: 'Tell us the real context. We design coordination around your operation.',
        }}
      />
    </>
  )
}
