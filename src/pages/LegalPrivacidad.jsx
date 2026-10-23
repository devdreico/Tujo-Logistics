import HeroSection from '../components/HeroSection'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LangContext'

const sections = [
  {
    h: { es: '1. Responsable del tratamiento', en: '1. Data controller' },
    p: {
      es: 'Tujo Logistics, con sede en Bogotá D.C., Colombia, es responsable del tratamiento de los datos personales recolectados a través de este sitio web y de sus unidades de negocio.',
      en: 'Tujo Logistics, headquartered in Bogotá D.C., Colombia, is responsible for processing personal data collected through this website and its business units.',
    },
  },
  {
    h: { es: '2. Datos que recolectamos', en: '2. Data we collect' },
    p: {
      es: 'Si contactas al equipo por el formulario, correo o WhatsApp, tratamos los datos que decidas compartir (nombre, correo, teléfono, mensaje) únicamente para responder tu solicitud.',
      en: 'If you contact the team via form, email or WhatsApp, we process only the data you choose to share (name, email, phone, message) solely to answer your request.',
    },
  },
  {
    h: { es: '3. Cookies y almacenamiento local', en: '3. Cookies and local storage' },
    p: {
      es: 'Utilizamos almacenamiento local del navegador para recordar tu preferencia de idioma (ES/EN) y de tema (claro/oscuro). No instalamos cookies de publicidad ni de terceros.',
      en: 'We use browser local storage to remember your language (ES/EN) and theme (light/dark) preferences. We do not install advertising or third-party cookies.',
    },
  },
  {
    h: { es: '4. Derechos del titular', en: '4. Data subject rights' },
    p: {
      es: 'De acuerdo con la Ley 1581 de 2012 y sus decretos reglamentarios en Colombia, puedes solicitar acceso, rectificación, supresión o revocatoria del tratamiento de tus datos escribiendo a hola@tujologistics.com.',
      en: 'Under Colombian Law 1581 of 2012 and its decrees, you may request access, rectification, deletion or revocation of your data processing by writing to hola@tujologistics.com.',
    },
  },
  {
    h: { es: '5. Seguridad', en: '5. Security' },
    p: {
      es: 'Aplicamos medidas administrativas y técnicas razonables para proteger la información. Ningún sistema es infalible; ante incidentes notificaremos a las autoridades y titulares conforme a la ley.',
      en: 'We apply reasonable administrative and technical measures to protect information. No system is infallible; in incidents we will notify authorities and data subjects as required by law.',
    },
  },
  {
    h: { es: '6. Cambios', en: '6. Changes' },
    p: {
      es: 'Podemos actualizar esta política. Los cambios sustanciales se publicarán en esta misma página con su fecha de vigencia.',
      en: 'We may update this policy. Substantial changes will be published on this page with their effective date.',
    },
  },
]

export default function LegalPrivacidad() {
  const { L } = useLang()
  usePageMeta({
    title: L({ es: 'Política de privacidad', en: 'Privacy policy' }),
    description: L({
      es: 'Política de privacidad de Tujo Logistics conforme a la Ley 1581 de 2012 (Colombia).',
      en: 'Tujo Logistics privacy policy under Colombian Law 1581 of 2012.',
    }),
    path: '/legal/privacidad',
  })

  return (
    <>
      <HeroSection
        label={{ es: 'Legal', en: 'Legal' }}
        title={{ es: 'Política de privacidad.', en: 'Privacy policy.' }}
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
