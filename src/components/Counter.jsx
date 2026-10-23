import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useLang } from '../i18n/LangContext'
import { formatNumber } from '../utils/format'

export default function Counter({ to = 0, duration = 1.6, suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)
  const { lang } = useLang()

  useEffect(() => {
    if (!inView) return undefined
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(to * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  const display =
    decimals === 0
      ? formatNumber(Math.round(value), lang)
      : formatNumber(value, lang, { decimals })

  const finalDisplay =
    decimals === 0 ? formatNumber(to, lang) : formatNumber(to, lang, { decimals })

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">{display}{suffix}</span>
      <span className="sr-only">{finalDisplay}{suffix}</span>
    </span>
  )
}
