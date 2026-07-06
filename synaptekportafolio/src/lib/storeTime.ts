/**
 * Utilidad básica para la fecha y el calendario
 */

export function isPastDate(year: number, month: number, day: number): boolean {
  // Compara la fecha del calendario con la fecha actual del sistema.
  // Configuramos ambas a medianoche para una comparación justa de días enteros.
  const checkDate = new Date(year, month, day)
  checkDate.setHours(0, 0, 0, 0)
  
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  return checkDate.getTime() < today.getTime()
}

export function toDateString(year: number, month: number, day: number): string {
  // Retorna formato AAAA-MM-DD
  const m = (month + 1).toString().padStart(2, '0')
  const d = day.toString().padStart(2, '0')
  return `${year}-${m}-${d}`
}
