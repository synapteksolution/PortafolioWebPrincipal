import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Calendar, CheckCircle, MessageSquare } from 'lucide-react'
import { useCalendar } from '../lib/useCalendar'
import { toDateString } from '../lib/storeTime'

// Array de horas simuladas
const MOCK_HOURS = [
  '09:00', '10:00', '11:00', '13:00', '14:30', '16:00', '17:00'
]

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]

const WEEKDAYS = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM']

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>('')
  
  // Estado del formulario
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const {
    currentYear,
    currentMonth,
    currentMonthDays,
    prevMonthDays,
    isPastDay,
    handlePrevMonth,
    handleNextMonth,
    showMonthOf,
  } = useCalendar(selectedDate)

  useEffect(() => {
    showMonthOf(selectedDate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate])

  const activeMonthLabel = `${MONTHS[currentMonth]} ${currentYear}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedTime) {
      alert("Por favor selecciona una hora disponible.")
      return
    }
    // Simular el envío
    setTimeout(() => {
      setSubmitted(true)
    }, 800)
  }

  const resetForm = () => {
    setSubmitted(false)
    setNombre('')
    setTelefono('')
    setEmail('')
    setSelectedTime('')
  }

  const waMsg = `Hola Napsi Tek, me gustaría agendar un diagnóstico el día ${selectedDate.getDate()} de ${MONTHS[selectedDate.getMonth()]} a las ${selectedTime}. Mi nombre es ${nombre}.`
  const waLink = `https://wa.me/573000000000?text=${encodeURIComponent(waMsg)}`

  return (
    <div className="w-full max-w-5xl mx-auto bg-[var(--ink-900)] border border-white/20 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
      
      {/* LADO IZQUIERDO: CALENDARIO Y HORAS */}
      <div className="w-full md:w-1/2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h4 className="text-xl text-white font-bold tracking-tight flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[var(--moss)]" />
            Disponibilidad
          </h4>
          <div className="flex gap-2 items-center">
            <button onClick={handlePrevMonth} className="text-gray-400 hover:text-white transition-colors p-1">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs tracking-widest uppercase font-bold text-gray-200 py-2 w-32 text-center select-none">
              {activeMonthLabel}
            </span>
            <button onClick={handleNextMonth} className="text-gray-400 hover:text-white transition-colors p-1">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid Calendario */}
        <div className="grid grid-cols-7 gap-2 text-center mb-8">
          {WEEKDAYS.map((day) => (
            <div key={day} className="text-[10px] text-gray-500 mb-2 tracking-wider font-semibold">
              {day}
            </div>
          ))}

          {prevMonthDays.map((d, index) => (
            <div key={`prev-${index}`} className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 mx-auto text-gray-600 text-sm select-none">
              {d}
            </div>
          ))}

          {currentMonthDays.map((d) => {
            const isSelected =
              selectedDate.getDate() === d &&
              selectedDate.getMonth() === currentMonth &&
              selectedDate.getFullYear() === currentYear
            const disabled = isPastDay(d)
            
            return (
              <div
                key={`day-${d}`}
                onClick={() => {
                  if (!disabled) {
                    setSelectedDate(new Date(currentYear, currentMonth, d))
                    setSelectedTime('') // Resetear la hora al cambiar de día
                  }
                }}
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 mx-auto text-sm rounded-full cursor-pointer transition-all duration-200 ${
                  disabled
                    ? 'text-gray-600 cursor-not-allowed opacity-50'
                    : isSelected
                      ? 'font-bold bg-[var(--moss)] text-[var(--ink-900)] shadow-lg scale-110'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {d}
              </div>
            )
          })}
        </div>

        {/* Horas disponibles */}
        <div className="border-t border-gray-800 pt-6">
          <h5 className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-semibold">
            Horas Disponibles
          </h5>
          <div className="flex flex-wrap gap-3">
            {MOCK_HOURS.map((time) => {
              const isSelected = selectedTime === time
              // Simular aleatoriamente algunas horas no disponibles dependiendo del día (para realismo)
              const isDisabled = (d: number, t: string) => {
                if(d % 2 === 0 && (t === '10:00' || t === '16:00')) return true
                if(d % 3 === 0 && (t === '09:00' || t === '14:30')) return true
                return false
              }
              const disabled = isDisabled(selectedDate.getDate(), time)

              if (disabled) {
                return (
                  <button
                    key={time}
                    disabled
                    className="px-4 py-2 border border-gray-800 text-gray-600 cursor-not-allowed text-xs line-through rounded-full"
                  >
                    {time}
                  </button>
                )
              }
              return (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 border text-xs rounded-full transition-all duration-200 ${
                    isSelected
                      ? 'border-white bg-[var(--moss)] text-[var(--ink-900)] font-bold'
                      : 'border-white/20 text-gray-400 hover:border-white/50 hover:text-white'
                  }`}
                >
                  {time}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* LADO DERECHO: FORMULARIO */}
      <div className="w-full md:w-1/2 p-6 md:p-8 bg-[var(--ink-800)]">
        <h4 className="text-xl text-white font-bold tracking-tight mb-8">
          Detalles del Contacto
        </h4>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center h-full pb-10 space-y-6">
            <CheckCircle className="text-[var(--moss)] w-16 h-16" />
            <p className="text-xl text-white font-bold">¡Reserva Solicitada!</p>
            <p className="text-sm text-gray-400 max-w-xs">
              Tu diagnóstico para el día {selectedDate.getDate()} de {MONTHS[selectedDate.getMonth()]} a las {selectedTime} ha sido pre-agendado.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--moss)] hover:bg-[#86bb5e] text-black font-bold text-sm rounded transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Confirmar por WhatsApp
            </a>
            <button onClick={resetForm} className="text-xs text-gray-500 hover:text-white underline mt-4">
              Agendar otra cita
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 flex flex-col">
            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Nombre Completo</label>
              <input
                required
                type="text"
                placeholder="P. ej. Alejandro de la Torre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-[var(--ink-900)] border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Teléfono / WhatsApp</label>
              <input
                required
                type="tel"
                placeholder="P. ej. 300 123 4567"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full bg-[var(--ink-900)] border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Correo Electrónico</label>
              <input
                required
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[var(--ink-900)] border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm"
              />
            </div>
            
            <div className="space-y-1 pt-2">
              <label className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Fecha Seleccionada</label>
              <div className="w-full bg-[var(--ink-900)]/50 border border-white/20 rounded px-4 py-3 text-gray-300 text-sm flex justify-between items-center">
                <span>{toDateString(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate())}</span>
                <span className={selectedTime ? 'text-[var(--moss)] font-bold' : 'text-gray-600'}>
                  {selectedTime || 'Selecciona una hora'}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <button
                type="submit"
                className={`w-full py-4 text-sm font-bold flex items-center justify-center gap-2 transition-all rounded-full ${
                  selectedTime 
                    ? 'bg-[var(--moss)] text-[var(--ink-900)] hover:opacity-90 cursor-pointer shadow-[0_0_15px_rgba(151,208,107,0.3)]' 
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                Solicitar Reserva <CheckCircle className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
