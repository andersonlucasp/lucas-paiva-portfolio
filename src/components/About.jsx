const stats = [
  { value: '5+', label: 'Years Exp.' },
  { value: '40+', label: 'Segments' },
  { value: '3', label: 'Case Studies' },
]

export default function About() {
  return (
    <section id="about" className="bg-bg py-16 px-5 md:py-28 md:px-16 reveal">
      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-8 md:mb-10">
        // About Me
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* Left: text */}
        <div className="flex flex-col gap-8 md:gap-10">
          <p className="text-[18px] md:text-[22px] font-normal leading-[1.7] text-white/85">
            I'm a Product Designer passionate about scaling design through Design Systems, DesignOps, and Artificial Intelligence. I build the platforms, processes, and intelligent workflows that help teams create better digital products with greater speed, consistency, and quality.
          </p>
          <p className="text-base leading-[1.8] text-white/45">
            Currently leading DesignOps and Design System initiatives at Itaú Unibanco, I'm helping more than 40 business segments scale design through governance, AI-powered tools, and operational excellence.
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

        {/* Right: video */}
        <div className="w-full rounded-2xl overflow-hidden aspect-[3/4]">
          <video
            src="/video/aboutme.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
