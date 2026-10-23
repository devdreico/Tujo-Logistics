import { useEffect } from 'react'

const SITE_URL = 'https://tujologistics.com'

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-route SEO: title, description, OG/Twitter, canonical, hreflang.
 * path should be the pathname starting with "/".
 */
export default function usePageMeta({ title, description, path = '/', image = '/og-default.png', type = 'website' }) {
  useEffect(() => {
    const full = title ? `${title} — Tujo Logistics` : 'Tujo Logistics — Coordinación logística desde Bogotá'
    const url = `${SITE_URL}${path}`
    const absImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

    document.title = full
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', full)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:image', absImage)
    setMeta('property', 'og:locale', 'es_CO')
    setMeta('property', 'og:locale:alternate', 'en_US')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', full)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', absImage)
    setLink('canonical', url)

    const hreflangs = document.head.querySelectorAll('link[rel="alternate"][hreflang]')
    hreflangs.forEach((n) => n.remove())
    const esUrl = `${SITE_URL}${path}?lang=es`
    const enUrl = `${SITE_URL}${path}?lang=en`
    for (const [hl, href] of [
      ['es', esUrl],
      ['en', enUrl],
      ['x-default', esUrl],
    ]) {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = hl
      link.href = href
      document.head.appendChild(link)
    }
  }, [title, description, path, image, type])
}
