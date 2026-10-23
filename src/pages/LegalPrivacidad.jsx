import HeroSection from '../components/HeroSection'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import { useLang } from '../i18n/LangContext'

export default function LegalPrivacidad() {
  const { L } = useLang()
  usePageTitle(L({ es: 'Política de privacidad', en: 'Privacy policy' }))

  return (
    <>
      <HeroSection
        label={{ es: 'Legal', en: 'Legal' }}
        title={{ es: 'Política de privacidad.', en: 'Privacy policy.' }}
        subtitle={{
          es: 'Última actualización: octubre de 2026. Este documento es un borrador institucional de ejemplo.',
          en: 'Last updated: October 2026. This document is an institutional sample draft.',
        }}
      />
      <section className="bg-paper">
        <div className="container-site max-w-3xl py-16 lg:py-24">
          <Reveal>
            <div className="prose-tujo">
              <h2>1. Responsable del tratamiento</h2>
              <p>
                {L({
                  es: 'Tujo Logistics, con sede en Bogotá D.C., Colombia, es responsable del tratamiento de los datos personales recolectados a través de este sitio web y de sus unidades de negocio.',
                  en: 'Tujo Logistics, headquartered in Bogotá D.C., Colombia, is responsible for processing personal data collected through this website and its business units.',
                })}
              </p>
              <h2>2. Datos que recolectamos</h2>
              <p>
                {L({
                  es: 'Este sitio de presentación no envía formularios a un servidor. Si contactas al equipo por correo o WhatsApp, tratamos los datos que decidas compartir (nombre, correo, teléfono, mensaje) únicamente para responder tu solicitud.',
                  en: 'This presentation site does not submit forms to a server. If you contact the team by email or WhatsApp, we process only the data you choose to share (name, email, phone, message) solely to answer your request.',
                })}
              </p>
              <h2>3. Cookies y almacenamiento local</h2>
              <p>
                {L({
                  es: 'Utilizamos almacenamiento local del navegador para recordar tu preferencia de idioma (ES/EN). No instalamos cookies de publicidad ni de terceros.',
                  en: 'We use browser local storage to remember your language preference (ES/EN). We do not install advertising or third-party cookies.',
                })}
              </p>
              <h2>4. Derechos del titular</h2>
              <p>
                {L({
                  es: 'De acuerdo con la Ley 1581 de 2012 y sus decretos reglamentarios en Colombia, puedes solicitar acceso, rectificación, supresión o revocatoria del tratamiento de tus datos escribiendo a hola@tujologistics.com.',
                  en: 'Under Colombian Law 1581 of 2012 and its decrees, you may request access, rectification, deletion or revocation of your data processing by writing to hola@tujologistics.com.',
                })}
              </p>
              <h2>5. Seguridad</h2>
              <p>
                {L({
                  es: 'Aplicamos medidas administrativas y técnicas razonables para proteger la información. Ningún sistema es infalible; ante incidentes notificaremos a las autoridades y titulares conforme a la ley.',
                  en: 'We apply reasonable administrative and technical measures to protect information. No system is infallible; in incidents we will notify authorities and data subjects as required by law.',
                })}
              </p>
              <h2>6. Cambios</h2>
              <p>
                {L({
                  es: 'Podemos actualizar esta política. Los cambios sustanciales se publicarán en esta misma página con su fecha de vigencia.',
                  en: 'We may update this policy. Substantial changes will be published on this page with their effective date.',
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
