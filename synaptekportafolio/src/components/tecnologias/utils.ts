export const nivelLabel = (nivel: number): string => {
    if (nivel >= 90) return "Experto"
    if (nivel >= 75) return "Avanzado"
    if (nivel >= 50) return "Intermedio"
    return "Principiante"
}

export const nivelPct = (nivel: number): number => {
    return nivel
}
