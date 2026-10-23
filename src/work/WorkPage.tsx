import { useMemo, useState } from "react"
import Header from "./Header"
import FilterBar from "./FilterBar"
import ProjectEntry from "./ProjectEntry"
import CtaSection from "./CtaSection"
import Footer from "./Footer"
import { DISCIPLINES, projects } from "./projects"

export default function WorkPage() {
  const [filter, setFilter] = useState("All")

  const options = useMemo(
    () => [
      { label: "All", count: projects.length },
      ...DISCIPLINES.map((d) => ({
        label: d,
        count: projects.filter((p) => p.disciplines.includes(d)).length,
      })),
    ],
    [],
  )

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.disciplines.some((d) => d === filter))

  return (
    <>
      <Header active="Work" />
      <main className="wk-page">
        <section className="wk-intro">
          <i className="wk-slash wk-slash-a" aria-hidden="true" />
          <div className="wk-intro-inner">
            <p className="eyebrow">
              Work / {String(projects.length).padStart(2, "0")} projects
            </p>
            <h1>
              Selected
              <br className="wk-br" /> projects<span>.</span>
            </h1>
            <p className="wk-lede">
              Brand, digital, film and 3D. From first frame to final delivery.
            </p>
            <FilterBar options={options} active={filter} onChange={setFilter} />
          </div>
        </section>

        <section className="wk-archive" aria-label="Project archive">
          <i className="wk-slash wk-slash-b" aria-hidden="true" />
          <div className="wk-grid" key={filter} aria-live="polite">
            {visible.map((p, i) => (
              <ProjectEntry key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
