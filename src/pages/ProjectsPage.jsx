import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Footer from '../components/Footer'

export default function ProjectsPage() {
  useEffect(() => {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
  }, [])

  const [main, ...rest] = projects

  return (
    <div className="bg-bg text-white min-h-screen">

      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="px-16 pt-40 pb-20">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-6">
          // My Work
        </p>
        <div className="flex items-end justify-between">
          <h1 className="text-[clamp(64px,10vw,130px)] font-bold leading-[0.88] tracking-tightest uppercase">
            ALL
            <br />
            PROJECTS
          </h1>
          <p className="max-w-xs text-base text-white/50 leading-relaxed mb-3">
            A curated set of digital experiences crafted with strategy, UX, and design — delivering impact across different industries and scales.
          </p>
        </div>
      </section>

      {/* ── Project grid ──────────────────────────────────────────── */}
      <section className="px-16 pb-32 flex flex-col gap-5">

        {/* Main card — full width */}
        <Link
          to={`/project/${main.slug}`}
          className="relative rounded-2xl overflow-hidden group"
          style={{ height: 600 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${main.heroImage})` }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.7) 100%)' }} />
          <div className="absolute top-8 left-8">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.15)' }}>
              {main.tag}
            </span>
          </div>
          <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">{main.year}</p>
              <h2 className="text-[clamp(32px,4vw,56px)] font-bold leading-tight tracking-tightest uppercase whitespace-pre-line">
                {main.title}
              </h2>
            </div>
            <span className="text-sm text-white/40 group-hover:text-white transition-colors shrink-0 ml-8 mb-2">
              View project →
            </span>
          </div>
        </Link>

        {/* Rest of cards — 2 columns */}
        <div className="grid grid-cols-2 gap-5">
          {rest.map(p => (
            <Link
              key={p.slug}
              to={`/project/${p.slug}`}
              className="relative rounded-2xl overflow-hidden group"
              style={{ height: 480 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${p.heroImage})` }}
              />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
              <div className="absolute top-7 left-7">
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  {p.tag}
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">{p.year}</p>
                  <h2 className="text-[28px] font-bold leading-tight tracking-tightest uppercase whitespace-pre-line">
                    {p.title}
                  </h2>
                </div>
                <span className="text-sm text-white/40 group-hover:text-white transition-colors shrink-0 ml-6 mb-1">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
