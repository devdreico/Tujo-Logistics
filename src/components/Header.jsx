import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ui, useLang } from '../i18n/LangContext'

const unitLinks = [
  { to: '/mehd-tujo', label: { es: 'MEHD Tujo', en: 'MEHD Tujo' } },
  { to: '/wholesales', label: { es: 'Tujo Wholesales', en: 'Tujo Wholesales' } },
  { to: '/tujo-go', label: { es: 'Tujo Go', en: 'Tujo Go' } },
  { to: '/tujo-food', label: { es: 'Tujo Food', en: 'Tujo Food' } },
  { to: '/international', label: { es: 'International Service', en: 'International Service' } },
]

function Logo({ className = '', inverted = false }) {
  return (
    <img
      src="/tujo-logo.png"
      alt="Tujo Logistics"
      className={`${inverted ? 'invert' : ''} ${className}`}
      width={36}
      height={40}
    />
  )
}

export default function Header() {
  const { L, lang, setLang } = useLang()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [unitsOpen, setUnitsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setUnitsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navLinkClass = ({ isActive }) =>
    `text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
      isActive ? 'text-ink' : 'text-slatey hover:text-ink'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-fog bg-paper/95 backdrop-blur-md' : 'border-transparent bg-paper'
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Tujo Logistics">
          <Logo className="h-9 w-auto object-contain" />
          <span className="hidden text-[13px] font-black uppercase leading-none tracking-[0.2em] sm:block">
            Tujo
            <span className="block text-[9px] font-semibold tracking-[0.34em] text-mist">Logistics</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          <NavLink to="/" className={navLinkClass} end>
            {L(ui.nav.home)}
          </NavLink>
          <NavLink to="/nosotros" className={navLinkClass}>
            {L(ui.nav.about)}
          </NavLink>
          <NavLink to="/servicios" className={navLinkClass}>
            {L(ui.nav.services)}
          </NavLink>

          <div className="relative" onMouseEnter={() => setUnitsOpen(true)} onMouseLeave={() => setUnitsOpen(false)}>
            <button
              type="button"
              className="flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-slatey transition-colors hover:text-ink"
              onClick={() => setUnitsOpen((v) => !v)}
              aria-expanded={unitsOpen}
              aria-haspopup="true"
            >
              {L(ui.nav.units)}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <AnimatePresence>
              {unitsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-64 -translate-x-1/2 border border-fog bg-paper p-2 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  {unitLinks.map((u) => (
                    <Link
                      key={u.to}
                      to={u.to}
                      className={`block px-4 py-3 text-[13px] font-semibold tracking-wide transition-colors ${
                        location.pathname === u.to ? 'bg-cloud text-ink' : 'text-slatey hover:bg-cloud hover:text-ink'
                      }`}
                    >
                      {L(u.label)}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/blog" className={navLinkClass}>
            {L(ui.nav.blog)}
          </NavLink>
          <NavLink to="/rastreo" className={navLinkClass}>
            {L(ui.nav.tracking)}
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="hidden items-center border border-fog text-[11px] font-bold uppercase tracking-[0.14em] sm:flex"
            role="group"
            aria-label="Idioma"
          >
            {['es', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`px-3 py-2 transition-colors ${
                  lang === code ? 'bg-ink text-paper' : 'text-slatey hover:text-ink'
                }`}
                aria-pressed={lang === code}
              >
                {code}
              </button>
            ))}
          </div>

          <Link to="/contacto" className="btn-primary hidden px-5 py-2.5 text-[12px] md:inline-flex">
            {L(ui.common.cta)}
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-fog lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-ink" />
              <span className="block h-px w-5 bg-ink" />
              <span className="block h-px w-3.5 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-ink text-paper lg:hidden"
          >
            <div className="flex h-[72px] items-center justify-between px-5">
              <div className="flex items-center gap-3">
                <Logo className="h-9 w-auto object-contain invert" />
                <span className="text-[13px] font-black uppercase tracking-[0.2em]">Tujo</span>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center border border-paper/30"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1 overflow-y-auto px-5 pb-16 pt-6" aria-label="Móvil">
              {[
                { to: '/', label: ui.nav.home, end: true },
                { to: '/nosotros', label: ui.nav.about },
                { to: '/servicios', label: ui.nav.services },
                ...unitLinks.map((u) => ({ ...u, label: u.label })),
                { to: '/rastreo', label: ui.nav.tracking },
                { to: '/faq', label: ui.nav.faq },
                { to: '/aliados', label: ui.nav.partners },
                { to: '/blog', label: ui.nav.blog },
                { to: '/careers', label: ui.nav.careers },
                { to: '/contacto', label: ui.nav.contact },
              ].map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `block border-b border-paper/10 py-3.5 text-lg font-semibold tracking-tight ${
                        isActive ? 'text-paper' : 'text-mist'
                      }`
                    }
                  >
                    {L(item.label)}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex border border-paper/30 text-[11px] font-bold uppercase tracking-[0.14em]">
                  {['es', 'en'].map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLang(code)}
                      className={`px-3 py-2 ${lang === code ? 'bg-paper text-ink' : 'text-mist'}`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
