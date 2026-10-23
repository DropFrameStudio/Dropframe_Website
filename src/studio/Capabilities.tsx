import { useState } from "react"
import Media from "./Media"
import Reveal from "./Reveal"
import { capabilities } from "./content"

export default function Capabilities() {
  const [open, setOpen] = useState<string>(capabilities.items[0].id)

  return (
    <section className="st-caps" aria-labelledby="st-caps-title">
      <Reveal className="st-section-head">
        <p className="eyebrow">{capabilities.eyebrow}</p>
        <h2 id="st-caps-title">
          {capabilities.headline[0]}
          <br />
          {capabilities.headline[1]}
        </h2>
      </Reveal>
      <div className="st-cap-list">
        {capabilities.items.map((c, i) => {
          const isOpen = open === c.id
          return (
            <div key={c.id} className={`st-cap ${isOpen ? "is-open" : ""}`}>
              <h3>
                <button
                  type="button"
                  id={`cap-btn-${c.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`cap-panel-${c.id}`}
                  onClick={() => setOpen(isOpen ? "" : c.id)}
                >
                  <span className="eyebrow">0{i + 1}</span>
                  <span className="st-cap-title">{c.title}</span>
                  <span className="st-cap-icon" aria-hidden="true" />
                </button>
              </h3>
              <div
                className="st-cap-panel"
                id={`cap-panel-${c.id}`}
                role="region"
                aria-labelledby={`cap-btn-${c.id}`}
                inert={!isOpen}
              >
                <div className="st-cap-panel-inner">
                  <div className="st-cap-body">
                    <p>{c.description}</p>
                    <ul>
                      {c.deliverables.map((d) => (
                        <li key={d} className="eyebrow">
                          {d}
                        </li>
                      ))}
                    </ul>
                    <a className="st-cap-link" href={c.href}>
                      View related work <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <Media slot={c.media} ratio="16 / 10" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
