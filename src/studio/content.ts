export type MediaSlot = {
  /** Image path, e.g. "/assets/studio-footage.jpg" (drop the file in /public/assets) */
  image?: string
  /** Muted looping video path; takes priority over the image when set */
  video?: string
  alt: string
  /** Shown on the placeholder until real media is supplied */
  label: string
}

export const hero = {
  eyebrow: "01 / The studio",
  headline: ["One vision.", "Many ways to", "make it."],
  copy: "Drop Frame is an independent production studio bringing brand, digital, film and 3D together. We shape the idea and produce the work — with one clear creative direction and a team built around the brief.",
  strip: ["Independent studio", "Founder-led", "Brand / Digital / Film / 3D"],
}

export const who = {
  eyebrow: "02 / Who we are",
  headline: ["Built around", "the idea."],
  copy: "Every project calls for a different combination of thinking, craft and production. We move between disciplines to find the right approach, bringing in trusted collaborators when the brief calls for them.",
  media: {
    alt: "Working footage from a Drop Frame production",
    label: "Working footage / production detail",
  } as MediaSlot,
}

export const mapLabel = "Independent studio. International reach."

/**
 * PLACEHOLDER MARKERS: illustrative only, not real locations or clients.
 * Replace with real data when the Three.js globe is built.
 */
export const mapMarkers: { id: string; lat: number; lng: number }[] = [
  { id: "placeholder-1", lat: 40, lng: -74 },
  { id: "placeholder-2", lat: 51, lng: 0 },
  { id: "placeholder-3", lat: 25, lng: 55 },
  { id: "placeholder-4", lat: 35, lng: 139 },
  { id: "placeholder-5", lat: -34, lng: 151 },
  { id: "placeholder-6", lat: -23, lng: -46 },
  { id: "placeholder-7", lat: -26, lng: 28 },
]

export type Brand = {
  id: string
  name: string
  /** Logo path; leave empty to show a labelled placeholder */
  logo?: string
  /** Proportion of the logo within its cell */
  shape?: "wide" | "square" | "tall"
  href?: string
  credit?: string
}

export const brands = {
  eyebrow: "03 / Selected brand experience",
  headline: ["Work across brands.", "And borders"],
  items: [
    { id: "b1", name: "Client name", shape: "wide" },
    { id: "b2", name: "Client name", shape: "square" },
    { id: "b3", name: "Client name", shape: "wide" },
    { id: "b4", name: "Client name", shape: "tall" },
    { id: "b5", name: "Client name", shape: "square" },
    { id: "b6", name: "Client name", shape: "wide" },
    { id: "b7", name: "Client name", shape: "tall" },
    { id: "b8", name: "Client name", shape: "wide" },
  ] as Brand[],
}

export type Capability = {
  id: string
  title: string
  description: string
  deliverables: string[]
  media: MediaSlot
  href: string
}

export const capabilities = {
  eyebrow: "04 / Capabilities",
  headline: ["From first thought", "to final frame."],
  items: [
    {
      id: "brand",
      title: "Brand & Campaign",
      description:
        "Ideas and identities built to carry across every touchpoint, from first concept to finished campaign.",
      deliverables: [
        "Identity",
        "Art direction",
        "Campaign concepts",
        "Print and packaging",
      ],
      media: { alt: "Brand and campaign work", label: "Brand & campaign / media" },
      href: "#/work",
    },
    {
      id: "digital",
      title: "Websites & Digital",
      description:
        "Considered sites and digital experiences, designed and built to present the work clearly.",
      deliverables: ["Websites", "Landing pages", "Digital experiences"],
      media: { alt: "Website and digital work", label: "Websites & digital / media" },
      href: "#/work",
    },
    {
      id: "film",
      title: "Film & Photography",
      description:
        "Live-action production, from the shoot through to the final cut.",
      deliverables: ["Commercials", "Stills", "Editing", "Post-production"],
      media: { alt: "Film and photography work", label: "Film & photography / media" },
      href: "#/work",
    },
    {
      id: "3d",
      title: "3D & Motion",
      description:
        "Products and worlds that can't be filmed, made physical through light, material and movement.",
      deliverables: ["CGI products", "2D / 3D animation", "Motion graphics"],
      media: { alt: "3D and motion work", label: "3D & motion / media" },
      href: "#/work",
    },
  ] as Capability[],
}

export type Publication = {
  id: string
  year: string
  publication: string
  feature: string
  href?: string
}

/** PLACEHOLDER ROWS: replace with real publications and features. */
export const publications = {
  eyebrow: "05 / Publications & features",
  headline: ["Press &", "features."],
  items: [1, 2, 3, 4].map((n) => ({
    id: `p${n}`,
    year: "20XX",
    publication: "Publication name",
    feature: "Feature or project title",
  })) as Publication[],
}

export const contact = {
  eyebrow: "06 / Contact",
  headline: ["Make it", "land"],
  copy: "Tell us what you’re making, who it’s for and where you are in the process.",
  email: "hello@dropframe.studio",
}
