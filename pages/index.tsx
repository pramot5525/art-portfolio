import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const colorMap: Record<string, string> = {
  'c-blue':   '#58a6ff',
  'c-purple': '#bc8cff',
  'c-orange': '#ffa657',
  'c-green':  '#7ee787',
  'c-pink':   '#f778ba',
  'c-red':    '#ff7b72',
}

const skills = [
  { label: 'Backend',                color: 'c-blue',   icon: 'server',   items: ['Golang','Fiber','Gin','GORM','Node.js','TypeScript','Express','Sequelize','PHP','REST','GraphQL'] },
  { label: 'Frontend',               color: 'c-purple', icon: 'layout',   items: ['React','Next.js','Vue.js','Tailwind CSS','Bootstrap'] },
  { label: 'Data & Messaging',       color: 'c-orange', icon: 'database', items: ['PostgreSQL','MySQL','Redis','Kafka'] },
  { label: 'Infrastructure & DevOps',color: 'c-green',  icon: 'cloud',    items: ['Docker','Kubernetes','AWS','GitHub Actions','CI/CD Pipelines','Prometheus'] },
  { label: 'Testing & Quality',      color: 'c-pink',   icon: 'shield',   items: ['Testify','Mockery','Sinon','Chai','Unit Testing'] },
  { label: 'Core Competencies',      color: 'c-red',    icon: 'zap',      items: ['Microservices Architecture','System Design','AI-Augmented Dev','Root Cause Analysis'] },
]

const experiences = [
  {
    company: 'BetterBe Marketplace Co., Ltd. (NocNoc)',
    initials: 'BB',
    role: 'Software Engineer',
    period: 'Jul 2024 – Jan 2026',
    duration: '1.5 yrs',
    tech: ['Go', 'Kafka', 'Kubernetes', 'Prometheus', 'PostgreSQL', 'Redis', 'Docker'],
    items: [
      'Led strategic migration of legacy services from Node.js to Golang, enhancing concurrency for compute-intensive tasks',
      'Designed event-driven workflows with Kafka for high-throughput, reliable microservice communication',
      'Implemented Prometheus monitoring pipelines, proactively reducing API latency and streamlining error handling',
      'Enforced >80% unit test coverage, minimizing regression risks and accelerating release cycles',
      'Standardized API contracts via Swagger/OpenAPI, reducing frontend-backend integration time by 30%',
      'Developed Affiliate, Loyalty, and Merchant Center systems with scalable data structures',
    ],
  },
  {
    company: 'Tridept Co., Ltd.',
    initials: 'TR',
    role: 'Senior Full Stack Developer',
    period: 'Oct 2021 – Jun 2024',
    duration: '2.7 yrs',
    tech: ['Go', 'Next.js', 'GraphQL', 'PostgreSQL', 'GitHub Actions', 'Docker'],
    items: [
      'Architected high-performance web applications using Golang (backend) and Next.js (frontend)',
      'Led PRYWAN and Vespisti ID e-commerce platforms with product catalogs, carts, and payment gateway integrations',
      'Designed scalable REST/GraphQL APIs with comprehensive unit testing for data integrity',
      'Established CI/CD pipelines via GitHub Actions, eliminating manual deployment errors',
    ],
  },
  {
    company: 'WeeklyOrder (Startup)',
    initials: 'WO',
    role: 'Full Stack Developer',
    period: 'Aug 2020 – Sep 2021',
    duration: '13 mos',
    tech: ['Go', 'GraphQL', 'WebSocket', 'Vue.js', 'MySQL'],
    items: [
      'Developed real-time container tracking system using Golang and GraphQL for logistics visibility',
      'Engineered WebSocket-based chat module for seamless user-support communication',
      'Integrated Vue.js with high-performance backend services, optimizing application responsiveness',
    ],
  },
  {
    company: '23 Perspective Co., Ltd.',
    initials: '23',
    role: 'Software Engineer',
    period: 'Jul 2016 – Jul 2020',
    duration: '4 yrs',
    tech: ['PHP', 'Nuxt.js', 'Vue.js', 'MySQL', 'Codeigniter', 'JavaScript'],
    items: [
      'Built enterprise web solutions for PTT Blue Card, Tourism Thailand, and Ocean Property',
      'Engineered a comprehensive e-commerce marketplace for Srimuang Market',
      'Delivered high-traffic micro-sites for AirAsia, SCG, and Royal Canin marketing campaigns',
      'Built SEO-friendly frontends with Nuxt.js and robust backends with PHP Codeigniter',
    ],
  },
  {
    company: 'YMMY Co., Ltd.',
    initials: 'YM',
    role: 'Co-Operative Education — iOS Developer',
    period: 'Jun 2015 – Dec 2015',
    duration: '6 mos',
    tech: ['Objective-C', 'iOS', 'Xcode'],
    items: [
      'Developed native iOS applications using Objective-C and Xcode',
      'Top 10 Finalist in the Krungsri Uni Startup 2015 competition',
    ],
  },
]

