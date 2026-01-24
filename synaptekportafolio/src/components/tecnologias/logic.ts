import type { Skill, SkillCategory } from "./types"

export type SkillsFilterState = {
  category: SkillCategory | "Todas"
  onlyCore: boolean
  query: string
}

export const computeStats = (skills: Skill[]) => {
  const total = skills.length
  const core = skills.filter((s) => s.core).length
  const top = skills.filter((s) => s.level >= 4).length
  return { total, core, top }
}

export const filterSkills = (skills: Skill[], state: SkillsFilterState) => {
  const q = state.query.trim().toLowerCase()
  return skills
    .filter((s) => (state.category === "Todas" ? true : s.category === state.category))
    .filter((s) => (state.onlyCore ? !!s.core : true))
    .filter((s) => {
      if (!q) return true
      return (
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.focus.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
      )
    })
    .sort((a, b) => {
      const ca = a.core ? 1 : 0
      const cb = b.core ? 1 : 0
      if (cb !== ca) return cb - ca
      if (b.level !== a.level) return b.level - a.level
      return a.name.localeCompare(b.name)
    })
}

export const groupByCategory = (skills: Skill[]) => {
  const map = new Map<string, Skill[]>()
  for (const s of skills) {
    const k = s.category
    map.set(k, [...(map.get(k) ?? []), s])
  }
  return map
}
