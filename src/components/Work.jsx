import { Link } from 'react-router-dom'

const projects = [
  {
    cls: 'proj-2',
    slug: 'elo-redesign',
    tag: 'UX / Web Design',
    title: 'Elo Website Redesign',
    year: '2023',
  },
  {
    cls: 'proj-3',
    slug: 'sukinho-rebranding',
    tag: 'Branding',
    title: 'Sukinho Rebranding',
    year: '2023',
  },
]

const glassPanel = {
  background: 'rgba(11,11,11,0.35)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(255,255,255,0.08)',
}

export default function Work() {
  return (
    <section id="work" className="relative bg-bg py-12 px-5 md:py-16 md:px-16 overflow-hidden reveal" style={{ position: 'relative', zIndex: 2 }}>
      {/* Ghost text */}
      <p className="ghost absolute top-8 left-0 text-[clamp(60px,12vw,180px)] font-bold leading-none tracking-tightest uppercase whitespace-nowrap">
        MY WORK
      </p>

      {/* Header row */}
      <div className="relative z-10 flex items-end justify-between mb-8 md:mb-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-3">
            // My Latest Work
          </p>
          <h2 className="text-[36px] md:text-[56px] font-bold leading-[0.92] tracking-tightest uppercase">
            LATEST
            <br />
            PROJECT
          </h2>
        </div>
        <Link to="/projects" className="text-sm font-medium text-white/40 hover:text-white transition-colors mt-1 shrink-0 ml-4">
          View all →
        </Link>
      </div>

      {/* Project grid */}
      <div className="relative z-10 flex flex-col md:grid md:grid-cols-[1fr_auto] gap-4">

        {/* Main project */}
        <Link
          to="/project/itau-design-system"
          className="proj-main relative rounded-2xl overflow-hidden group"
          style={{ height: 'clamp(240px,50vw,460px)' }}
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 proj-main" />
          <div
            className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
            style={{ background: 'linear-gradient(to bottom,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.65) 100%)' }}
          />
          <div className="absolute top-4 left-4 md:top-6 md:left-6">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.15)' }}>
              Design System
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 md:p-6 rounded-b-2xl" style={glassPanel}>
            <div>
              <p className="text-base md:text-[20px] font-bold leading-tight">Design System Itaú Unibanco</p>
              <p className="text-xs md:text-sm text-white/50 mt-1">2025 · Product Designer</p>
            </div>
            <span className="text-sm text-white/0 group-hover:text-white/70 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shrink-0 ml-4">
              View →
            </span>
          </div>
        </Link>

        {/* Side cards */}
        <div className="flex flex-row md:flex-col gap-4 md:w-[360px]">
          {projects.map(({ cls, slug, tag, title, year }) => (
            <Link
              key={cls}
              to={`/project/${slug}`}
              className={`${cls} relative rounded-2xl overflow-hidden group flex-1`}
              style={{ height: 'clamp(160px,40vw,460px)' }}
            >
              <div className="absolute top-3 left-3 md:top-5 md:left-5">
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  {tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3 md:p-5 rounded-b-2xl" style={glassPanel}>
                <div>
                  <p className="text-xs md:text-sm font-bold leading-tight">{title}</p>
                  <p className="text-[10px] md:text-xs text-white/50 mt-0.5 md:mt-1">{year}</p>
                </div>
                <span className="hidden md:inline text-sm text-white/0 group-hover:text-white/70 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shrink-0 ml-4">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}
