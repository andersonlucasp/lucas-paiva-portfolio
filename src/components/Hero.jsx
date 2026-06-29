export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-bg">
      {/* Main photo */}
      <div className="hero-img absolute inset-x-6 top-6 bottom-6 rounded-2xl overflow-hidden">
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Thumbnail strip — right side */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
        {['thumb-1', 'thumb-2', 'thumb-3', 'thumb-4'].map((cls) => (
          <div key={cls} className={`${cls} photo w-[130px] h-[100px] rounded-xl`} />
        ))}
      </div>

      {/* Text overlay — bottom left */}
      <div className="absolute bottom-14 left-16 z-10">
        <p className="text-sm font-medium text-white/50 tracking-[0.15em] uppercase mb-3">
          Senior Product Designer
        </p>
        <h1 className="text-[clamp(80px,11vw,150px)] font-bold leading-[0.88] tracking-tightest uppercase">
          LUCAS
          <br />
          PAIVA
        </h1>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  )
}
