import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import BlogPage from './pages/BlogPage'
import ArticlePage from './pages/ArticlePage'

function Home() {
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
    <>
      <Hero />
      <About />
      <Specialties />
      <Work />
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
