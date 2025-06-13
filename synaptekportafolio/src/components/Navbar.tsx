"use client"

import * as React from "react"
import { Link as RouterLink } from "react-router-dom"; // Cambia aquí
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (


    <div className="flex justify-center">
      <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Inicio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ListItem href="/" title="Conócenos">
              Breve presentación de la empresa.
            </ListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ListItem href="/sobre-nosotros" title="Sobre Nosotros">
              Historia y misión de la empresa.
            </ListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ListItem href="/servicios" title="Servicios">
              Desarrollo web, aplicaciones móviles, etc.
            </ListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>
         <ImagenEmpresa/>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Portafolio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ListItem href="/portafolio" title="Portafolio">
              Casos de éxito y proyectos destacados.
            </ListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>
       

        <NavigationMenuItem>
          <NavigationMenuTrigger>Tecnologías</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ListItem href="/tecnologias" title="Tecnologías">
              Lenguajes de programación y herramientas.
            </ListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Clientes y Alianzas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ListItem href="/clientes" title="Clientes y Alianzas">
              Logos y testimonios de clientes.
            </ListItem>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
{/* 
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ListItem href="/blog" title="Blog">
              Artículos de interés y noticias.
            </ListItem>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <NavigationMenuTrigger>Contacto</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ListItem href="/contacto" title="Contacto">
              Formulario de contacto y redes sociales.
            </ListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      
    </NavigationMenu>

    </div>
    
  )
}

export default function ImagenEmpresa(){
  return(

    <div>
      <img src="synapteksolution.png" alt="imagen empresa" className="w-25 rounded-full" />
      
    </div>
  )

}


function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <RouterLink to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </RouterLink>
      </NavigationMenuLink>
    </li>
  )
}
