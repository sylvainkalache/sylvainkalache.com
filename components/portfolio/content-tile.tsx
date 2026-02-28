"use client"

import Image from "next/image"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { type ContentItem } from "@/lib/content-data"
import {
  FileText,
  Mic2,
  Presentation,
  Github,
  Newspaper,
  UsersRound,
  Star,
  Calendar,
} from "lucide-react"

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs))
}

const categoryConfig = {
  article: {
    label: "Article",
    borderHover: "hover:border-tile-article/50",
    badgeText: "text-tile-article",
    titleHover: "group-hover:text-tile-article",
    Icon: FileText,
  },
  podcast: {
    label: "Podcast",
    borderHover: "hover:border-tile-podcast/50",
    badgeText: "text-tile-podcast",
    titleHover: "group-hover:text-tile-podcast",
    Icon: Mic2,
  },
  talk: {
    label: "Talk",
    borderHover: "hover:border-tile-talk/50",
    badgeText: "text-tile-talk",
    titleHover: "group-hover:text-tile-talk",
    Icon: Presentation,
  },
  panel: {
    label: "Panel Moderation",
    borderHover: "hover:border-tile-panel/50",
    badgeText: "text-tile-panel",
    titleHover: "group-hover:text-tile-panel",
    Icon: UsersRound,
  },
  github: {
    label: "Project",
    borderHover: "hover:border-tile-github/50",
    badgeText: "text-tile-github",
    titleHover: "group-hover:text-tile-github",
    Icon: Github,
  },
  news: {
    label: "In the News",
    borderHover: "hover:border-tile-article/50",
    badgeText: "text-tile-article",
    titleHover: "group-hover:text-tile-article",
    Icon: Newspaper,
  },
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-[oklch(0.65_0.19_264/0.2)] text-[oklch(0.72_0.19_264)]",
  JavaScript: "bg-[oklch(0.82_0.18_85/0.2)] text-[oklch(0.82_0.18_85)]",
  CSS:        "bg-[oklch(0.65_0.22_25/0.2)]  text-[oklch(0.72_0.22_25)]",
  Rust:       "bg-[oklch(0.72_0.18_55/0.2)]  text-[oklch(0.72_0.18_55)]",
  Python:     "bg-[oklch(0.72_0.18_290/0.2)] text-[oklch(0.72_0.18_290)]",
  Logs:       "bg-[oklch(0.52_0.02_285/0.3)] text-[oklch(0.65_0.02_285)]",
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" })
}

function formatStars(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n)
}

export function ContentTile({ item }: { item: ContentItem }) {
  const config = categoryConfig[item.category]
  const { Icon, borderHover, badgeText, titleHover } = config

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col bg-card rounded-2xl border border-border overflow-hidden",
        "transition-all duration-300 ease-out hover:-translate-y-0.5",
        "glow-accent",
        borderHover,
      )}
      aria-label={`${config.label}: ${item.title}`}
    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden bg-secondary shrink-0 h-44">
        <Image
          src={item.thumbnail}
          alt={`Thumbnail for ${item.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* Dark overlay to unify thumbnails */}
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" aria-hidden="true" />

        {/* Bottom gradient into card */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--card))" }}
          aria-hidden="true"
        />

        {/* Category badge — top left */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span className={cn(
            "inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-[11px] font-mono font-medium",
            "backdrop-blur-md bg-black/60 border border-white/10",
            badgeText,
          )}>
            <Icon size={11} aria-hidden="true" />
            {config.label}
          </span>
          {item.upcoming && (
            <span className="inline-flex items-center px-2 py-1 rounded-lg text-[11px] font-mono font-medium backdrop-blur-md bg-accent/80 text-background border border-accent/30 animate-glow">
              Upcoming
            </span>
          )}
        </div>

        {/* Publication icon — bottom right */}
        {item.publicationIcon && (
          <div className="absolute bottom-3 right-3 z-10">
            <div className={cn(
              "h-7 px-2 rounded-lg overflow-hidden border border-white/15 backdrop-blur-sm flex items-center justify-center",
              "bg-neutral-700/80",
            )}>
              <Image
                src={item.publicationIcon}
                alt={item.publication ?? ""}
                width={80}
                height={20}
                className="h-4 w-auto object-contain"
                unoptimized
                onError={(e) => {
                  const el = (e.target as HTMLImageElement).closest("div") as HTMLDivElement | null
                  if (el) el.style.display = "none"
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-4 pt-3 pb-4 gap-2">
        {/* Publication + date row */}
        <div className="flex items-center justify-between">
          {item.publication && (
            <span className="font-mono text-[11px] text-muted-foreground truncate">
              {item.publication}
            </span>
          )}
          <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground tabular-nums shrink-0 ml-auto">
            <Calendar size={10} aria-hidden="true" />
            {formatDate(item.date)}
          </span>
        </div>

        {/* Title */}
        <h3 className={cn(
          "font-semibold leading-snug text-balance text-foreground text-sm sm:text-[15px]",
          "transition-colors duration-200",
          titleHover,
          "line-clamp-2",
        )}>
          {item.title}
        </h3>

        {/* Description */}
        <p className="sr-only">
          {item.description}
        </p>

        {/* Meta footer */}
        {(item.stars !== undefined || item.language) && (
          <div className="flex items-center gap-2.5 flex-wrap pt-1 mt-auto">
            {item.stars !== undefined && (
              <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground tabular-nums">
                <Star size={10} aria-hidden="true" />
                {formatStars(item.stars)}
              </span>
            )}
            {item.language && (
              <span className={cn(
                "font-mono text-[10px] px-1.5 py-0.5 rounded",
                languageColors[item.language] ?? "bg-muted text-muted-foreground",
              )}>
                {item.language}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  )
}
