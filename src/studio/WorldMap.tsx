import { useMemo } from "react"
import { GRID_COLS, GRID_ROWS, landDots } from "./landDots"
import { mapLabel, mapMarkers } from "./content"
import Reveal from "./Reveal"

const STEP = 3

/** Static dot-grid world. Replace the contents of <div data-map-slot> with a Three.js canvas later. */
export default function WorldMap() {
  const land = useMemo(
    () =>
      landDots
        .map(([c, r]) => `M${c + 0.3} ${r + 0.3}h0.4v0.4h-0.4z`)
        .join(""),
    [],
  )

  const lines = []
  for (let c = 0; c <= GRID_COLS; c += 10)
    lines.push(<path key={`v${c}`} d={`M${c} 0V${GRID_ROWS}`} />)
  for (let r = 0; r <= GRID_ROWS; r += 10)
    lines.push(<path key={`h${r}`} d={`M0 ${r}H${GRID_COLS}`} />)

  return (
    <section className="st-map" aria-label="Global reach">
      <Reveal className="st-map-head">
        <p className="eyebrow">{mapLabel}</p>
        <p className="eyebrow st-map-note">Markers illustrative</p>
      </Reveal>
      <div className="st-map-slot" data-map-slot="three-js">
        <svg
          viewBox={`0 0 ${GRID_COLS} ${GRID_ROWS}`}
          role="img"
          aria-label="Dot-grid world map with a handful of highlighted points"
          preserveAspectRatio="xMidYMid meet"
        >
          <g className="st-map-grid" strokeWidth="0.05" fill="none">
            {lines}
          </g>
          <path className="st-map-land" d={land} />
          {mapMarkers.map((m) => {
            const x = (m.lng + 180) / STEP + 0.5
            const y = (80 - m.lat) / STEP + 0.5
            return (
              <g key={m.id} className="st-marker">
                <rect
                  className="st-marker-ring"
                  x={x - 1.4}
                  y={y - 1.4}
                  width="2.8"
                  height="2.8"
                  fill="none"
                  strokeWidth="0.1"
                />
                <rect x={x - 0.5} y={y - 0.5} width="1" height="1" />
              </g>
            )
          })}
        </svg>
      </div>
    </section>
  )
}
