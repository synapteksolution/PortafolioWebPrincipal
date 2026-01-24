// src/components/Navbar.tsx
// NOTA: Si estás en React Router, NO uses "use client".
import * as React from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {

  Briefcase,
  Code2,
  Home,
  Layers3,
  Mail,
  Sparkles,
} from "lucide-react"

type NavItem = {
  label: string
  to: string
  title: string
  desc: string
  icon: React.ReactNode
  group: "Principal" | "Servicios" | "Portfolio"
}

const NAV: NavItem[] = [
  {
    label: "Inicio",
    to: "/",
    title: "Inicio",
    desc: "Vista general: enfoque, servicios y CTA.",
    icon: <Home size={16} className="text-slate-200" />,
    group: "Principal",
  },
  {
    label: "Sobre",
    to: "/sobre-nosotros",
    title: "Sobre mí",
    desc: "Visión, misión y propuesta de valor para pymes.",
    icon: <Sparkles size={16} className="text-slate-200" />,
    group: "Principal",
  },
  {
    label: "Servicios",
    to: "/servicios",
    title: "Servicios",
    desc: "MVP web, datos, automatización y chatbots.",
    icon: <Layers3 size={16} className="text-slate-200" />,
    group: "Servicios",
  },
  {
    label: "Portafolio",
    to: "/portafolio",
    title: "Portafolio",
    desc: "Proyectos y casos: producto, datos e IA.",
    icon: <Briefcase size={16} className="text-slate-200" />,
    group: "Portfolio",
  },
  {
    label: "Skills",
    to: "/tecnologias",
    title: "Skills y tecnologías",
    desc: "Stack: web, data scientist, IA y chatbots.",
    icon: <Code2 size={16} className="text-slate-200" />,
    group: "Portfolio",
  },
  {
    label: "Contacto",
    to: "/contacto",
    title: "Contacto",
    desc: "Agenda una conversación y cuéntame tu idea.",
    icon: <Mail size={16} className="text-slate-200" />,
    group: "Principal",
  },
]

function Logo() {
  return (
    <RouterLink
      to="/"
      className="flex items-center gap-3 rounded-2xl px-2 py-2 hover:bg-white/5 transition"
      aria-label="Ir al inicio"
    >
      <div className="relative">
        <div className="absolute inset-0 blur-xl bg-cyan-400/20 rounded-full" />
        <img
          src="synapteksolution.png"
          alt="Logo"
          className="relative size-10 rounded-full border border-white/10 bg-white/5 object-cover"
        />
      </div>
      <div className="hidden sm:block">
        <div className="text-sm font-extrabold tracking-tight text-slate-100">
          Synaptek
        </div>
        <div className="text-[11px] text-slate-400">
          Producto • Datos • GenIA
        </div>
      </div>
    </RouterLink>
  )
}

function QuickBadges() {
  return (
    <div className="hidden lg:flex items-center gap-2">
      <span className="text-[10px] px-2 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-200 font-bold">
        Web
      </span>
      <span className="text-[10px] px-2 py-1 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-200 font-bold">
        Data
      </span>
      <span className="text-[10px] px-2 py-1 rounded-full border border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-200 font-bold">
        IA
      </span>
      <span className="text-[10px] px-2 py-1 rounded-full border border-sky-500/25 bg-sky-500/10 text-sky-200 font-bold">
        Chatbots
      </span>
    </div>
  )
}

function ItemCard({
  item,
  active,
}: {
  item: NavItem
  active?: boolean
}) {
  return (
    <NavigationMenuLink asChild>
      <RouterLink
        to={item.to}
        className={cn(
          "block rounded-2xl p-4 transition",
          "border border-white/10 bg-white/5 hover:bg-white/10",
          active ? "ring-1 ring-white/20 border-white/20" : "",
        )}
      >
        <div className="flex items-start gap-3">
          <div className="grid place-items-center size-9 rounded-xl border border-white/10 bg-white/5">
            {item.icon}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-extrabold text-slate-100 truncate">
              {item.title}
            </div>
            <p className="mt-1 text-sm text-slate-300 leading-snug line-clamp-2">
              {item.desc}
            </p>
          </div>
        </div>
      </RouterLink>
    </NavigationMenuLink>
  )
}

