const info = [
  { label: 'Email Address', value: 'andersonlucaspz@gmail.com', href: 'mailto:andersonlucaspz@gmail.com' },
  { label: 'Phone Number', value: '🇧🇷 +55 (11) 9 9743-7770', href: 'tel:+5511997437770' },
  { label: 'Visit', value: 'Taubaté - SP, Brazil' },
  { label: 'Working Hours', value: 'Mon – Fri, 9AM – 6PM (BRT)' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-bg pb-16 px-5 md:pb-28 md:px-16 reveal">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-8">
              // Contact Me
            </p>
            <h2 className="text-[clamp(52px,6vw,80px)] font-bold tracking-tightest uppercase leading-[0.92] mb-12">
              LET'S
              <br />
              WORK
              <br />
              TOGETHER
            </h2>
          </div>

          <div className="flex flex-col gap-7 text-sm">
            {info.map(({ label, value, href }) => (
              <div key={label}>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-1">
                  {label}
                </p>
                {href ? (
                  <a href={href} className="text-white/70 hover:text-white transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-white/70">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-white/40">Full Name *</label>
              <input type="text" placeholder="Your full name" className="px-4 py-3.5 rounded-xl text-sm w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-white/40">Email Address *</label>
              <input type="email" placeholder="your@email.com" className="px-4 py-3.5 rounded-xl text-sm w-full" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-white/40">Phone Number</label>
            <input type="tel" placeholder="+55 (00) 00000-0000" className="px-4 py-3.5 rounded-xl text-sm w-full" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-white/40">Project Detail *</label>
            <textarea rows={4} placeholder="Tell me about your project..." className="px-4 py-3.5 rounded-xl text-sm w-full resize-none" />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-white text-bg text-sm font-semibold hover:bg-white/90 transition-colors mt-2"
          >
            Send a Project
          </button>
        </form>
      </div>
    </section>
  )
}
