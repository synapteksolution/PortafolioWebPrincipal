// src/components/Portafolio.jsx
import { Card, CardContent } from "@/components/ui/card"

const categorias = [
  {
    nombre: "Frontend",
    proyectos: [
      {
        titulo: "Landing page moderna",
        descripcion: "Landing desarrollada con Next.js y TailwindCSS. Enfocada en SEO, diseño responsivo y performance (SSR/SSG).",
        tecnologias: ["Next.js", "TailwindCSS", "SEO", "SSR/SSG"],
      },
      {
        titulo: "Dashboard administrativo",
        descripcion: "Panel con React, gráficos con Chart.js y consumo de APIs usando Axios. Incluye autenticación.",
        tecnologias: ["React", "Chart.js", "Axios", "Auth"],
      },
      {
        titulo: "Tienda en línea básica",
        descripcion: "E-commerce con Next.js, carrito de compras, filtros y simulación de pagos.",
        tecnologias: ["Next.js", "Context API", "Mock Payments"],
      },
    ],
  },
  {
    nombre: "Backend",
    proyectos: [
      {
        titulo: "API RESTful de tareas",
        descripcion: "Desarrollada con NestJS. Incluye autenticación JWT y pruebas unitarias.",
        tecnologias: ["NestJS", "JWT", "Pruebas Unitarias"],
      },
      {
        titulo: "Sistema de reservas",
        descripcion: "Aplicación backend con NestJS y PostgreSQL. Incluye validaciones, relaciones y roles.",
        tecnologias: ["NestJS", "PostgreSQL", "Roles", "Validaciones"],
      },
      {
        titulo: "Chat en tiempo real",
        descripcion: "Servidor con NestJS y WebSockets. Manejo de salas, notificaciones y estructura escalable.",
        tecnologias: ["NestJS", "WebSockets", "TypeORM"],
      },
    ],
  },
  {
    nombre: "Bases de Datos",
    proyectos: [
      {
        titulo: "Gestión de inventarios (CRM)",
        descripcion: "Sistema robusto con NestJS y PostgreSQL. Relaciones complejas y lógica empresarial.",
        tecnologias: ["NestJS", "PostgreSQL", "ORM", "Relaciones"],
      },
      {
        titulo: "Blog / Red Social mínima",
        descripcion: "Proyecto con Node.js y MongoDB. Muestra el uso de esquemas flexibles y búsqueda de texto.",
        tecnologias: ["Node.js", "MongoDB", "Text Search", "Relaciones embebidas"],
      },
    ],
  },
]

export default function Portafolio() {
  return (


    <div className="py-20 px-6">
      <section id="portafolio" className="py-20 px-6 rounded-4xl">
      <h2 className="text-3xl font-bold text-center mb-12 text-amber-300 text-shadow-amber-200">Portafolio de Proyectos</h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {categorias.map((categoria, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold mb-6 text-purple-300 ">{categoria.nombre}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoria.proyectos.map((proyecto, j) => (
                <Card key={j} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">{proyecto.titulo}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{proyecto.descripcion}</p>
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tec, k) => (
                        <span
                          key={k}
                          className="bg-gray-100 text-xs text-gray-700 px-2 py-1 rounded-full"
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

    </div>
    
  )
}
