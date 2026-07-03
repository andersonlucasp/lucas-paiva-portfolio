import { useEffect } from 'react'
import Footer from '../components/Footer'

const experiences = [
  {
    role: 'Senior Product Designer',
    company: 'Itaú Unibanco',
    description: [
      'At Itaú Unibanco, the largest financial institution in Latin America, I play a central role in Design Ops, structuring processes and documentation that drive consistency and scalability across products.',
      'I lead initiatives around the design system — reworking foundations (grid, typography, colors, spacing) and documenting components, patterns, and templates to make guidelines more educational and actionable. My responsibilities include running design audits to ensure cross-product consistency, implementing Design Review and QA practices in product squads, and enabling designers, developers, and content specialists to collaborate more effectively.',
      'I also foster alignment between design, business, and technology, ensuring that what we deliver balances usability, accessibility, and strategic impact at scale.',
    ],
  },
  {
    role: 'Product Designer',
    company: 'Elo Cartão',
    description: [
      'At Elo, I built a nearly five-year journey that marked my definitive transition into the design field. I started within the technology team, working on the Service Now platform to develop and improve systems, integrate hardware and software, reduce incidents, and optimize processes that directly impacted performance and user satisfaction.',
      'As a Product Designer, I led the visual design of Elo\'s B2B Portal, delivering creative and intelligent UI solutions in close collaboration with a cross-functional team. I redesigned web interfaces by applying the new design system with a user-centered approach, ensuring consistency and usability across platforms. I also contributed to UX decisions guided by research and data, structured and migrated design system updates, and conducted usability testing to validate and refine solutions.',
      'This journey was pivotal in consolidating my career in design — combining my technical background in technology with a user-centered mindset, and enabling me to create more consistent, accessible, and strategic digital experiences.',
    ],
  },
  {
    role: 'IT & Functional Analyst',
    company: 'Tata Consultancy Services',
    description: [
      'I worked in different roles at Tata Consultancy Services, starting as an intern in infrastructure and growing into a Junior Analyst position. During this time, I gained solid experience in technical support, incident analysis, system integration, and user assistance for both internal and external clients.',
      'Later, I transitioned to the role of Oracle Functional Analyst Jr., where I deepened my knowledge in Oracle applications, data collection and analysis, software troubleshooting, and the use of statistical techniques to support business diagnostics. This experience marked a turning point in my career, as it was when I began to strategically shape my path toward technology — combining technical support, functional analysis, and a broader understanding of business processes.',
    ],
  },
]

const stack = [
  { name: 'Figma', category: 'Design tool' },
  { name: 'ChatGPT', category: 'AI assistant for design & insights' },
  { name: 'Miro', category: 'Collaboration boards' },
  { name: 'Notion', category: 'Docs & planning' },
  { name: 'Framer', category: 'Website builder' },
  { name: 'Mobbin', category: 'Design inspiration' },
  { name: 'Google Analytics', category: 'Web analytics' },
  { name: 'Relume.io', category: 'AI-powered website design' },
  { name: 'Tella', category: 'Screen recorder & video editor' },
]

export default function ExperiencesPage() {
  useEffect(() => {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-bg text-white min-h-screen">

      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="px-16 pt-40 pb-24" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-8">
          // Experience
        </p>
        <div className="grid grid-cols-[1fr_1fr] gap-20 items-start">
          <h1 className="text-[clamp(64px,9vw,120px)] font-bold leading-[0.88] tracking-tightest uppercase">
            LUCAS
            <br />
            PAIVA
          </h1>
          <div className="flex flex-col gap-5 pt-3 text-base text-white/60 leading-relaxed">
            <p>
              With 4 years of experience in UX, UI, and Product Design, I currently work at Itaú Unibanco — the largest bank in Latin America — where I contribute to large-scale digital initiatives, including the creation of a new, unified design system for 40+ business segments.
            </p>
            <p>
              My background spans B2B and B2C products, from financial platforms to large-scale digital services, always focusing on solving real user problems through design that's strategic, research-informed, and execution-ready. Previously, I worked at Elo, Brazil's biggest 100% national card brand, where I helped enhance user experiences and strengthen digital products. My expertise spans Design Systems, Design Ops, and accessibility, enabling teams to deliver with speed, consistency, and quality.
            </p>
            <p>
              In parallel with my full-time role, I also take on freelance and consulting work — supporting product teams that need senior design expertise, a fresh perspective, or guidance to shape and ship better digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ── Selected Experience ───────────────────────────────────── */}
      <section className="px-16 py-24">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-16">
          // Selected Experience
        </p>
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-[280px_1fr] gap-16 py-14"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Left: role + company */}
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-white/25 mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="text-xl font-bold tracking-tightest uppercase leading-tight mb-2">
                  {exp.role}
                </h2>
                <p className="text-sm text-white/40 font-medium">{exp.company}</p>
              </div>

              {/* Right: description */}
              <div className="flex flex-col gap-4 pt-1 text-base text-white/55 leading-[1.85]">
                {exp.description.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stack ─────────────────────────────────────────────────── */}
      <section className="px-16 pb-32" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-4 pt-24">
          // Stack
        </p>
        <p className="text-sm text-white/30 mb-14">Software & services I use in my workflow.</p>
        <div className="grid grid-cols-3 gap-4">
          {stack.map(({ name, category }) => (
            <div
              key={name}
              className="rounded-2xl px-6 py-5"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-sm font-semibold text-white mb-1">{name}</p>
              <p className="text-xs text-white/35">{category}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
