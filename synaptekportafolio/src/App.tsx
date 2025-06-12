import './App.css'
import { NavigationMenuDemo } from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import SobreNosotros from './pages/AboutUs';
import Servicios from './pages/Servicios';
import Home from './pages/Home';
import Portafolio from './pages/Portafolio';
import Tecnologia from './pages/Tecnologia';
import Clientes from './pages/Clientes';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <NavigationMenuDemo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/tecnologias" element={<Tecnologia />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
      <Footer/>
    </Router>
  )
}

export default App
