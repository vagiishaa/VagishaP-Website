import Nav from '../components/nav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience — Vagisha Purohit',
}

const experience = [
  {
    org: 'Sales Associate — COS',
    orgHref: 'https://www.cos.com',
    role: 'Part-time',
    location: 'Dublin',
    period: '2024 – present',
    highlight: false,
    description:
      'Started working alongside pursuing the Master\'s Degree. A true test of working in a fast-paced environment and a grounding reminder that it all starts with people.',
  },
  {
    org: 'Nextyn Advisory',
    orgHref: 'https://www.nextyn.com',
    role: 'Analyst → Consultant → Assistant Manager',
    location: 'Mumbai',
    period: '2022 – 2024',
    highlight: true,
    description:
      'A step into the world of EODs, Circling back & efficient TATs right after college which turned into an environment that shaped me.',
  },
]

const education = [
  {
    org: 'University College Dublin — Michael Smurfit Graduate School of Business',
    orgHref: 'https://www.smurfitschool.ie',
    role: 'MSc Marketing',
    location: 'Dublin',
    period: '2024 – 2025',
    description:
      'Modules focusing on Marketing Management, Consumer Behavior, Creating Customer Value & AI. Capstone project focusing on rebranding a classic Irish brand to suit GenZ needs along with cross functional collaboration with the cohort.',
  },
  {
    org: 'University of Mumbai',
    orgHref: 'https://www.nmcollege.in',
    role: 'Bachelors of Commerce (Business Management & Marketing)',
    location: '',
    period: '2018 – 2022',
    description:
      'A place that nurtured me to challenge perspectives, lead with empathy and develop a strategic mindset via active participation in academic & extra curricular endeavors.',
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">

        <h1 className="font-serif text-3xl text-ink mb-14">Experience</h1>

        <Section title="Work">
          {experience.map((item) => (
            <Entry key={item.org} {...item} />
          ))}
        </Section>

        <Section title="Education">
          {education.map((item) => (
            <Entry key={item.org} {...item} />
          ))}
        </Section>

        <div className="mt-14">
          <a
            href="https://www.linkedin.com/in/vagisha-purohit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-terracotta hover:underline underline-offset-4 tracking-wide"
          >
            Full profile on LinkedIn →
          </a>
        </div>

      </main>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <p className="text-sm text-ink font-medium tracking-[0.15em] uppercase mb-6">{title}</p>
      <div className="space-y-10">{children}</div>
    </div>
  )
}

function Entry({
  org,
  orgHref,
  role,
  location,
  period,
  description,
  highlight = false,
}: {
  org: string
  orgHref?: string
  role: string
  location: string
  period: string
  description: string
  highlight?: boolean
}) {
  return (
    <div className="border-l-2 pl-5 border-warm hover:border-terracotta transition-colors duration-300">
      <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
        {orgHref ? (
          <a
            href={orgHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink font-normal text-[15px] hover:text-terracotta transition-colors duration-200"
          >
            {org}
          </a>
        ) : (
          <h3 className="text-ink font-normal text-[15px]">{org}</h3>
        )}
        <span className="text-xs text-body font-light">{period}</span>
      </div>
      <p className="text-xs text-terracotta mb-3 font-light tracking-wide">
        {role}{location ? ` · ${location}` : ''}
      </p>
      <p className="text-body text-[14px] leading-relaxed font-light">{description}</p>
    </div>
  )
}
