// src/components/Tecnologias.tsx
import { Card, CardContent } from "@/components/ui/card"
import type { ReactElement } from "react"
import { SiReact, SiNextdotjs, SiNestjs, SiPostgresql, SiMongodb, SiTypescript, SiTailwindcss, SiNodedotjs } from "react-icons/si"

interface Tecnologia {
  nombre: string
  icono: ReactElement
  categoria: string
}

const tecnologias: Tecnologia[] = [
  { nombre: "React", icono: <SiReact className="text-blue-500" size={32} />, categoria: "Frontend" },
  { nombre: "Next.js", icono: <SiNextdotjs className="text-white" size={32} />, categoria: "Frontend" },
  { nombre: "TailwindCSS", icono: <SiTailwindcss className="text-sky-400" size={32} />, categoria: "Frontend" },
  { nombre: "NestJS", icono: <SiNestjs className="text-red-600" size={32} />, categoria: "Backend" },
  { nombre: "Node.js", icono: <SiNodedotjs className="text-green-600" size={32} />, categoria: "Backend" },
  { nombre: "PostgreSQL", icono: <SiPostgresql className="text-blue-700" size={32} />, categoria: "Base de Datos" },
  { nombre: "MongoDB", icono: <SiMongodb className="text-green-500" size={32} />, categoria: "Base de Datos" },
  { nombre: "TypeScript", icono: <SiTypescript className="text-blue-600" size={32} />, categoria: "Lenguaje" },
]

export default function Tecnologias() {
  return (

    <div className="py-20 px-6">
      <section id="tecnologias" className="py-20 px-6 bg-[#1f0f46] rounded-full border-4 border-purple-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-amber-200">Tecnologías </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {tecnologias.map((tec, index) => (
          <Card key={index} className="flex flex-col items-center justify-center p-6 hover:shadow-md transition-shadow rounded-full">
            <CardContent className="flex flex-col items-center space-y-2">
              {tec.icono}
              <span className="text-sm font-medium">{tec.nombre}</span>
              <span className="text-xs text-gray-500">{tec.categoria}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </div>
    
  )
}
