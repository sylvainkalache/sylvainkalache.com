"use client"

import { useMemo } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "@vnedyalk0v/react19-simple-maps"
import type { StoryLocation } from "@/lib/story-data"

const GEO_URL = "https://unpkg.com/world-atlas@2/countries-110m.json"

// Hardcoded colors matching CSS variables (CSS vars don't reliably resolve in SVG attributes)
const COUNTRY_FILL = "oklch(0.16 0.006 285)"
const COUNTRY_STROKE = "oklch(0.32 0.01 285)"
const MARKER_FILL = "oklch(0.72 0.18 290)"
const LABEL_FILL = "oklch(0.52 0.02 285)"

interface WorldMapProps {
  locations: StoryLocation[]
  compact?: boolean
}

export function WorldMap({ locations, compact = false }: WorldMapProps) {
  const projection = useMemo(
    () => ({
      rotate: [-10, 0, 0] as [number, number, number],
      scale: compact ? 100 : 130,
    }),
    [compact],
  )

  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={projection}
      width={800}
      height={400}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }: { geographies: Record<string, unknown>[] }) =>
          geographies.map((geo) => (
            <Geography
              key={(geo as { rsmKey: string }).rsmKey}
              geography={geo}
              fill={COUNTRY_FILL}
              stroke={COUNTRY_STROKE}
              strokeWidth={0.5}
              style={{
                default: { outline: "none" },
                hover: { outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {locations.map((loc, i) => (
        <Marker key={`${loc.name}-${i}`} coordinates={loc.coordinates}>
          <circle
            r={compact ? 3 : 4}
            fill={MARKER_FILL}
            className="marker-appear marker-pulse"
            style={{ animationDelay: `${i * 80}ms` }}
          />
          {!compact && (
            <text
              textAnchor="middle"
              y={-10}
              fill={LABEL_FILL}
              style={{
                fontSize: "8px",
                fontFamily: "var(--font-mono), monospace",
                animationDelay: `${i * 80 + 200}ms`,
              }}
              className="marker-appear"
            >
              {loc.name}
            </text>
          )}
        </Marker>
      ))}
    </ComposableMap>
  )
}
