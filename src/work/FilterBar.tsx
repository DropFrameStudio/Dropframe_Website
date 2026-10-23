type Option = { label: string; count: number }

export default function FilterBar({
  options,
  active,
  onChange,
}: {
  options: Option[]
  active: string
  onChange: (label: string) => void
}) {
  return (
    <div className="wk-filters" role="group" aria-label="Filter projects">
      {options.map((o) => (
        <button
          key={o.label}
          type="button"
          className="pill"
          aria-pressed={o.label === active}
          onClick={() => onChange(o.label)}
        >
          {o.label}
          <sup>{o.count}</sup>
        </button>
      ))}
    </div>
  )
}
