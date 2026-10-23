import { useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import Reveal, { SectionLabel } from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import { useLang } from '../i18n/LangContext'

const unitsOptions = [
  { value: '', label: { es: 'Selecciona una unidad', en: 'Select a unit' } },
  { value: 'mehd', label: { es: 'MEHD Tujo', en: 'MEHD Tujo' } },
  { value: 'wholesales', label: { es: 'Tujo Wholesales', en: 'Tujo Wholesales' } },
  { value: 'go', label: { es: 'Tujo Go', en: 'Tujo Go' } },
  { value: 'food', label: { es: 'Tujo Food', en: 'Tujo Food' } },
  { value: 'intl', label: { es: 'International Service', en: 'International Service' } },
  { value: 'general', label: { es: 'General / Corporativo', en: 'General / Corporate' } },
]

export default function Contacto() {
  const { L } = useLang()
  usePageTitle(L({ es: 'Contacto', en: 'Contact' }))
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
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

      <section className="bg-paper">
        <div className="container-site grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-7">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-ink bg-cloud p-10"
              >
                <div className="label-caps">{L({ es: 'Mensaje recibido', en: 'Message received' })}</div>
                <h2 className="mt-4 text-2xl font-black tracking-tight">
                  {L({ es: 'Gracias. Te contactaremos pronto.', en: 'Thank you. We will contact you soon.' })}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slatey">
                  {L({
                    es: 'Esta es una demostración del formulario: no se envían datos a un servidor. En producción, tu mensaje llegará al equipo coordinador.',
                    en: 'This is a form demo: no data is sent to a server. In production your message would reach the coordination team.',
                  })}
                </p>
                <button type="button" className="btn-outline mt-8" onClick={() => setSent(false)}>
                  {L({ es: 'Enviar otro', en: 'Send another' })}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
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
                    <input id="phone" name="phone" type="tel" className="field mt-3" autoComplete="tel" placeholder="+57 300 000 0000" />
                  </div>
                  <div>
                    <label htmlFor="unit" className="label-caps">
                      {L({ es: 'Unidad de interés', en: 'Unit of interest' })}
                    </label>
                    <select id="unit" name="unit" required className="field mt-3" defaultValue="">
                      {unitsOptions.map((o) => (
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
                <button type="submit" className="btn-primary">
                  {L({ es: 'Enviar mensaje', en: 'Send message' })}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <SectionLabel>{L({ es: 'Datos', en: 'Details' })}</SectionLabel>
            <div className="mt-2 space-y-8">
              {[
                {
                  k: { es: 'Oficina', en: 'Office' },
                  v: { es: 'Bogotá D.C., Colombia', en: 'Bogotá D.C., Colombia' },
                },
                {
                  k: { es: 'Correo', en: 'Email' },
                  v: { es: 'hola@tujologistics.com', en: 'hola@tujologistics.com' },
                },
                {
                  k: { es: 'WhatsApp', en: 'WhatsApp' },
                  v: { es: '+57 300 000 0000', en: '+57 300 000 0000' },
                },
                {
                  k: { es: 'Horario', en: 'Hours' },
                  v: {
                    es: 'Lun–Vie · 8:00–18:00 (COT)',
                    en: 'Mon–Fri · 8:00–18:00 (COT)',
                  },
                },
                {
                  k: { es: 'Redes', en: 'Social' },
                  v: { es: '@tujologistics', en: '@tujologistics' },
                },
              ].map((d, i) => (
                <div key={i} className="border-t border-fog pt-5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-mist">{L(d.k)}</div>
                  <div className="mt-2 text-base font-semibold tracking-tight">{L(d.v)}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 border border-fog bg-cloud p-6">
              <p className="text-[12px] leading-relaxed text-slatey">
                {L({
                  es: 'Los datos de contacto mostrados son placeholders profesionales listos para reemplazar con la información oficial.',
                  en: 'Contact details shown are professional placeholders ready to be replaced with official information.',
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
