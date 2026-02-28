"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { type ContentCategory, contentItems, articlePublications } from "@/lib/content-data"
import { FilterBar } from "./filter-bar"
import { ContentTile } from "./content-tile"
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const ITEMS_PER_PAGE = 12

function useFadeIn(threshold = 0.08) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

export function ContentGrid() {
  const [activeCategory, setActiveCategory] = useState<ContentCategory>("all")
  const [activePublication, setActivePublication] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [page, setPage] = useState(1)

  // Reset publication filter when category changes
  useEffect(() => { setActivePublication(null) }, [activeCategory])

  const filtered = useMemo(() => {
    let items = contentItems
    if (activeCategory !== "all") items = items.filter(i => i.category === activeCategory)
    if (activePublication) items = items.filter(i => i.publication === activePublication)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      items = items.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        i.publication?.toLowerCase().includes(q)
      )
    }
    return [...items].sort((a, b) => {
      if (a.upcoming !== b.upcoming) return a.upcoming ? -1 : 1
      if (a.featured !== b.featured) return a.featured ? -1 : 1
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  }, [activeCategory, activePublication, searchQuery])

  // Reset page when filters change
  useEffect(() => { setPage(1) }, [activeCategory, activePublication, searchQuery])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 pt-4 pb-16">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">./work</span>
        <span className="flex-1 h-px bg-border" aria-hidden="true" />
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-8">
        <FilterBar
          active={activeCategory}
          onChange={setActiveCategory}
          publications={articlePublications}
          activePublication={activePublication}
          onPublicationChange={setActivePublication}
        />
        <div className="relative sm:ml-auto shrink-0">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={cn(
              "w-full sm:w-52 pl-9 pr-8 py-1.5 rounded-lg border border-border bg-secondary/50",
              "text-sm text-foreground placeholder:text-muted-foreground font-mono",
              "focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all",
            )}
            aria-label="Search content"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      {paged.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paged.map((item, i) => (
            <FadeInTile key={item.id} delay={Math.min(i, 5) * 80}>
              <ContentTile item={item} />
            </FadeInTile>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="font-mono text-muted-foreground text-sm mb-2">No results found</p>
          <p className="text-xs text-muted-foreground">Try adjusting your search or filter</p>
          <button
            onClick={() => { setSearchQuery(""); setActiveCategory("all") }}
            className="mt-4 text-xs text-accent hover:underline"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Pagination + Count */}
      {filtered.length > 0 && (
        <div className="flex items-center justify-between mt-8">
          <p className="text-xs text-muted-foreground font-mono tabular-nums">
            {filtered.length} item{filtered.length !== 1 ? "s" : ""}
          </p>

          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: document.getElementById("work")?.offsetTop ?? 0, behavior: "smooth" }) }}
                disabled={page === 1}
                className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:pointer-events-none transition-all"
                aria-label="Previous page"
              >
                <ChevronLeft size={14} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  onClick={() => { setPage(p); window.scrollTo({ top: document.getElementById("work")?.offsetTop ?? 0, behavior: "smooth" }) }}
                  className={cn(
                    "w-8 h-8 flex items-center justify-center rounded-md text-xs font-mono transition-all",
                    p === page
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                  )}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: document.getElementById("work")?.offsetTop ?? 0, behavior: "smooth" }) }}
                disabled={page === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30 disabled:pointer-events-none transition-all"
                aria-label="Next page"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

function FadeInTile({
  children,
  delay,
}: {
  children: React.ReactNode
  delay: number
}) {
  const { ref, visible } = useFadeIn(0.05)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      )}
      style={{ transitionDuration: "600ms", transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}
