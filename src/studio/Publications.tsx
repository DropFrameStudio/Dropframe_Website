import Reveal from "./Reveal"
import { publications } from "./content"

export default function Publications() {
  return (
    <section className="st-pubs" aria-labelledby="st-pubs-title">
      <Reveal className="st-section-head">
        <p className="eyebrow">{publications.eyebrow}</p>
        <h2 id="st-pubs-title">
          {publications.headline[0]}
          <br />
          {publications.headline[1].replace(".", "")}
          <span>.</span>
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <div
          className="st-table"
          role="table"
          aria-label="Publications and features (placeholder entries)"
        >
          <div className="st-row st-row-head eyebrow" role="row">
            <span role="columnheader">Year</span>
            <span role="columnheader">Publication</span>
            <span role="columnheader">Feature or project</span>
            <span role="columnheader">Link ↗</span>
          </div>
          {publications.items.map((p) => (
            <div className="st-row" role="row" key={p.id}>
              <span role="cell" data-label="Year" className="st-year">
                {p.year}
              </span>
              <span role="cell" data-label="Publication">
                {p.publication}
              </span>
              <span role="cell" data-label="Feature or project">
                {p.feature}
              </span>
              <span role="cell" data-label="Link" className="st-link">
                {p.href ? (
                  <a href={p.href}>
                    Link <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="is-ph">
                    Link <span aria-hidden="true">↗</span>
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
