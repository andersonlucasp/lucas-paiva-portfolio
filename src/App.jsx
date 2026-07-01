import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
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

function Home() {
  useEffect(() => {
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

    // Preloader + hero entrance animation
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        gsap.set('.preloader', { display: 'none' })
      },
    })

    tl
      // 1. Preloader sai pela parte de cima
      .to('.preloader', {
        y: '-150%',
        duration: 1,
        ease: 'power3.inOut',
      })
      // 2. Hero image scale-in + fade
      .to('.hero-img', {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'circ.inOut',
      }, '-=0.8')
      // 3. Blur overlay some
      .to('.hero-overlay-blur', {
        opacity: 0,
        duration: 0.5,
      }, '-=0.6')
      // 4. Título — letras sobem com stagger
      .to('.hero-title-letter', {
        y: '0%',
        opacity: 1,
        duration: 0.6,
        stagger: 0.04,
        ease: 'power2.out',
      }, '-=0.4')
      // 5. Subtítulo sobe
      .to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power1.inOut',
      }, '-=0.4')

    // Hero: zoom out + dissolve ao scrollar
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

    // Work: sobe de baixo + fade in
    gsap.fromTo('#work',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'none',
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
        </Routes>
      </div>
    </BrowserRouter>
  )
}
