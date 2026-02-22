import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
    Home,
    Sparkles,
    Layers3,
    Briefcase,
    Code2,
    Mail,
    Menu,
    X,
    ChevronRight,
    ExternalLink,
    Github,
    Linkedin,
} from "lucide-react"

type NavItem = {
    label: string
    to: string
    icon: React.ComponentType<{ size?: number; className?: string }>
    description: string
}

const NAV_ITEMS: NavItem[] = [
    { label: "Inicio", to: "/", icon: Home, description: "Página principal" },
    { label: "Sobre Nosotros", to: "/sobre-nosotros", icon: Sparkles, description: "Nuestra historia y visión" },
    { label: "Servicios", to: "/servicios", icon: Layers3, description: "Lo que podemos hacer" },
    { label: "Soluciones", to: "/soluciones", icon: Briefcase, description: "Nuestros éxitos" },
    { label: "Garantía", to: "/tecnologias", icon: Code2, description: "Nuestra base técnica" },
    { label: "Contacto", to: "/contacto", icon: Mail, description: "Hablemos" },
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const location = useLocation()

    const isActive = (to: string) => {
        if (to === "/" && location.pathname !== "/") return false
        return location.pathname.startsWith(to)
    }

    const toggleSidebar = () => setIsOpen(!isOpen)

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-6 right-6 z-[60] p-3 rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-xl text-white shadow-2xl hover:bg-white/10 transition-all active:scale-95"
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[50] lg:hidden animate-in fade-in duration-300"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-[55] h-screen transition-all duration-500 ease-in-out",
                    "w-[280px] lg:w-[300px]",
                    "border-r border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-2xl",
                    "flex flex-col",
                    isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                {/* Logo Section */}
                <div className="p-8 pb-4">
                    <Link to="/" className="group flex items-center gap-4 px-2" onClick={() => setIsOpen(false)}>
                        <div className="relative">
                            <div className="absolute inset-0 blur-2xl bg-cyan-400/30 rounded-full group-hover:bg-cyan-400/50 transition-all duration-500" />
                            <img
                                src="synapteksolution.png"
                                alt="Synaptek Logo"
                                className="relative size-12 rounded-2xl border border-white/20 bg-white/5 object-cover transform group-hover:rotate-6 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter text-white">Synaptek</span>
                            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Solutions</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation Section */}
                <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
                    {NAV_ITEMS.map((item) => {
                        const active = isActive(item.to)
                        const Icon = item.icon

                        return (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300",
                                    "hover:bg-white/5",
                                    active
                                        ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10"
                                        : "text-slate-400 hover:text-slate-100"
                                )}
                            >
                                {active && (
                                    <div className="absolute left-0 w-1 h-6 bg-cyan-400 rounded-r-full shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                                )}

                                <div className={cn(
                                    "grid place-items-center size-10 rounded-xl border border-white/5 bg-white/5 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300",
                                    active ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400" : ""
                                )}>
                                    <Icon size={20} />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-sm font-bold tracking-tight">{item.label}</span>
                                    <span className="text-[10px] text-slate-500 font-medium group-hover:text-slate-400 transition-colors">
                                        {item.description}
                                    </span>
                                </div>

                                <ChevronRight
                                    size={14}
                                    className={cn(
                                        "ml-auto opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0",
                                        active ? "opacity-30 translate-x-0" : ""
                                    )}
                                />
                            </Link>
                        )
                    })}
                </nav>

                {/* Footer Section */}
                <div className="p-6 border-t border-white/5 space-y-6">
                    {/* Social Links */}
                    <div className="flex items-center justify-between px-2">
                        {[
                            { icon: Github, href: "https://github.com", label: "Github" },
                            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                            { icon: ExternalLink, href: "#", label: "Portfolio" },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="grid place-items-center size-10 rounded-xl border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
                                aria-label={social.label}
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>

                    {/* Availability Card */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-4 group">
                        <div className="absolute top-0 right-0 p-2">
                            <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                        </div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Status</p>
                        <p className="text-xs font-bold text-slate-100 mb-2">Disponible para proyectos</p>
                        <Link
                            to="/contacto"
                            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            Hablemos ahora <ChevronRight size={10} />
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    )
}
