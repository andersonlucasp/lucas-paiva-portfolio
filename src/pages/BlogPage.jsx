import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const FALLBACK_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40andersonlucaspaiva'

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

function ListCard({ item, isLast }) {
  const date = new Date(item.pubDate).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
  const image = item.thumbnail || extractImage(item.content)

  return (
    <Link
      to={articlePath(item)}
      state={{ item }}
      className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center py-8 md:py-12"
      style={!isLast ? { borderBottom: '1px solid rgba(255,255,255,0.08)' } : {}}
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
      <div className="flex flex-col gap-3 md:gap-4">
        {item.categories?.[0] && (
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/35">
            {item.categories[0]}
          </span>
        )}
        <h2 className="text-[22px] md:text-[clamp(24px,3vw,36px)] font-bold leading-[1.15] tracking-tightest text-white group-hover:text-white/80 transition-colors">
          {item.title}
        </h2>
        <div className="flex items-center gap-3 text-xs text-white/30 font-mono">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime(item.content)}</span>
        </div>
        <span className="text-sm font-medium text-white/40 group-hover:text-white transition-colors">
          Read article →
        </span>
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
    fetch('/api/blog')
      .then(r => r.ok ? r.json() : Promise.reject())
      .catch(() => fetch(FALLBACK_URL).then(r => r.json()))
      .then(data => {
        if (data.status === 'ok') setArticles(data.items)
        else setError(true)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
    <div className="min-h-screen bg-bg pt-24 pb-16 px-5 md:pt-32 md:pb-24 md:px-16">

      {/* Header */}
      <div className="mb-12 md:mb-20">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-6">
          // Blog
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h1 className="text-[clamp(36px,8vw,100px)] font-bold tracking-tightest uppercase leading-none">
            WRITING &<br />THINKING
          </h1>
          <a
            href="https://medium.com/@andersonlucaspaiva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/40 hover:text-white transition-colors md:mb-2"
          >
            Follow on Medium →
          </a>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20 pb-12 md:pb-20"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
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
        <div className="flex flex-col">
          {articles.map((item, i) => (
            <ListCard key={item.guid} item={item} isLast={i === articles.length - 1} />
          ))}
        </div>
      )}
    </div>
    <Contact />
    <Footer />
  </>
  )
}
