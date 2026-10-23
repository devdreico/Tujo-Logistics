import HeroSection from '../components/HeroSection'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import { useLang } from '../i18n/LangContext'

export default function LegalTerminos() {
  const { L } = useLang()
  usePageTitle(L({ es: 'Términos de uso', en: 'Terms of use' }))

  return (
    <>
      <HeroSection
        label={{ es: 'Legal', en: 'Legal' }}
        title={{ es: 'Términos de uso.', en: 'Terms of use.' }}
        subtitle={{
          es: 'Última actualización: octubre de 2026. Este documento es un borrador institucional de ejemplo.',
          en: 'Last updated: October 2026. This document is an institutional sample draft.',
        }}
      />
      <section className="bg-paper">
        <div className="container-site max-w-3xl py-16 lg:py-24">
          <Reveal>
            <div className="prose-tujo">
              <h2>1. Aceptación</h2>
              <p>
                {L({
                  es: 'Al navegar este sitio aceptas estos términos de uso. Si no estás de acuerdo, por favor abstente de utilizar el sitio.',
                  en: 'By browsing this site you accept these terms of use. If you disagree, please refrain from using the site.',
                })}
              </p>
              <h2>2. Contenido informativo</h2>
              <p>
                {L({
                  es: 'La información publicada tiene carácter informativo y comercial. Las tarifas, demos y simuladores (incluida la calculadora de Tujo Go) son ilustrativos y no constituyen una oferta vinculante.',
                  en: 'Published content is informative and commercial in nature. Fares, demos and simulators (including the Tujo Go calculator) are illustrative and do not constitute a binding offer.',
                })}
              </p>
              <h2>3. Marcas y propiedad intelectual</h2>
              <p>
                {L({
                  es: 'Tujo Logistics, MEHD Tujo, Tujo Wholesales, Tujo Go, Tujo Food y Tujo International Service son marcas y denominaciones de propiedad de sus respectivos titulares. Queda prohibida la reproducción no autorizada.',
                  en: 'Tujo Logistics, MEHD Tujo, Tujo Wholesales, Tujo Go, Tujo Food and Tujo International Service are marks and designations of their respective owners. Unauthorized reproduction is prohibited.',
                })}
              </p>
              <h2>4. Uso aceptable</h2>
              <p>
                {L({
                  es: 'No se permite el uso del sitio para actividades ilícitas, suplantación o extracción automatizada masiva de contenidos.',
                  en: 'Use of the site for unlawful activities, impersonation or massive automated content extraction is not allowed.',
                })}
              </p>
              <h2>5. Limitación de responsabilidad</h2>
              <p>
                {L({
                  es: 'Tujo Logistics no será responsable por daños indirectos derivados del uso de este sitio de presentación. Los servicios operativos se rigen por contratos y condiciones particulares de cada unidad.',
                  en: 'Tujo Logistics shall not be liable for indirect damages arising from the use of this presentation site. Operational services are governed by the particular contracts and conditions of each unit.',
                })}
              </p>
              <h2>6. Ley aplicable</h2>
              <p>
                {L({
                  es: 'Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia se someterá a los tribunales competentes de Bogotá D.C.',
                  en: 'These terms are governed by the laws of the Republic of Colombia. Any dispute will be submitted to the competent courts of Bogotá D.C.',
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
