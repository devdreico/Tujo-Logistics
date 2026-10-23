import HeroSection from '../components/HeroSection'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LangContext'

const sections = [
  {
    h: { es: '1. Aceptación', en: '1. Acceptance' },
    p: {
      es: 'Al navegar este sitio aceptas estos términos de uso. Si no estás de acuerdo, por favor abstente de utilizar el sitio.',
      en: 'By browsing this site you accept these terms of use. If you disagree, please refrain from using the site.',
    },
  },
  {
    h: { es: '2. Contenido informativo', en: '2. Informative content' },
    p: {
      es: 'La información publicada tiene carácter informativo y comercial. Las tarifas, demos y simuladores (incluida la calculadora de Tujo Go) son ilustrativos y no constituyen una oferta vinculante.',
      en: 'Published content is informative and commercial in nature. Fares, demos and simulators (including the Tujo Go calculator) are illustrative and do not constitute a binding offer.',
    },
  },
  {
    h: { es: '3. Marcas y propiedad intelectual', en: '3. Marks & intellectual property' },
    p: {
      es: 'Tujo Logistics, MEHD Tujo, Tujo Wholesales, Tujo Go, Tujo Food y Tujo International Service son marcas y denominaciones de propiedad de sus respectivos titulares. Queda prohibida la reproducción no autorizada.',
      en: 'Tujo Logistics, MEHD Tujo, Tujo Wholesales, Tujo Go, Tujo Food and Tujo International Service are marks and designations of their respective owners. Unauthorized reproduction is prohibited.',
    },
  },
  {
    h: { es: '4. Uso aceptable', en: '4. Acceptable use' },
    p: {
      es: 'No se permite el uso del sitio para actividades ilícitas, suplantación o extracción automatizada masiva de contenidos.',
      en: 'Use of the site for unlawful activities, impersonation or massive automated content extraction is not allowed.',
    },
  },
  {
    h: { es: '5. Limitación de responsabilidad', en: '5. Limitation of liability' },
    p: {
      es: 'Tujo Logistics no será responsable por daños indirectos derivados del uso de este sitio de presentación. Los servicios operativos se rigen por contratos y condiciones particulares de cada unidad.',
      en: 'Tujo Logistics shall not be liable for indirect damages arising from the use of this presentation site. Operational services are governed by the particular contracts and conditions of each unit.',
    },
  },
  {
    h: { es: '6. Ley aplicable', en: '6. Governing law' },
    p: {
      es: 'Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia se someterá a los tribunales competentes de Bogotá D.C.',
      en: 'These terms are governed by the laws of the Republic of Colombia. Any dispute will be submitted to the competent courts of Bogotá D.C.',
    },
  },
]

export default function LegalTerminos() {
  const { L } = useLang()
  usePageMeta({
    title: L({ es: 'Términos de uso', en: 'Terms of use' }),
    description: L({
      es: 'Términos de uso del sitio web de Tujo Logistics.',
      en: 'Terms of use for the Tujo Logistics website.',
    }),
    path: '/legal/terminos',
  })

  return (
    <>
      <HeroSection
        label={{ es: 'Legal', en: 'Legal' }}
        title={{ es: 'Términos de uso.', en: 'Terms of use.' }}
        subtitle={{
          es: 'Última actualización: octubre de 2026.',
          en: 'Last updated: October 2026.',
        }}
      />
      <section className="bg-app text-app-fg">
        <div className="container-site max-w-3xl py-16 lg:py-24">
          <Reveal>
            <div className="prose-tujo">
              {sections.map((s, i) => (
                <div key={i}>
                  <h2>{L(s.h)}</h2>
                  <p>{L(s.p)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
