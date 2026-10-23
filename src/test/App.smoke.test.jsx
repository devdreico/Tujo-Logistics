import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

function renderApp(initial = '/') {
  window.localStorage.setItem('tujo-lang', 'es')
  window.localStorage.setItem('tujo-theme', 'light')
  return render(
    <MemoryRouter initialEntries={[initial]}>
      <App />
    </MemoryRouter>,
  )
}

describe('route smoke', () => {
  beforeEach(() => {
    window.localStorage.setItem('tujo-lang', 'es')
  })

  it('renders home without crashing', async () => {
    renderApp('/')
    expect((await screen.findAllByText(/Tujo Logistics/i)).length).toBeGreaterThan(0)
  })

  it('renders 404 for unknown routes', async () => {
    renderApp('/ruta-que-no-existe')
    expect(await screen.findByText(/Página no encontrada/i)).toBeInTheDocument()
  })
})
