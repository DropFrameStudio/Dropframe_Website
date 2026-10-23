import { useEffect, useRef, useState } from "react"
import type { WorkProject } from "./projects"

export default function ProjectEntry({
  project,
  index,
}: {
  project: WorkProject
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const play = () => void video.current?.play().catch(() => {})
  const pause = () => video.current?.pause()

  const media = (
    <div className="wk-media">
      {project.image ? (
        <img src={project.image} alt={project.alt} loading="lazy" />
      ) : (
        <div className="wk-placeholder" role="img" aria-label={project.alt}>
          <span>Frame {String(index + 1).padStart(2, "0")}</span>
          <span>Project image to come</span>
        </div>
      )}
      {project.video && (
        <video
          ref={video}
          src={project.video}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
      )}
    </div>
  )

  const caption = (
    <div className="wk-caption">
      <div>
        <h2>{project.title}</h2>
        <p>
          {project.label}
          {project.year ? ` / ${project.year}` : ""}
        </p>
      </div>
      <span className="wk-arrow" aria-hidden="true">
        ↗
      </span>
    </div>
  )

  const Tag = project.href ? "a" : "div"
  const props = project.href
    ? {
        href: project.href,
        onMouseEnter: play,
        onMouseLeave: pause,
        onFocus: play,
        onBlur: pause,
      }
    : { onMouseEnter: play, onMouseLeave: pause }

  return (
    <article
      ref={ref}
      className={`wk-entry ${seen ? "is-in" : ""}`}
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
    >
      <Tag className="wk-link" {...props}>
        {media}
        {caption}
      </Tag>
    </article>
  )
}
