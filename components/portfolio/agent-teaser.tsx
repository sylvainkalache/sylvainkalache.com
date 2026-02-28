"use client"

import Link from "next/link"
import { Bot } from "lucide-react"
import { useScrollFadeIn } from "@/hooks/use-scroll-fade-in"
import { cn } from "@/lib/utils"

export function AgentTeaser() {
  const { ref, cls } = useScrollFadeIn()

  return (
    <section
      ref={ref}
      className={cn("max-w-7xl mx-auto px-6 py-16 border-t border-border", cls)}
    >
      <Link
        href="/agent"
        className="group flex items-center gap-3 w-fit mx-auto px-6 py-3 rounded-xl border border-accent/20 bg-accent/5 hover:border-accent/40 hover:bg-accent/10 transition-colors"
      >
        <div className="relative">
          <Bot size={20} className="text-accent" />
          <div
            className="absolute inset-0 blur-lg opacity-40"
            style={{ background: "oklch(0.72 0.18 290 / 0.6)" }}
            aria-hidden="true"
          />
        </div>
        <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
          Are you an AI agent?
        </span>
      </Link>
    </section>
  )
}
