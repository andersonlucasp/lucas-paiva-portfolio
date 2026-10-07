import { Link } from 'react-router-dom'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const allProjects = [
  {
    cls: 'proj-main',
    slug: 'itau-design-system',
    tag: 'Design System',
    title: 'The Next Generation',
    subtitle: "Building Itaú's Design System",
  },
  {
    cls: 'proj-2',
    slug: 'elo-redesign',
    tag: 'Digital Product',
    title: 'Rebuilding Elo',
    subtitle: 'Transforming a digital platform',
  },
  {
    cls: 'proj-3',
    slug: 'sukinho-rebranding',
    tag: 'Brand Experience',
    title: 'From Shelf to Screen',
    subtitle: 'Designing a scalable brand system',
  },
  {
    cls: 'proj-4',
    slug: 'taskall',
    tag: 'Product Designer',
    title: 'From Working to Making Sense',
    subtitle: '2026',
  },
]

// Only 3 slots are ever visible at once (main + 2 side), but every project
// must pass through the main slot before the page is allowed to scroll on.
const STEPS = Math.max(allProjects.length - 1, 0)
// Extra "dead" scroll held at the end once the last card has settled into
// the main slot, so the carousel is fully still before unpinning — no last-
// second snap right as the page hands off to the next section.
const SETTLE = 0.4

const glassPanel = {
  background: 'rgba(11,11,11,0.35)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(255,255,255,0.08)',
}

export default function Work() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const mainFrameRef = useRef(null)
  const slot1FrameRef = useRef(null)
  const slot2FrameRef = useRef(null)
  const cardRefs = useRef([])

  useLayoutEffect(() => {
    if (STEPS <= 0) return

    const px = (n) => `${n}px`
    const readRect = (el) => {
      const g = gridRef.current.getBoundingClientRect()
      const r = el.getBoundingClientRect()
      return { left: r.left - g.left, top: r.top - g.top, width: r.width, height: r.height }
    }

    let tl = null
    let st = null

    const build = () => {
      if (tl) tl.kill()
      if (st) st.kill()

      const mainRect = readRect(mainFrameRef.current)
      const slot1Rect = readRect(slot1FrameRef.current)
      const slot2Rect = readRect(slot2FrameRef.current)
      const gap = slot2Rect.top - (slot1Rect.top + slot1Rect.height)
      const exitRect = { left: mainRect.left - mainRect.width - 60, top: mainRect.top, width: mainRect.width, height: mainRect.height }
      const enterRect = { left: slot2Rect.left, top: slot2Rect.top + slot2Rect.height + gap, width: slot2Rect.width, height: slot2Rect.height }
      const slotRect = [mainRect, slot1Rect, slot2Rect]

      // Starting positions: slots 0-2 visible, anything beyond queued below.
      allProjects.forEach((_, idx) => {
        const el = cardRefs.current[idx]
        if (!el) return
        const rect = slotRect[idx] || enterRect
        gsap.set(el, {
          left: px(rect.left),
          top: px(rect.top),
          width: px(rect.width),
          height: px(rect.height),
          opacity: idx <= 2 ? 1 : 0,
          zIndex: allProjects.length - idx,
        })
      })

      tl = gsap.timeline({ defaults: { ease: 'none', duration: 1 } })

      for (let k = 0; k < STEPS; k++) {
        const exitingEl = cardRefs.current[k]
        const toMainEl = cardRefs.current[k + 1]
        const toSlot1El = cardRefs.current[k + 2]
        const enteringEl = cardRefs.current[k + 3]

        if (exitingEl) {
          tl.to(exitingEl, { left: px(exitRect.left), top: px(exitRect.top), width: px(exitRect.width), height: px(exitRect.height), opacity: 0 }, k)
        }
        if (toMainEl) {
          tl.to(toMainEl, { left: px(mainRect.left), top: px(mainRect.top), width: px(mainRect.width), height: px(mainRect.height) }, k)
        }
        if (toSlot1El) {
          tl.to(toSlot1El, { left: px(slot1Rect.left), top: px(slot1Rect.top), width: px(slot1Rect.width), height: px(slot1Rect.height) }, k)
        }
        if (enteringEl) {
          tl.to(enteringEl, { left: px(slot2Rect.left), top: px(slot2Rect.top), width: px(slot2Rect.width), height: px(slot2Rect.height), opacity: 1 }, k)
        }
      }

      // No-op filler: holds the final state for a beat before unpinning.
      tl.to({}, { duration: SETTLE }, STEPS)

      st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => '+=' + Math.round(window.innerHeight * (STEPS + SETTLE)),
        scrub: true,
        pin: true,
        anticipatePin: 1,
        animation: tl,
      })
    }

    build()
    const onResize = () => {
      if (st && st.isActive) return
      build()
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (tl) tl.kill()
      if (st) st.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} id="work" className="relative z-[2] bg-bg py-12 px-5 md:py-16 md:px-16 overflow-hidden">
      {/* Ghost text */}
      <p className="ghost absolute top-8 left-0 text-[clamp(60px,12vw,180px)] font-bold leading-none tracking-tightest uppercase whitespace-nowrap">
        MY WORK
      </p>

      {/* Header row */}
      <div className="relative z-10 flex items-end justify-between mb-8 md:mb-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-3">
            // My Latest Work
          </p>
          <h2 className="text-[36px] md:text-[56px] font-bold leading-[0.92] tracking-tightest uppercase">
            LATEST
            <br />
            PROJECT
          </h2>
        </div>
        <Link to="/projects" className="text-sm font-medium text-white/40 hover:text-white transition-colors mt-1 shrink-0 ml-4">
          View all →
        </Link>
      </div>

      {/* Carousel: invisible frames reserve the layout, real cards are absolutely
          positioned on top and tweened between frames as the page scrolls. */}
      <div ref={gridRef} className="relative z-10 flex flex-col md:grid md:grid-cols-[1fr_auto] gap-4">
        <div ref={mainFrameRef} className="invisible" style={{ height: 'clamp(240px,50vw,460px)' }} />
        <div className="flex flex-col gap-4 md:w-[360px]">
          <div ref={slot1FrameRef} className="invisible flex-1" style={{ minHeight: '132px' }} />
          <div ref={slot2FrameRef} className="invisible flex-1" style={{ minHeight: '132px' }} />
        </div>

        <div className="absolute inset-0">
          {allProjects.map(({ cls, slug, tag, title, subtitle }, idx) => (
            <Link
              key={slug}
              to={`/project/${slug}`}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="absolute rounded-2xl overflow-hidden group"
              style={{ top: 0, left: 0 }}
            >
              <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${cls}`} />
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                style={{ background: 'linear-gradient(to bottom,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.65) 100%)' }}
              />
              <div className="absolute top-3 left-3 md:top-5 md:left-5">
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold" style={{ background: 'rgba(11,11,11,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  {tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3 md:p-5 rounded-b-2xl" style={glassPanel}>
                <div>
                  <p className="text-xs md:text-sm font-bold leading-tight">{title}</p>
                  <p className="text-[10px] md:text-xs text-white/50 mt-0.5 md:mt-1">{subtitle}</p>
                </div>
                <span className="hidden md:inline text-sm text-white/0 group-hover:text-white/70 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shrink-0 ml-4">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}
