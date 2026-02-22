export const areaMeta: Record<string, { glow: string; ring: string; badge: string; label: string }> = {
    frontend: {
        glow: "group-hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]",
        ring: "group-hover:ring-cyan-500/50",
        badge: "bg-cyan-500/10 text-cyan-200 border-cyan-500/25",
        label: "Frontend",
    },
    backend: {
        glow: "group-hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]",
        ring: "group-hover:ring-emerald-500/50",
        badge: "bg-emerald-500/10 text-emerald-200 border-emerald-500/25",
        label: "Backend",
    },
    workflow: {
        glow: "group-hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]",
        ring: "group-hover:ring-purple-500/50",
        badge: "bg-purple-500/10 text-purple-200 border-purple-500/25",
        label: "Automatización",
    },
    diseño: {
        glow: "group-hover:shadow-[0_0_30px_-10px_rgba(244,63,94,0.3)]",
        ring: "group-hover:ring-rose-500/50",
        badge: "bg-rose-500/10 text-rose-200 border-rose-500/25",
        label: "Diseño",
    },
}
