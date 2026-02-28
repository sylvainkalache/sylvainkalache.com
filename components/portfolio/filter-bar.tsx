"use client"

import { type ContentCategory, type ArticlePublication, categories } from "@/lib/content-data"
import { FileText, Mic2, Presentation, Github, Newspaper, UsersRound, LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const iconMap: Record<ContentCategory, React.ElementType> = {
  all: LayoutGrid,
  article: FileText,
  podcast: Mic2,
  talk: Presentation,
  panel: UsersRound,
  github: Github,
  news: Newspaper,
}

interface FilterBarProps {
  active: ContentCategory
  onChange: (cat: ContentCategory) => void
  publications?: ArticlePublication[]
  activePublication?: string | null
  onPublicationChange?: (pub: string | null) => void
}

export function FilterBar({ active, onChange, publications, activePublication, onPublicationChange }: FilterBarProps) {
  const showSubmenu = active === "article" && publications && publications.length > 0

  return (
    <div className="flex flex-col gap-0">
      <div
        className="flex items-center gap-2 flex-wrap"
        role="tablist"
        aria-label="Filter content by category"
      >
        {categories.map(({ id, label, count }) => {
          const Icon = iconMap[id]
          const isActive = active === id
          return (
            <button
              key={id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(id)}
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border",
                isActive
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
              )}
            >
              <Icon
                size={14}
                className={cn(isActive ? "text-background" : "text-muted-foreground")}
                aria-hidden="true"
              />
              {label}
              <span
                className={cn(
                  "font-mono text-xs px-1.5 py-0.5 rounded-sm",
                  isActive
                    ? "bg-background/20 text-background"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Publication submenu */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          showSubmenu ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="flex items-center gap-2 flex-wrap pt-3 mt-3 border-t border-border">
            <button
              onClick={() => onPublicationChange?.(null)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border",
                activePublication === null
                  ? "bg-accent/15 text-accent border-accent/40"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
              )}
            >
              All
            </button>
            {publications?.map((pub) => (
              <button
                key={pub.name}
                onClick={() => onPublicationChange?.(pub.name)}
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border",
                  activePublication === pub.name
                    ? "bg-accent/15 border-accent/40"
                    : "bg-transparent border-border hover:border-foreground/40 hover:bg-secondary/50"
                )}
              >
                <span className="flex items-center justify-center w-[80px] h-5">
                  <Image
                    src={pub.logo}
                    alt={pub.name}
                    width={80}
                    height={20}
                    className="max-h-[18px] max-w-[80px] w-auto h-auto object-contain"
                    unoptimized
                  />
                </span>
                <span
                  className={cn(
                    "font-mono text-xs px-1 py-0.5 rounded-sm",
                    activePublication === pub.name
                      ? "bg-accent/20 text-accent"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {pub.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
