import { useEffect } from 'react'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const experiences = [
  {
    period: '2024 — Present',
    role: 'Design Lead',
    company: 'Itaú Unibanco',
    description: [
      'At Itaú Unibanco, the largest financial institution in Latin America, I play a central role in Design Ops, structuring processes and documentation that drive consistency and scalability across products.',
      'I lead initiatives around the design system — reworking foundations (grid, typography, colors, spacing) and documenting components, patterns, and templates to make guidelines more educational and actionable. My responsibilities include running design audits to ensure cross-product consistency, implementing Design Review and QA practices in product squads, and enabling designers, developers, and content specialists to collaborate more effectively.',
      'I also foster alignment between design, business, and technology, ensuring that what we deliver balances usability, accessibility, and strategic impact at scale.',
    ],
  },
  {
    period: '2019 — 2024',
    role: 'Product Designer',
    company: 'Elo Cartão',
    description: [
      'At Elo, I built a nearly five-year journey that marked my definitive transition into the design field. I started within the technology team, working on the Service Now platform to develop and improve systems, integrate hardware and software, reduce incidents, and optimize processes that directly impacted performance and user satisfaction.',
      'As a Product Designer, I led the visual design of Elo\'s B2B Portal, delivering creative and intelligent UI solutions in close collaboration with a cross-functional team. I redesigned web interfaces by applying the new design system with a user-centered approach, ensuring consistency and usability across platforms. I also contributed to UX decisions guided by research and data, structured and migrated design system updates, and conducted usability testing to validate and refine solutions.',
      'This journey was pivotal in consolidating my career in design — combining my technical background in technology with a user-centered mindset, and enabling me to create more consistent, accessible, and strategic digital experiences.',
    ],
  },
  {
    period: '2017 — 2019',
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
      <section className="px-5 pt-28 pb-16 md:px-16 md:pt-40 md:pb-24" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-8">
          // Experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-stretch">
          <div>
            <h1 className="text-[clamp(48px,9vw,120px)] font-bold leading-[0.88] tracking-tightest uppercase mb-10">
              LUCAS
              <br />
              PAIVA
            </h1>
            <div className="flex flex-col gap-5 text-base text-white/60 leading-relaxed">
              <p>
                I believe Design and Artificial Intelligence are no longer separate disciplines. My work is focused on evolving how design is practiced by combining Design Leadership, Design Systems, DesignOps, and Generative AI to build more scalable, efficient, and high-performing design organizations.
              </p>
              <p>
                I'm currently a Design Lead at Itaú Unibanco, Latin America's largest financial institution, within the GenAI, Processes & Tools organization. I lead the Intelligence, Tools & Distribution team, driving initiatives that strengthen design at scale through governance, Design Reviews, Design QA, AI-powered tools, automation, and intelligent workflows. My focus is enabling designers to work faster, make better decisions, and deliver higher-quality experiences.
              </p>
              <p>
                My background in software development gives me a systems perspective that naturally connects Design, Product, and Engineering. Understanding how products are built influences how I design processes, tools, and experiences, making them more practical, scalable, and aligned with implementation.
              </p>
              <p>
                Throughout my career, I've worked across Product Design, Design Systems, and Design Operations, helping teams scale quality, consistency, and collaboration in complex environments. Before joining Itaú, I worked at Elo, one of Brazil's leading payment companies, contributing to digital products and design initiatives across the financial services ecosystem.
              </p>
              <p>
                Alongside my role at Itaú, I also work with companies through consulting engagements, helping teams adopt Generative AI, evolve their Design Systems, improve DesignOps practices, and build internal tools that increase the effectiveness of design organizations.
              </p>
              <p>
                Today, my work is driven by a simple belief: the future of design isn't just about creating better interfaces. It's about building the systems, processes, and AI-powered tools that enable great design to happen consistently, at scale.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="hidden md:flex">
            <img
              src="/img/experiences/experience01.png"
              alt="Lucas Paiva"
              className="w-full rounded-2xl object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ── Selected Experience ───────────────────────────────────── */}
      <section className="px-5 py-16 md:px-16 md:py-24">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-10 md:mb-16">
          // Selected Experience
        </p>
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-16 py-10 md:py-14"
              style={i > 0 ? { borderTop: '1px solid rgba(255,255,255,0.08)' } : {}}
            >
              {/* Left: role + company */}
              <div>
                {i === 0 ? (
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-4"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}>
                    Current
                  </span>
                ) : (
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-white/25 mb-4">
                    {exp.period}
                  </p>
                )}
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
      <section className="px-5 pb-20 md:px-16 md:pb-32" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-4 pt-16 md:pt-24">
          // Stack
        </p>
        <p className="text-sm text-white/30 mb-10 md:mb-14">Software & services I use in my workflow.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
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

      <Contact />
      <Footer />
    </div>
  )
}
