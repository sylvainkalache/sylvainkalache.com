"use client"

import { useMemo } from "react"
import { storyEntries } from "@/lib/story-data"
import { useActiveTimelineEntry } from "@/hooks/use-active-timeline-entry"
import { Timeline } from "./timeline"
import { WorldMap } from "./world-map"

export function MyStoryPage() {
  const ids = useMemo(() => storyEntries.map((e) => e.id), [])
  const activeId = useActiveTimelineEntry(ids)

  const activeEntry = storyEntries.find((e) => e.id === activeId)
  const locations = activeEntry?.locations ?? []

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">
      <h1 className="text-3xl font-semibold text-foreground mb-2">My Story</h1>
      <p className="text-sm text-muted-foreground mb-12 max-w-lg">
        From France to San Francisco and beyond — the places, projects, and
        people that shaped my journey in tech.
      </p>

      {/* Desktop: sticky landscape map on top, timeline below */}
      <div className="hidden lg:block sticky top-16 z-10 mb-12 rounded-lg border border-border overflow-hidden bg-background">
        <div className="h-[50vh] max-h-[420px]">
          <WorldMap locations={locations} />
        </div>
      </div>

      {/* Mobile: compact sticky map */}
      <div className="lg:hidden sticky top-14 z-10 mb-8 bg-background/90 backdrop-blur-md rounded-lg border border-border overflow-hidden">
        <div className="h-48">
          <WorldMap locations={locations} compact />
        </div>
      </div>

      {/* Timeline below the map */}
      <div className="max-w-2xl">
        <Timeline activeId={activeId} />
      </div>
    </section>
  )
}
