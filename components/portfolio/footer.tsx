import { Github, Twitter, Youtube, Mail } from "lucide-react"

const links = [
  { icon: Github, href: "https://github.com/Rootly-AI-Labs", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/sylvainkalache", label: "X / Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/@sylvainkalache", label: "YouTube" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-mono text-sm text-foreground">
            <span className="text-accent">~/</span>sylvain
          </span>
          <span className="text-xs text-muted-foreground">
            &copy; {year}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-4" role="list">
            {links.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                >
                  <Icon size={16} aria-hidden="true" />
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
      </div>
    </footer>
  )
}
