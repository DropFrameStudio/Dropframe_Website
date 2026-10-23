import { useEffect, useState } from "react"

export const START_HREF = "mailto:hello@dropframe.studio"

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <img
      className="brand-logo"
      src={
        dark
          ? "/assets/dropframe-logo-dark.png"
          : "/assets/dropframe-logo-light.png"
      }
      alt="Dropframe Studio"
    />
  )
}

const links = [
  { label: "Work", href: "#/work" },
  { label: "Studio", href: "#/studio" },
  { label: "Contact", href: "#/contact" },
]

export default function Header({
  active = "Work",
  contactHref = "#/contact",
}: {
  active?: string
  contactHref?: string
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div className="wk-top">
      <header className="site-header">
        <a className="logo-link" href="#/" aria-label="Dropframe Studio home">
          <Logo />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((l) => ({ ...l, href: l.label === "Contact" ? contactHref : l.href })).map((l) => (
            <a
              key={l.label}
              href={l.href}
              aria-current={l.label === active ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a className="project-link" href="#/contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="wk-mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="menu-lines" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </header>
      <div
        className={`mobile-menu ${open ? "is-open" : ""}`}
        id="wk-mobile-menu"
        aria-hidden={!open}
      >
        <p className="eyebrow">Navigation / 04</p>
        <nav aria-label="Mobile navigation">
          {links.map((l) => ({ ...l, href: l.label === "Contact" ? contactHref : l.href })).map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <span>0{i + 1}</span> {l.label}
            </a>
          ))}
          <a href="#/contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            <span>04</span> Let’s talk
          </a>
        </nav>
        <p className="menu-address">dropframe.studio</p>
      </div>
    </div>
  )
}
