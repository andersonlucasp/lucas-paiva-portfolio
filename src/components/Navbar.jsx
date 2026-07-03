import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = ['About']

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 px-16 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <a
        href="/"
        onClick={e => {
          if (isHome) {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }}
        className="text-sm font-bold tracking-[0.12em] uppercase text-white"
      >
        Lucas Paiva
      </a>

      <ul className="flex gap-10 text-sm font-medium text-white/60">
        <li>
          <a
            href="/"
            onClick={e => {
              if (isHome) {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="hover:text-white transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <Link
            to="/projects"
            className={`hover:text-white transition-colors ${location.pathname === '/projects' ? 'text-white' : ''}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/experiences"
            className={`hover:text-white transition-colors ${location.pathname === '/experiences' ? 'text-white' : ''}`}
          >
            Experiences
          </Link>
        </li>
        {navItems.map((item) => (
          <li key={item}>
            {isHome ? (
              <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ) : (
              <Link to={`/#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </Link>
            )}
          </li>
        ))}
        <li>
          <Link
            to="/blog"
            className={`hover:text-white transition-colors ${location.pathname === '/blog' ? 'text-white' : ''}`}
          >
            Blog
          </Link>
        </li>
        <li>
          <a
            href="https://adplist.org/mentors/lucas-paiva-luque"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Mentoring
          </a>
        </li>
      </ul>

      <a
        href={isHome ? '#contact' : '/#contact'}
        className="px-6 py-2.5 bg-white text-bg text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
      >
        Get Started
      </a>
    </nav>
  )
}
