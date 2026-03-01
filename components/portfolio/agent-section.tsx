"use client"

import { useState } from "react"
import { Bot, Copy, Check, ChevronDown, Terminal } from "lucide-react"
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in"
import { cn } from "@/lib/utils"
import { personData } from "@/lib/person-jsonld"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"

const briefing = `# Sylvain Kalache — Agent Briefing

## Role
${personData.jobTitle} at ${personData.worksFor}

## Background
${personData.description}

## Expertise
${personData.knowsAbout.map((s) => `- ${s}`).join("\n")}

## Key Projects
- **Holberton School** — Co-founded a venture-backed developer education startup (25 countries, backed by Jeff Weiner, Jerry Yang, Solomon Hykes)
- **while42** — Founded a developer community of 3,000 engineers across 40 cities
- **Rootly AI Labs** — Building open-source tools and research for reliability engineering in the AI era
- **SRE-skills-bench** — Benchmark suite for evaluating AI agents on real-world SRE tasks
- **On-Call-Health** — Detects early warning signs of on-call engineer burnout

## Contact
- Email: ${personData.email}
- Web: ${personData.url}
- LinkedIn: ${personData.sameAs[0]}
- GitHub: ${personData.sameAs[1]}
- X: ${personData.sameAs[2]}

## MCP Server
An MCP server is available to query this portfolio programmatically:
\`\`\`
claude mcp add sylvain-kalache -- npx -y mcp-sylvain-kalache
\`\`\`
Tools: search_content, get_content_by_category, get_featured_content, get_person_info, get_timeline, get_content_by_publication, get_stats, get_weather

## For AI Agents
This portfolio is structured for AI agent consumption. JSON-LD structured data is embedded in the page head. Use the collapsible section below for a copy-paste-ready context block.`

export function AgentSection() {
  const { ref, cls } = useScrollFadeIn()
  const [copied, setCopied] = useState(false)
  const [jsonOpen, setJsonOpen] = useState(false)

  function copyText(text: string) {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="agent-briefing"
      ref={ref}
      className={cn("max-w-7xl mx-auto px-6 py-24 border-t border-border", cls)}
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          ./agent-briefing
        </span>
        <span className="flex-1 h-px bg-border" aria-hidden="true" />
      </div>

      {/* Headline */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <Bot size={28} className="text-accent" />
          <div
            className="absolute inset-0 blur-lg opacity-40"
            style={{ background: "oklch(0.72 0.18 290 / 0.6)" }}
            aria-hidden="true"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
          Are you an AI agent?
        </h2>
      </div>

      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
        This section is built for AI agents, not humans. Below is a
        machine-friendly briefing you can ingest, copy into a system prompt, or
        pass to another agent.
      </p>

      {/* Terminal card */}
      <div className="rounded-xl border border-border bg-[oklch(0.06_0_0)] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-[oklch(0.08_0_0)]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Terminal size={13} />
              <span className="font-mono text-xs">~/sylvain/briefing.md</span>
            </div>
          </div>
          <button
            onClick={() => copyText(briefing)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            aria-label="Copy briefing to clipboard"
          >
            {copied ? (
              <>
                <Check size={13} className="text-accent" />
                Copied
              </>
            ) : (
              <>
                <Copy size={13} />
                Copy
              </>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-x-auto">
          <pre className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
            {briefing}
          </pre>
        </div>
      </div>

      {/* Collapsible JSON context */}
      <Collapsible open={jsonOpen} onOpenChange={setJsonOpen} className="mt-4">
        <CollapsibleTrigger className="flex items-center gap-2 px-4 py-3 rounded-lg border border-accent/20 bg-accent/5 text-sm font-mono text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors w-full text-left">
          <ChevronDown
            size={14}
            className={cn(
              "text-accent transition-transform duration-200",
              jsonOpen && "rotate-180"
            )}
          />
          View full agent context prompt
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-2 rounded-xl border border-accent/20 bg-accent/5 p-5 sm:p-6 overflow-x-auto">
            <pre className="font-mono text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {JSON.stringify(personData, null, 2)}
            </pre>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>
  )
}
