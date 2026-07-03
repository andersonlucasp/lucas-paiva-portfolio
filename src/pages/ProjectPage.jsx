import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getProject, getRelated } from '../data/projects'
import Footer from '../components/Footer'

const PROTECTED_SLUGS = { 'itau-design-system': 'casesjobs2026' }
const SESSION_KEY = (slug) => `unlocked_${slug}`

function PasswordGate({ slug, onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === PROTECTED_SLUGS[slug]) {
      sessionStorage.setItem(SESSION_KEY(slug), '1')
      onUnlock()
    } else {
      setError(true)
      setValue('')
    }
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-5 md:px-6">
      <div className="w-full max-w-sm">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-4">// Acesso restrito</p>
        <h2 className="text-3xl font-bold tracking-tightest uppercase mb-2">Conteúdo protegido</h2>
        <p className="text-sm text-white/40 mb-10">Este case ainda não é público. Insira a senha para continuar.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            placeholder="Senha"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false) }}
            className="w-full px-5 py-3.5 rounded-xl text-sm"
            autoFocus
          />
          {error && <p className="text-xs text-red-400">Senha incorreta. Tente novamente.</p>}
          <button
            type="submit"
            className="w-full px-5 py-3.5 bg-white text-bg text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors"
          >
            Entrar
          </button>
        </form>
        <Link to="/" className="block mt-8 text-xs text-white/30 hover:text-white transition-colors">← Voltar ao portfolio</Link>
      </div>
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = getProject(slug)
  const related = getRelated(slug)
  const [activeImg, setActiveImg] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const isProtected = !!PROTECTED_SLUGS[slug]
  const [unlocked, setUnlocked] = useState(
    !isProtected || sessionStorage.getItem(SESSION_KEY(slug)) === '1'
  )

  useEffect(() => {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!expanded) return
    const onKey = (e) => {
      if (e.key === 'Escape') setExpanded(false)
      if (e.key === 'ArrowRight') setActiveImg(i => (i + 1) % project.gallery.length)
      if (e.key === 'ArrowLeft') setActiveImg(i => (i - 1 + project.gallery.length) % project.gallery.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expanded, project])

  if (!project) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <p className="text-white/40 text-sm">Project not found. <Link to="/" className="underline hover:text-white">Go home</Link></p>
      </div>
    )
  }

  if (!unlocked) {
    return <PasswordGate slug={slug} onUnlock={() => setUnlocked(true)} />
  }

  return (
    <div className="bg-bg text-white min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden bg-bg">
        {/* Background image */}
        <div
          className="absolute inset-x-3 top-3 bottom-3 rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${project.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)' }} />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-8 left-5 md:top-10 md:left-10 z-10">
          <button
            onClick={() => navigate(-1)}
            className="text-xs font-medium text-white/40 hover:text-white transition-colors tracking-widest uppercase"
          >
            ← Projects
          </button>
        </div>

        {/* Title */}
        <div className="absolute bottom-8 left-5 md:bottom-14 md:left-16 z-10">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-3 block">
            {project.tag} · {project.year}
          </span>
          <h1 className="text-[clamp(40px,9vw,130px)] font-bold leading-[0.88] tracking-tightest uppercase whitespace-pre-line">
            {project.title}
          </h1>
        </div>
      </section>

      {/* ── Overview ──────────────────────────────────────────────── */}
      <section className="px-5 py-12 md:px-16 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 md:gap-20 items-stretch"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        {/* Left: intro */}
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-6">
            // Overview
          </p>
          <h2 className="text-[clamp(28px,3vw,40px)] font-bold tracking-tightest uppercase leading-tight mb-8">
            {project.subtitle}
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
            {project.intro}
          </p>
        </div>

        {/* Right: metadata */}
        <div className="flex flex-row flex-wrap md:flex-col md:justify-between gap-5 md:gap-0">
          {[
            { label: 'Client', value: project.client },
            { label: 'Service', value: project.service },
            { label: 'Year', value: project.year },
            { label: 'Timeline', value: project.timeline },
            ...(project.role ? [{ label: 'Role', value: project.role }] : []),
          ].map(({ label, value }, i) => (
            <div key={label} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)', paddingTop: i === 0 ? 0 : '14px' }}>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/25 mb-1">{label}</p>
              <p className="text-sm text-white/70">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Case Study ────────────────────────────────────────────── */}
      <section className="px-5 pb-16 md:px-16 md:pb-24"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-10 pt-14 md:mb-16 md:pt-20">
          // Case Study
        </p>
        <div className="flex flex-col gap-24">
          {project.sections.map((s, i) => (
            <div key={i}>
              <div className="max-w-3xl">
                {s.eyebrow && (
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/25 mb-3">
                    {s.eyebrow}
                  </p>
                )}
                <h3 className="text-[28px] font-bold tracking-tightest uppercase mb-8">
                  {String(i + 1).padStart(2, '0')} — {s.title}
                </h3>
                <div className="text-base text-white/55 leading-[1.85] flex flex-col gap-5">
                  {s.intro && s.intro.split('\n\n').map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {s.items && (
                    <ul className="flex flex-col gap-4 mt-1">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="text-white/20 shrink-0 mt-[2px]">—</span>
                          <span>
                            {item.label && (
                              <span className="text-white/80 font-semibold">{item.label}</span>
                            )}
                            {item.label && item.text && <span className="text-white/30"> — </span>}
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.outro && <p className="mt-1">{s.outro}</p>}
                </div>
              </div>
              {s.image && (
                <div className="mt-12 rounded-2xl overflow-hidden">
                  <img src={s.image} alt="" className="w-full h-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────────── */}
      <section className="px-5 pb-16 md:px-16 md:pb-28" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-8 pt-14 md:mb-10 md:pt-20">
          // Gallery
        </p>

        {/* Main image */}
        <div className="relative rounded-2xl overflow-hidden mb-3 md:mb-4 group" style={{ height: 'clamp(220px, 50vw, 480px)' }}>
          <img
            src={project.gallery[activeImg] || project.gallery[0]}
            alt=""
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setExpanded(true)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}
            title="Expandir"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 2h4v4M6 14H2v-4M14 10v4h-4M2 6V2h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-1">
          {project.gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className="rounded-lg md:rounded-xl overflow-hidden flex-shrink-0 transition-opacity"
              style={{ opacity: activeImg === i ? 1 : 0.4, width: 'clamp(60px, 15vw, 100px)' }}
            >
              <img src={src} alt="" className="w-full h-[52px] md:h-[72px] object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────────── */}
      {expanded && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
          onClick={() => setExpanded(false)}
        >
          {/* Image */}
          <img
            src={project.gallery[activeImg]}
            alt=""
            className="max-w-[90vw] max-h-[85vh] w-auto h-auto rounded-xl object-contain"
            onClick={e => e.stopPropagation()}
          />

          {/* Close */}
          <button
            onClick={() => setExpanded(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Arrow left */}
          <button
            onClick={e => { e.stopPropagation(); setActiveImg(i => (i - 1 + project.gallery.length) % project.gallery.length) }}
            className="absolute left-6 w-11 h-11 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 14L6 9l5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Arrow right */}
          <button
            onClick={e => { e.stopPropagation(); setActiveImg(i => (i + 1) % project.gallery.length) }}
            className="absolute right-6 w-11 h-11 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/40 tracking-widest">
            {activeImg + 1} / {project.gallery.length}
          </p>
        </div>
      )}

      {/* ── Related Projects ──────────────────────────────────────── */}
      <section className="px-5 pb-20 md:px-16 md:pb-28" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-8 pt-14 md:mb-10 md:pt-20">
          // Related Projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {related.map(p => (
            <Link
              key={p.slug}
              to={`/project/${p.slug}`}
              className="group relative rounded-2xl overflow-hidden"
              style={{ height: 'clamp(200px, 45vw, 320px)' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${p.heroImage})` }}
              />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/50">
                  {p.tag} · {p.year}
                </span>
                <div>
                  <h3 className="text-[28px] font-bold tracking-tightest uppercase leading-tight whitespace-pre-line">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/40 mt-2 group-hover:text-white transition-colors">
                    View project →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
