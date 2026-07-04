import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function readTime(html = '') {
  const words = html.replace(/<[^>]+>/g, '').split(/\s+/).length
  return `${Math.max(1, Math.ceil(words / 200))} min read`
}

function extractImage(html = '') {
  const match = html.match(/<img[^>]+src="([^"]+cdn-images[^"]+)"/)
  return match?.[1] ?? null
}

// Remove a primeira imagem do conteúdo (já exibida como hero)
function removeFirstImage(html = '') {
  return html.replace(/<figure>[\s\S]*?<\/figure>/, '')
}

export default function ArticlePage() {
  const { state } = useLocation()
  const navigate  = useNavigate()
  const item      = state?.item

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!item) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center gap-4">
        <p className="text-white/40 text-sm">Artigo não encontrado.</p>
        <button
          onClick={() => navigate('/blog')}
          className="text-sm font-medium text-white hover:text-white/60 transition-colors"
        >
          ← Voltar ao Blog
        </button>
      </div>
    )
  }

  const date  = new Date(item.pubDate).toLocaleDateString('pt-BR', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
  const image   = item.thumbnail || extractImage(item.content)
  const content = removeFirstImage(item.content)

  return (
    <>
    <div className="min-h-screen bg-bg">
      {/* Back */}
      <div className="fixed top-20 left-5 md:top-24 md:left-16 z-40">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-xs font-medium text-white/35 hover:text-white transition-colors"
        >
          ← Blog
        </button>
      </div>

      {/* Hero */}
      <div className="pt-24 pb-0 px-5 md:pt-32 md:px-16 max-w-[860px] mx-auto">
        {/* Meta */}
        {item.categories?.[0] && (
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/35 mb-6">
            {item.categories[0]}
          </p>
        )}

        {/* Title */}
        <h1 className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.1] tracking-tightest mb-6">
          {item.title}
        </h1>

        {/* Byline */}
        <div className="flex items-center gap-4 mb-10 pb-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <img
            src="https://cdn-images-1.medium.com/fit/c/150/150/1*jhoDI3bvdG3MNOxeMYKczA.jpeg"
            alt="Lucas Paiva"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-white/80">Lucas Paiva</p>
            <p className="text-xs text-white/35 font-mono">{date} · {readTime(item.content)}</p>
          </div>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs text-white/30 hover:text-white transition-colors"
          >
            Ver no Medium ↗
          </a>
        </div>

        {/* Cover image */}
        {image && (
          <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-12">
            <img src={image} alt={item.title} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* Article body */}
      <div
        className="article-body max-w-[680px] mx-auto px-5 md:px-16 pb-12 md:pb-16 overflow-x-hidden"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Footer do artigo */}
      <div className="max-w-[680px] mx-auto px-5 md:px-16 pb-20 md:pb-32">
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-10 mb-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Clap button */}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <span className="text-3xl select-none group-hover:scale-125 transition-transform duration-200">
              👏
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                Curtir no Medium
              </span>
              <span className="text-xs text-white/30">
                Clique para dar claps no artigo original
              </span>
            </div>
          </a>

          {/* Share */}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-white/30 hover:text-white transition-colors"
          >
            Ler no Medium ↗
          </a>
        </div>

      </div>
    </div>
    <Contact />
    <Footer />
  </>
  )
}
