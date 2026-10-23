export const DISCIPLINES = [
  "Brand & Campaign",
  "Websites & Digital",
  "Film & Photography",
  "3D & Motion",
] as const

export type Discipline = (typeof DISCIPLINES)[number]

export type WorkProject = {
  id: string
  title: string
  subtitle?: string
  disciplines: Discipline[]
  /** Label shown in the caption, e.g. "3D & Motion" */
  label: string
  year?: string
  /** Drop a file in /public/assets and set the path, e.g. "/assets/bottega.jpg" */
  image?: string
  /** Optional muted preview, plays on hover */
  video?: string
  alt: string
  /** Destination for the entry; leave empty until a case-study URL exists */
  href?: string
}

export const projects: WorkProject[] = [
  {
    id: "bottega-veneta",
    title: "Bottega Veneta",
    disciplines: ["Brand & Campaign", "3D & Motion"],
    label: "3D & Motion",
    year: "2026",
    alt: "Bottega Veneta project frame",
  },
  {
    id: "hennessy-follows",
    title: "Hennessy Follows",
    disciplines: ["Brand & Campaign", "Film & Photography"],
    label: "Commercial",
    year: "2026",
    alt: "Hennessy Follows project frame",
  },
  {
    id: "gabby-samone-complicated",
    title: "Gabby Samone — Complicated",
    disciplines: ["Film & Photography"],
    label: "Music Video",
    year: "2026",
    alt: "Gabby Samone, Complicated, music video frame",
  },
  {
    id: "aehf-rocket-launch",
    title: "AEHF Rocket Launch",
    disciplines: ["Film & Photography"],
    label: "Film & Photography",
    year: "2025",
    alt: "AEHF rocket launch frame",
  },
  {
    id: "triquest-management-website",
    title: "TriQuest Management Website",
    disciplines: ["Websites & Digital"],
    label: "Website Redesign — Concept",
    alt: "TriQuest Management website concept",
  },
]
