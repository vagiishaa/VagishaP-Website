'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  const links = [
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/writing', label: 'Writing' },
    { href: '/contact', label: 'Say Hello' },
  ]

  return (
    <header className="border-b border-warm">
      <div className="max-w-3xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link
          href="/"
          className="font-serif text-sm text-ink hover:text-terracotta transition-colors duration-200"
        >
          Vagisha Purohit
        </Link>
        <nav className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-ink'
                  : 'text-muted hover:text-ink'
              } ${link.label === 'Say Hello' ? 'hover:text-terracotta' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
