import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import {
  User,
  Mail,
  Building2,
  Phone,
  Briefcase,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle
} from "lucide-react"

export default function Formulario({ className }: { className?: string }) {
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.currentTarget

    try {
      const response = await fetch("https://formspree.io/f/xbdapjwz", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("ok")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className={cn(
      "w-full rounded-3xl overflow-hidden border-white/10 bg-slate-950/40 backdrop-blur-xl shadow-2xl",
      className
    )}>
      <CardHeader className="space-y-1 pb-8">
        <div className="flex items-center gap-2 text-cyan-400 mb-2">
          <MessageSquare size={16} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Formulario de contacto</span>
        </div>
        <CardTitle className="text-2xl font-black text-white tracking-tight">Impulsa tu proyecto</CardTitle>
        <CardDescription className="text-slate-400">
          Déjanos tus datos y un consultor experto se pondrá en contacto contigo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <User size={14} className="text-cyan-400" />
                Nombres
              </Label>
              <Input
                name="nombres"
                placeholder="Juan"
                required
                className="bg-white/5 border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/20 transition-all placeholder:text-slate-600"
              />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <User size={14} className="text-cyan-400" />
                Apellidos
              </Label>
              <Input
                name="apellidos"
                placeholder="Pérez"
                required
                className="bg-white/5 border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/20 transition-all placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <Mail size={14} className="text-cyan-400" />
                Email
              </Label>
              <Input
                name="email"
                type="email"
                placeholder="juan@empresa.com"
                required
                className="bg-white/5 border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/20 transition-all placeholder:text-slate-600"
              />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <Phone size={14} className="text-cyan-400" />
                Teléfono
              </Label>
              <Input
                name="telefono"
                type="tel"
                placeholder="+57 321..."
                required
                className="bg-white/5 border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/20 transition-all placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <Building2 size={14} className="text-cyan-400" />
              Empresa / Negocio
            </Label>
            <Input
              name="empresa"
              placeholder="Nombre de tu organización"
              required
              className="bg-white/5 border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/20 transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <Briefcase size={14} className="text-cyan-400" />
              Servicio de interés
            </Label>
            <select
              name="servicio"
              required
              className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
            >
              <option value="" className="bg-slate-900">Selecciona una opción</option>
              <option value="web" className="bg-slate-900">Desarrollo Web (MVP / Landing)</option>
              <option value="software" className="bg-slate-900">Software a medida</option>
              <option value="data" className="bg-slate-900">Data & Dashboards</option>
              <option value="chatbots" className="bg-slate-900">Chatbots / IA</option>
              <option value="integraciones" className="bg-slate-900">Integraciones / APIs</option>
              <option value="otro" className="bg-slate-900">Otro</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <MessageSquare size={14} className="text-cyan-400" />
              ¿En qué podemos ayudarte?
            </Label>
            <textarea
              name="descripcion"
              placeholder="Cuéntanos brevemente tu idea..."
              className="flex min-h-[100px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
            />
          </div>

          {status === "ok" && (
            <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 size={16} />
              <p>¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-in fade-in slide-in-from-top-2">
              <AlertCircle size={16} />
              <p>Ocurrió un error. Por favor, intenta nuevamente.</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-xl bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="size-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                Enviando...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                Enviar Información
                <Send size={16} />
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
