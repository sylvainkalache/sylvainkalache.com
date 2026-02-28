"use client"

import type { StoryEntry } from "@/lib/story-data"

interface TimelineEntryProps {
  entry: StoryEntry
  isActive: boolean
}

export function TimelineEntry({ entry, isActive }: TimelineEntryProps) {
  return (
    <div
      id={entry.id}
      className={`relative pl-8 pb-16 min-h-[200px] transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-40"
      }`}
    >
      {/* Dot on the line */}
      <div
        className={`absolute left-0 top-1 w-3 h-3 rounded-full border-2 transition-all duration-500 -translate-x-[6.5px] ${
          isActive
            ? "bg-accent border-accent shadow-[0_0_12px_oklch(0.72_0.18_290/0.5)]"
            : "bg-background border-border"
        }`}
      />

      <span className="font-mono text-xs text-accent">{entry.year}</span>
      <h3 className="text-lg font-semibold text-foreground mt-1">
        {entry.title}
      </h3>
      <p className="text-sm text-muted-foreground mt-2 max-w-md leading-relaxed">
        {entry.description}
      </p>
    </div>
  )
}
