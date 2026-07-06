import { useState } from 'react'
import { isPastDate } from './storeTime'

/**
 * Lógica pura de la matriz del calendario: calcula los días del mes visible,
 * el relleno del mes anterior, qué días ya pasaron (anclado a la fecha actual)
 * y la navegación entre meses.
 */
export function useCalendar(initialDate: Date) {
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth()) // 0 = Enero

  // Días del mes actual: [1, 2, ..., n]
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  // Alineación de semana (lunes primero: 0 = Lun, ..., 6 = Dom)
  const startWeekDay = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7

  // Relleno con los últimos días del mes anterior.
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate()
  const prevMonthDays = Array.from(
    { length: startWeekDay },
    (_, i) => daysInPrevMonth - startWeekDay + i + 1,
  )

  // ¿El día del mes visible ya pasó?
  const isPastDay = (dayNum: number) => isPastDate(currentYear, currentMonth, dayNum)

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear((prev) => prev - 1)
    } else {
      setCurrentMonth((prev) => prev - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear((prev) => prev + 1)
    } else {
      setCurrentMonth((prev) => prev + 1)
    }
  }

  /** Mueve la vista al mes/año de una fecha dada (ej. al usar el input date). */
  const showMonthOf = (date: Date) => {
    setCurrentMonth(date.getMonth())
    setCurrentYear(date.getFullYear())
  }

  return {
    currentYear,
    currentMonth,
    currentMonthDays,
    prevMonthDays,
    isPastDay,
    handlePrevMonth,
    handleNextMonth,
    showMonthOf,
  }
}
