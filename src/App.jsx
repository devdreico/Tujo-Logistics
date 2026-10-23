import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { LangProvider } from './i18n/LangContext'
import Header from './components/Header'
import Footer from './components/Footer'
import PageTransition, { SkipLink } from './components/PageTransition'
import ErrorBoundary from './components/ErrorBoundary'
import WhatsAppFab from './components/WhatsAppFab'

const Home = lazy(() => import('./pages/Home'))
const Nosotros = lazy(() => import('./pages/Nosotros'))
const Servicios = lazy(() => import('./pages/Servicios'))
const Mehdtujo = lazy(() => import('./pages/Mehdtujo'))
const Wholesales = lazy(() => import('./pages/Wholesales'))
const TujoGo = lazy(() => import('./pages/TujoGo'))
const TujoFood = lazy(() => import('./pages/TujoFood'))
const International = lazy(() => import('./pages/International'))
const Rastreo = lazy(() => import('./pages/Rastreo'))
const Faq = lazy(() => import('./pages/Faq'))
const Contacto = lazy(() => import('./pages/Contacto'))
const Aliados = lazy(() => import('./pages/Aliados'))
const Careers = lazy(() => import('./pages/Careers'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const LegalPrivacidad = lazy(() => import('./pages/LegalPrivacidad'))
const LegalTerminos = lazy(() => import('./pages/LegalTerminos'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <img src="/tujo-logo.png" alt="" className="tujo-logo h-12 w-auto object-contain" width={44} height={48} />
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-hint">Tujo Logistics</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <MotionConfig reducedMotion="user">
        <div className="flex min-h-screen flex-col bg-app">
          <SkipLink />
          <Header />
          <ErrorBoundary>
            <Suspense fallback={<RouteFallback />}>
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/nosotros" element={<Nosotros />} />
                  <Route path="/about" element={<Navigate to="/nosotros" replace />} />
                  <Route path="/servicios" element={<Servicios />} />
                  <Route path="/services" element={<Navigate to="/servicios" replace />} />
                  <Route path="/mehd-tujo" element={<Mehdtujo />} />
                  <Route path="/wholesales" element={<Wholesales />} />
                  <Route path="/tujo-go" element={<TujoGo />} />
                  <Route path="/tujo-food" element={<TujoFood />} />
                  <Route path="/international" element={<International />} />
                  <Route path="/international-service" element={<Navigate to="/international" replace />} />
                  <Route path="/rastreo" element={<Rastreo />} />
                  <Route path="/tracking" element={<Navigate to="/rastreo" replace />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/contacto" element={<Contacto />} />
                  <Route path="/contact" element={<Navigate to="/contacto" replace />} />
                  <Route path="/aliados" element={<Aliados />} />
                  <Route path="/partners" element={<Navigate to="/aliados" replace />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/legal/privacidad" element={<LegalPrivacidad />} />
                  <Route path="/legal/terminos" element={<LegalTerminos />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
            </Suspense>
          </ErrorBoundary>
          <Footer />
          <WhatsAppFab />
        </div>
      </MotionConfig>
    </LangProvider>
  )
}
