import { Link } from 'react-router-dom'
import { ui, useLang } from '../i18n/LangContext'

const YEAR = new Date().getFullYear()

const units = [
  { to: '/mehd-tujo', label: 'MEHD Tujo' },
  { to: '/wholesales', label: 'Tujo Wholesales' },
  { to: '/tujo-go', label: 'Tujo Go' },
  { to: '/tujo-food', label: 'Tujo Food' },
  { to: '/international', label: 'Tujo International' },
]

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

export default function Footer() {
  const { L } = useLang()

  return (
    <footer className="bg-ink text-paper">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src="/tujo-logo.png" alt="" className="h-11 w-auto invert" width={40} height={44} />
              <div>
                <div className="text-sm font-black uppercase tracking-[0.22em]">Tujo</div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.34em] text-mist">Logistics</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
              {L({
                es: 'Sistemas y estrategias de organización compleja para entornos caóticos reales. Coordinación logística desde Bogotá, impulsada por IA, ciencia y tecnología.',
                en: 'Complex organization systems and strategies for real chaotic environments. Logistics coordination from Bogotá, powered by AI, science and technology.',
              })}
            </p>
            <div className="mt-8 flex gap-3">
              {['IG', 'LI', 'X', 'WA'].map((s) => (
                <span
                  key={s}
                  className="flex h-9 w-9 items-center justify-center border border-paper/25 text-[10px] font-bold tracking-wider text-mist transition-colors hover:border-paper hover:text-paper"
                  aria-hidden="true"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="label-caps-light">{L(ui.footer.units)}</h3>
              <ul className="mt-5 space-y-3">
                {units.map((u) => (
                  <li key={u.to}>
                    <Link to={u.to} className="text-sm text-mist transition-colors hover:text-paper">
                      {u.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label-caps-light">{L(ui.footer.company)}</h3>
              <ul className="mt-5 space-y-3">
                {company.map((c) => (
                  <li key={c.to}>
                    <Link to={c.to} className="text-sm text-mist transition-colors hover:text-paper">
                      {L(ui.nav[c.key])}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label-caps-light">{L(ui.footer.resources)}</h3>
              <ul className="mt-5 space-y-3">
                {resources.map((r) => (
                  <li key={r.to}>
                    <Link to={r.to} className="text-sm text-mist transition-colors hover:text-paper">
                      {L(ui.nav[r.key])}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-8 text-[12px] tracking-wide text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {YEAR} Tujo Logistics. {L(ui.footer.rights)}
          </p>
          <div className="flex gap-6">
            <Link to="/legal/privacidad" className="transition-colors hover:text-paper">
              {L(ui.footer.privacy)}
            </Link>
            <Link to="/legal/terminos" className="transition-colors hover:text-paper">
              {L(ui.footer.terms)}
            </Link>
          </div>
          <p>{L(ui.footer.from)}</p>
        </div>
      </div>
    </footer>
  )
}
