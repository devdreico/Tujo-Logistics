import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import RateSimulator from '../components/RateSimulator'
import { LangProvider, useLang } from '../i18n/LangContext'
import { formatCOP, formatNumber, formatDate } from '../utils/format'

function renderWithProvider(ui) {
  window.localStorage.setItem('tujo-lang', 'es')
  window.localStorage.setItem('tujo-theme', 'light')
  return render(
    <MemoryRouter>
      <LangProvider>{ui}</LangProvider>
    </MemoryRouter>,
  )
}

describe('format utils', () => {
  it('formats numbers by locale', () => {
    expect(formatNumber(1234, 'es')).toMatch(/1[.,]234/)
    expect(formatNumber(1234, 'en')).toBe('1,234')
  })

  it('formats COP', () => {
    expect(formatCOP(12400, 'en')).toContain('12,400')
    expect(formatCOP(12400, 'en')).toContain('COP')
  })

  it('formats dates', () => {
    expect(formatDate('2026-09-12', 'en', { long: true })).toContain('2026')
    expect(formatDate('2026-09-12', 'es')).toBeTruthy()
  })
})

describe('i18n L()', () => {
  function Probe() {
    const { L, setLang } = useLang()
    return (
      <div>
        <span data-testid="val">{L({ es: 'hola', en: 'hello' })}</span>
        <button type="button" onClick={() => setLang('en')}>en</button>
        <button type="button" onClick={() => setLang('es')}>es</button>
      </div>
    )
  }

  it('picks language', () => {
    renderWithProvider(<Probe />)
    expect(screen.getByTestId('val')).toHaveTextContent('hola')
    fireEvent.click(screen.getByText('en'))
    expect(screen.getByTestId('val')).toHaveTextContent('hello')
  })
})

describe('RateSimulator', () => {
  beforeEach(() => {
    window.localStorage.setItem('tujo-lang', 'es')
  })

  afterEach(() => {
    cleanup()
  })

  it('renders estimated fare without boolean bugs', () => {
    renderWithProvider(<RateSimulator />)
    expect(screen.getByText(/Tarifa mínima estimada/i)).toBeInTheDocument()
    expect(screen.queryByText(/\+\$true/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/\+\$false/i)).not.toBeInTheDocument()
  })

  it('shows overweight surcharge as amount when weight exceeds mode max', () => {
    renderWithProvider(<RateSimulator />)
    const radios = screen.getAllByRole('radio')
    expect(radios.length).toBeGreaterThanOrEqual(3)
    fireEvent.click(radios[0])
    const kg = screen.getByLabelText(/peso del paquete/i)
    fireEvent.change(kg, { target: { value: '6' } })
    expect(screen.getByText(/sobrepeso/i)).toBeInTheDocument()
  })
})
