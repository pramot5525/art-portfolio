import Head from 'next/head'
import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'
// Same file the og:image tag points at, so there is one portrait to replace
import portrait from '../public/img/art.jpeg'

const EMAIL = 'pramot.nn@gmail.com'
const GITHUB = 'https://github.com/pramot5525'
const LINKEDIN = 'https://www.linkedin.com/in/pramot-natemanee-579581174/'

type YearMonth = [year: number, month: number]

type Entry = {
  id: string
  org: string
  /** Small line above the details: legal name, campus or company type */
  note?: string
  role: string
  kind: 'work' | 'study'
  start: YearMonth
  /** Leave out for the current role; it then runs to the build date and reads "Present" */
  end?: YearMonth
  /** Length as the owner states it (past roles only); the period text is derived */
  duration?: string
  /** A role with no items shows as a plain row with nothing to open */
  items: string[]
  tech?: string[]
}

const entries: Entry[] = [
  {
    id: 'ktc',
    org: 'KTC',
    role: 'Senior Software Engineer',
    kind: 'work',
    start: [2026, 5],
    items: [],
  },
  {
    id: 'nocnoc',
    org: 'NocNoc',
    note: 'BetterBe Marketplace Co., Ltd.',
    role: 'Software Engineer',
    kind: 'work',
    start: [2024, 7],
    end: [2026, 1],
    duration: '1.5 yrs',
    items: [
      'Led strategic migration of legacy services from Node.js to Golang, enhancing concurrency for compute-intensive tasks',
      'Designed event-driven workflows with Kafka for high-throughput, reliable microservice communication',
      'Implemented Prometheus monitoring pipelines, proactively reducing API latency and streamlining error handling',
      'Enforced >80% unit test coverage, minimizing regression risks and accelerating release cycles',
      'Standardized API contracts via Swagger/OpenAPI, reducing frontend-backend integration time by 30%',
      'Developed Affiliate, Loyalty, and Merchant Center systems with scalable data structures',
    ],
    tech: ['Go', 'Kafka', 'Kubernetes', 'Prometheus', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'tridept',
    org: 'Tridept',
    note: 'Tridept Co., Ltd.',
    role: 'Senior Full Stack Developer',
    kind: 'work',
    start: [2021, 10],
    end: [2024, 6],
    duration: '2.7 yrs',
    items: [
      'Architected high-performance web applications using Golang (backend) and Next.js (frontend)',
      'Led PRYWAN and Vespisti ID e-commerce platforms with product catalogs, carts, and payment gateway integrations',
      'Designed scalable REST/GraphQL APIs with comprehensive unit testing for data integrity',
      'Established CI/CD pipelines via GitHub Actions, eliminating manual deployment errors',
    ],
    tech: ['Go', 'Next.js', 'GraphQL', 'PostgreSQL', 'GitHub Actions', 'Docker'],
  },
  {
    id: 'weeklyorder',
    org: 'WeeklyOrder',
    note: 'Startup',
    role: 'Full Stack Developer',
    kind: 'work',
    start: [2020, 8],
    end: [2021, 9],
    duration: '13 mos',
    items: [
      'Developed real-time container tracking system using Golang and GraphQL for logistics visibility',
      'Engineered WebSocket-based chat module for seamless user-support communication',
      'Integrated Vue.js with high-performance backend services, optimizing application responsiveness',
    ],
    tech: ['Go', 'GraphQL', 'WebSocket', 'Vue.js', 'MySQL'],
  },
  {
    id: '23perspective',
    org: '23 Perspective',
    note: '23 Perspective Co., Ltd.',
    role: 'Software Engineer',
    kind: 'work',
    start: [2016, 7],
    end: [2020, 7],
    duration: '4 yrs',
    items: [
      'Built enterprise web solutions for PTT Blue Card, Tourism Thailand, and Ocean Property',
      'Engineered a comprehensive e-commerce marketplace for Srimuang Market',
      'Delivered high-traffic micro-sites for AirAsia, SCG, and Royal Canin marketing campaigns',
      'Built SEO-friendly frontends with Nuxt.js and robust backends with PHP CodeIgniter',
    ],
    tech: ['PHP', 'Nuxt.js', 'Vue.js', 'MySQL', 'CodeIgniter', 'JavaScript'],
  },
  {
    id: 'ymmy',
    org: 'YMMY',
    note: 'YMMY Co., Ltd.',
    role: 'Co-op iOS Developer',
    kind: 'work',
    start: [2015, 6],
    end: [2015, 12],
    duration: '6 mos',
    items: [
      'Developed native iOS applications using Objective-C and Xcode',
      'Top 10 Finalist in the Krungsri Uni Startup 2015 competition',
    ],
    tech: ['Objective-C', 'iOS', 'Xcode'],
  },
  {
    id: 'kasetsart',
    org: 'Kasetsart University',
    note: 'Kasetsart University, Kamphaeng Saen Campus',
    role: 'B.Eng. Computer Engineering',
    kind: 'study',
    start: [2012, 5],
    end: [2016, 6],
    duration: '4 yrs',
    items: [
      'Bachelor of Engineering in Computer Engineering',
      'GPA 3.41',
    ],
  },
]

const skills = [
  { label: 'Backend', items: 'Go, Fiber, Gin, GORM, Node.js, TypeScript, Express, Sequelize, PHP, REST, GraphQL' },
  { label: 'Frontend', items: 'React, Next.js, Vue.js, Tailwind CSS, Bootstrap' },
  { label: 'Data and messaging', items: 'PostgreSQL, MySQL, Redis, Kafka' },
  { label: 'Infra and DevOps', items: 'Docker, Kubernetes, AWS, GitHub Actions, CI/CD pipelines, Prometheus' },
  { label: 'Testing and quality', items: 'Testify, Mockery, Sinon, Chai, unit testing' },
  { label: 'Practices', items: 'Microservices architecture, system design, AI-augmented development, root cause analysis' },
]

// "Now" is captured when the static site is built; every deploy rebuilds it,
// so the current role's bar grows with each push.
const built = new Date()
const NOW: YearMonth = [built.getFullYear(), built.getMonth() + 1]
const endOf = (entry: Entry): YearMonth => entry.end ?? NOW

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const formatMonth = ([year, month]: YearMonth) => `${MONTHS[month - 1]} ${year}`
const period = ({ start, end }: Entry) =>
  `${formatMonth(start)} – ${end ? formatMonth(end) : 'Present'}`

// The details row opened on load: the newest role that has something to show
const OPEN_BY_DEFAULT = entries.find(e => e.items.length > 0)?.id

// The axis covers whole years, from the earliest start to the end of the
// latest entry's final year, so every bar always fits inside the track.
const AXIS_FROM = Math.min(...entries.map(e => e.start[0]))
const AXIS_TO = Math.max(...entries.map(e => endOf(e)[0])) + 1
// Two-year ticks, or four once the history is long enough for labels to crowd
const TICK_STEP = AXIS_TO - AXIS_FROM > 18 ? 4 : 2
const ticks = Array.from(
  { length: Math.ceil((AXIS_TO - AXIS_FROM) / TICK_STEP) },
  (_, i) => AXIS_FROM + i * TICK_STEP,
)
const pct = (t: number) => ((t - AXIS_FROM) / (AXIS_TO - AXIS_FROM)) * 100

// Gridline spacing for the CSS, derived from the same axis as the ticks and bars
const timelineStyle = { '--tick-gap': `${pct(AXIS_FROM + TICK_STEP)}%` } as CSSProperties

function barStyle(entry: Entry): CSSProperties {
  const { start } = entry
  const end = endOf(entry)
  const from = start[0] + (start[1] - 1) / 12
  const to = end[0] + end[1] / 12
  return { '--from': `${pct(from)}%`, '--span': `${pct(to) - pct(from)}%` } as CSSProperties
}

const SITE_URL = 'https://pramot5525.github.io/art-portfolio/'
const TITLE = 'Pramot Natemanee (Art), senior software engineer'
const DESCRIPTION =
  'Senior software engineer at KTC, based in Bangkok, with 9+ years of experience. Backend systems in Go and Node.js, from Kafka event pipelines to e-commerce platforms.'

const favicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='16' fill='%23FF3E9A'/%3E%3Ctext x='16' y='22' font-family='Arial' font-weight='900' font-size='16' text-anchor='middle'%3EA%3C/text%3E%3C/svg%3E"

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}<span className="visually-hidden"> (opens in new tab)</span>
    </a>
  )
}

