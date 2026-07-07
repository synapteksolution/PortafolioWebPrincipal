import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Link to="/" className="logo flex items-center font-sans font-bold text-[15px] tracking-tight text-[var(--paper)]">
          <img src="/images/logo2.jpeg" alt="Napsi Tek Logo" className="h-14 w-14 object-cover rounded-full border border-gray-700" />
        </Link>
        <div className="flinks flex gap-6 mt-6 md:mt-0">
          <Link to="/sobre-nosotros" className="hover:text-[var(--moss)] transition-colors">Sobre nosotros</Link>
          <Link to="/servicios" className="hover:text-[var(--moss)] transition-colors">Servicios</Link>
          <Link to="/portafolio" className="hover:text-[var(--moss)] transition-colors">Portafolio</Link>
          <a href="https://wa.me/message/XRT5KYQZT64ZP1" target="_blank" rel="noreferrer" className="text-[#25D366] hover:text-[#20b858] font-bold transition-colors">WhatsApp</a>
          <Link to="/contacto" className="hover:text-[var(--moss)] transition-colors">Contacto</Link>
        </div>
        <span>© 2026 Napsi Tek — software para negocios.</span>
      </div>
    </footer>
  )
}
