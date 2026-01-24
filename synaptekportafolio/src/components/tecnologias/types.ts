// src/components/skills/types.ts
import type { ReactElement } from "react"

export type SkillArea =
  | "Data Scientist"
  | "Desarrollo Web"
  | "Desarrollo de Escritorio"
  | "Chatbots"
  | "Inteligencia Artificial"

export type Nivel = 1 | 2 | 3 | 4 | 5

export interface Skill {
  id: string
  nombre: string
  icono: ReactElement
  area: SkillArea
  nivel: Nivel
  core?: boolean
  tags: string[]
  // “lógica de negocio”: lo que comunicas al reclutador/cliente
  propuesta: string
}
