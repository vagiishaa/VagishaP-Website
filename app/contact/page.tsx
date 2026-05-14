import Nav from '../components/nav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Say Hello — Vagisha Purohit',
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">

        <h1 className="font-serif text-3xl text-ink mb-14">Say Hello</h1>

        <p className="text-body text-[15px] leading-[1.9] font-light max-w-md mb-14">
          I'm currently looking for customer success roles in Dublin or remotely.
          If you're working on something where curiosity, care, and a genuine interest in
          people actually matter — I'd love to hear from you.
        </p>

        <div className="border-t border-warm pt-10 space-y-5">
          <ContactLink
            label="Email"
            value="vagisha.connect@gmail.com"
            href="mailto:vagisha.connect@gmail.com"
          />
          <ContactLink
            label="LinkedIn"
            value="vagisha-purohit"
            href="https://www.linkedin.com/in/vagisha-purohit"
          />
          <ContactLink
            label="Substack"
            value="@vagishaa"
            href="https://vagishaa.substack.com"
          />
        </div>

        <div className="mt-14 pt-10 border-t border-warm">
          <a
            href="/Resume_VagishaP.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] text-ink font-light hover:text-terracotta transition-colors duration-200 group"
          >
            <span className="border border-current px-4 py-2 group-hover:border-terracotta transition-colors duration-200">
              Download CV
            </span>
          </a>
          <p className="text-xs text-muted font-light mt-3">PDF, updated 2025</p>
        </div>

      </main>
    </div>
  )
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: string
  value: string
  href: string
}) {
  return (
    <div className="flex items-baseline gap-6">
      <span className="text-xs text-muted font-light w-20 shrink-0">{label}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[15px] text-ink font-light hover:text-terracotta transition-colors duration-200"
      >
        {value} →
      </a>
    </div>
  )
}
