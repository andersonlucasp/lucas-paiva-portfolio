const tickerItems = [
  "Strategy & Clarity",
  "Design Excellence",
  "High Performance",
  "Scalable Systems",
  "Design Ops",
  "Accessibility",
];

const testimonials = [
  {
    photo: "test-photo-1",
    quote:
      '"Exceptional work. Lucas combines adaptability, organization, and technical excellence in everything he does. From design systems to AI-driven digital products, he consistently delivers solid results."',
    name: "Danton Gravina",
    role: "Manager of Design, Itaú Unibanco",
  },
  {
    photo: "test-photo-2",
    quote:
      '"A memorable experience. Anderson is committed, proactive, and technically strong, with a rare ability to unite teams even under pressure. A true asset to any team."',
    name: "Leticia Araújo Ferreira",
    role: "Product Lead, Santander",
  },
  {
    photo: "test-photo-3",
    quote:
      '"Recognized initiative. Anderson spearheaded a transformation in the B2B portal design, blending technical expertise with product vision. A professional who stands out wherever he goes."',
    name: "Victor Anjos",
    role: "Head Strategic Portfolio & IA Governance, Cartão Elo",
  },
];

export default function Testimonials() {
  const allItems = [...tickerItems, ...tickerItems]; // duplicate for seamless loop

  return (
    <section className="bg-bg py-16 px-5 md:py-28 md:px-16 reveal">
      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-6">
        // Testimonials
      </p>
      <h2 className="text-[36px] md:text-[60px] font-bold tracking-tightest uppercase mb-10 md:mb-12">
        WHAT CLIENTS SAY
      </h2>

      {/* Ticker */}
      <div className="ticker-wrap mb-10 md:mb-12 -mx-5 md:-mx-16">
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
      <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-5">
        {/* Left: stacked cards */}
        <div className="flex flex-col gap-4">
          {testimonials.map(({ photo, quote, name, role }) => (
            <div
              key={name}
              className="p-6 md:p-8 rounded-2xl flex gap-4 md:gap-6 items-start"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className={`${photo} photo w-12 h-12 md:w-16 md:h-16 rounded-full flex-shrink-0`}
              />
              <div>
                <p className="text-sm md:text-base leading-relaxed text-white/80 mb-3 md:mb-4">
                  {quote}
                </p>
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-white/35">{role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: tall photo — hidden on mobile */}
        <div
          className="hidden md:block test-photo-4 photo rounded-2xl"
          style={{ minHeight: 480 }}
        />
      </div>
    </section>
  );
}
