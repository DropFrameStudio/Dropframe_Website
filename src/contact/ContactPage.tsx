import type { FormEvent } from "react"
import Header from "../work/Header"
import Reveal from "../studio/Reveal"
import { contactContent as c } from "./content"

export default function ContactPage() {
  const subscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = String(new FormData(e.currentTarget).get("email") || "")
    const subject = encodeURIComponent("Newsletter sign-up")
    const body = encodeURIComponent(`Please add me to the list: ${email}`)
    window.location.href = `mailto:${c.newsletter.recipient}?subject=${subject}&body=${body}`
  }

  const address = c.studio.address.length ? c.studio.address : c.studio.fallback

  return (
    <>
      <Header active="Contact" />
      <main className="ct-page">
        <section className="ct-hero" aria-labelledby="ct-title">
          <i className="wk-slash ct-slash" aria-hidden="true" />
          <div className="ct-hero-inner">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 id="ct-title">
              {c.headline[0]}
              <br />
              {c.headline[1]}
              <span>.</span>
            </h1>
            <p className="ct-intro">{c.intro}</p>
          </div>
        </section>

        <section className="ct-grid" aria-label="Contact details">
          <Reveal className="ct-col">
            <p className="eyebrow">{c.studio.label}</p>
            <address>
              {address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </Reveal>

          <Reveal className="ct-col" delay={100}>
            <p className="eyebrow">{c.social.label}</p>
            <ul className="ct-social">
              {c.social.items.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noreferrer">
                      {s.label} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="is-ph">{s.label}</span>
                  )}
                </li>
              ))}
            </ul>
            {c.emails.map((m) => (
              <div className="ct-email" key={m.label}>
                <p className="eyebrow">{m.label}</p>
                <a href={`mailto:${m.address}`}>
                  {m.address} <span aria-hidden="true">↗</span>
                </a>
              </div>
            ))}
          </Reveal>

          <Reveal className="ct-col ct-news" delay={200}>
            <h2>
              {c.newsletter.heading[0]}
              <br />
              {c.newsletter.heading[1]}
            </h2>
            <form onSubmit={subscribe}>
              <label className="ct-field">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={c.newsletter.placeholder}
                />
              </label>
              <button type="submit" aria-label="Subscribe">
                →
              </button>
            </form>
            <p className="form-note">{c.newsletter.note}</p>
          </Reveal>
        </section>

        <div className="ct-base">
          <p>{c.legal}</p>
          <p>{c.url}</p>
          <button
            type="button"
            className="ct-top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        </div>
      </main>
    </>
  )
}
