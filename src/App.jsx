import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import About from './components/About'
import Specialties from './components/Specialties'
import Work from './components/Work'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogPage from './pages/BlogPage'
import ArticlePage from './pages/ArticlePage'
import ProjectPage from './pages/ProjectPage'
import ProjectsPage from './pages/ProjectsPage'

function Home() {
  useEffect(() => {
    // Lock scroll on both html and body before anything renders
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    const tl = gsap.timeline({
      onStart: () => {
        window.scrollTo(0, 0)
      },
      onComplete: () => {
        window.scrollTo(0, 0)
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
        gsap.set('.preloader', { display: 'none' })
        ScrollTrigger.refresh()
      },
    })

    tl
      .to('.preloader', {
        y: '-150%',
        duration: 1,
        ease: 'power3.inOut',
      })
      .to('.hero-img', {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'circ.inOut',
      }, '-=0.8')
      .to('.hero-overlay-blur', {
        opacity: 0,
        duration: 0.5,
      }, '-=0.6')
      .to('.hero-title-letter', {
        y: '0%',
        opacity: 1,
        duration: 0.6,
        stagger: 0.04,
        ease: 'power2.out',
      }, '-=0.4')
      .to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power1.inOut',
      }, '-=0.4')

    // Hero: zoom out + dissolve ao scrollar
    // O hero é sticky (z-index 1), o Work tem z-index 2 e desliza por cima
    gsap.to('.hero-section', {
      scale: 0.88,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      },
    })

    // Work: sobe de baixo + fade in (por cima do hero sticky)
    gsap.fromTo('#work',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'none',
        immediateRender: false,
        scrollTrigger: {
          trigger: '#work',
          start: 'top 85%',
          end: 'top 30%',
          scrub: 0.8,
        },
      }
    )

    return () => {
      observer.disconnect()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <>
      <Preloader />
      <Hero />
      <Work />
      <About />
      <Specialties />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-bg text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
