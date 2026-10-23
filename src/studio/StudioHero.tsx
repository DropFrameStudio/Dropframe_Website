import { hero } from "./content"

export default function StudioHero() {
  return (
    <section className="st-hero" aria-labelledby="st-hero-title">
      <i className="wk-slash st-hero-slash" aria-hidden="true" />
      <div className="st-hero-grid">
        <p className="eyebrow st-hero-eyebrow">{hero.eyebrow}</p>
        <h1 id="st-hero-title">
          {hero.headline.map((line, i) => (
            <span key={line} className={i === 2 ? "is-accent" : ""}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <p className="st-hero-copy">{hero.copy}</p>
      </div>
      <ul className="st-hero-strip">
        {hero.strip.map((s) => (
          <li key={s} className="eyebrow">
            {s}
          </li>
        ))}
      </ul>
    </section>
  )
}
