import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  ExternalLink,
  Github,
  Layout,
  Database,
  Server,
  Rocket,
  ArrowUpRight
} from "lucide-react"

type Proyecto = {
  titulo: string
  descripcion: string
  tecnologias: string[]
  imagen?: string
  link?: string
  github?: string
  destacado?: boolean
}

type Categoria = {
  nombre: string
  icono: React.ReactNode
  proyectos: Proyecto[]
}

const categorias: Categoria[] = [
  {
    nombre: "Diseño y Ventas Digitales",
    icono: <Layout size={20} className="text-cyan-400" />,
    proyectos: [
      {
        titulo: "Páginas de Venta (Landing Pages)",
        descripcion: "Sitios web diseñados exclusivamente para convertir visitantes en clientes. Ideales para lanzar productos o captar contactos rápidamente.",
        tecnologias: ["Diseño Moderno", "Ventas", "Google Ready", "Rápido"],
        imagen: "/LandingPageProducto/Landing.png",
        destacado: true,
      },
      {
        titulo: "Pasarela de Pagos Segura",
        descripcion: "Sistema de cobro fácil de usar para tus clientes, con un proceso de pago fluido que evita abandonos en la compra.",
        tecnologias: ["Cobros Online", "Seguridad", "Fácil de usar"],
        imagen: "/LandingPageProducto/Pasarela de pagos.png",
      },
      {
        titulo: "Panel de Control para Negocios",
        descripcion: "Una herramienta visual para ver tus métricas, estadísticas y resultados de forma clara y sin complicaciones.",
        tecnologias: ["Gráficos", "Reportes", "Control total"],
        imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
  {
    nombre: "Automatización y Procesos",
    icono: <Server size={20} className="text-purple-400" />,
    proyectos: [
      {
        titulo: "Sistemas a Medida",
        descripcion: "Creamos herramientas personalizadas que se adaptan a la forma en que trabaja tu empresa, no al revés.",
        tecnologias: ["Escalable", "Robusto", "Personalizado"],
      },
      {
        titulo: "Robotización de Tareas (IA)",
        descripcion: "Conectamos tus herramientas (WhatsApp, Email, CRM) para que trabajen solas y ahorres horas de trabajo manual cada día.",
        tecnologias: ["Ahorro de Tiempo", "Inteligencia Artificial"],
      },
    ],
  },
  {
    nombre: "Orden y Gestión de Datos",
    icono: <Database size={20} className="text-emerald-400" />,
    proyectos: [
      {
        titulo: "Gestión de Clientes (CRM)",
        descripcion: "Organizamos toda la información de tus clientes en un solo lugar para que nunca pierdas una oportunidad de venta.",
        tecnologias: ["Orden", "Base de Datos", "Eficiencia"],
      },
    ],
  },
]

export default function Portafolio() {
  return (
    <main className="relative min-h-screen pb-20">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 size-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-0 size-[500px] bg-fuchsia-500/5 blur-[120px] rounded-full pointer-events-none" />

      <section id="portafolio" className="relative max-w-7xl mx-auto px-6 pt-16">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs mb-4">
            <Rocket size={14} className="text-cyan-400" />
            Nuestras Soluciones
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">éxito</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg">
            Una selección de soluciones construidas para resolver problemas reales, desde landing pages que venden hasta infraestructuras backend escalables.
          </p>
        </div>

        <div className="space-y-24">
          {categorias.map((categoria, i) => (
            <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                <div className="p-2 rounded-xl border border-white/10 bg-white/5 shadow-inner">
                  {categoria.icono}
                </div>
                <h3 className="text-2xl font-bold text-slate-200">{categoria.nombre}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoria.proyectos.map((proyecto, j) => (
                  <Card key={j} className="group relative bg-slate-900/40 border-white/10 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]">
                    {/* Image Section */}
                    <div className="relative aspect-video overflow-hidden">
                      {proyecto.imagen ? (
                        <img
                          src={proyecto.imagen}
                          alt={proyecto.titulo}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-950/50 flex items-center justify-center">
                          <Rocket size={40} className="text-slate-800" />
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                        <button className="p-3 rounded-full bg-white text-slate-950 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                          <ExternalLink size={20} />
                        </button>
                        <button className="p-3 rounded-full border border-white text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                          <Github size={20} />
                        </button>
                      </div>

                      {proyecto.destacado && (
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-lg">
                          Nuevo / Destacado
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6">
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <h4 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">
                          {proyecto.titulo}
                        </h4>
                        <ArrowUpRight size={18} className="text-slate-600 group-hover:text-cyan-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>

                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {proyecto.descripcion}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {proyecto.tecnologias.map((tec, k) => (
                          <span
                            key={k}
                            className="text-[10px] font-bold text-slate-400 px-2.5 py-1 rounded-lg border border-white/5 bg-white/5 uppercase tracking-tighter group-hover:border-cyan-400/30 group-hover:text-cyan-400/70 transition-colors"
                          >
                            {tec}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
