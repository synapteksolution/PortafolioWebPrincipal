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
    <footer className="bg-slate-950/50 backdrop-blur-xl text-slate-400 py-16 px-6 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src="synapteksolution.png" alt="Logo" className="size-8 rounded-lg border border-white/10" />
            <span className="text-xl font-black text-white tracking-tighter">Synaptek</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Impulsando la transformación digital de pymes con desarrollo web de alto impacto,
            automatización inteligente y decisiones basadas en datos.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: IconBrandFacebook, href: "#" },
              { icon: IconBrandTwitter, href: "#" },
              { icon: IconBrandLinkedin, href: "#" },
              { icon: IconBrandInstagram, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="size-10 grid place-items-center rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-all"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:pl-10">
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegación</h3>
          <ul className="space-y-3 text-sm">
            <li><RouterLink to="/" className="hover:text-cyan-400 transition-colors">Inicio</RouterLink></li>
            <li><RouterLink to="/sobre-nosotros" className="hover:text-cyan-400 transition-colors">Sobre Nosotros</RouterLink></li>
            <li><RouterLink to="/servicios" className="hover:text-cyan-400 transition-colors">Servicios</RouterLink></li>
            <li><RouterLink to="/soluciones" className="hover:text-cyan-400 transition-colors">Soluciones</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Potencia</h3>
          <ul className="space-y-3 text-sm">
            <li>Landing Pages MVP</li>
            <li>Aplicativos Web SaaS</li>
            <li>Automatización n8n</li>
            <li>Chatbots GenIA</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-cyan-400 font-bold">Email:</span>
              <span>synapteksoluciones@gmail.com</span>
            </li>
            <li>
              <RouterLink
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white text-slate-950 font-bold hover:bg-cyan-400 transition-all"
              >
                Solicitar Propuesta
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p>&copy; {new Date().getFullYear()} Synaptek Solutions. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
}

