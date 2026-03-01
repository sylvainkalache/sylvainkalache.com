"use client"

import { useState } from "react"
import Image from "next/image"
import { Copy, Check } from "lucide-react"

const MCP_COMMAND = "claude mcp add sylvain-kalache -- npx -y mcp-sylvain-kalache"

function McpSnippet() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(MCP_COMMAND)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-6 w-full">
      <button
        onClick={handleCopy}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors text-left group cursor-pointer"
      >
        <code className="flex-1 font-mono text-xs text-muted-foreground break-all">
          {MCP_COMMAND}
        </code>
        {copied ? (
          <Check size={16} className="shrink-0 text-accent" />
        ) : (
          <Copy size={16} className="shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
        )}
      </button>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center px-6 pt-20 pb-6 sm:pt-24 sm:pb-8 max-w-7xl mx-auto"
      aria-label="Introduction"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.72 0.18 290 / 0.18) 1px, transparent 0)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
        }}
        aria-hidden="true"
      />
      {/* Lavender glow behind headline */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, oklch(0.72 0.18 290 / 0.06), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            {/* Small photo on mobile, hidden on sm+ */}
            <div className="w-10 h-10 sm:hidden shrink-0 rounded-full overflow-hidden border border-border">
              <Image
                src="/sylvain-kalache.jpg"
                alt="Sylvain Kalache"
                width={40}
                height={40}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase">
              sylvain kalache
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6 text-balance">
            Helping SREs{" "}
            <span className="text-muted-foreground font-normal">succeed with AI.</span>
          </h1>

          {/* Bio */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
            DevRel and AI Labs lead at Rootly. Former Senior SRE at LinkedIn.
            Co-founded Holberton School, which trained thousands of engineers across 25 countries.
            I write, speak, and build communities around AI for reliability engineering.
          </p>

        </div>

        {/* Profile photo with rotating glow + MCP snippet */}
        <div className="hidden sm:flex flex-col items-center justify-between shrink-0 sm:ml-auto self-stretch">
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 group/photo">
            {/* Rotating glow */}
            <div className="absolute -inset-[10px] rounded-2xl rotating-glow blur-xl" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background">
              <Image
                src="/sylvain-kalache.jpg"
                alt="Sylvain Kalache"
                width={192}
                height={192}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>
          <McpSnippet />
        </div>
      </div>
    </section>
  )
}
