import type { ReactNode } from "react"

export interface Skill {
    area: string
    nombre: string
    icono: ReactNode
    core?: boolean
    nivel: number
    propuesta: string
    tags: string[]
}
