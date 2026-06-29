const stats = [
  { value: '5+', label: 'Years Exp.' },
  { value: '40+', label: 'Segments' },
  { value: '3', label: 'Case Studies' },
]

export default function About() {
  return (
    <section id="about" className="bg-bg py-28 px-16 reveal">
      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-10">
        // About Me
      </p>

      <div className="grid grid-cols-2 gap-20 items-start">
        {/* Left: text */}
        <div className="flex flex-col gap-10">
          <p className="text-[22px] font-normal leading-[1.7] text-white/85">
            Lucas Paiva is a Senior Product Designer crafting bold,
            high-performance digital experiences for ambitious brands with
            strategic clarity and refined execution.
          </p>
          <p className="text-base leading-[1.8] text-white/45">
            Currently leading Design Ops and Design System initiatives at Itaú
            Unibanco — the largest company in Latin America — transforming how
            40+ business segments deliver value through design.
          </p>

          {/* Stats */}
          <div className="flex gap-6 pt-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="px-5 py-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <p className="text-3xl font-bold">{value}</p>
                <p className="text-xs text-white/35 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <a
            href="#work"
            className="self-start text-sm font-medium text-white/50 hover:text-white transition-colors mt-2"
          >
            View Portfolio →
          </a>
        </div>

        {/* Right: photos */}
        <div className="flex gap-4 items-start">
          <div className="about-photo-1 photo w-[46%] aspect-[3/4] rounded-2xl flex-shrink-0" />
          <div className="about-photo-2 photo w-[54%] aspect-[4/3] rounded-2xl self-end" />
        </div>
      </div>
    </section>
  )
}
