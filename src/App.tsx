import { FormEvent, useEffect, useState } from "react"
import WorkPage from "./work/WorkPage"
import StudioPage from "./studio/StudioPage"
import ContactPage from "./contact/ContactPage"

type Project = {
  number: string
  title: string
  type: string
  image: string
  alt: string
  description: string
  credit: string
  imageClass?: string
}

const projects: Project[] = [
  {
    number: "01",
    title: "Kristen",
    type: "Photography",
    image: "/assets/kristen-bw.jpg",
    alt: "Black-and-white close portrait of Kristen wearing mirrored sunglasses",
    description:
      "A real moment, held with natural texture, detailed shadows and a clear human focal point.",
    credit: "SUPPLIED PHOTOGRAPH  ·  TC 00:00:01:12",
    imageClass: "portrait-crop",
  },
  {
    number: "02",
    title: "Product study",
    type: "Illustrative CGI concept",
    image: "/assets/cgi-product-concept.jpg",
    alt: "Unbranded silver can suspended above sculptural dark rocks in orange light",
    description:
      "Sculptural light, believable materials and one hero per frame. An illustrative concept, not client work.",
    credit: "CONCEPT FRAME  ·  CGI / PRODUCT",
    imageClass: "cgi-crop",
  },
  {
    number: "03",
    title: "Motion study",
    type: "Placeholder project frame",
    image: "/assets/motion-placeholder.jpg",
    alt: "Black-and-white close-up of a skateboard in motion",
    description:
      "A decisive action frame reserved for future film and motion work. Project details to be confirmed.",
    credit: "PLACEHOLDER  ·  LIVE ACTION / MOTION",
    imageClass: "motion-crop",
  },
]

const capabilities = [
  [
    "01",
    "Brand & campaign",
    "Identity, campaign concepts, print and packaging.",
  ],
  ["02", "Websites & digital", "Sites, landing pages and digital experiences."],
  [
    "03",
    "Film & photography",
    "Commercials, stills, editing and post-production.",
  ],
  ["04", "3D & motion", "CGI products, 2D/3D animation and motion graphics."],
]

