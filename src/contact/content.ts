export const contactContent = {
  eyebrow: "Contact / New work",
  headline: ["Let’s", "talk"],
  intro: "Tell us what you’re making. No polished brief required.",
  studio: {
    label: "Studio",
    /** Add address lines here when ready; leave empty to show the fallback */
    address: [] as string[],
    fallback: ["Independent boutique production lab", "Address to be confirmed"],
  },
  social: {
    label: "Follow",
    /** Add `href` to each when the profile URLs are supplied */
    items: [
      { label: "Instagram", href: undefined as string | undefined },
      { label: "Vimeo", href: undefined as string | undefined },
    ],
  },
  emails: [
    {
      label: "General enquiries & new business",
      address: "hello@dropframe.studio",
    },
  ],
  newsletter: {
    heading: ["Subscribe to", "our newsletter"],
    placeholder: "Your email",
    /** Opens the visitor's email app; swap for a real signup endpoint later */
    recipient: "hello@dropframe.studio",
    note: "This opens your email app. No submission is stored by this site.",
  },
  legal: "© 2026 Dropframe Studio",
  url: "dropframe.studio",
}
