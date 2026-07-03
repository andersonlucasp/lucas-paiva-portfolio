import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-16 py-5 flex items-center justify-between transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}
      >
        <a
          href="/"
          onClick={e => { if (isHome) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) } }}
          className="text-sm font-bold tracking-[0.12em] uppercase text-white"
        >
          Lucas Paiva
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-white/60">
          <li>
            <a
              href="/"
              onClick={e => { if (isHome) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) } }}
              className="hover:text-white transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <Link to="/projects" className={`hover:text-white transition-colors ${location.pathname === '/projects' ? 'text-white' : ''}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/experiences" className={`hover:text-white transition-colors ${location.pathname === '/experiences' ? 'text-white' : ''}`}>
              Experiences
            </Link>
          </li>
          <li>
            <Link to="/blog" className={`hover:text-white transition-colors ${location.pathname === '/blog' ? 'text-white' : ''}`}>
              Blog
            </Link>
          </li>
          <li>
            <a href="https://adplist.org/mentors/lucas-paiva-luque" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Mentoring
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={isHome ? '#contact' : '/#contact'}
            className="hidden md:block px-6 py-2.5 bg-white text-bg text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Get Started
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 4l14 14M18 4L4 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden flex flex-col px-5 pt-24 pb-10 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(11,11,11,0.97)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
      >
        <nav className="flex flex-col gap-1 flex-1">
          {[
            { label: 'Home', href: '/', anchor: true },
            { label: 'Projects', to: '/projects' },
            { label: 'Experiences', to: '/experiences' },
            { label: 'Blog', to: '/blog' },
            { label: 'Mentoring', href: 'https://adplist.org/mentors/lucas-paiva-luque', external: true },
          ].map(item => {
            const active = item.to && location.pathname === item.to
            const cls = `text-[32px] font-bold tracking-tightest uppercase py-3 block transition-colors ${active ? 'text-white' : 'text-white/35 hover:text-white'}`
            if (item.external) return (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>{item.label}</a>
            )
            if (item.anchor) return (
              <a key={item.label} href={item.href} className={cls} onClick={() => setMenuOpen(false)}>{item.label}</a>
            )
            return (
              <Link key={item.label} to={item.to} className={cls}>{item.label}</Link>
            )
          })}
        </nav>
        <a
          href={isHome ? '#contact' : '/#contact'}
          className="block w-full py-4 bg-white text-bg text-sm font-semibold rounded-full text-center hover:bg-white/90 transition-colors mt-6"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </a>
      </div>
    </>
  )
}
