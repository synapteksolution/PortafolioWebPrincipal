import { lazy, Suspense } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { LanguageProvider } from './i18n/LanguageContext';
import { SEOUpdater } from './components/SEOUpdater';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const MethodologyPage = lazy(() => import('./pages/MethodologyPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <LanguageProvider>
      <Router>
        <SEOUpdater />
        <Preloader />
        <div className="flex flex-col min-h-screen bg-[var(--ink-900)] text-[var(--paper)] overflow-x-hidden">
          <Navbar />

          <div className="flex-1 flex flex-col w-full">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[var(--paper-dim)]">Cargando…</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-nosotros" element={<About />} />
                <Route path="/servicios" element={<ServicesPage />} />
                <Route path="/metodologia" element={<MethodologyPage />} />
                <Route path="/portafolio" element={<PortfolioPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/*" element={<Home />} />
              </Routes>
            </Suspense>
          </div>

          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
