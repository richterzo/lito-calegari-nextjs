'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useInView } from 'framer-motion'

// Sections
import HeroSection from './sections/HeroSection'
import ImageGallerySection from './sections/ImageGallerySection'
import DescriptionSection from './sections/DescriptionSection'
import ValuesSection from './sections/ValuesSection'
import ServicesSection from './sections/ServicesSection'
import PortfolioSection from './sections/PortfolioSection'
import OtherServicesSection from './sections/OtherServicesSection'
import PrintTechSection from './sections/PrintTechSection'
import FilosofiaSection from './FilosofiaSection'
import PartnerLogosSection from './sections/PartnerLogosSection'
import TestimonialsSection from './sections/TestimonialsSection'
import Footer from './Footer'

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0)
  const [selectedTech, setSelectedTech] = useState<'offset' | 'digitale'>(
    'offset'
  )
  const [isMobile, setIsMobile] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Services carousel: start from first when section enters view
  const servicesRef = useRef<HTMLDivElement | null>(null)
  const servicesInView = useInView(servicesRef, { amount: 0.3, once: false })
  useEffect(() => {
    if (isMobile || !servicesInView) return
    const raf = requestAnimationFrame(() => setCurrentServiceSlide(0))
    const interval = setInterval(() => {
      setCurrentServiceSlide((prev) => (prev >= 1 ? 0 : prev + 1))
    }, 4000)
    return () => {
      cancelAnimationFrame(raf)
      clearInterval(interval)
    }
  }, [isMobile, servicesInView])

  const nextService = () => {
    setCurrentServiceSlide((prev) => {
      const maxSlide = isMobile ? 3 : 1
      return prev >= maxSlide ? 0 : prev + 1
    })
  }

  const prevService = () => {
    setCurrentServiceSlide((prev) => {
      const maxSlide = isMobile ? 3 : 1
      return prev <= 0 ? maxSlide : prev - 1
    })
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % 4)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + 4) % 4)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C6D92E] to-[#B8C526] origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* All Sections */}
      <HeroSection isMobile={isMobile} />
      <ImageGallerySection isMobile={isMobile} />
      <DescriptionSection />
      <ValuesSection />
      <ServicesSection
        ref={servicesRef}
        currentSlide={currentServiceSlide}
        onNext={nextService}
        onPrev={prevService}
        onSlideChange={setCurrentServiceSlide}
      />
      <PortfolioSection isMobile={isMobile} />
      <OtherServicesSection isMobile={isMobile} />
      <PrintTechSection
        selectedTech={selectedTech}
        onTechChange={setSelectedTech}
      />
      <FilosofiaSection isMobile={isMobile} />
      <PartnerLogosSection isMobile={isMobile} />
      <TestimonialsSection
        isMobile={isMobile}
        currentIndex={currentTestimonial}
        onNext={nextTestimonial}
        onPrev={prevTestimonial}
        onIndexChange={setCurrentTestimonial}
      />

      <Footer />
          </div>
  )
}

export default HomePage
