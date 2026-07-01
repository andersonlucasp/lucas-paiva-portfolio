import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = '/api/blog'

function readTime(html = '') {
  const words = html.replace(/<[^>]+>/g, '').split(/\s+/).length
  return `${Math.max(1, Math.ceil(words / 200))} min read`
}

// Medium omite thumbnail no RSS — extrai do HTML do conteúdo
function extractImage(html = '') {
  const match = html.match(/<img[^>]+src="([^"]+cdn-images[^"]+)"/)
  return match?.[1] ?? null
}

function articlePath(item) {
  const id = item.guid?.split('/p/')?.[1] ?? encodeURIComponent(item.title)
  return `/blog/${id}`
}

function FeaturedCard({ item }) {
  const date = new Date(item.pubDate).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
  const image = item.thumbnail || extractImage(item.content)

  return (
    <Link
      to={articlePath(item)}
      state={{ item }}
      className="group grid grid-cols-2 gap-12 items-center mb-20 pb-20"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
    >
      {image && (
        <div className="rounded-2xl overflow-hidden aspect-[16/10]">
          <img
            src={image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="flex flex-col gap-4">
        {item.categories?.[0] && (
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/35">
            {item.categories[0]}
          </span>
        )}
        <h2 className="text-[36px] font-bold leading-[1.1] tracking-tightest text-white group-hover:text-white/80 transition-colors">
          {item.title}
        </h2>
        <p className="text-base text-white/50 leading-relaxed line-clamp-3">
          {item.description?.replace(/<[^>]+>/g, '').slice(0, 240)}…
        </p>
        <div className="flex items-center gap-3 text-xs text-white/30 font-mono mt-2">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime(item.content)}</span>
        </div>
        <span className="text-sm font-medium text-white/40 group-hover:text-white transition-colors mt-1">
          Read article →
        </span>
      </div>
    </Link>
  )
}

function ArticleCard({ item }) {
  const date = new Date(item.pubDate).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
  const image = item.thumbnail || extractImage(item.content)

  return (
    <Link
      to={articlePath(item)}
      state={{ item }}
      className="group flex flex-col rounded-2xl overflow-hidden hover:opacity-80 transition-opacity"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {image && (
        <div className="w-full aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col gap-3 flex-1">
        {item.categories?.[0] && (
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-white/30">
            {item.categories[0]}
          </span>
        )}
        <h3 className="text-lg font-bold leading-snug text-white/90 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-sm text-white/45 leading-relaxed line-clamp-3 flex-1">
          {item.description?.replace(/<[^>]+>/g, '').slice(0, 160)}…
        </p>
        <div className="flex items-center gap-2 text-xs text-white/25 font-mono mt-1">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime(item.content)}</span>
        </div>
      </div>
    </Link>
  )
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden animate-pulse"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="w-full aspect-[16/9]" style={{ background: 'rgba(255,255,255,0.06)' }} />
      <div className="p-6 flex flex-col gap-3">
        <div className="h-3 w-1/4 rounded" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <div className="h-5 w-3/4 rounded" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <div className="h-4 w-full rounded" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="h-4 w-2/3 rounded" style={{ background: 'rgba(255,255,255,0.05)' }} />
      </div>
    </div>
  )
}

export default function BlogPage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    fetch(API_URL)
      .then(r => r.json())
      .then(data => {
        if (data.status === 'ok') setArticles(data.items)
        else setError(true)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  const [featured, ...rest] = articles

  return (
    <div className="min-h-screen bg-bg pt-32 pb-24 px-16">

      {/* Header */}
      <div className="mb-20">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-6">
          // Blog
        </p>
        <div className="flex items-end justify-between">
          <h1 className="text-[clamp(56px,8vw,100px)] font-bold tracking-tightest uppercase leading-none">
            WRITING &<br />THINKING
          </h1>
          <a
            href="https://medium.com/@andersonlucaspaiva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/40 hover:text-white transition-colors mb-2"
          >
            Follow on Medium →
          </a>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <>
          <div className="grid grid-cols-2 gap-12 mb-20 pb-20"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="rounded-2xl aspect-[16/10] animate-pulse"
              style={{ background: 'rgba(255,255,255,0.06)' }} />
            <div className="flex flex-col gap-4 justify-center">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-5 rounded animate-pulse"
                  style={{ background: 'rgba(255,255,255,0.06)', width: `${[30,80,100,50][i]}%` }} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        </>
      )}

      {/* Error */}
      {error && (
        <p className="text-sm text-white/30">
          Não foi possível carregar os artigos. Acesse{' '}
          <a href="https://medium.com/@andersonlucaspaiva" target="_blank"
            rel="noopener noreferrer" className="underline hover:text-white">
            Medium
          </a>.
        </p>
      )}

      {/* Content */}
      {!loading && !error && (
        <>
          {featured && <FeaturedCard item={featured} />}
          {rest.length > 0 && (
            <div className="grid grid-cols-3 gap-6">
              {rest.map(item => (
                <ArticleCard key={item.guid} item={item} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
