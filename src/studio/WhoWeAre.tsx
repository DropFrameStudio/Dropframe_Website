import Media from "./Media"
import Reveal from "./Reveal"
import { who } from "./content"

export default function WhoWeAre() {
  return (
    <section className="st-who" aria-labelledby="st-who-title">
      <i className="wk-slash st-who-slash" aria-hidden="true" />
      <div className="st-who-grid">
        <Reveal className="st-who-head">
          <p className="eyebrow">{who.eyebrow}</p>
          <h2 id="st-who-title">
            {who.headline[0]}
            <br />
            {who.headline[1].replace(".", "")}
            <span>.</span>
          </h2>
        </Reveal>
        <Reveal className="st-who-media" delay={120}>
          <Media slot={who.media} ratio="4 / 3" />
        </Reveal>
        <Reveal className="st-who-copy" delay={200}>
          <p>{who.copy}</p>
        </Reveal>
      </div>
    </section>
  )
}
