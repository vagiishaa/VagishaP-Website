import Link from 'next/link'

const index = [
  {
    href: '/about',
    label: 'About',
    note: 'Who am I, What drives me?',
  },
  {
    href: '/experience',
    label: 'Experience',
    note: 'Professional pursuits, pivots, and everything in the middle',
  },
  {
    href: '/writing',
    label: 'Writing',
    note: 'Thought dumps & two cents',
  },
  {
    href: '/contact',
    label: 'Say Hello',
    note: 'If you were to be an inanimate object, which one would it be?',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-parchment flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-6 w-full py-24">

        <div className="mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-ink mb-5 leading-tight">
            Vagisha Purohit
          </h1>
          <p className="text-xs text-muted font-light tracking-[0.15em] uppercase">
            Dublin, Ireland
          </p>
        </div>

        <div className="border-t border-warm">
          {index.map(({ href, label, note }) => (
            <Link
              key={href}
              href={href}
              className="group flex justify-between items-baseline border-b border-warm py-6 hover:pl-1 transition-all duration-200"
            >
              <span className="font-serif text-2xl text-ink group-hover:text-terracotta transition-colors duration-200">
                {label}
              </span>
              <span className="text-xs text-muted font-light hidden sm:block group-hover:text-body transition-colors duration-200">
                {note}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}
