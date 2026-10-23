import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import { useLang } from '../i18n/LangContext'

export default function NotFound() {
  const { L } = useLang()
  usePageMeta({
    title: '404',
    description: L({ es: 'Página no encontrada', en: 'Page not found' }),
    path: '/404',
  })

  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div className="text-[11px] font-black uppercase tracking-[0.3em] text-hint">404</div>
      <h1 className="mt-4 text-4xl font-black tracking-tight">
        {L({ es: 'Página no encontrada', en: 'Page not found' })}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        {L({
          es: 'La ruta que buscas no existe o fue movida. Vuelve al inicio para continuar.',
          en: 'The route you are looking for does not exist or was moved. Go back home to continue.',
        })}
      </p>
      <Link to="/" className="btn-primary mt-10">
        {L({ es: 'Ir al inicio', en: 'Go home' })}
      </Link>
    </section>
  )
}
