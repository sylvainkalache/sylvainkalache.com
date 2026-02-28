"use client"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center px-6 pt-20 pb-0 sm:pt-24 sm:pb-0 max-w-7xl mx-auto"
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

      <div className="relative z-10 max-w-3xl">
        {/* Eyebrow */}
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
          sylvain kalache
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6 text-balance">
          Helping SREs{" "}
          <span className="text-muted-foreground font-normal">succeed with AI.</span>
        </h1>

        {/* Bio */}
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
          DevRel and AI Labs lead at Rootly. Former Senior SRE at LinkedIn.
          Co-founded Holberton School, which trained thousands of engineers across 10+ countries.
          I write, speak, and build communities around AI for reliability engineering.
        </p>
      </div>
    </section>
  )
}
