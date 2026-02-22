import { lazy, Suspense } from 'react'
import './styles/App.css'
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';

const SobreNosotros = lazy(() => import('./pages/AboutUs'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Home = lazy(() => import('./pages/Home'));
const Portafolio = lazy(() => import('./pages/Portafolio'));
const Tecnologias = lazy(() => import('./pages/Tecnologias'));
const Clientes = lazy(() => import('./pages/Clientes'));
const Blog = lazy(() => import('./pages/Blog'));
const Contacto = lazy(() => import('./pages/Contacto'));

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen bg-slate-950 overflow-x-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col lg:pl-[300px] w-full min-h-screen transition-all duration-500">
          <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-300">Cargando…</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/soluciones" element={<Portafolio />} />
                <Route path="/tecnologias" element={<Tecnologias />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contacto" element={<Contacto />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
