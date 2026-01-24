import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Formulario() {
  return (
    <Card className="w-full max-w-sm  mx-auto rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle >Ingresa tu información</CardTitle>
        <CardDescription>
          Ingresa tu Información y nos pondremos en contacto contigo 
        </CardDescription>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6 ">
            <div className="grid gap-2">

               <Label htmlFor="email">Nombres</Label>

               <Input
                id="email"
                type="email"
                placeholder="Nombres"
                required
              />
              <Label htmlFor="email">Apellidos</Label>
              <Input
                id="email"
                type="email"
                placeholder="Apellidos"
                required
              />

              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Correo corporativo"
                required
              />

              <Label htmlFor="empresa">Nombre de la empresa o negocio</Label>
                 <Input
                id="empresa"
                type="text"
                placeholder="Mi empresa o negocio"
                required
              />
              <Label htmlFor="telefono">Telefono (Solo en Colombia)</Label>
                 <Input
                id="telefono"
                type="number"
                placeholder="+57"
                required
              />

              <Label htmlFor="descripcion">Descripción : Cuentenos el tipo de servicio que desea </Label>
                 <Input
                id="email"
                type="text"
                placeholder="Descripción "
                className="text-lg py-2 px-3 h-12 w-full"
                
              />
            </div>
           
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Enviar Información
        </Button>
        
      </CardFooter>
    </Card>
  )
}
