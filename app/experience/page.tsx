import Nav from '../components/nav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience — Vagisha Purohit',
}

const experience = [
  {
    org: 'Nextyn Advisory',
    role: 'Analyst → Consultant → Assistant Manager',
    location: 'Mumbai',
    period: '2022 – 2024',
    highlight: true,
    description:
      'Worked in the expert network arm of a market research and consulting firm. Matched businesses with domain experts, managed client relationships end-to-end, and navigated complex stakeholder needs across industries. Promoted twice in two years.',
  },
  {
    org: 'Retail',
    role: 'Part-time',
    location: 'Dublin',
    period: '2024 – present',
    highlight: false,
    description:
      'Worked part-time in retail in Dublin while completing my masters — customer-facing, fast-paced, and a grounding reminder that good service is fundamentally about people.',
  },
]

const education = [
  {
    org: 'University College Dublin — Michael Smurfit Graduate School of Business',
    role: 'MSc Marketing',
    location: 'Dublin',
    period: '2024 – 2025',
    description:
      'Postgraduate study in marketing strategy, consumer behaviour, and brand management. Relocated independently from India to Ireland to pursue this.',
  },
  {
    org: 'University of Mumbai',
    role: 'Undergraduate Degree',
    location: '',
    period: '2018 – 2022',
    description:
      'Active in extracurricular life throughout — led teams, organised initiatives, and developed a foundation in business and marketing thinking.',
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen bg-parchment">
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
      <p className="text-[10px] text-muted tracking-[0.2em] uppercase mb-6 font-light">{title}</p>
      <div className="space-y-10">{children}</div>
    </div>
  )
}

function Entry({
  org,
  role,
  location,
  period,
  description,
  highlight = false,
}: {
  org: string
  role: string
  location: string
  period: string
  description: string
  highlight?: boolean
}) {
  return (
    <div className={`border-l-2 pl-5 ${highlight ? 'border-terracotta' : 'border-warm'}`}>
      <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
        <h3 className="text-ink font-normal text-[15px]">{org}</h3>
        <span className="text-xs text-muted font-light">{period}</span>
      </div>
      <p className="text-xs text-terracotta mb-3 font-light tracking-wide">
        {role}{location ? ` · ${location}` : ''}
      </p>
      <p className="text-body text-[14px] leading-relaxed font-light">{description}</p>
    </div>
  )
}
