"use client"

import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in"
import { cn } from "@/lib/utils"

const highlights = [
  { name: "Developer Relations" },
  { name: "AI Agents & MCP" },
  { name: "Developer Education" },
  { name: "Rootly AI Labs" },
  { name: "Holberton School" },
  { name: "Community Building" },
  { name: "SRE & Reliability" },
]

const stats = [
  { value: "45+",  label: "Published articles" },
  { value: "59",   label: "Press features & mentions" },
  { value: "58",   label: "Podcast episodes" },
  { value: "3",    label: "Open-source projects" },
]

export function AboutSection() {
  const { ref, cls } = useScrollFadeIn()

  return (
    <section
      id="about"
      ref={ref}
      className={cn("max-w-7xl mx-auto px-6 py-24 border-t border-border", cls)}
    >
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">./about</span>
        <span className="flex-1 h-px bg-border" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — bio */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-6 text-balance">
            Two decades helping engineers learn, connect, and ship.
          </h2>
          <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              Currently leading developer relations and{" "}
              <a
                href="https://rootly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
              >
                AI Labs at Rootly
              </a>
              , building open-source tools and research to advance reliability engineering in the AI era.
            </p>
            <p>
              Previously co-founded{" "}
              <a
                href="https://www.holbertonschool.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
              >
                Holberton School
              </a>
              , a venture-backed developer education startup that trained thousands of software engineers
              across 25 countries, backed by Jeff Weiner, Jerry Yang, and Solomon Hykes. Before that,
              senior SRE at LinkedIn, where I co-designed a patented self-healing infrastructure.
            </p>
            <p>
              I also founded{" "}
              <a
                href="#"
                className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
              >
                while42
              </a>
              , a developer community of 3,000 engineers across 40 cities.
              I write for TechCrunch and The New Stack, speak at conferences like SREcon, and
              help SRE and platform teams navigate the AI ecosystem through articles, talks, and open-source projects.
            </p>
          </div>
        </div>

        {/* Right — stats + tags */}
        <div className="space-y-10">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-card p-4 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="font-mono text-2xl font-semibold text-foreground mb-1">{value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{label}</div>
              </div>
            ))}
          </div>

          {/* Background tags */}
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
              Background
            </p>
            <div className="flex flex-wrap gap-2">
              {highlights.map(({ name }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-secondary/50 text-xs text-foreground font-mono hover:border-accent/40 hover:text-accent transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
