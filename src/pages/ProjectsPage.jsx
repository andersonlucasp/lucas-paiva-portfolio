import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function ProjectsPage() {
  useEffect(() => {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
  }, [])

  const [main, ...rest] = projects

  return (
    <div className="bg-bg text-white min-h-screen">

      {/* Header */}
      <section className="px-5 pt-28 pb-12 md:px-16 md:pt-40 md:pb-20">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-6">
          // My Work
        </p>
        <h1 className="text-[clamp(44px,10vw,130px)] font-bold leading-[0.88] tracking-tightest uppercase mb-6">
          ALL
          <br />
          PROJECTS
        </h1>
        <p className="max-w-sm text-sm md:text-base text-white/50 leading-relaxed">
          A curated set of digital experiences crafted with strategy, UX, and design — delivering impact across different industries and scales.
        </p>
      </section>

      {/* Project grid */}
      <section className="px-5 pb-20 md:px-16 md:pb-32 flex flex-col gap-4 md:gap-5">

        {/* Main card — full width */}
        <Link
          to={`/project/${main.slug}`}
          className="relative rounded-2xl overflow-hidden group"
          style={{ height: 'clamp(260px, 50vw, 600px)' }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${main.heroImage})` }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.7) 100%)' }} />
          <div className="absolute top-5 left-5 md:top-8 md:left-8">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(11,11,11,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}>
              {main.cardCategory || main.tag}
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2 md:mb-3">{main.cardSubtitle || main.year}</p>
              <h2 className="text-[clamp(24px,4vw,56px)] font-bold leading-tight tracking-tightest uppercase whitespace-pre-line">
                {main.cardTitle || main.title}
              </h2>
            </div>
            <span className="hidden md:inline text-sm text-white/40 group-hover:text-white transition-colors shrink-0 ml-8 mb-2">
              View project →
            </span>
          </div>
        </Link>

        {/* Rest — 2 columns on tablet+, 1 column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {rest.map(p => (
            <Link
              key={p.slug}
              to={`/project/${p.slug}`}
              className="relative rounded-2xl overflow-hidden group"
              style={{ height: 'clamp(220px, 45vw, 480px)' }}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${p.heroImage})`,
                  backgroundSize: p.cardImgSize || 'cover',
                  backgroundPosition: p.cardImgPosition || 'center',
                }}
              />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
              <div className="absolute top-5 left-5 md:top-7 md:left-7">
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(11,11,11,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  {p.cardCategory || p.tag}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">{p.cardSubtitle || p.year}</p>
                  <h2 className="text-[22px] md:text-[28px] font-bold leading-tight tracking-tightest uppercase whitespace-pre-line">
                    {p.cardTitle || p.title}
                  </h2>
                </div>
                <span className="hidden md:inline text-sm text-white/40 group-hover:text-white transition-colors shrink-0 ml-6 mb-1">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