function MegaMenu({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle: string
  items: NavItem[]
}) {
  const location = useLocation()

  return (
    <div className="w-[560px] p-4">
      <div className="mb-3">
        <div className="text-sm font-extrabold text-slate-100">{title}</div>
        <div className="text-xs text-slate-400">{subtitle}</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {items.map((it) => (
          <ItemCard
            key={it.to}
            item={it}
            active={location.pathname === it.to}
          />
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const location = useLocation()

  const principal = React.useMemo(
    () => NAV.filter((x) => x.group === "Principal"),
    [],
  )
  const servicios = React.useMemo(
    () => NAV.filter((x) => x.group === "Servicios"),
    [],
  )
  const portfolio = React.useMemo(
    () => NAV.filter((x) => x.group === "Portfolio"),
    [],
  )

  const isActive = (to: string) => location.pathname === to

  return (
    <header className="sticky top-0 z-50">
      {/* barra superior con blur */}
      <div className="border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/55">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
          <Logo />

          <QuickBadges />

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              className="hidden sm:inline-flex rounded-2xl border-white/20 bg-white/5 text-slate-100 hover:bg-white/10"
            >
              <RouterLink to="/portafolio" className="inline-flex items-center gap-2">
                <Briefcase size={16} />
                Ver portafolio
              </RouterLink>
            </Button>

            <Button
              asChild
              className="rounded-2xl bg-white text-slate-900 hover:bg-white/90"
            >
              <RouterLink to="/contacto" className="inline-flex items-center gap-2">
                <Mail size={16} />
                Contacto
              </RouterLink>
            </Button>
          </div>
        </div>

        {/* menú */}
        <div className="mx-auto max-w-6xl px-4 pb-3 flex justify-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {/* PRINCIPAL */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "rounded-2xl bg-transparent text-slate-100 hover:bg-white/5",
                    isActive("/") || isActive("/sobre-nosotros") || isActive("/contacto")
                      ? "bg-white/5"
                      : "",
                  )}
                >
                  Principal
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-slate-950/90 border border-white/10 rounded-2xl">
                  <MegaMenu
                    title="Principal"
                    subtitle="Inicio, sobre mí y contacto."
                    items={principal}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* SERVICIOS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "rounded-2xl bg-transparent text-slate-100 hover:bg-white/5",
                    isActive("/servicios") ? "bg-white/5" : "",
                  )}
                >
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-slate-950/90 border border-white/10 rounded-2xl">
                  <MegaMenu
                    title="Servicios"
                    subtitle="MVP web, datos, automatización y chatbots."
                    items={servicios}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* PORTFOLIO */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "rounded-2xl bg-transparent text-slate-100 hover:bg-white/5",
                    isActive("/portafolio") || isActive("/tecnologias") ? "bg-white/5" : "",
                  )}
                >
                  Portafolio
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-slate-950/90 border border-white/10 rounded-2xl">
                  <MegaMenu
                    title="Portafolio"
                    subtitle="Proyectos, skills y stack."
                    items={portfolio}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Accesos rápidos (visibles en desktop) */}
              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuLink asChild>
                  <RouterLink
                    to="/servicios"
                    className={cn(
                      "px-4 py-2 rounded-2xl text-sm font-semibold transition",
                      "text-slate-100 hover:bg-white/5",
                      isActive("/servicios") ? "bg-white/5" : "",
                    )}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Layers3 size={16} />
                      Servicios
                    </span>
                  </RouterLink>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuLink asChild>
                  <RouterLink
                    to="/tecnologias"
                    className={cn(
                      "px-4 py-2 rounded-2xl text-sm font-semibold transition",
                      "text-slate-100 hover:bg-white/5",
                      isActive("/tecnologias") ? "bg-white/5" : "",
                    )}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Code2 size={16} />
                      Skills
                    </span>
                  </RouterLink>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="hidden md:block">
                <NavigationMenuLink asChild>
                  <RouterLink
                    to="/contacto"
                    className={cn(
                      "px-4 py-2 rounded-2xl text-sm font-semibold transition",
                      "text-slate-100 hover:bg-white/5",
                      isActive("/contacto") ? "bg-white/5" : "",
                    )}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail size={16} />
                      Contacto
                    </span>
                  </RouterLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}
