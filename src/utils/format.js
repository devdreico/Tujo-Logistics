export function localeFor(lang) {
  return lang === 'en' ? 'en-US' : 'es-CO'
}

export function formatNumber(value, lang = 'es', { decimals = 0 } = {}) {
  return new Intl.NumberFormat(localeFor(lang), {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

export function formatCOP(value, lang = 'es') {
  return `$${formatNumber(Math.round(value), lang)} COP`
}

export function formatDate(iso, lang = 'es', { long = false } = {}) {
  const d = new Date(`${iso}T12:00:00`)
  return d.toLocaleDateString(localeFor(lang), {
    year: 'numeric',
    month: long ? 'long' : 'short',
    day: 'numeric',
  })
}
