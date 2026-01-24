export function StatCard({
  label,
  value,
  accent = "text-slate-100",
}: {
  label: string
  value: number
  accent?: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-[10px] text-slate-300">{label}</div>
      <div className={`text-lg font-extrabold ${accent}`}>{value}</div>
    </div>
  )
}
