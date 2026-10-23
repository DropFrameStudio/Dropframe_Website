import type { FormEvent } from "react"
import { contact } from "./content"

export default function ContactSection() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
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
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>
          {contact.headline[0]}
          <br />
          {contact.headline[1]}
          <span>.</span>
        </h2>
        <p>{contact.copy}</p>
        <p className="st-email eyebrow">
          Prefer email? <a href={`mailto:${contact.email}`}>{contact.email} ↗</a>
        </p>
      </div>
      <form className="contact-form" onSubmit={submit}>
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
          Start a project <span aria-hidden="true">↗</span>
        </button>
        <p className="form-note">
          This opens your email app. No submission is stored by this site.
        </p>
      </form>
    </section>
  )
}
