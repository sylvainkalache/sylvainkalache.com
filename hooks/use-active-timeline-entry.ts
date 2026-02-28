"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Observes timeline entry elements and returns the ID of the one
 * currently most visible in the viewport.
 */
export function useActiveTimelineEntry(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "")
  const ratiosRef = useRef(new Map<string, number>())

  useEffect(() => {
    const ratios = ratiosRef.current
    ratios.clear()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio)
        }

        // Find the entry with the highest intersection ratio,
        // preferring earlier entries (DOM order) when tied
        let best = ""
        let bestRatio = -1
        for (const id of ids) {
          const ratio = ratios.get(id) ?? 0
          if (ratio > bestRatio) {
            best = id
            bestRatio = ratio
          }
        }

        if (best) setActiveId(best)
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
    )

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    for (const el of elements) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [ids])

  return activeId
}
