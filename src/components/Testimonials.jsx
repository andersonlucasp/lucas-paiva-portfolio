const tickerItems = [
  'Strategy & Clarity',
  'Design Excellence',
  'High Performance',
  'Scalable Systems',
  'Design Ops',
  'Accessibility',
]

const testimonials = [
  {
    photo: 'test-photo-1',
    quote:
      '"Incredible work. Lucas delivered a design system that completely transformed how our teams operate — consistent, scalable, and beyond expectations."',
    name: 'Isabella Rossi',
    role: 'Head of Design, Aurex Studio',
  },
  {
    photo: 'test-photo-2',
    quote:
      '"Outstanding work. Lucas nailed our vision — clean, strategic, and beautifully executed. The redesign exceeded every KPI we set."',
    name: 'Emily Carter',
    role: 'Product Lead, Lumina Creative',
  },
  {
    photo: 'test-photo-3',
    quote:
      '"Amazing experience. Lucas brought our brand to life with precision and creativity. The work was smooth, modern, and totally on point."',
    name: 'Sophia Nguyen',
    role: 'Founder, Nexora Studio',
  },
]

export default function Testimonials() {
  const allItems = [...tickerItems, ...tickerItems] // duplicate for seamless loop

  return (
    <section className="bg-bg py-28 px-16 reveal">
      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-6">
        // Testimonials
      </p>
      <h2 className="text-[60px] font-bold tracking-tightest uppercase mb-12">
        WHAT CLIENTS SAY
      </h2>

      {/* Ticker */}
      <div className="ticker-wrap mb-12 -mx-16">
        <div className="ticker-track px-16">
          {allItems.map((item, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full text-sm font-medium border border-white/10 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonial grid */}
      <div className="grid grid-cols-[1fr_340px] gap-5">
        {/* Left: stacked cards */}
        <div className="flex flex-col gap-4">
          {testimonials.map(({ photo, quote, name, role }) => (
            <div
              key={name}
              className="p-8 rounded-2xl flex gap-6 items-start"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className={`${photo} photo w-16 h-16 rounded-full flex-shrink-0`} />
              <div>
                <p className="text-base leading-relaxed text-white/80 mb-4">{quote}</p>
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-white/35">{role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: tall photo */}
        <div className="test-photo-4 photo rounded-2xl" style={{ minHeight: 480 }} />
      </div>
    </section>
  )
}