function IcoMail() {
  return <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/></svg>
}
function IcoGithub() {
  return <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
}
function IcoLinkedin() {
  return <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
}

function IconServer() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
      <circle cx="6" cy="6" r="1.2" fill="currentColor" stroke="none"/><circle cx="6" cy="18" r="1.2" fill="currentColor" stroke="none"/>
    </svg>
  )
}
function IconLayout() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20"/><path d="M9 21V9"/>
    </svg>
  )
}
function IconDatabase() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>
    </svg>
  )
}
function IconCloud() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
    </svg>
  )
}
function IconZap() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
}
function SkillIcon({ type }: { type: string }) {
  if (type === 'server')   return <IconServer />
  if (type === 'layout')   return <IconLayout />
  if (type === 'database') return <IconDatabase />
  if (type === 'cloud')    return <IconCloud />
  if (type === 'shield')   return <IconShield />
  return <IconZap />
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [activeSkill, setActiveSkill] = useState(0)

  /* ── Particle network ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const mouse = { x: -9999, y: -9999 }
    const N = 72

    interface P { x: number; y: number; vx: number; vy: number; r: number }
    let W = 0, H = 0, pts: P[] = []

    const init = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
      pts = Array.from({ length: N }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.4 + 0.5,
      }))
    }
    init()

    const onResize = () => {
      const sx = canvas.offsetWidth / W
      const sy = canvas.offsetHeight / H
      pts.forEach(p => { p.x *= sx; p.y *= sy })
      W = canvas.offsetWidth; H = canvas.offsetHeight
      canvas.width = W; canvas.height = H
    }
    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouse)

    const MAX = 130, MAX2 = MAX * MAX

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of pts) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < 110 * 110 && d2 > 0) {
          const d = Math.sqrt(d2)
          p.vx += (dx / d) * 0.14; p.vy += (dy / d) * 0.14
        }
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > 1.7) { p.vx = (p.vx / spd) * 1.7; p.vy = (p.vy / spd) * 1.7 }
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; else if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; else if (p.y > H) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(88,166,255,0.65)'; ctx.fill()
      }
      for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d2 = dx * dx + dy * dy
          if (d2 < MAX2) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(88,166,255,${0.16 * (1 - d2 / MAX2)})`
            ctx.lineWidth = 0.6; ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  /* ── 3-D card tilt ── */
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.tilt-card'))
    const cleanup: (() => void)[] = []
    for (const card of cards) {
      const onMove = (e: MouseEvent) => {
        if (!card.classList.contains('revealed')) return
        const r = card.getBoundingClientRect()
        const x = ((e.clientX - r.left) / r.width - 0.5) * 18
        const y = ((e.clientY - r.top) / r.height - 0.5) * -18
        card.style.transition = 'transform 0.12s ease'
        card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateZ(8px)`
      }
      const onLeave = () => {
        card.style.transition = 'transform 0.65s cubic-bezier(.23,1,.32,1)'
        card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      cleanup.push(() => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave) })
    }
    return () => cleanup.forEach(fn => fn())
  }, [])

  /* ── Scroll reveal ── */
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target) } }),
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  /* ── Alien proximity: flee + glow ── */
  useEffect(() => {
    const hero   = document.querySelector<HTMLElement>('.hero-wrapper')
    const aliens = Array.from(document.querySelectorAll<HTMLElement>('.px'))
    if (!hero || !aliens.length) return

    const FLEE_R = 140   // px radius to start fleeing
    const FLEE_S = 82    // max displacement px

    interface AS { ox: number; oy: number; cx: number; cy: number }
    let states: AS[] | null = null
    const mouse = { x: -9999, y: -9999 }
    let rafId: number

    const init = () => {
      const hr = hero.getBoundingClientRect()
      states = aliens.map(el => {
        const r = el.getBoundingClientRect()
        // +16 offsets toward visual center of the box-shadow sprite
        return { ox: r.left - hr.left + 16, oy: r.top - hr.top + 16, cx: 0, cy: 0 }
      })
    }

    const onMove = (e: MouseEvent) => {
      const hr = hero.getBoundingClientRect()
      mouse.x = e.clientX - hr.left
      mouse.y = e.clientY - hr.top
      if (!states) init()
    }

    const tick = () => {
      if (states) {
        for (let i = 0; i < aliens.length; i++) {
          const s  = states[i]
          const el = aliens[i]
          const dx   = (s.ox + s.cx) - mouse.x
          const dy   = (s.oy + s.cy) - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          let tx = 0, ty = 0
          if (dist < FLEE_R && dist > 0) {
            const force = (1 - dist / FLEE_R) * FLEE_S
            tx = (dx / dist) * force
            ty = (dy / dist) * force
          }

          // Smooth lerp toward flee target (or back to origin)
          s.cx += (tx - s.cx) * 0.1
          s.cy += (ty - s.cy) * 0.1
          if (Math.abs(s.cx) < 0.05) s.cx = 0
          if (Math.abs(s.cy) < 0.05) s.cy = 0

          // CSS `translate` property stacks on top of `transform` (px-float animation)
          el.style.translate = `${s.cx.toFixed(1)}px ${s.cy.toFixed(1)}px`

          if (dist < FLEE_R) {
            const t = 1 - dist / FLEE_R
            // Pause px-glow, keep px-float running, override glow manually
            el.style.animationPlayState = 'running, paused'
            el.style.opacity = (0.18 + t * 0.75).toFixed(3)
            el.style.filter  = `brightness(${(1 + t * 5).toFixed(2)}) drop-shadow(0 0 ${(4 + t * 16).toFixed(0)}px currentColor)`
          } else if (el.style.animationPlayState) {
            el.style.animationPlayState = ''
            el.style.opacity = ''
            el.style.filter  = ''
          }
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    tick()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      aliens.forEach(el => {
        el.style.translate           = ''
        el.style.animationPlayState  = ''
        el.style.opacity             = ''
        el.style.filter              = ''
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>Pramot Natemanee — Senior Software Engineer</title>
        <meta name="description" content="Senior Software Engineer with 9+ years in Golang, Node.js, and scalable microservices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Nav */}
      <nav className="nav">
        <a className="nav-brand" href="#hero">Art<span>.</span>dev</a>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
        {/* <a className="nav-cta" href="mailto:pramot.nn@gmail.com">Contact</a> */}
      </nav>

      {/* Hero */}
      <div id="hero" className="hero-wrapper">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        {/* 3-D Cube */}
        <div className="cube-wrap">
          <div className="cube">
            {(['f','b','l','r','t','d'] as const).map(s => (
              <div key={s} className={`face face-${s}`} />
            ))}
          </div>
        </div>

        {/* 3-D Rings */}
        <div className="rings-wrap">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
        </div>

        {/* Pixel aliens — CSS box-shadow sprites */}
        <div className="px pa1" style={{ top: '22%',  left:  '2%',   animationDelay: '0s,   0.5s' }} />
        <div className="px pa3" style={{ top: '68%',  left:  '1.5%', animationDelay: '2.2s, 1.8s' }} />
        <div className="px pa2" style={{ top: '16%',  right: '2%',   animationDelay: '1.1s, 3s'   }} />
        <div className="px pa4" style={{ top: '72%',  right: '1.5%', animationDelay: '3.4s, 0.9s' }} />
        <div className="px pa3" style={{ top: '87%',  left:  '27%',  animationDelay: '1.8s, 2.5s', transform: 'scale(0.6)' }} />
        <div className="px pa1" style={{ top: '84%',  right: '27%',  animationDelay: '4s,   1.2s', transform: 'scale(0.6)' }} />

        <div className="hero">
          <div className="hero-content">
            <div className="hero-badge">Available for opportunities</div>
            <h1 className="hero-name">
              <span className="gradient-text">Pramot Natemanee</span>
              <span className="hero-nick">(Art)</span>
            </h1>
            <div className="hero-role">
              Senior Software Engineer
              <span className="role-chip">9+ Years</span>
              <span className="role-chip green">Open to Work</span>
            </div>
            <p className="hero-bio">
              Architecting <strong>high-concurrency backend systems</strong> and scalable microservices.
              Expert in <strong>Golang</strong> and <strong>Node.js</strong>, modernizing legacy infrastructure
              for E-commerce and Logistics platforms.
            </p>
            <div className="hero-stats">
              <div className="stat"><div className="stat-n">9<em>+</em></div><div className="stat-l">Years Exp.</div></div>
              <div className="stat"><div className="stat-n">5</div><div className="stat-l">Companies</div></div>
            </div>
            <div className="hero-cta">
              <a className="btn-p" href="mailto:pramot.nn@gmail.com"><IcoMail /> pramot.nn@gmail.com</a>
              <a className="btn-g" href="https://github.com/pramot5525" target="_blank" rel="noreferrer"><IcoGithub /> GitHub</a>
              <a className="btn-g" href="https://www.linkedin.com/in/pramot-natemanee-579581174/" target="_blank" rel="noreferrer"><IcoLinkedin /> LinkedIn</a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-ring">
              <div className="photo-inner">
                <Image src="/img/art.jpeg" alt="Pramot Natemanee" width={254} height={254} priority
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-hd reveal">
          <div className="section-tag">// technical_skills</div>
          <h2 className="section-title">What I Work With</h2>
        </div>
        <div className="skill-dashboard reveal">
          <nav className="skill-nav">
            {skills.map((cat, i) => (
              <button
                key={cat.label}
                className={`skill-nav-btn${activeSkill === i ? ` active ${cat.color}` : ''}`}
                onClick={() => setActiveSkill(i)}
              >
                <div className="skill-nav-icon"><SkillIcon type={cat.icon} /></div>
                <span className="skill-nav-label">{cat.label}</span>
                <span className="skill-nav-count">{cat.items.length}</span>
              </button>
            ))}
          </nav>
          <div className="skill-panel">
            <div className="skill-panel-header">
              <div className={`skill-panel-icon ${skills[activeSkill].color}`}>
                <SkillIcon type={skills[activeSkill].icon} />
              </div>
              <div>
                <div className={`skill-panel-name ${skills[activeSkill].color}`}>
                  {skills[activeSkill].label}
                </div>
                <div className="skill-panel-sub">{skills[activeSkill].items.length} technologies</div>
              </div>
            </div>
            <div className="skill-panel-tags">
              {skills[activeSkill].items.map((item, j) => (
                <span
                  key={item}
                  className={`skill-panel-tag ${skills[activeSkill].color}`}
                  style={{ animationDelay: `${j * 45}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="section-hd reveal">
          <div className="section-tag">// professional_experience</div>
          <h2 className="section-title">Where I&apos;ve Worked</h2>
        </div>
        <div className="git-log">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="git-commit reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="git-left">
                <div className="git-dot"><span className="git-dot-initials">{exp.initials}</span></div>
                {i < experiences.length - 1 && <div className="git-line" />}
              </div>
              <div className="git-body tilt-card">
                <div className="git-top">
                  <div className="git-info">
                    <span className="git-company">{exp.company}</span>
                    <span className="git-role"># {exp.role}</span>
                  </div>
                  <div className="git-right-meta">
                    <span className="git-period">{exp.period}</span>
                    <span className="git-dur">{exp.duration}</span>
                  </div>
                </div>
                <ul className="git-diff">
                  {exp.items.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
                <div className="git-stack">
                  {exp.tech.map(t => <span key={t} className="git-tech">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <div className="section-hd reveal">
          <div className="section-tag">// education</div>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="edu-card tilt-card reveal">
          <div>
            <div className="edu-school">Kasetsart University, Kamphaeng Saen Campus</div>
            <div className="edu-degree">Bachelor of Engineering, Computer Engineering</div>
            <span className="edu-gpa">
              <svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              GPA 3.41
            </span>
          </div>
          <span className="edu-period">May 2012 – Jun 2016</span>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer">
          <span className="footer-copy">© 2025 Pramot Natemanee · Bangkok, Thailand</span>
          <div className="footer-links">
            <a href="mailto:pramot.nn@gmail.com">pramot.nn@gmail.com</a>
<a href="https://github.com/pramot5525" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/pramot-natemanee-579581174/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}
