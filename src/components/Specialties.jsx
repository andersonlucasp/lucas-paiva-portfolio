const tags = ['Design System', 'UX / UI Design', 'Design Ops', 'Branding']

export default function Specialties() {
  return (
    <section className="relative spec-img overflow-hidden reveal" style={{ height: 680 }}>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.58)' }} />

      <div className="relative z-10 h-full flex flex-col justify-between px-16 py-16">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/35">
          // My Specialties
        </p>

        <h2 className="text-[clamp(80px,10vw,140px)] font-bold leading-[0.88] tracking-tightest uppercase">
          DESIGN
          <br />
          SYSTEM
        </h2>

        <div className="flex gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-5 py-2 rounded-full text-sm font-medium"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
