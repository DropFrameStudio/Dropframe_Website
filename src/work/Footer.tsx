import { Logo } from "./Header"

export default function Footer() {
  return (
    <footer className="wk-footer">
      <div className="wk-footer-main">
        <a href="#/" aria-label="Dropframe Studio home" className="wk-footer-logo">
          <Logo />
        </a>
        <nav className="wk-footer-nav" aria-label="Footer navigation">
          <a href="#/work">Work</a>
          <a href="#/studio">Studio</a>
          <a href="#/contact">Contact</a>
          <a href="mailto:hello@dropframe.studio">hello@dropframe.studio</a>
        </nav>
      </div>
      <div className="wk-footer-base">
        <p>© 2026 Dropframe Studio</p>
        <p>Independent boutique production lab</p>
        <span className="wk-mark" aria-hidden="true" />
      </div>
    </footer>
  )
}
