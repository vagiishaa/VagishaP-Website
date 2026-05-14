import Nav from '../components/nav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing — Vagisha Purohit',
}

const essays = [
  {
    title: 'Is making new friends really that hard?',
    subtitle: 'On friendships, finding your people, and building platonic relationships',
    date: 'May 7, 2025',
    href: 'https://vagishaa.substack.com/p/is-making-new-friends-really-that',
  },
  {
    title: 'Am I losing my ambition?',
    subtitle: 'On identity, finding pieces of you, and the relentless pursuit of living',
    date: 'May 6, 2025',
    href: 'https://vagishaa.substack.com',
  },
]

export default function Writing() {
  return (
    <div className="min-h-screen bg-parchment">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">

        <div className="mb-14">
          <h1 className="font-serif text-3xl text-ink mb-3">Writing</h1>
          <p className="text-sm text-muted font-light italic">sunsetsfrommywindow</p>
        </div>

        <p className="text-body text-[15px] leading-relaxed font-light max-w-lg mb-14">
          I write about the things I can't stop thinking about — friendships, ambition, identity,
          the in-between moments of being a person. Not advice. Not a brand. Just thinking out loud.
        </p>

        <div className="border-t border-warm">
          {essays.map((essay) => (
            <a
              key={essay.title}
              href={essay.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-warm py-7 hover:pl-1 transition-all duration-200"
            >
              <div className="flex justify-between items-start gap-4 mb-2">
                <h2 className="font-serif text-xl text-ink group-hover:text-terracotta transition-colors duration-200 leading-snug">
                  {essay.title}
                </h2>
                <span className="text-xs text-muted font-light whitespace-nowrap pt-1">{essay.date}</span>
              </div>
              <p className="text-xs text-muted font-light leading-relaxed">{essay.subtitle}</p>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://vagishaa.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-terracotta hover:underline underline-offset-4 tracking-wide"
          >
            Read more on Substack →
          </a>
        </div>

      </main>
    </div>
  )
}
