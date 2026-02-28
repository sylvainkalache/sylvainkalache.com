"use client"

import { storyEntries } from "@/lib/story-data"
import { TimelineEntry } from "./timeline-entry"

interface TimelineProps {
  activeId: string
}

export function Timeline({ activeId }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

      {storyEntries.map((entry) => (
        <TimelineEntry
          key={entry.id}
          entry={entry}
          isActive={activeId === entry.id}
        />
      ))}
    </div>
  )
}
