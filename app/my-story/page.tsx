import { Nav } from "@/components/portfolio/nav"
import { Footer } from "@/components/portfolio/footer"
import { MyStoryPage } from "@/components/portfolio/my-story/my-story-page"
import { AgentTeaser } from "@/components/portfolio/agent-teaser"

export const metadata = {
  title: "My Story — Sylvain Kalache",
  description:
    "The places, projects, and people that shaped my journey in tech — from France to San Francisco and beyond.",
}

export default function MyStory() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <MyStoryPage />
      <AgentTeaser />
      <Footer />
    </main>
  )
}
