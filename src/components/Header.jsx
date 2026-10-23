import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ui, useLang } from '../i18n/LangContext'
import { units } from '../data/units'

function Logo({ className = '' }) {
  return (
    <img
      src="/tujo-logo.png"
      alt=""
      className={`tujo-logo h-9 w-auto object-contain ${className}`}
      width={36}
      height={40}
      aria-hidden="true"
    />
  )
}

function LangToggle({ mobile = false }) {
  const { lang, setLang, L } = useLang()
  return (
    <div
      className={`flex border border-current/30 text-[11px] font-bold uppercase tracking-[0.14em] ${mobile ? '' : 'hidden sm:flex'}`}
      role="group"
      aria-label={L(ui.a11y.language)}
    >
      {['es', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`px-3 py-2 transition-colors ${lang === code ? 'bg-current text-app' : 'opacity-70 hover:opacity-100'}`}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

function ThemeToggle({ mobile = false }) {
  const { theme, toggleTheme, L } = useLang()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex h-9 w-9 items-center justify-center border border-current/30 transition-opacity hover:opacity-80 ${mobile ? '' : 'hidden lg:flex'}`}
      aria-label={L(ui.a11y.theme)}
      aria-pressed={isDark}
      title={L(ui.a11y.theme)}
    >
      {isDark ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
      )}
    </button>
  )
}

export default function Header() {
  const { L } = useLang()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [unitsOpen, setUnitsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const unitsBtnRef = useRef(null)
  const unitsRef = useRef(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12)
        ticking = false
      })
    }
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

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setUnitsOpen(false)
        setOpen(false)
        unitsBtnRef.current?.focus()
      }
    }
    const onClick = (e) => {
      if (unitsOpen && unitsRef.current && !unitsRef.current.contains(e.target)) {
        setUnitsOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onClick)
    }
  }, [unitsOpen])

  const openUnits = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setUnitsOpen(true)
  }
  const scheduleCloseUnits = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setUnitsOpen(false), 120)
  }

  const navLinkClass = ({ isActive }) =>
    `text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
      isActive ? 'text-app-fg' : 'text-muted hover:text-app-fg'
    }`

  const secondaryLinks = [
    { to: '/faq', label: ui.nav.faq },
    { to: '/aliados', label: ui.nav.partners },
    { to: '/careers', label: ui.nav.careers },
  ]

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-line bg-app/95 backdrop-blur-md' : 'border-transparent bg-app'
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Tujo Logistics">
          <Logo />
          <span className="hidden text-[13px] font-black uppercase leading-none tracking-[0.2em] sm:block">
            Tujo
            <span className="block text-[9px] font-semibold tracking-[0.34em] text-hint">Logistics</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label={L(ui.a11y.primaryNav)}>
          <NavLink to="/" className={navLinkClass} end>
            {L(ui.nav.home)}
          </NavLink>
          <NavLink to="/nosotros" className={navLinkClass}>
            {L(ui.nav.about)}
          </NavLink>
          <NavLink to="/servicios" className={navLinkClass}>
            {L(ui.nav.services)}
          </NavLink>

          <div
            ref={unitsRef}
            className="relative"
            onMouseEnter={openUnits}
            onMouseLeave={scheduleCloseUnits}
          >
            <button
              ref={unitsBtnRef}
              type="button"
              className="flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:text-app-fg"
              onClick={() => setUnitsOpen((v) => !v)}
              aria-expanded={unitsOpen}
              aria-haspopup="true"
              aria-controls="units-menu"
            >
              {L(ui.nav.units)}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <AnimatePresence>
              {unitsOpen && (
                <motion.div
                  id="units-menu"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-64 -translate-x-1/2 border border-line bg-app p-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                  role="menu"
                >
                  {units.map((u) => (
                    <Link
                      key={u.to}
                      to={u.to}
                      role="menuitem"
                      className={`block px-4 py-3 text-[13px] font-semibold tracking-wide transition-colors ${
                        location.pathname === u.to
                          ? 'bg-cloud text-app-fg'
                          : 'text-muted hover:bg-cloud hover:text-app-fg'
                      }`}
                    >
                      {L(u.name)}
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
          {secondaryLinks.map((s) => (
            <NavLink key={s.to} to={s.to} className={navLinkClass}>
              {L(s.label)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LangToggle />
          <ThemeToggle />
          <Link to="/contacto" className="btn-primary hidden px-5 py-2.5 text-[12px] md:inline-flex">
            {L(ui.common.cta)}
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-line xl:hidden"
            onClick={() => setOpen(true)}
            aria-label={L(ui.a11y.openMenu)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-px w-5 bg-app-fg" />
              <span className="block h-px w-5 bg-app-fg" />
              <span className="block h-px w-3.5 bg-app-fg" />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-band text-band-fg xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={L(ui.a11y.mobileNav)}
          >
            <div className="flex h-[72px] items-center justify-between px-5">
              <div className="flex items-center gap-3 on-band">
                <Logo />
                <span className="text-[13px] font-black uppercase tracking-[0.2em]">Tujo</span>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center border border-current/30"
                onClick={() => setOpen(false)}
                aria-label={L(ui.a11y.closeMenu)}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1 overflow-y-auto px-5 pb-16 pt-6" aria-label={L(ui.a11y.mobileNav)}>
              {[
                { to: '/', label: ui.nav.home, end: true },
                { to: '/nosotros', label: ui.nav.about },
                { to: '/servicios', label: ui.nav.services },
                ...units.map((u) => ({ to: u.to, label: u.name })),
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
                      `block border-b border-current/10 py-3.5 text-lg font-semibold tracking-tight ${
                        isActive ? 'text-band-fg' : 'opacity-70'
                      }`
                    }
                  >
                    {L(item.label)}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-8 flex items-center gap-3">
                <LangToggle mobile />
                <ThemeToggle mobile />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
