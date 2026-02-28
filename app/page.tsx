import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { ContentGrid } from "@/components/portfolio/content-grid"
import { AboutSection } from "@/components/portfolio/about-section"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <ContentGrid />
      <AboutSection />
      <Footer />
    </main>
  )
}
