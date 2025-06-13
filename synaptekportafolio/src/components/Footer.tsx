"use client"

import { Link as RouterLink } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react"; // Using tabler icons (similar to material ones)

export default function Footer() {
  return (
    <footer className="bg-[#0d1023] text-gray-300 py-12 px-6 rounded-4xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        <div>
          <h3 className="text-amber-300 font-semibold mb-4 text-lg">Empresa</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <RouterLink to="/" className="hover:text-white transition-colors">
                Inicio
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/sobre-nosotros" className="hover:text-white transition-colors">
                Quiénes Somos
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contacto" className="hover:text-white transition-colors">
                Contacto
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-amber-300 font-semibold mb-4 text-lg">Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <RouterLink to="/servicios" className="hover:text-white transition-colors">
                Desarrollo Web
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/servicios" className="hover:text-white transition-colors">
                Desarrollo Móvil
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/servicios" className="hover:text-white transition-colors">
                Software a Medida
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/servicios" className="hover:text-white transition-colors">
                Consultoría
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/servicios" className="hover:text-white transition-colors">
                Integraciones API
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/servicios" className="hover:text-white transition-colors">
                Soporte y Mantenimiento
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-amber-300 font-semibold mb-4 text-lg">Tecnologías</h3>
          <ul className="space-y-2 text-sm">
            <li>JavaScript, Python, TypeScript</li>
            <li>React, Vue </li>
            <li>Bases de Datos, CI/CD, Cloud</li>
          </ul>
        </div>
        <div>
          <h3 className="text-amber-300 font-semibold mb-4 text-lg">Clientes y Alianzas</h3>
          <ul className="space-y-2 text-sm">
            <li>Clientes Destacados</li>
            <li>Testimonios</li>
            <li>Alianzas Estratégicas</li>
          </ul>
        </div>
        <div>
          <h3 className="text-amber-300 font-semibold mb-4 text-lg">Blog</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <RouterLink to="/blog" className="hover:text-white transition-colors">
                Últimas Noticias
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/blog" className="hover:text-white transition-colors">
                Casos de Estudio
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-amber-300 font-semibold mb-4 text-lg">Síguenos</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-amber-300 transition-colors"
            >
              <IconBrandFacebook size={24} aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-amber-300 transition-colors"
            >
              <IconBrandTwitter size={24} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-amber-300 transition-colors"
            >
              <IconBrandLinkedin size={24} aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-amber-300 transition-colors"
            >
              <IconBrandInstagram size={24} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-amber-300">
        &copy; {new Date().getFullYear()} Synaptek Solutions. Todos los derechos reservados.
      </div>
    </footer>
  );
}

