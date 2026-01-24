// src/components/skills/utils.ts
import type { Skill } from "./types"

export const nivelPct = (n: Skill["nivel"]) => n * 20

export const nivelLabel = (n: Skill["nivel"]) => {
  if (n === 5) return "Fuerte"
  if (n === 4) return "Avanzado"
  if (n === 3) return "Intermedio"
  if (n === 2) return "Básico+"
  return "Básico"
}

const norm = (s: string) => s.trim().toLowerCase()

export function matchesQuery(s: Skill, q: string) {
  const query = norm(q)
  if (!query) return true
  return (
    norm(s.nombre).includes(query) ||
    norm(s.area).includes(query) ||
    norm(s.propuesta).includes(query) ||
    s.tags.some((t) => norm(t).includes(query))
  )
}

export function sortSkills(a: Skill, b: Skill) {
  const coreA = a.core ? 1 : 0
  const coreB = b.core ? 1 : 0
  if (coreB !== coreA) return coreB - coreA
  if (b.nivel !== a.nivel) return b.nivel - a.nivel
  return a.nombre.localeCompare(b.nombre)
}
