import Nav from '../components/nav'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Vagisha Purohit',
}

export default function About() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">

        <div className="flex items-start gap-10 mb-14">
          <h1 className="font-serif text-3xl text-ink">About</h1>
          <Image
            src="/photo.jpg"
            alt="Vagisha Purohit"
            width={96}
            height={96}
            className="rounded-full object-cover grayscale ml-auto"
          />
        </div>

        <div className="max-w-xl space-y-6 text-body leading-[1.9] font-light text-[15px]">
          <p>
            For the longest time, I've gone by one label: rational optimist. Someone who isn't
            blinded by radical optimism but isn't dragging their feet through reality either.
            Happy to report I haven't outgrown it yet. :)
          </p>
          <p>
            After graduating, I joined a small but mighty team — reading between the lines of
            what clients actually needed, building trust across industries, and figuring out a
            lot about how I function in a highly challenging environment. Then I wanted
            something that would raise the stakes, push me somewhere unfamiliar & that's when
            UCD happened. The single biggest plot twist of my life. A new country, a new version
            of myself, and enough lemons to last a lifetime.
          </p>
          <p>
            The thread running through all of it has been curiosity about people. How we function
            individually, what makes us one, what sets us apart, and where we're all headed. In
            that pursuit, I came back to my pen & paper — to make some sense of what's happening
            around me and within me. So hey!, if any of this hit a chord, follow along! :)
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-warm">
          <a
            href="https://neal.fun/absurd-trolley-problems/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted font-light hover:text-terracotta transition-colors duration-200"
          >
            need a break from the scroll? this might help — or make it worse. →
          </a>
        </div>

      </main>
    </div>
  )
}
