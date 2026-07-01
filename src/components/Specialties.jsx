import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    num: '01',
    title: ['DESIGN', 'SYSTEM'],
    desc: 'Scalable, consistent component libraries that unify product teams and accelerate delivery across all touchpoints.',
    bg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1440&h=900&fit=crop&q=80',
  },
  {
    num: '02',
    title: ['UX / UI', 'DESIGN'],
    desc: 'User-centered experiences grounded in research and strategy — intuitive, purposeful, and built to convert.',
    bg: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1440&h=900&fit=crop&q=80',
  },
  {
    num: '03',
    title: ['DESIGN', 'OPS'],
    desc: 'Operational frameworks that streamline design workflows, tooling, and team collaboration at scale.',
    bg: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1440&h=900&fit=crop&q=80',
  },
  {
    num: '04',
    title: ['BRAND-', 'ING'],
    desc: 'Bold visual identities that communicate your values and differentiate your brand in a crowded market.',
    bg: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1440&h=900&fit=crop&q=80',
  },
]

export default function Specialties() {
  const sectionRef     = useRef(null)
  const counterRef     = useRef(null)
  const cardWrapperRef = useRef(null)   // wrapper que move todos os cards juntos
  const bgRefs         = useRef([])
  const titleRefs      = useRef([])
  const cardRefs       = useRef([])     // refs individuais para o offset inicial
  const barRefs        = useRef([])

  useEffect(() => {
    const VH = window.innerHeight
    const N  = items.length - 1   // 3 transições

    const ctx = gsap.context(() => {
      // ── initial states ──────────────────────────────────────────
      bgRefs.current.forEach((el, i) =>
        gsap.set(el, { opacity: i === 0 ? 1 : 0 })
      )
      titleRefs.current.forEach((el, i) =>
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 50 })
      )
      barRefs.current.forEach((el, i) =>
        gsap.set(el, { width: i === 0 ? 40 : 14 })
      )

      // Cada card começa deslocado por i*VH dentro do wrapper.
      // Quando o wrapper se mover -i*VH, o card i chegará à posição natural (y=0).
      cardRefs.current.forEach((el, i) =>
        gsap.set(el, { y: i * VH })
      )

      // ── timeline ────────────────────────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 100',
          end: 'bottom top',
          scrub: 0.8,
          clamp: true,
          onUpdate(self) {
            if (!counterRef.current) return
            const idx = Math.min(N, Math.floor(self.progress * items.length))
            counterRef.current.textContent =
              `${String(idx + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`
          },
        },
      })

      // Wrapper sobe continuamente — todos os cards sobem juntos com o scroll
      tl.to(cardWrapperRef.current, {
        y: -N * VH,
        ease: 'none',
        duration: N,
      })

      // Títulos e BG trocam exatamente quando o próximo card chega à posição natural
      for (let i = 1; i <= N; i++) {
        tl
          .to(titleRefs.current[i - 1], { opacity: 0, y: -50, ease: 'none', duration: 0.25 }, i - 0.12)
          .to(titleRefs.current[i],     { opacity: 1, y: 0,   ease: 'none', duration: 0.25 }, i - 0.12)
          .to(bgRefs.current[i - 1],    { opacity: 0, duration: 0.4 }, i - 0.2)
          .to(bgRefs.current[i],        { opacity: 1, duration: 0.4 }, i - 0.2)
          .to(barRefs.current[i - 1],   { width: 14, duration: 0.2 }, i - 0.1)
          .to(barRefs.current[i],       { width: 40, duration: 0.2 }, i - 0.1)
      }

      // hold ao final — mantém o último card visível antes da próxima seção entrar
      tl.to({}, { duration: 2 })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{ height: `${items.length * 175}vh` }}>
      <div style={{ position: 'relative', height: '100%' }}>

        {/* sticky viewport */}
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

          {/* BG images */}
          {items.map((item, i) => (
            <div
              key={i}
              ref={el => bgRefs.current[i] = el}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(4px)',
                transform: 'scale(1.06)',
              }}
            />
          ))}
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)', zIndex: 1 }} />

          {/* ── Card wrapper ────────────────────────────────────────
              Posicionado no canto inferior direito.
              Move-se para cima continuamente com o scroll.
              Todos os cards estão dentro, espaçados por VH via transform.    */}
          <div
            ref={cardWrapperRef}
            className="absolute will-change-transform"
            style={{ bottom: '64px', right: '64px', width: '288px', zIndex: 3 }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                ref={el => cardRefs.current[i] = el}
                className="absolute rounded-2xl p-7 will-change-transform"
                style={{
                  bottom: 0,
                  right: 0,
                  width: '288px',
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <p className="text-xs font-mono text-white/35 mb-3">{item.num}</p>
                <p className="text-sm leading-relaxed text-white/65">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Títulos + header + progress bars */}
          <div
            className="relative flex flex-col px-16 py-16"
            style={{ height: '100%', zIndex: 2 }}
          >
            <div className="flex justify-between items-center">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/35">
                // My Specialties
              </p>
              <span ref={counterRef} className="text-xs font-mono text-white/30">
                01 / 04
              </span>
            </div>

            <div className="relative flex-1 flex items-center">
              {items.map((item, i) => (
                <div
                  key={i}
                  ref={el => titleRefs.current[i] = el}
                  className="absolute will-change-transform"
                >
                  <h2 className="text-[clamp(80px,10vw,140px)] font-bold leading-[0.88] tracking-tightest uppercase">
                    {item.title[0]}
                    <br />
                    {item.title[1]}
                  </h2>
                </div>
              ))}
            </div>

            <div className="flex gap-2 items-center">
              {items.map((_, i) => (
                <div
                  key={i}
                  ref={el => barRefs.current[i] = el}
                  className="h-[2px] rounded-full"
                  style={{ background: i === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.2)' }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
