import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LangContext'
import { contact } from '../data/contact'
import { unitOptions } from '../data/units'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function Contacto() {
  const { L } = useLang()
  const [searchParams] = useSearchParams()
  const unitParam = searchParams.get('unit') || ''
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  usePageMeta({
    title: L({ es: 'Contacto', en: 'Contact' }),
    description: L({
      es: 'Contacta a Tujo Logistics en Bogotá. Formulario, WhatsApp y correo para coordinación logística, alianzas y cotizaciones.',
      en: 'Contact Tujo Logistics in Bogotá. Form, WhatsApp and email for logistics coordination, partnerships and quotes.',
    }),
    path: '/contacto',
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSending(true)

    const form = e.currentTarget
    const data = new FormData(form)

    if (!ACCESS_KEY) {
      // Fallback: open mail client with prefilled content
      const subject = encodeURIComponent(`Contacto Tujo Logistics — ${data.get('unit') || 'General'}`)
      const body = encodeURIComponent(
        `Nombre: ${data.get('name')}\nEmail: ${data.get('email')}\nWhatsApp: ${data.get('phone') || '—'}\nUnidad: ${data.get('unit')}\n\n${data.get('message')}`,
      )
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
      setSending(false)
      setSent(true)
      return
    }

    try {
      data.append('access_key', ACCESS_KEY)
      data.append('subject', `Contacto Tujo Logistics — ${data.get('unit') || 'General'}`)
      data.append('from_name', 'Sitio Tujo Logistics')

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message || 'Error')
      setSent(true)
      form.reset()
    } catch {
      setError(
        L({
          es: 'No pudimos enviar el mensaje. Intenta de nuevo o escríbenos por WhatsApp.',
          en: 'We could not send the message. Try again or write us on WhatsApp.',
        }),
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <HeroSection
        label={{ es: 'Contacto', en: 'Contact' }}
        title={{ es: 'Hablemos de tu operación.', en: 'Let’s talk about your operation.' }}
        subtitle={{
          es: 'Cuéntanos el desafío logístico. Te conectamos con la unidad correcta de Tujo Logistics.',
          en: 'Tell us the logistics challenge. We connect you with the right Tujo Logistics unit.',
        }}
      />

      <section className="bg-app text-app-fg">
        <div className="container-site grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-7">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                aria-live="polite"
                tabIndex={-1}
                className="border border-app-fg bg-cloud p-10"
              >
                <div className="label-caps">{L({ es: 'Mensaje recibido', en: 'Message received' })}</div>
                <h2 className="mt-4 text-2xl font-black tracking-tight">
                  {L({ es: 'Gracias. Te contactaremos pronto.', en: 'Thank you. We will contact you soon.' })}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {ACCESS_KEY
                    ? L({
                        es: 'Tu mensaje fue enviado al equipo coordinador de Tujo Logistics.',
                        en: 'Your message was sent to the Tujo Logistics coordination team.',
                      })
                    : L({
                        es: 'Se abrió tu cliente de correo con el mensaje. Si no ocurrió nada, escríbenos directo a ' +
                          contact.email,
                        en: 'Your email client should have opened with the message. If not, write us directly at ' +
                          contact.email,
                      })}
                </p>
                <button type="button" className="btn-outline mt-8" onClick={() => setSent(false)}>
                  {L({ es: 'Enviar otro', en: 'Send another' })}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
                <SectionLabel>{L({ es: 'Formulario', en: 'Form' })}</SectionLabel>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label-caps">
                      {L({ es: 'Nombre', en: 'Name' })}
                    </label>
                    <input id="name" name="name" required className="field mt-3" autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-caps">
                      {L({ es: 'Correo', en: 'Email' })}
                    </label>
                    <input id="email" name="email" type="email" required className="field mt-3" autoComplete="email" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="label-caps">
                      {L({ es: 'WhatsApp', en: 'WhatsApp' })}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="field mt-3"
                      autoComplete="tel"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="unit" className="label-caps">
                      {L({ es: 'Unidad de interés', en: 'Unit of interest' })}
                    </label>
                    <select id="unit" name="unit" required className="field mt-3" defaultValue={unitParam}>
                      {unitOptions().map((o) => (
                        <option key={o.value} value={o.value} disabled={!o.value}>
                          {L(o.label)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="label-caps">
                    {L({ es: 'Mensaje', en: 'Message' })}
                  </label>
                  <textarea id="message" name="message" rows={6} required className="field mt-3" />
                </div>
                {error && (
                  <p role="alert" className="text-sm font-semibold">{error}</p>
                )}
                <button type="submit" className="btn-primary" disabled={sending}>
                  {sending
                    ? L({ es: 'Enviando…', en: 'Sending…' })
                    : L({ es: 'Enviar mensaje', en: 'Send message' })}
                </button>
                <p className="text-[12px] text-hint">
                  {ACCESS_KEY
                    ? L({
                        es: 'Al enviar aceptas nuestra política de privacidad.',
                        en: 'By sending you accept our privacy policy.',
                      })
                    : L({
                        es: 'Configura VITE_WEB3FORMS_ACCESS_KEY en .env para envío directo; sin ella usamos tu cliente de correo.',
                        en: 'Set VITE_WEB3FORMS_ACCESS_KEY in .env for direct delivery; without it we use your email client.',
                      })}
                </p>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <SectionLabel>{L({ es: 'Datos', en: 'Details' })}</SectionLabel>
            <div className="mt-2 space-y-8">
              {[
                { k: { es: 'Oficina', en: 'Office' }, v: contact.address },
                { k: { es: 'Correo', en: 'Email' }, v: { es: contact.email, en: contact.email } },
                { k: { es: 'WhatsApp', en: 'WhatsApp' }, v: { es: contact.whatsappDisplay, en: contact.whatsappDisplay } },
                { k: { es: 'Horario', en: 'Hours' }, v: contact.hours },
                {
                  k: { es: 'Redes', en: 'Social' },
                  v: {
                    es: contact.social.instagram || contact.social.linkedin || '—',
                    en: contact.social.instagram || contact.social.linkedin || '—',
                  },
                },
              ].map((d, i) => (
                <div key={i} className="border-t border-line pt-5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-hint">{L(d.k)}</div>
                  <div className="mt-2 text-base font-semibold tracking-tight">{L(d.v)}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
