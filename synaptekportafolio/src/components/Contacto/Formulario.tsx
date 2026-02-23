import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Formulario() {
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

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
  }

  return (
    <Card className="w-full max-w-sm mx-auto rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle>Ingresa tu información</CardTitle>
        <CardDescription>Ingresa tu información y nos pondremos en contacto contigo</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label>Nombres</Label>
              <Input name="nombres" type="text" placeholder="Nombres" required />

              <Label>Apellidos</Label>
              <Input name="apellidos" type="text" placeholder="Apellidos" required />

              <Label>Email</Label>
              <Input name="email" type="email" placeholder="Correo corporativo" required />

              <Label>Nombre de la empresa o negocio</Label>
              <Input name="empresa" type="text" placeholder="Mi empresa o negocio" required />

              <Label>Teléfono (Solo en Colombia)</Label>
              <Input name="telefono" type="tel" placeholder="+57" required />

              <Label>Descripción</Label>
              <Input name="descripcion" type="text" placeholder="Descripción del servicio que desea" className="h-12" />
            </div>
          </div>

          {status === "ok" && <p className="text-green-500 text-sm mt-4">¡Mensaje enviado! Te contactaremos pronto.</p>}
          {status === "error" && <p className="text-red-500 text-sm mt-4">Hubo un error, intenta de nuevo.</p>}

          <Button type="submit" className="w-full mt-4">Enviar Información</Button>
        </form>
      </CardContent>
    </Card>
  )
}