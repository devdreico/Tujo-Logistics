import { Link } from 'react-router-dom'
import { ui, useLang } from '../i18n/LangContext'
import { units } from '../data/units'
import { contact } from '../data/contact'

const company = [
  { to: '/nosotros', key: 'about' },
  { to: '/servicios', key: 'services' },
  { to: '/careers', key: 'careers' },
  { to: '/contacto', key: 'contact' },
]

const resources = [
  { to: '/rastreo', key: 'tracking' },
  { to: '/faq', key: 'faq' },
  { to: '/aliados', key: 'partners' },
  { to: '/blog', key: 'blog' },
]

const socials = [
  { key: 'instagram', label: 'IG', href: contact.social.instagram },
  { key: 'linkedin', label: 'LI', href: contact.social.linkedin },
  { key: 'x', label: 'X', href: contact.social.x },
]

const YEAR = new Date().getFullYear()

export default function Footer() {
  const { L } = useLang()
  const activeSocials = socials.filter((s) => s.href)

  return (
    <footer className="band on-band">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src="/tujo-logo.png" alt="" className="tujo-logo h-11 w-auto object-contain" width={40} height={44} aria-hidden="true" />
              <div>
                <div className="text-sm font-black uppercase tracking-[0.22em]">Tujo</div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.34em] opacity-70">Logistics</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-75">
              {L({
                es: 'Sistemas y estrategias de organización compleja para entornos caóticos reales. Coordinación logística desde Bogotá, impulsada por IA, ciencia y tecnología.',
                en: 'Complex organization systems and strategies for real chaotic environments. Logistics coordination from Bogotá, powered by AI, science and technology.',
              })}
            </p>
            {activeSocials.length > 0 && (
              <div className="mt-8 flex gap-3">
                {activeSocials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center border border-current/25 text-[10px] font-bold tracking-wider opacity-75 transition-opacity hover:opacity-100"
                    aria-label={s.key}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <nav aria-label={L(ui.footer.units)}>
              <h2 className="label-caps-light">{L(ui.footer.units)}</h2>
              <ul className="mt-5 space-y-3">
                {units.map((u) => (
                  <li key={u.to}>
                    <Link to={u.to} className="text-sm opacity-75 transition-opacity hover:opacity-100">
                      {L(u.shortName || u.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label={L(ui.footer.company)}>
              <h2 className="label-caps-light">{L(ui.footer.company)}</h2>
              <ul className="mt-5 space-y-3">
                {company.map((c) => (
                  <li key={c.to}>
                    <Link to={c.to} className="text-sm opacity-75 transition-opacity hover:opacity-100">
                      {L(ui.nav[c.key])}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label={L(ui.footer.resources)}>
              <h2 className="label-caps-light">{L(ui.footer.resources)}</h2>
              <ul className="mt-5 space-y-3">
                {resources.map((r) => (
                  <li key={r.to}>
                    <Link to={r.to} className="text-sm opacity-75 transition-opacity hover:opacity-100">
                      {L(ui.nav[r.key])}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-current/15 pt-8 text-[12px] tracking-wide opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {YEAR} Tujo Logistics. {L(ui.footer.rights)}
          </p>
          <div className="flex gap-6">
            <Link to="/legal/privacidad" className="transition-opacity hover:opacity-100">
              {L(ui.footer.privacy)}
            </Link>
            <Link to="/legal/terminos" className="transition-opacity hover:opacity-100">
              {L(ui.footer.terms)}
            </Link>
          </div>
          <p>{L(ui.footer.from)}</p>
        </div>
      </div>
    </footer>
  )
}