function Logo({ dark = false }: { dark?: boolean }) {
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

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function Home() {
  const [activeProject, setActiveProject] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const project = projects[activeProject]

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const handleEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get("name") || "")
    const email = String(form.get("email") || "")
    const brief = String(form.get("brief") || "")
    const subject = encodeURIComponent(
      `Project enquiry from ${name || "the website"}`,
    )
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject outline:\n${brief}`,
    )
    window.location.href = `mailto:hello@dropframe.studio?subject=${subject}&body=${body}`
  }

  return (
    <main>
      <section className="hero" id="top">
        <header className="site-header">
          <a
            className="logo-link"
            href="#top"
            aria-label="Dropframe Studio home"
          >
            <Logo />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#/work">Work</a>
            <a href="#/studio">Studio</a>
            <a href="#/contact">Contact</a>
          </nav>

          <a className="project-link" href="#/contact">
            Let’s talk <Arrow />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className="menu-lines" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </header>

        <div
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          id="mobile-menu"
          aria-hidden={!menuOpen}
        >
          <p className="eyebrow">Navigation / 04</p>
          <nav aria-label="Mobile navigation">
            <a href="#work" onClick={closeMenu}>
              <span>01</span> Work
            </a>
            <a href="#/studio" onClick={closeMenu}>
              <span>02</span> Studio
            </a>
            <a href="#/contact" onClick={closeMenu}>
              <span>03</span> Contact
            </a>
            <a href="#/contact" onClick={closeMenu}>
              <span>04</span> Let’s talk
            </a>
          </nav>
          <p className="menu-address">dropframe.studio</p>
        </div>

        <aside className="side-rail" aria-hidden="true">
          <span>INDEPENDENT PRODUCTION LAB</span>
          <span>© 2026</span>
        </aside>

        <div className="hero-stage">
          <div className="hero-image-wrap">
            <img
              key={project.image}
              className={`hero-image ${project.imageClass || ""}`}
              src={project.image}
              alt={project.alt}
            />
            <p className="image-label">FEATURED / {project.number}</p>
            <p className="image-timecode">{project.credit}</p>
          </div>

          <div className="hero-title">
            <p className="eyebrow">Independent boutique production lab</p>
            <h1>
              Real footage.
              <br />
              Impossible
              <br />
              <span>products.</span>
            </h1>
          </div>

          <div className="project-picker" aria-label="Select featured project">
            <p className="eyebrow">Select frame</p>
            <div className="project-buttons">
              {projects.map((item, index) => (
                <button
                  type="button"
                  key={item.number}
                  className={index === activeProject ? "active" : ""}
                  aria-pressed={index === activeProject}
                  onClick={() => setActiveProject(index)}
                >
                  <span>{item.number}</span>
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-strip">
          <div className="featured-caption">
            <p className="eyebrow">Featured project / {project.number}</p>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
          <div className="studio-intro">
            <p className="eyebrow">The studio</p>
            <p>Branding, websites, film and 3D. Ideas shaped. Work produced.</p>
          </div>
          <a className="strip-cta" href="#contact">
            <span className="eyebrow">Have a brief?</span>
            <strong>
              Start a project <Arrow />
            </strong>
          </a>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 03 frames</p>
          <h2>
            The work
            <br />
            is the proof<span>.</span>
          </h2>
          <p className="section-note">
            A working selection of supplied photography, illustrative CGI and
            placeholder motion material. Final project credits to follow.
          </p>
        </div>

        <article className="work-item work-kristen">
          <div className="work-image">
            <img
              src="/assets/kristen-color.jpg"
              alt="Close portrait of Kristen wearing mirrored sunglasses"
            />
            <span>01 / 03</span>
          </div>
          <div className="work-caption">
            <p className="eyebrow">Photography / Supplied image</p>
            <h3>Kristen</h3>
            <p>Natural light. Human texture. A frame with presence.</p>
          </div>
        </article>

        <article className="work-item work-cgi">
          <div className="work-image">
            <img
              src="/assets/cgi-product-concept.jpg"
              alt="Unbranded silver can in a sculptural orange-lit scene"
            />
            <span>02 / 03</span>
          </div>
          <div className="work-caption">
            <p className="eyebrow">3D / Illustrative concept</p>
            <h3>Make the impossible feel physical.</h3>
            <p>Sculptural light. Believable materials. A clear focal point.</p>
          </div>
        </article>

        <article className="work-item work-motion">
          <div className="work-image">
            <img
              src="/assets/motion-placeholder.jpg"
              alt="Skateboard captured in motion in black and white"
            />
            <span>03 / 03</span>
          </div>
          <div className="work-caption">
            <p className="eyebrow">Film / Placeholder frame</p>
            <h3>Live action. CGI. Finishing.</h3>
            <p>Hold. Cut. Land. Resolve.</p>
          </div>
        </article>
      </section>

      <section className="studio-section" id="studio">
        <div className="studio-statement">
          <p className="eyebrow">Studio / Led by AJ Williams</p>
          <h2>
            One studio.
            <br />
            Four ways
            <br />
            to make<span>.</span>
          </h2>
        </div>

        <div className="studio-copy">
          <p className="large-copy">
            AJ Williams leads every project and brings in collaborators to fit
            the brief — so each team is built for the work, not the other way
            round.
          </p>
          <p>
            For small-business owners, creators building businesses, brand
            marketing teams, and agency producers or creative directors.
          </p>
        </div>

        <div className="capability-list">
          {capabilities.map(([number, title, copy]) => (
            <div className="capability-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>

        <div className="impact-note">
          <img src="/assets/impact-cut-paper.png" alt="Dropframe Impact Cut" />
          <div>
            <p className="eyebrow">The idea behind the name</p>
            <p>
              In film, removing a single frame can make an action hit harder.
              Take out what doesn’t serve the idea, and what’s left lands.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-heading">
          <p className="eyebrow">Enquiries / New work</p>
          <h2>
            Make it
            <br />
            land<span>.</span>
          </h2>
          <p>
            Tell us what you’re making, who it’s for and where you are in the
            process. No polished brief required.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleEnquiry}>
          <label>
            <span>01 / Your name</span>
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            <span>02 / Email</span>
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            <span>03 / A few lines about the project</span>
            <textarea name="brief" rows={3} required />
          </label>
          <button type="submit">
            Start a project <Arrow />
          </button>
          <p className="form-note">
            This opens your email app. No submission is stored by this site.
          </p>
        </form>
      </section>

      <footer>
        <a href="#top" aria-label="Back to top">
          <Logo dark />
        </a>
        <div className="footer-meta">
          <p>Independent boutique production lab</p>
          <a href="mailto:hello@dropframe.studio">hello@dropframe.studio</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="footer-url">dropframe.studio</p>
      </footer>
    </main>
  )
}

type Route = "home" | "work" | "studio" | "contact"

const getRoute = (): Route => {
  const hash = window.location.hash
  if (hash.startsWith("#/work")) return "work"
  if (hash.startsWith("#/studio")) return "studio"
  if (hash.startsWith("#/contact")) return "contact"
  return "home"
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute)
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute())
      setHash(window.location.hash)
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  useEffect(() => {
    const id = hash === "#/studio/contact" ? "contact" : hash.slice(1)
    if (id && !id.startsWith("/")) {
      document.getElementById(id)?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [route, hash])

  if (route === "work") return <WorkPage />
  if (route === "studio") return <StudioPage />
  if (route === "contact") return <ContactPage />
  return <Home />
}
