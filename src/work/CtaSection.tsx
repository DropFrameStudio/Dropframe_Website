import { START_HREF } from "./Header"

export default function CtaSection() {
  return (
    <section className="wk-cta" aria-labelledby="wk-cta-title">
      <div className="wk-cta-inner">
        <p className="eyebrow">Have something in mind?</p>
        <h2 id="wk-cta-title">
          Let’s make
          <br />
          it land<span>.</span>
        </h2>
        <a className="wk-cta-btn" href={START_HREF}>
          Start a project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
