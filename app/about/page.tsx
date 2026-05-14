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
            I'm a marketer by training, a researcher by instinct, and a writer in my spare time.
            After graduating with a BCom in Business Management and Marketing, I spent two years at{' '}
            <span className="text-ink font-normal">Nextyn Advisory</span> in Mumbai — connecting
            companies with domain experts, reading between the lines of what clients actually needed,
            and building trust across industries. I was promoted twice in those two years.
          </p>
          <p>
            Then I moved to Dublin to pursue my MSc in Marketing at{' '}
            <span className="text-ink font-normal">UCD Michael Smurfit Business School</span>.
            Starting over in a new country taught me things no classroom could — about building
            community from scratch, about resilience, about what it really takes to keep going when
            the path isn't obvious.
          </p>
          <p>
            The thread running through all of it: a genuine curiosity about people. Why they make
            the choices they do, how they build relationships, what keeps them going. It's what draws
            me to customer success — and it's what I write about on Substack.
          </p>
          <p>
            I'm also drawn to human psychology and anthropology — not in an academic way, but in the
            "why did that just happen" way. Understanding people has always felt less like a skill
            and more like a compulsion.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-warm flex gap-8 text-xs text-muted font-light tracking-wide">
          <div>
            <p className="text-ink font-normal mb-1 text-sm">Based in</p>
            <p>Dublin, Ireland</p>
          </div>
          <div>
            <p className="text-ink font-normal mb-1 text-sm">Looking for</p>
            <p>Customer success roles</p>
          </div>
          <div>
            <p className="text-ink font-normal mb-1 text-sm">Writing</p>
            <p>sunsetsfrommywindow</p>
          </div>
        </div>

      </main>
    </div>
  )
}
