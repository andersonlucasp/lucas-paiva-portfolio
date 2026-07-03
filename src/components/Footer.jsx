const links = {
  'Site Maps': [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
  ],
  Social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Medium', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Mentoring', href: '#' },
    { label: 'Blog', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-bg overflow-hidden">
      {/* Top bar */}
      <div className="px-5 pb-8 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-white/[0.08]">
        <p className="text-sm text-white/40 max-w-md leading-relaxed">
          Designed to scale with clarity.
          <br />
          Building strategic, high-performance experiences that communicate clearly.
        </p>

        <div className="flex gap-8 md:gap-12 text-sm text-white/35">
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/20 mb-3">
                {col}
              </p>
              <div className="flex flex-col gap-2">
                {items.map(({ label, href }) => (
                  <a key={label} href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Big wordmark */}
      <div className="px-6 pb-0 pt-2 relative">
        <p
          className="text-[clamp(80px,14vw,200px)] font-bold tracking-tightest uppercase leading-none select-none"
          style={{ color: 'rgba(255,255,255,0.05)' }}
        >
          LUCAS PAIVA
        </p>
      </div>

      {/* Copyright bar */}
      <div className="px-5 md:px-16 pb-8 mt-6 md:-mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-1 text-xs text-white/25">
        <p>© 2025 Lucas Paiva. All Rights Reserved.</p>
        <p>Designed in Figma</p>
      </div>
    </footer>
  )
}
