import { useEffect, useMemo, useState } from 'react'
import { Calendar, Instagram, Facebook } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { waLink } from '../i18n/translations'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { t } = useLanguage()

  // Mapeamos los links a sus nuevas rutas SPA
  const links = useMemo(
    () => [
      { label: t.nav.links.home, to: '/' },
      { label: t.nav.links.about, to: '/sobre-nosotros' },
      { label: t.nav.links.services || 'Servicios', to: '/servicios' },
      { label: t.nav.links.tech || 'Metodología', to: '/metodologia' },
      { label: t.nav.links.portfolio, to: '/portafolio' },
      { label: t.nav.links.contact, to: '/contacto' },
    ],
    [t]
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Al cambiar de página, cerramos menú móvil y scrolleamos arriba
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-[80px] flex items-center transition-all duration-700 ${
        scrolled ? 'bg-[var(--ink-900)]/95 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]' : 'bg-[var(--ink-900)]/50 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8 flex items-center justify-between h-full">
        {/* Zone 1: Logo */}
        <div className="flex items-center h-full">
          <Link to="/" className="flex items-center group h-full">
            <img
              src="/images/Logo.jpeg"
              alt={t.nav.logoAlt}
              className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 h-[64px] w-[64px] rounded-full border-2 border-[var(--moss)]/30 hover:border-[var(--moss)]"
              loading="eager"
              fetchPriority="high"
            />
          </Link>
        </div>

        {/* Separator Logo / Nav */}
        <div className="hidden lg:block w-[1px] h-8 bg-gray-800 mx-6"></div>

        {/* Zone 2: Navigation */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8 h-full flex-1 justify-center px-4">
          {links.map((link) => {
            const isActive = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link flex items-center h-full px-1 text-[0.75rem] font-medium tracking-[0.15em] uppercase transition-all duration-300 border-b-2 ${
                  isActive
                    ? 'text-white border-[var(--moss)]'
                    : 'text-gray-400 hover:text-white border-transparent'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Separator Nav / Right */}
        <div className="hidden lg:block w-[1px] h-8 bg-gray-800 mx-6"></div>

        {/* Zone 3: Right (Socials + Reserva + CTA) */}
        <div className="hidden lg:flex items-center h-full">

          {/* Socials */}
          <div className="flex items-center gap-4 px-2">
            <a
              href="https://www.instagram.com/napsitek/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#E1306C] hover:scale-110 transition-all duration-300"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/napsitek/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#1877F2] hover:scale-110 transition-all duration-300"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={waLink(t.nav.whatsappMsg)}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#25D366] hover:scale-110 transition-all duration-300 flex items-center justify-center"
              title="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
          </div>

          {/* Separator */}
          <div className="w-[1px] h-8 bg-gray-800 mx-4"></div>

          {/* Language Switcher */}
          <LanguageSwitcher className="px-2" />

          {/* Separator */}
          <div className="w-[1px] h-8 bg-gray-800 mx-4"></div>

          {/* Reserva CTA */}
          <Link
            to="/contacto"
            className="ml-2 bg-[var(--moss)] hover:bg-[var(--moss-light)] text-white font-bold text-[0.65rem] tracking-[0.2em] uppercase py-2.5 px-6 rounded-[24px] transition-colors flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.nav.cta}</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 bg-transparent border-none cursor-pointer z-50"
          aria-label={t.nav.openMenu}
        >
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[80px] left-0 w-full bg-[var(--ink-900)]/95 backdrop-blur-md overflow-hidden transition-all duration-500 border-b border-gray-800 ${
          menuOpen ? 'max-h-[500px] py-6' : 'max-h-0 py-0 border-transparent'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {links.map((link) => {
            const isActive = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${isActive ? 'text-[var(--moss)]' : 'text-gray-300 hover:text-white'}`}
              >
                {link.label}
              </Link>
            )
          })}

          <LanguageSwitcher className="mt-2" />

          <Link
            to="/contacto"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[var(--moss)] hover:bg-[var(--moss-light)] text-white font-bold text-[0.65rem] tracking-[0.2em] uppercase py-3 px-6 rounded-[24px] mt-4 transition-colors w-full max-w-[200px]"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.nav.cta}</span>
          </Link>

          <div className="flex gap-8 mt-4">
            <a
              href="https://www.instagram.com/napsitek/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#E1306C] hover:scale-110 transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/napsitek/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#1877F2] hover:scale-110 transition-all duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href={waLink(t.nav.whatsappMsg)}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#25D366] hover:scale-110 transition-all duration-300 flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
