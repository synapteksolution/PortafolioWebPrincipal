export function SearchBox({
  value,
  onChange,
  placeholder = "Buscar (SQL, APIs, ML, Deploy, Auth...)",
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={[
        "w-full rounded-2xl border border-white/10 bg-white/5",
        "px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-400",
        "outline-none focus:ring-2 focus:ring-white/20",
      ].join(" ")}
    />
  )
}
