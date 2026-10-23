import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error('Tujo boundary', error, info)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
          <div className="text-[11px] font-black uppercase tracking-[0.3em] text-hint">500</div>
          <h1 className="mt-4 text-3xl font-black tracking-tight">Algo salió mal</h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            La página encontró un error inesperado. Intenta recargar o vuelve al inicio.
          </p>
          <div className="mt-10 flex gap-4">
            <button type="button" className="btn-primary" onClick={() => window.location.reload()}>
              Recargar
            </button>
            <a href="/" className="btn-outline">
              Ir al inicio
            </a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
