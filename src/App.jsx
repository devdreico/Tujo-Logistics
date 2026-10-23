import { Route, Routes } from 'react-router-dom'
import { LangProvider } from './i18n/LangContext'
import Header from './components/Header'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Mehdtujo from './pages/Mehdtujo'
import Wholesales from './pages/Wholesales'
import TujoGo from './pages/TujoGo'
import TujoFood from './pages/TujoFood'
import International from './pages/International'
import Rastreo from './pages/Rastreo'
import Faq from './pages/Faq'
import Contacto from './pages/Contacto'
import Aliados from './pages/Aliados'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import LegalPrivacidad from './pages/LegalPrivacidad'
import LegalTerminos from './pages/LegalTerminos'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <LangProvider>
      <div className="flex min-h-screen flex-col bg-paper">
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/mehd-tujo" element={<Mehdtujo />} />
            <Route path="/wholesales" element={<Wholesales />} />
            <Route path="/tujo-go" element={<TujoGo />} />
            <Route path="/tujo-food" element={<TujoFood />} />
            <Route path="/international" element={<International />} />
            <Route path="/rastreo" element={<Rastreo />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/aliados" element={<Aliados />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/legal/privacidad" element={<LegalPrivacidad />} />
            <Route path="/legal/terminos" element={<LegalTerminos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </LangProvider>
  )
}
