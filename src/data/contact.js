/**
 * Central contact & social data — edit here once.
 * Replace placeholders with official Tujo Logistics data before production.
 */
export const contact = {
  email: 'hola@tujologistics.com',
  phoneDisplay: '+57 300 000 0000',
  phoneRaw: '+573000000000',
  whatsappDisplay: '+57 300 000 0000',
  whatsappRaw: '573000000000',
  address: { es: 'Bogotá D.C., Colombia', en: 'Bogotá D.C., Colombia' },
  hours: {
    es: 'Lun–Vie · 8:00–18:00 (COT)',
    en: 'Mon–Fri · 8:00–18:00 (COT)',
  },
  social: {
    instagram: '', // e.g. 'https://instagram.com/tujologistics'
    linkedin: '',
    x: '',
    website: '',
  },
}

export function whatsappLink(prefill = '') {
  const text = encodeURIComponent(prefill || 'Hola Tujo Logistics, quiero información.')
  return `https://wa.me/${contact.whatsappRaw}?text=${text}`
}

export function mailtoLink({ subject = '', body = '' } = {}) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const qs = params.toString()
  return `mailto:${contact.email}${qs ? `?${qs}` : ''}`
}
