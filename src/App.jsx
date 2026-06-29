import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Specialties from './components/Specialties'
import Work from './components/Work'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-bg text-white">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Work />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
