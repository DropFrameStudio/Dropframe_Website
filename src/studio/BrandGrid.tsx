import Reveal from "./Reveal"
import { brands, type Brand } from "./content"

function Cell({ brand }: { brand: Brand }) {
  const inner = (
    <>
      <div className="st-brand-logo">
        {brand.logo ? (
          <img src={brand.logo} alt={brand.name} />
        ) : (
          <span
            className={`st-logo-ph is-${brand.shape ?? "wide"}`}
            role="img"
            aria-label={`${brand.name} logo placeholder`}
          >
            Logo
          </span>
        )}
      </div>
      <p className="eyebrow">
        {brand.logo ? brand.credit : (brand.credit ?? "Placeholder / replace")}
        {brand.href && <span aria-hidden="true"> ↗</span>}
      </p>
    </>
  )
  return brand.href ? (
    <a className="st-brand" href={brand.href}>
      {inner}
    </a>
  ) : (
    <div className="st-brand">{inner}</div>
  )
}

export default function BrandGrid() {
  return (
    <section className="st-brands" aria-labelledby="st-brands-title">
      <Reveal className="st-section-head">
        <p className="eyebrow">{brands.eyebrow}</p>
        <h2 id="st-brands-title">
          {brands.headline[0]}
          <br />
          {brands.headline[1]}
          <span>.</span>
        </h2>
      </Reveal>
      <Reveal className="st-brand-grid" delay={100}>
        {brands.items.map((b) => (
          <Cell key={b.id} brand={b} />
        ))}
      </Reveal>
    </section>
  )
}
