"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Returns a ref to attach to an element and a className string that
 * fades + slides the element in once it enters the viewport.
 */
export function useScrollFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const cls = visible
    ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
    : "opacity-0 translate-y-6"

  return { ref, cls, visible }
}
