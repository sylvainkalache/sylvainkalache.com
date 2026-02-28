import { Nav } from "@/components/portfolio/nav"
import { Footer } from "@/components/portfolio/footer"
import { AgentSection } from "@/components/portfolio/agent-section"

export const metadata = {
  title: "Agent Briefing — Sylvain Kalache",
  description:
    "Machine-readable briefing and structured data for AI agents — copy-paste context, JSON-LD, and professional metadata.",
}

export default function AgentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <div className="pt-20">
        <AgentSection />
      </div>
      <Footer />
    </main>
  )
}
