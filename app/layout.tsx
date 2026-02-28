import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sylvain Kalache',
  description: 'DevRel & AI Labs lead at Rootly. Co-founded Holberton School. Helping SRE teams succeed with AI, Claude, and MCP through writing, speaking, and open-source.',
  themeColor: '#141414',
  openGraph: {
    title: 'Sylvain Kalache',
    description: 'DevRel & AI Labs lead at Rootly. Helping SRE teams succeed with AI, Claude, and MCP.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
