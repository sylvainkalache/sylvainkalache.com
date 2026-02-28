"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Github, Twitter, Linkedin, Menu, X, Mail, Bot } from "lucide-react"

const FULL_NAME = "sylvain"

function useTypewriter(text: string, speed = 80, startDelay = 400) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    setDisplayed("")
    setDone(false)
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sylvainkalache/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/sylvainkalache", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/sylvainkalache", label: "X / Twitter" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { displayed, done } = useTypewriter(FULL_NAME, 90, 300)
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Blink cursor after typing finishes
  useEffect(() => {
    if (!done || !cursorRef.current) return
    let visible = true
    const id = setInterval(() => {
      if (cursorRef.current) {
        visible = !visible
        cursorRef.current.style.opacity = visible ? "1" : "0"
      }
    }, 530)
    return () => clearInterval(id)
  }, [done])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-mono text-sm font-medium text-foreground hover:text-accent transition-colors inline-flex items-center"
          aria-label="Sylvain Kalache — home"
        >
          <span className="text-accent">~/</span>
          <span>{displayed}</span>
          <span
            ref={cursorRef}
            className="inline-block w-[2px] h-[1em] bg-accent ml-[1px] align-middle translate-y-[-1px]"
            aria-hidden="true"
          />
        </Link>

        {/* Social icons + Contact */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/agent"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Bot size={13} />
            Agent Section
          </Link>
          <ul className="flex items-center gap-3" role="list">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:sylvain@kalache.fr"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-muted-foreground bg-secondary hover:text-foreground hover:bg-secondary/80 transition-colors"
          >
            <Mail size={13} />
            Contact
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6 pt-2">
          <div className="flex items-center gap-4">
            <Link
              href="/agent"
              className="flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <Bot size={15} />
              Agent Section
            </Link>
            <ul className="flex items-center gap-4" role="list">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:sylvain@kalache.fr"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-accent-foreground bg-accent hover:bg-accent/80 transition-colors ml-auto"
            >
              <Mail size={13} />
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
