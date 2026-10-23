import Header from "../work/Header"
import Footer from "../work/Footer"
import StudioHero from "./StudioHero"
import WhoWeAre from "./WhoWeAre"
import WorldMap from "./WorldMap"
import BrandGrid from "./BrandGrid"
import Capabilities from "./Capabilities"
import Publications from "./Publications"
import ContactSection from "./ContactSection"

export default function StudioPage() {
  return (
    <>
      <Header active="Studio" contactHref="#/studio/contact" />
      <main>
        <StudioHero />
        <WhoWeAre />
        <WorldMap />
        <BrandGrid />
        <Capabilities />
        <Publications />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
