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
        "px-3 py-1.5 rounded-full text-xs font-semibold border transition",
        "backdrop-blur bg-white/5 border-white/10 text-slate-100 hover:bg-white/10",
        active ? "bg-white/10 border-white/25 ring-1 ring-white/20" : "",
      ].join(" ")}
    >
      {children}
    </button>
  )
}