// The page has no client-side behaviour (<details> and CSS do the work),
// so production builds skip shipping and hydrating React.
export const config = { runtime: 'nodejs', unstable_runtimeJS: false }

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}img/art.jpeg`} />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="960" />
        <meta property="og:image:alt" content="Portrait of Pramot (Art)" />
        <meta name="twitter:card" content="summary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#E1E5E8" />
        <link rel="icon" href={favicon} />
      </Head>

      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Art, back to top">Art</a>
        <nav className="masthead-nav" aria-label="Sections">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-name">
          <h1 className="hero-name" id="hero-name">
            {/* Soft hyphens give enlarged text a clean place to break */}
            <span>Pra&shy;mot</span> <span>Nate&shy;manee</span>
          </h1>

          <div className="hero-photo">
            <Image
              src={portrait}
              alt="Portrait of Pramot (Art) in a white T-shirt and black glasses, looking down"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="hero-intro">
            <p className="hero-lede">
              Senior software engineer at KTC, based in Bangkok, with 9+&nbsp;years of experience.
              Most people call me Art.
            </p>
            <p>
              I build backend systems in Go and Node.js for e-commerce and logistics: event-driven
              services on Kafka, API contracts frontend teams can rely on, and monitoring that catches
              slow endpoints early. Before KTC, at NocNoc, I led the migration of legacy services
              from Node.js to Go.
            </p>
            <div className="hero-actions">
              <a className="button" href={`mailto:${EMAIL}`}>Email me</a>
              <ExternalLink href={GITHUB}>GitHub</ExternalLink>
              <ExternalLink href={LINKEDIN}>LinkedIn</ExternalLink>
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-head">
            <h2 id="experience-title">Experience</h2>
            <p>Six companies since 2015, plus university. Newest first; open a row for details.</p>
          </div>

          <div style={timelineStyle}>
            <div className="axis" aria-hidden="true">
              <div className="axis-track">
                {ticks.map(year => (
                  <span key={year} className="axis-tick" style={{ '--at': `${pct(year)}%` } as CSSProperties}>
                    {year}
                  </span>
                ))}
              </div>
            </div>

            {entries.map(entry => {
              const className = entry.kind === 'study' ? 'job job--study' : 'job'
              const head = (
                <>
                  <span className="job-who">
                    <span className="job-org">{entry.org}</span>
                    <span className="job-role">{entry.role}</span>
                  </span>
                  <span className="job-when">
                    <span>{period(entry)}</span>
                    <span className="job-duration">{entry.end ? entry.duration : 'Current role'}</span>
                  </span>
                  <span className="job-track" aria-hidden="true">
                    <span className="job-bar" style={barStyle(entry)} />
                  </span>
                </>
              )

              // Nothing to expand yet: a plain row rather than an empty disclosure
              if (entry.items.length === 0) {
                return (
                  <div key={entry.id} className={className}>
                    <div className="job-head">{head}</div>
                  </div>
                )
              }

              return (
                <details key={entry.id} className={className} open={entry.id === OPEN_BY_DEFAULT}>
                  <summary className="job-head">
                    {head}
                    <span className="job-toggle" aria-hidden="true" />
                  </summary>
                  <div className="job-body">
                    {entry.note && <p className="job-note">{entry.note}</p>}
                    <ul>
                      {entry.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    {entry.tech?.length ? (
                      <p className="job-tech">Built with {entry.tech.join(', ')}</p>
                    ) : null}
                  </div>
                </details>
              )
            })}
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="section-head">
            <h2 id="skills-title">Skills</h2>
          </div>
          <dl>
            {skills.map(group => (
              <div key={group.label} className="skill">
                <dt>{group.label}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Get in touch</h2>
          <p>Email is the fastest way to reach me.</p>
          <a className="contact-email" href={`mailto:${EMAIL}`}>pramot.nn@<wbr />gmail.com</a>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Pramot Natemanee, Bangkok</p>
        <p className="footer-links">
          <ExternalLink href={GITHUB}>GitHub</ExternalLink>
          <ExternalLink href={LINKEDIN}>LinkedIn</ExternalLink>
        </p>
      </footer>
    </>
  )
}