import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../i18n/LangContext'

/** Card linking to a business unit */
export default function UnitCard({ to, index = '01', name, tagline, description, image }) {
  const { L } = useLang()

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="h-full">
      <Link
        to={to}
        className="card group flex h-full flex-col overflow-hidden"
        aria-label={L(name)}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-cloud">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover img-gray transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
          <span className="absolute left-4 top-4 bg-paper px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
            {index}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-black uppercase tracking-[0.06em]">{L(name)}</h3>
          <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-mist">{L(tagline)}</p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slatey">{L(description)}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-ink">
            {L({ es: 'Explorar', en: 'Explore' })}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
