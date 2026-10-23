import HeroSection from '../components/HeroSection'
import Accordion from '../components/Accordion'
import Reveal, { SectionLabel } from '../components/Reveal'
import CTABanner from '../components/CTABanner'
import JsonLd, { faqLd } from '../components/JsonLd'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LangContext'
import { faqItems } from '../data/content'

export default function Faq() {
  const { L, lang } = useLang()
  usePageMeta({
    title: L({ es: 'Preguntas frecuentes', en: 'FAQ' }),
    description: L({
      es: 'Preguntas frecuentes sobre Tujo Logistics: unidades, tarifas de Tujo Go, cadena de frío, alianzas e internacional.',
      en: 'Tujo Logistics FAQ: units, Tujo Go fares, cold chain, partnerships and international freight.',
    }),
    path: '/faq',
  })

  const items = faqItems.map((f) => ({ q: L(f.q), a: L(f.a) }))

  return (
    <>
      <JsonLd data={faqLd(items)} />

      <HeroSection
        label={{ es: 'FAQ', en: 'FAQ' }}
        title={{ es: 'Preguntas frecuentes.', en: 'Frequently asked questions.' }}
        subtitle={{
          es: 'Todo lo esencial sobre Tujo Logistics y nuestras unidades de negocio, en un solo lugar.',
          en: 'Everything essential about Tujo Logistics and our business units, in one place.',
        }}
      />

      <section className="bg-app text-app-fg">
        <div className="container-site py-16 lg:py-24">
          <Reveal>
            <SectionLabel>{L({ es: 'General', en: 'General' })}</SectionLabel>
          </Reveal>
          <div className="mt-6 max-w-4xl">
            <Accordion items={items} />
          </div>
          <p className="mt-8 text-[12px] text-hint" aria-live="polite">
            {lang === 'en' ? `${items.length} questions` : `${items.length} preguntas`}
          </p>
        </div>
      </section>

      <CTABanner
        title={{ es: '¿No encontraste tu respuesta?', en: 'Did not find your answer?' }}
        subtitle={{
          es: 'Escríbenos y un coordinador te responde en horario hábil.',
          en: 'Write to us and a coordinator will reply during business hours.',
        }}
      />
    </>
  )
}
