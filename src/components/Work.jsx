const projects = [
  {
    cls: 'proj-2',
    tag: 'UX / Web Design',
    title: 'Elo Website\nRedesign',
    year: '2023',
  },
  {
    cls: 'proj-3',
    tag: 'Branding',
    title: 'Sukinho\nRebranding',
    year: '2023',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative bg-bg py-24 px-16 overflow-hidden reveal">
      {/* Ghost text */}
      <p className="ghost absolute top-10 left-0 text-[clamp(120px,16vw,220px)] font-bold leading-none tracking-tightest uppercase whitespace-nowrap">
        MY WORK
      </p>

      {/* Header row */}
      <div className="relative z-10 flex items-start justify-between mb-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-4">
            // My Latest Work
          </p>
          <h2 className="text-[64px] font-bold leading-[0.92] tracking-tightest uppercase">
            LATEST
            <br />
            PROJECT
          </h2>
        </div>

        {/* Got an idea circle */}
        <a
          href="#contact"
          className="w-[160px] h-[160px] rounded-full bg-white flex flex-col items-center justify-center text-bg text-center hover:bg-white/90 transition-colors flex-shrink-0"
        >
          <p className="text-base font-bold leading-tight">
            GOT AN
            <br />
            IDEA?
          </p>
          <p className="text-xs font-medium text-black/50 mt-1">Let's Talk →</p>
        </a>
      </div>

      {/* Project grid */}
      <div className="relative z-10 grid grid-cols-[1fr_auto] gap-5">
        {/* Main project */}
        <a
          href="#"
          className="proj-main relative rounded-2xl overflow-hidden group"
          style={{ height: 560 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.65) 100%)',
            }}
          />
          <div className="absolute top-6 left-6">
            <span
              className="px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              Design System
            </span>
          </div>
          <div className="absolute bottom-8 left-8">
            <p className="text-[32px] font-bold leading-tight">
              Design System
              <br />
              Itaú Unibanco
            </p>
            <p className="text-sm text-white/50 mt-2">2025 · Product Designer</p>
          </div>
        </a>

        {/* Right stack */}
        <div className="flex flex-col gap-5 w-[420px]">
          {projects.map(({ cls, tag, title, year }) => (
            <a
              key={cls}
              href="#"
              className={`${cls} relative rounded-2xl overflow-hidden group flex-1`}
            >
              <div
                className="absolute inset-0"
                style={{ background: 'rgba(0,0,0,0.45)' }}
              />
              <div className="absolute top-5 left-5">
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  {tag}
                </span>
              </div>
              <div className="absolute bottom-6 left-6">
                <p className="text-2xl font-bold leading-tight whitespace-pre-line">
                  {title}
                </p>
                <p className="text-xs text-white/50 mt-1">{year}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <a
        href="#"
        className="relative z-10 inline-block mt-8 text-sm font-medium text-white/40 hover:text-white transition-colors"
      >
        View all projects →
      </a>
    </section>
  )
}
