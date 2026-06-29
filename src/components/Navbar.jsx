import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 px-16 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <a href="#" className="text-sm font-bold tracking-[0.12em] uppercase text-white">
        Lucas Paiva
      </a>

      <ul className="flex gap-10 text-sm font-medium text-white/60">
        {['About', 'Work', 'Process', 'Blog', 'Mentoring'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="px-6 py-2.5 bg-white text-bg text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
      >
        Get Started
      </a>
    </nav>
  )
}
