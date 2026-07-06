import * as React from "react"

export function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300",
        "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20",
        active ? "bg-white/20 border-cyan-400/50 text-white ring-1 ring-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]" : "",
      ].join(" ")}
    >
      {children}
    </button>
  )
}
