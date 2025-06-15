import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Target } from "lucide-react";

export default function SobreNosotros() {
  return (
    
    <div className="py-20 px-6">
      
    <div className=" max-w-full mx-auto p-6 bg-[#000] rounded-3xl">
      <h1 className="text-3xl font-bold text-center mb-6">Sobre Nosotros</h1>
      <p className="text-lg text-blue-50 mb-8">
        Somos Synaptek Solutions, una empresa dedicada a ofrecer soluciones digitales innovadoras para pequeñas y medianas empresas (pymes).
      </p>

      <div className="space-y-6 ">
        <Card className="hover:bg-blue-600 rounded-3xl">
          <CardHeader>
            <Eye className="w-full max-w-sm mx-auto text-indigo-600" aria-hidden="true"  />
            <div>
              <CardTitle className="text-xl font-semibold">...... Visión ......</CardTitle>
              <CardDescription className="text-blue-50">
                Ser un referente regional en soluciones digitales innovadoras para pequeñas y medianas empresas (pymes).
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card className="hover:bg-blue-400 rounded-3xl">
          <CardHeader>
            <Target className="w-full max-w-sm mx-auto text-indigo-400"  aria-hidden="true" />
            <div>
              <CardTitle className="text-xl font-semibold">........ Misión .......</CardTitle>
              <CardDescription className="text-blue-50">
                Ofrecer soluciones personalizadas, escalables y de rápida implementación con enfoque en experiencia del usuario y automatización.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>

    </div>

  );
}
