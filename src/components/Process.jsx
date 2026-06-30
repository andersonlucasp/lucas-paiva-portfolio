const steps = [
  { n: '01', title: 'Brand Discovery Phase', desc: 'Understanding your vision, business goals, and audience to establish a strong digital foundation.' },
  { n: '02', title: 'Strategic Planning Stage', desc: 'Defining information architecture, user journey, and experience strategy for long-term growth.' },
  { n: '03', title: 'Creative Design Execution', desc: 'Translating strategy into bold, purposeful design — every pixel aligned with your brand vision.' },
  { n: '04', title: 'Scalable Development Build', desc: 'Fast, responsive, scalable products designed to perform reliably across all devices and future needs.' },
  { n: '05', title: 'Product Launch Preparation', desc: 'Testing performance, responsiveness, and usability to ensure a seamless, polished launch.' },
  { n: '06', title: 'Continuous Growth Support', desc: 'Refining and optimizing post-launch through improvements that enhance performance and scale.' },
]

export default function Process() {
  return (
    <section id="process" className="bg-bg-2 py-28 px-16 reveal">
      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-6">
        // How I Work
      </p>
      <h2 className="text-[60px] font-bold tracking-tightest uppercase mb-16">MY PROCESS</h2>

      <div className="grid grid-cols-3 gap-5">
        {steps.map(({ n, title, desc }) => (
          <div
            key={n}
            className="p-7 rounded-2xl flex flex-col gap-3"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <span className="text-xs font-bold text-white/25 tracking-widest">
              {n} {title}
            </span>
            <p className="text-sm leading-relaxed text-white/45">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
