// src/components/Inicio.jsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="py-20 px-6 font-sans text-gray-900 rounded-4xl">
      {/* Sección Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-br from-blue-300 to-white rounded-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Soluciones digitales que impulsan tu negocio</h1>
        <p className="text-lg max-w-xl mb-6 text-muted-foreground">
          Somos expertos en desarrollo web, apps móviles e inteligencia artificial.
        </p>
        <Button size="lg" variant="destructive">Solicita una demo</Button>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-20 px-6 bg-blue-950 text-amber-50 rounded-4xl ">
        <h2 className="text-3xl font-bold text-center mb-10">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Desarrollo Web", desc: "Aplicaciones modernas, rápidas y escalables." },
            { title: "Apps Móviles", desc: "Aplicaciones multiplataforma con Flutter o React Native." },
            { title: "IA & Automatización", desc: "Soluciones con inteligencia artificial para tu negocio." },
          ].map((servicio, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{servicio.title}</h3>
                <p className="text-muted-foreground">{servicio.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white text-center rounded-4xl">
        <h2 className="text-3xl font-bold mb-4">¿Tienes una idea? ¡Hablemos!</h2>
        <p className="mb-6">Agenda una reunión y recibe una consultoría sin costo.</p>
        <Button variant="outline" className="">Contáctanos</Button>
      </section>
    </div>
  )
}
