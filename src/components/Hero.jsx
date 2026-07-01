export default function Hero() {
  return (
    <section className="hero-section relative h-screen overflow-hidden bg-bg" style={{ position: 'sticky', top: 0, zIndex: 1, transformOrigin: 'center center' }}>

      {/* Main photo — borda a borda, sem inset */}
      <div className="hero-img absolute inset-x-3 top-3 bottom-3 rounded-2xl overflow-hidden" style={{ opacity: 0, transform: 'scale(1.15)' }}>
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Blur overlay — some durante a animação de entrada */}
      <div
        className="hero-overlay-blur absolute inset-x-3 top-3 bottom-3 rounded-2xl z-[1]"
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      />

      {/* Título — bottom left */}
      <div className="absolute bottom-14 left-16 z-10">
        <p
          className="hero-subtitle text-sm font-medium text-white/50 tracking-[0.15em] uppercase mb-3"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          Senior Product Designer
        </p>
        <h1 className="text-[clamp(80px,11vw,142px)] font-bold leading-[0.88] tracking-tightest uppercase">
          <span className="block overflow-hidden">
            {'LUCAS'.split('').map((l, i) => (
              <span key={i} className="hero-title-letter inline-block" style={{ opacity: 0, transform: 'translateY(100%)' }}>
                {l}
              </span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {'PAIVA'.split('').map((l, i) => (
              <span key={i} className="hero-title-letter inline-block" style={{ opacity: 0, transform: 'translateY(100%)' }}>
                {l}
              </span>
            ))}
          </span>
        </h1>
      </div>

      {/* Texto descritivo — bottom right (estilo Xenith) */}
      <div className="absolute bottom-14 right-16 z-10 max-w-xs text-right">
        <p className="text-base leading-relaxed text-white/70">
          //Senior Product Designer at Itaú Unibanco — leading Design Ops and Design System for 40+ business segments across Latin America.
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  )
}
