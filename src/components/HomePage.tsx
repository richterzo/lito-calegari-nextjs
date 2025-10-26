'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const testimonials = [
    {
      name: 'Mario Photokitesurf',
      text: "Molto cordiali e disponibili, forniscono ottimi consigli per un risultato impeccabile dalla grafica superiore!!! ...anche oggi ne ho avuto dimostrazione... nonostante la richiesta dell'ultimo momento, ho avuto subito un nuovo logo (STUPENDO!!!) e le stampe che mi servivano.",
      avatar: '/images/9434619-scaled-254x254.jpg',
    },
    {
      name: 'Fabrizio P.',
      text: 'Gentilissimi e bravissimi! Mi sono rivolto a loro per stampare la mia tesi per la quale richiedevo un impaginazione in A4 orizzontale tipo rivista (non penso stampino tesi classiche) con molte immagini e colori. Sono estremamente soddisfatto del risultato e della qualità della stampa, super consigliati e con prezzi ottimi!',
      avatar: '/images/9439678-scaled-254x254.jpg',
    },
    {
      name: 'Patrick Pagliaro',
      text: "Super soddisfatto del servizio offerto per l'impaginazione del mio catalogo prima e la stampa dopo. Molto bravi nel gestire il progetto. La comunicazione è stata chiara. Il risultato finale ha superato le mie aspettative",
      avatar: '/images/9440461-scaled-254x254.jpg',
    },
    {
      name: 'Antonio Tricarico',
      text: 'Preparati e attenti al più piccolo dettaglio, mi hanno sempre proposto la soluzione migliore a fronte dei vincoli di tempi e costi. Consigliato ad occhi chiusi.',
      avatar: '/images/9439727-scaled-254x254.jpg',
    },
  ]

  // Simple carousel - 4 cards, show 3 on desktop, 1 on mobile
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-scroll carousel (desktop only)
  useEffect(() => {
    if (isMobile) return // No auto-scroll on mobile

    const interval = setInterval(() => {
      setCurrentServiceSlide((prev) => (prev >= 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [isMobile])

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
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C6D92E] to-[#B8C526] origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* PREMIUM HEADER - Glassmorphism (No animation for better CLS) */}
      <header className="fixed top-0 left-0 right-0 z-50 glass shadow-premium">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Torna alla home"
          >
            <Image
              src="/Logo-LitoCalegari.png"
              alt="Lito Calegari"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-[#C6D92E] transition-colors"
            >
              HOME
            </Link>
            <div className="relative group">
              <Link
                href="/servizi"
                className="text-sm font-medium text-gray-700 hover:text-[#C6D92E] transition-colors flex items-center gap-1"
              >
                SERVIZI
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="/progettazione-grafica"
                  className="block px-4 py-3 text-sm text-gray-700 hover:text-[#C6D92E] hover:bg-gray-50 transition-colors"
                >
                  Progettazione Grafica
                </Link>
                <Link
                  href="/stampa-digitale"
                  className="block px-4 py-3 text-sm text-gray-700 hover:text-[#C6D92E] hover:bg-gray-50 transition-colors"
                >
                  Stampa Digitale
                </Link>
                <Link
                  href="/stampa-offset"
                  className="block px-4 py-3 text-sm text-gray-700 hover:text-[#C6D92E] hover:bg-gray-50 transition-colors"
                >
                  Stampa Offset
                </Link>
              </div>
            </div>
            <Link
              href="/contatti"
              className="text-sm font-medium text-gray-700 hover:text-[#C6D92E] transition-colors"
            >
              CONTATTI
            </Link>
          </nav>

          <Link
            href="/contatti"
            className="hidden md:block bg-[#C6D92E] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#B8C526] transition-colors"
          >
            CONTATTACI
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-4 space-y-4">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-[#C6D92E]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/servizi"
                  className="block text-gray-700 hover:text-[#C6D92E]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SERVIZI
                </Link>
                <Link
                  href="/contatti"
                  className="block text-gray-700 hover:text-[#C6D92E]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTATTI
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION - With Animated Typography Background */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{ minHeight: '100vh' }}
      >
        {/* Blueprint Paper Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-yellow-50/20" />

        {/* Animated Typography Bands - Desktop only for performance */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Band 1 - Top */}
            <motion.div
              className="absolute top-[15%] left-0 whitespace-nowrap font-bold text-7xl md:text-9xl text-gray-900 opacity-[0.06]"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 100,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              GRAFICA • DESIGN • CREATIVITÀ • INNOVAZIONE • QUALITÀ •{' '}
            </motion.div>

            {/* Band 2 - Bottom (opposite direction) */}
            <motion.div
              className="absolute bottom-[15%] right-0 whitespace-nowrap font-bold text-7xl md:text-9xl text-gray-900 opacity-[0.06]"
              animate={{
                x: ['100%', '-100%'],
              }}
              transition={{
                duration: 110,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              OFFSET • DIGITALE • ESPERIENZA • PROFESSIONALITÀ • ARTE •{' '}
            </motion.div>
          </div>
        )}

        {/* Center Text - STAMPA (always visible) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <h1 className="font-bold text-[20vw] md:text-[25vw] text-gray-900 whitespace-nowrap">
            STAMPA
          </h1>
        </div>

        {/* Technical Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 123, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 123, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Finer grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 123, 255, 0.1) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(0, 123, 255, 0.1) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '10px 10px',
          }}
        />

        {/* Paper Texture Noise */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Print registration marks (desktop only for performance) */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none opacity-5">
            {/* Top left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 left-8"
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="30"
                  x2="20"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="20"
                  x2="10"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="30"
                  y1="20"
                  x2="40"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>

            {/* Top right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute top-8 right-8"
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="30"
                  x2="20"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="20"
                  x2="10"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="30"
                  y1="20"
                  x2="40"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>

            {/* Bottom left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute bottom-8 left-8"
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="30"
                  x2="20"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="20"
                  x2="10"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="30"
                  y1="20"
                  x2="40"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>

            {/* Bottom right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 3,
              }}
              className="absolute bottom-8 right-8"
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="30"
                  x2="20"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="20"
                  x2="10"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="30"
                  y1="20"
                  x2="40"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          </div>
        )}

        {/* Giant background text "STAMPA" with print texture - Desktop only */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            style={{ zIndex: 0 }}
          >
            <motion.h2
              className="text-[20vw] md:text-[25vw] font-black text-gray-50 leading-none"
              style={{
                letterSpacing: '-0.05em',
                WebkitTextStroke: '1px rgba(0,0,0,0.01)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.02)',
              }}
              animate={{
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              STAMPA
            </motion.h2>
          </motion.div>
        )}

        {/* CMYK Color blobs - Printing Inks - Desktop only */}
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full blur-3xl opacity-20"
              style={{ background: 'rgba(0, 183, 235, 0.4)' }} // Cyan
              animate={{
                y: [0, -40, 0],
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute top-[25%] right-[10%] w-40 h-40 rounded-full blur-3xl opacity-15"
              style={{ background: 'rgba(236, 0, 140, 0.4)' }} // Magenta
              animate={{
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-[20%] left-[15%] w-36 h-36 rounded-full blur-3xl opacity-20"
              style={{ background: 'rgba(198, 217, 46, 0.5)' }} // Yellow (brand color)
              animate={{
                y: [0, -35, 0],
                scale: [1, 1.25, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-[30%] right-[12%] w-28 h-28 rounded-full blur-3xl opacity-10"
              style={{ background: 'rgba(0, 0, 0, 0.3)' }} // Black
              animate={{
                y: [0, 25, 0],
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </>
        )}

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div style={{ minHeight: '60vh' }}>
            {/* Overline - Enhanced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0,
              }}
              className="mb-8 flex items-center justify-center gap-3"
            >
              {!isMobile && (
                <motion.div
                  className="h-px w-12 bg-gradient-to-r from-transparent to-[#C6D92E]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              )}
              <p className="text-xs md:text-sm text-gray-600 tracking-[0.3em] uppercase font-semibold">
                Dove le tue idee prendono forma
              </p>
              {!isMobile && (
                <motion.div
                  className="h-px w-12 bg-gradient-to-l from-transparent to-[#C6D92E]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              )}
            </motion.div>

            {/* Main Headline - Semibold Typography */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0,
              }}
              className="mb-8 leading-[0.95]"
              style={{
                fontSize: 'clamp(2.8rem, 9vw, 8rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                minHeight: 'clamp(5.6rem, 18vw, 16rem)',
              }}
            >
              <span
                className="block text-gray-900"
                style={{
                  fontWeight: 600,
                }}
              >
                Studio grafico e
              </span>
              <span
                className="block mt-2 text-gray-900"
                style={{
                  fontWeight: 600,
                }}
              >
                stampa
              </span>
            </motion.h1>

            {/* Description - Better Typography */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
              }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12 font-normal"
              style={{
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              Dalla progettazione grafica alla stampa di alta qualità, offriamo
              soluzioni creative e su misura per valorizzare la tua
              comunicazione
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
              className="mt-12"
            >
              <Link
                href="/contatti"
                className="inline-block bg-[#C6D92E] text-black px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#B8C526] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                CONTATTACI
              </Link>
            </motion.div>

            {/* Scroll Indicator - Enhanced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="mt-20"
            >
              <motion.div
                className="flex flex-col items-center gap-2"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">
                  Scroll
                </span>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-2">
                  <motion.div
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    animate={{
                      y: [0, 12, 0],
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY - Angled layout from screenshot */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {/* Image 1 - Rotated left with premium overlay */}
            <motion.div
              initial={{ opacity: 0, y: 80, rotate: -10, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4, scale: 1 }}
              transition={{
                duration: 1.2,
                type: 'spring',
                stiffness: 80,
                delay: 0,
              }}
              viewport={{ margin: '-100px' }}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                y: -15,
                z: 50,
                transition: {
                  duration: 0.5,
                  ease: 'easeOut',
                },
              }}
              className="group relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-premium-lg transform-3d cursor-pointer"
              style={{
                transformOrigin: 'center center',
                transformStyle: 'preserve-3d',
              }}
            >
              <Image
                src="/images/Artboard-1-1-scaled.png"
                alt="Portfolio 1"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Premium Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-white font-bold text-xl mb-2">
                    Biglietti da Visita
                  </h3>
                  <p className="text-white/80 text-sm">
                    Design personalizzato e stampa di qualità
                  </p>
                </motion.div>
              </motion.div>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            {/* Image 2 - Center (larger) */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
              viewport={{ margin: '-100px' }}
              whileHover={{
                scale: 1.05,
                y: -15,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transition: { duration: 0.3 },
              }}
              className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl col-span-1"
            >
              <Image
                src="/images/banner_cat_magazines_01_d.jpg"
                alt="Portfolio 2"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Image 3 - Rotated right */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: 'spring',
                stiffness: 100,
              }}
              viewport={{ margin: '-100px' }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl transform-3d"
              style={{ transformOrigin: 'center center' }}
            >
              <Image
                src="/images/Artboard-13-scaled.png"
                alt="Portfolio 3"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Image 4 - Rotated left */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: 'spring',
                stiffness: 100,
              }}
              viewport={{ margin: '-100px' }}
              whileHover={{
                scale: 1.05,
                rotate: -1,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl transform-3d hidden md:block"
              style={{ transformOrigin: 'center center' }}
            >
              <Image
                src="/images/Artboard-16-scaled.png"
                alt="Portfolio 4"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Image 5 - Rotated right */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: 'spring',
                stiffness: 100,
              }}
              viewport={{ margin: '-100px' }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl transform-3d hidden md:block"
              style={{ transformOrigin: 'center center' }}
            >
              <Image
                src="/images/homepage_4-2.webp"
                alt="Portfolio 5"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION SECTION - Enhanced with better typography */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C6D92E] rounded-full blur-[150px] opacity-5 pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{}}
            className="text-2xl md:text-4xl text-gray-900 leading-relaxed font-normal"
            style={{
              lineHeight: 1.6,
              fontWeight: 400,
              letterSpacing: '-0.02em',
            }}
          >
            Offriamo un&apos;ampia gamma di soluzioni di{' '}
            <motion.span
              initial={{ backgroundSize: '0% 100%' }}
              whileInView={{ backgroundSize: '100% 100%' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{}}
              className="font-semibold relative inline-block text-gray-900"
              style={{
                background:
                  'linear-gradient(to right, #C6D92E 0%, #C6D92E 100%)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 88%',
                backgroundSize: '0% 30%',
                fontWeight: 600,
              }}
            >
              stampa
            </motion.span>
            , dai{' '}
            <motion.span
              initial={{ backgroundSize: '0% 100%' }}
              whileInView={{ backgroundSize: '100% 100%' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{}}
              className="font-semibold relative inline-block text-gray-900"
              style={{
                background:
                  'linear-gradient(to right, #C6D92E 0%, #C6D92E 100%)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 88%',
                backgroundSize: '0% 30%',
                fontWeight: 600,
              }}
            >
              biglietti da visita
            </motion.span>{' '}
            ai{' '}
            <motion.span
              initial={{ backgroundSize: '0% 100%' }}
              whileInView={{ backgroundSize: '100% 100%' }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{}}
              className="font-semibold relative inline-block text-gray-900"
              style={{
                background:
                  'linear-gradient(to right, #C6D92E 0%, #C6D92E 100%)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 88%',
                backgroundSize: '0% 30%',
                fontWeight: 600,
              }}
            >
              cataloghi
            </motion.span>
            , dai{' '}
            <motion.span
              initial={{ backgroundSize: '0% 100%' }}
              whileInView={{ backgroundSize: '100% 100%' }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{}}
              className="font-semibold relative inline-block text-gray-900"
              style={{
                background:
                  'linear-gradient(to right, #C6D92E 0%, #C6D92E 100%)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 88%',
                backgroundSize: '0% 30%',
                fontWeight: 600,
              }}
            >
              banner
            </motion.span>{' '}
            ai materiali personalizzati, garantendo{' '}
            <span className="text-gray-900 font-medium">qualità</span>,{' '}
            <span className="text-gray-900 font-medium">creatività</span> e{' '}
            <span className="text-gray-900 font-medium">
              attenzione ai dettagli
            </span>{' '}
            in ogni progetto.
          </motion.p>
        </div>
      </section>

      {/* VALUES SECTION - Enhanced with better animations */}
      <section className="min-h-screen flex items-center justify-center py-20 bg-black text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2 }}
          viewport={{}}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C6D92E] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#B8C526] rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: '#01',
                title: 'Qualità',
                description:
                  'Per i tuoi progetti utilizziamo solo materiali di alta qualità.',
              },
              {
                number: '#02',
                title: 'Personalizzazione',
                description:
                  'Ogni prodotto è realizzato su misura, curando ogni dettaglio.',
              },
              {
                number: '#03',
                title: 'Rapidità',
                description:
                  'Dal progetto alla consegna, garantiamo tempi rapidi.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: 'spring',
                }}
                viewport={{ margin: '-100px' }}
                style={{ transformStyle: 'preserve-3d' }}
                className="text-center group perspective-1000"
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    z: 50,
                    transition: { duration: 0.3 },
                  }}
                  className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#C6D92E] to-[#B8C526] rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center text-white text-xl sm:text-3xl font-bold shadow-2xl cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {item.number}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 group-hover:text-[#C6D92E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-white leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Enhanced Premium Version */}
      <section className="min-h-screen flex items-center justify-center py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Section Header - Enhanced */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{}}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                className="h-px w-16 bg-gradient-to-r from-[#C6D92E] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{}}
              />
              <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
                Expertise
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{}}
              className="text-5xl md:text-7xl font-bold text-gray-900"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              I nostri servizi
            </motion.h2>
          </div>

          {/* Mobile: Simple Grid (no carousel) - Full width on mobile */}
          <div className="grid grid-cols-1 gap-6 lg:hidden py-12">
            {/* Grafica Card */}
            <div className="group relative bg-white border-2 border-black p-6 md:p-8 rounded-lg hover:bg-[#C6D92E] hover:rounded-2xl transition-all duration-300 cursor-pointer">
              {/* Icon with yellow circle background */}
              <div className="relative mb-6 md:mb-8 flex justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C6D92E] rounded-full w-16 h-16 md:w-24 md:h-24 opacity-80 -right-2 -top-2" />
                  <div className="relative z-10 w-14 h-14 md:w-20 md:h-20">
                    {/* Computer/Design Icon */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect
                        x="10"
                        y="20"
                        width="60"
                        height="45"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <rect
                        x="15"
                        y="25"
                        width="50"
                        height="35"
                        fill="white"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 20 30 Q 30 40, 40 30"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <circle cx="55" cy="35" r="3" fill="black" />
                      <rect x="30" y="65" width="20" height="3" fill="black" />
                      <rect x="20" y="68" width="40" height="2" fill="black" />
                      <rect
                        x="72"
                        y="30"
                        width="15"
                        height="20"
                        fill="#C6D92E"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <line
                        x1="75"
                        y1="33"
                        x2="84"
                        y2="33"
                        stroke="black"
                        strokeWidth="1"
                      />
                      <line
                        x1="75"
                        y1="37"
                        x2="84"
                        y2="37"
                        stroke="black"
                        strokeWidth="1"
                      />
                      <line
                        x1="75"
                        y1="41"
                        x2="84"
                        y2="41"
                        stroke="black"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black">
                Grafica
              </h3>
              <p className="text-black leading-relaxed text-base md:text-lg">
                Diamo forma alle tue idee con creatività e competenza,
                realizzando progetti grafici dal forte impatto visivo,
                accompagnandoti in ogni fase della creazione.
              </p>
            </div>

            {/* Stampa Card */}
            <div className="group relative bg-white border-2 border-black p-6 md:p-8 rounded-lg hover:bg-[#C6D92E] hover:rounded-2xl transition-all duration-300 cursor-pointer">
              {/* Icon with yellow circle background */}
              <div className="relative mb-6 md:mb-8 flex justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C6D92E] rounded-full w-16 h-16 md:w-24 md:h-24 opacity-80 -right-2 -top-2" />
                  <div className="relative z-10 w-14 h-14 md:w-20 md:h-20">
                    {/* Printer Icon */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect
                        x="25"
                        y="15"
                        width="35"
                        height="20"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <rect
                        x="20"
                        y="35"
                        width="45"
                        height="30"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <circle cx="28" cy="42" r="2" fill="black" />
                      <rect
                        x="28"
                        y="50"
                        width="30"
                        height="25"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <line
                        x1="32"
                        y1="57"
                        x2="54"
                        y2="57"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="32"
                        y1="62"
                        x2="54"
                        y2="62"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="32"
                        y1="67"
                        x2="48"
                        y2="67"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="68"
                        cy="45"
                        r="8"
                        fill="#C6D92E"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <circle cx="68" cy="45" r="3" fill="black" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black">
                Stampa
              </h3>
              <p className="text-black leading-relaxed text-base md:text-lg">
                Macchinari di ultima generazione e materiali certificati FSC® ci
                consentono di offrirti stampe rapide, di qualità eccellente e
                rispettose dell&apos;ambiente.
              </p>
            </div>

            {/* Finitura Card */}
            <div className="group relative bg-white border-2 border-black p-6 md:p-8 rounded-lg hover:bg-[#C6D92E] hover:rounded-2xl transition-all duration-300 cursor-pointer">
              {/* Icon with yellow circle background */}
              <div className="relative mb-6 md:mb-8 flex justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C6D92E] rounded-full w-16 h-16 md:w-24 md:h-24 opacity-80 -right-2 -top-2" />
                  <div className="relative z-10 w-14 h-14 md:w-20 md:h-20">
                    {/* Diamond/Gem Icon */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle
                        cx="50"
                        cy="40"
                        r="25"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M 35 30 L 45 20 L 55 20 L 65 30 L 60 50 L 50 60 L 40 50 Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <line
                        x1="45"
                        y1="20"
                        x2="40"
                        y2="50"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="55"
                        y1="20"
                        x2="60"
                        y2="50"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="35"
                        y1="30"
                        x2="50"
                        y2="60"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="65"
                        y1="30"
                        x2="50"
                        y2="60"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="72"
                        cy="28"
                        r="8"
                        fill="#C6D92E"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <path
                        d="M 68 28 L 70 30 L 76 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black">
                Finitura
              </h3>
              <p className="text-black leading-relaxed text-base md:text-lg">
                Rendiamo ogni lavoro unico grazie a finiture di pregio e cura
                dei dettagli, per dare un tocco distintivo e valorizzare al
                massimo la tua comunicazione.
              </p>
            </div>

            {/* Extra Card - 4th Service */}
            <div className="group relative bg-white border-2 border-black p-6 md:p-8 rounded-lg hover:bg-[#C6D92E] hover:rounded-2xl transition-all duration-300 cursor-pointer">
              <div className="relative mb-6 md:mb-8 flex justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#C6D92E] rounded-full w-16 h-16 md:w-24 md:h-24 opacity-80 -right-2 -top-2" />
                  <div className="relative z-10 w-14 h-14 md:w-20 md:h-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        d="M 50 20 L 55 40 L 75 40 L 60 52 L 65 72 L 50 60 L 35 72 L 40 52 L 25 40 L 45 40 Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="8"
                        fill="#C6D92E"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <circle
                        cx="78"
                        cy="25"
                        r="8"
                        fill="#C6D92E"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <line
                        x1="76"
                        y1="25"
                        x2="80"
                        y2="25"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <line
                        x1="78"
                        y1="23"
                        x2="78"
                        y2="27"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black">
                Extra
              </h3>
              <p className="text-black leading-relaxed text-base md:text-lg">
                Superiamo i limiti della carta con stampe su supporti innovativi
                e di prestigio, offrendo nuove possibilità creative per
                valorizzare la tua comunicazione.
              </p>
            </div>
          </div>

          {/* Desktop: Carousel */}
          <div className="hidden lg:block relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevService}
              className="absolute left-0 -translate-x-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-all duration-300 shadow-lg"
              aria-label="Previous service"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextService}
              className="absolute right-0 translate-x-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-all duration-300 shadow-lg"
              aria-label="Next service"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative overflow-hidden py-12">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: `calc(-${currentServiceSlide * 33.333}% - ${
                    currentServiceSlide * 2.666
                  }rem)`,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                }}
              >
                {/* Duplicate cards for desktop carousel */}
                {[...Array(4)].map((_, index) => {
                  const serviceData = [
                    {
                      title: 'Grafica',
                      desc: 'Diamo forma alle tue idee con creatività e competenza, realizzando progetti grafici dal forte impatto visivo, accompagnandoti in ogni fase della creazione.',
                    },
                    {
                      title: 'Stampa',
                      desc: "Macchinari di ultima generazione e materiali certificati FSC® ci consentono di offrirti stampe rapide, di qualità eccellente e rispettose dell'ambiente.",
                    },
                    {
                      title: 'Finitura',
                      desc: 'Rendiamo ogni lavoro unico grazie a finiture di pregio e cura dei dettagli, per dare un tocco distintivo e valorizzare al massimo la tua comunicazione.',
                    },
                    {
                      title: 'Extra',
                      desc: 'Superiamo i limiti della carta con stampe su supporti innovativi e di prestigio, offrendo nuove possibilità creative per valorizzare la tua comunicazione.',
                    },
                  ][index]

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -5,
                        backgroundColor: '#C6D92E',
                        borderRadius: '1.5rem',
                        transition: { duration: 0.3 },
                      }}
                      className="group relative bg-white border-2 border-black p-10 rounded-none cursor-pointer overflow-hidden flex-shrink-0"
                      style={{
                        width: 'calc(33.333% - 5.333rem)',
                        minWidth: 'calc(33.333% - 5.333rem)',
                      }}
                    >
                      <h3 className="text-3xl font-bold mb-6 text-black">
                        {serviceData.title}
                      </h3>
                      <p className="text-black leading-relaxed text-lg">
                        {serviceData.desc}
                      </p>
                      <motion.div
                        className="absolute inset-0 border-4 border-[#C6D92E]"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3 mt-8">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentServiceSlide === index
                        ? 'w-10 bg-[#C6D92E]'
                        : 'w-2.5 bg-gray-300'
                    }`}
                    aria-label={`Vai alla slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COSA PUOI REALIZZARE - Premium Enhanced */}
      <section className="min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{}}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
                Portfolio
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{}}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                letterSpacing: '-0.03em',
              }}
            >
              Cosa puoi realizzare
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{}}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Di seguito un&apos;idea di quello che siamo in grado di fare
            </motion.p>
          </div>

          {/* Grid - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                title: 'Cataloghi',
                image: '/images/banner_cat_magazines_01_d.jpg',
              },
              {
                title: 'Biglietti da visita',
                image: '/images/Artboard-1-1-scaled.png',
              },
              {
                title: 'Adesivi',
                image: '/images/Artboard-12-scaled.png',
              },
              { title: 'Flyer', image: '/images/Artboard-13-scaled.png' },
              {
                title: 'Progettazione grafica',
                image: '/images/Artboard-16-scaled.png',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: isMobile ? 0 : index * 0.05,
                }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={isMobile ? {} : { y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                >
                  <div className="relative h-72 rounded-3xl overflow-hidden mb-5 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-center text-gray-900 group-hover:text-[#C6D92E] transition-colors duration-300">
                    {item.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI NUMERATI - Clean & Uniform */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{}}
            className="text-center mb-12"
          >
            <span className="text-sm text-[#C6D92E] tracking-wider uppercase font-semibold mb-3 block">
              Altri Servizi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              e molto altro...
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Rilegatura',
              'Plastificazione',
              'Taglio',
              'Taglio plotter',
              'Nobilitazione',
              'Soft Touch',
              'Impaginazione',
              'Stampa dato variabile',
              'Prespaziati',
              'e molto altro...',
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: isMobile ? 0 : index * 0.03,
                }}
                viewport={{ once: true }}
                whileHover={isMobile ? {} : { y: -5 }}
                className="relative group"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:border-[#C6D92E] group-hover:shadow-lg group-hover:shadow-[#C6D92E]/10">
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#C6D92E] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-black font-bold text-xs">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <span className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-black transition-colors">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFSET O DIGITALE - Enhanced Premium Version */}
      <section className="min-h-screen flex items-center justify-center py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C6D92E] rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-black rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{}}
            >
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{}}
                className="flex items-center gap-3 mb-6"
              >
                <motion.div
                  className="h-px w-12 bg-gradient-to-r from-[#C6D92E] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{}}
                />
                <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
                  Tecnologie
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
                Stampa
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
                Offset <span className="text-[#C6D92E]">o</span> Digitale
              </h2>
              <h3 className="text-2xl font-bold text-[#C6D92E] mb-10">
                Quale stampa scegliere?
              </h3>

              {/* Options */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{}}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-[#C6D92E] rounded-full flex items-center justify-center text-black font-bold text-xl"
                    >
                      01
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#C6D92E] transition-colors">
                        Offset
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Particolarmente adatta per tirature medio/alte con
                        formati fino ad un massimale di (50×70 cm) consente una
                        maggiore varietà di scelta per quanto riguarda la gamma
                        di colori (PANTONE - RAL - TOYOINK).
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{}}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl"
                    >
                      02
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#C6D92E] transition-colors">
                        Digitale
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Consigliata per tirature medio/basse con formati fino ad
                        un massimale di (33×100 cm). Consente inoltre una
                        maggiore rapidità d&apos;esecuzione, la possibilità di
                        effettuare lavorazioni con dato variabile e la si può
                        applicare ad una più ampia varietà di supporti.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{}}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative h-[500px] bg-gradient-to-br from-[#C6D92E] via-[#B8C526] to-[#A8B01E] rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
              >
                {/* Animated pattern */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    backgroundSize: '200% 200%',
                  }}
                />

                {/* Text overlay with parallax */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-center"
                  >
                    <div className="text-white text-7xl md:text-8xl font-black opacity-20 mb-4">
                      PRINT
                    </div>
                    <div className="text-white/60 text-2xl font-semibold tracking-wider">
                      Excellence
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-10 right-10 w-20 h-20 border-4 border-white/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-16 h-16 border-4 border-white/20 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{}}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-6 -left-6 bg-black text-white px-8 py-4 rounded-full shadow-2xl"
              >
                <div className="text-sm font-semibold">Qualità FSC®</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FILOSOFIA - Premium Enhanced Version (Static on mobile) */}
      <section className="min-h-screen flex items-center justify-center py-16 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated background elements - Desktop only */}
        {!isMobile && (
          <motion.div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-[#C6D92E] to-[#B8C526] rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Content Side - Static on mobile */}
            <div>
              {/* Label */}
              <div className="flex items-center gap-3 mb-6">
                {!isMobile && (
                  <div className="h-px w-12 bg-gradient-to-r from-[#C6D92E] to-transparent" />
                )}
                <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
                  La Nostra Filosofia
                </span>
              </div>

              {/* Title words - Static */}
              <div className="mb-6 md:mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Stampa
                  <br className="md:hidden" /> Personalizzazione
                  <br className="md:hidden" /> Passione
                </h2>
              </div>

              {/* Description - Static text always */}
              <p className="text-lg md:text-2xl leading-relaxed text-gray-300">
                La nostra filosofia è quella di accompagnare il Cliente
                attraverso tutte le fasi del processo creativo partendo da una
                semplice bozza fino ad arrivare al mockup definitivo del
                prodotto.
              </p>
            </div>

            {/* Visual Side - Static on mobile for performance */}
            <div
              className={`grid ${
                isMobile ? 'grid-cols-2' : 'grid-cols-2'
              } gap-4 md:gap-6`}
            >
              {[
                {
                  gradient: 'from-[#C6D92E] to-[#B8C526]',
                  icon: '🎨',
                },
                {
                  gradient: 'from-gray-700 to-gray-900',
                  icon: '🖨️',
                },
                {
                  gradient: 'from-gray-800 to-black',
                  icon: '✨',
                },
                {
                  gradient: 'from-[#B8C526] to-[#A8B01E]',
                  icon: '📐',
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className={`relative h-36 md:h-48 ${
                    isMobile
                      ? card.gradient.replace(
                          'bg-gradient-to-br',
                          'bg-gradient-to-b'
                        )
                      : `bg-gradient-to-br ${card.gradient}`
                  } rounded-xl md:rounded-3xl shadow-md md:shadow-2xl overflow-hidden`}
                >
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl opacity-30">
                    {card.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS - Enhanced */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{}}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
                Partner
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{}}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.03em',
              }}
            >
              Il meglio per i tuoi progetti
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{}}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Collaboriamo con i migliori brand del settore
            </motion.p>
          </div>

          {/* Logos Grid */}
          <div className="flex justify-center items-center gap-16 md:gap-24 flex-wrap">
            {[
              {
                name: 'Ricoh',
                src: '/images/Ricoh_logo_2005.svg.png',
                width: 140,
                height: 50,
              },
              {
                name: 'Roland',
                src: '/images/Roland_Digital_Group_logo.svg.png',
                width: 140,
                height: 50,
              },
              {
                name: 'Adobe',
                src: '/images/Adobe_Corporate_Logo.png',
                width: 120,
                height: 50,
              },
              {
                name: '3M',
                src: '/images/3M_Logo.svg-1.png',
                width: 100,
                height: 50,
              },
            ].map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: isMobile ? 0 : index * 0.08,
                }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={isMobile ? {} : { scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-400"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Premium Enhanced Version */}
      <section className="min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements (static on mobile) */}
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-[#C6D92E] rounded-full blur-[120px] opacity-10"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-72 h-72 bg-black rounded-full blur-[120px] opacity-5"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -30, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </>
        )}

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{}}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
                Da Google
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{}}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.03em',
              }}
            >
              Cosa dicono di noi
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{}}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              La soddisfazione dei nostri clienti è la nostra priorità
            </motion.p>
          </div>

          {/* Testimonial Card - Simplified for mobile */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? -50 : -100 }}
                transition={{
                  duration: isMobile ? 0.3 : 0.5,
                  ease: 'easeInOut',
                }}
                drag={isMobile ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={(e, { offset, velocity }) => {
                  if (!isMobile) return
                  const swipe = offset.x * velocity.x
                  if (swipe > 5000) {
                    prevTestimonial()
                  } else if (swipe < -5000) {
                    nextTestimonial()
                  }
                }}
                className={`relative bg-white p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl ${
                  isMobile ? 'cursor-grab active:cursor-grabbing' : ''
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 text-[#C6D92E] opacity-20 text-7xl font-serif">
                  &ldquo;
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-6 md:mb-8">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <Image
                          src={testimonials[currentTestimonial].avatar}
                          alt={testimonials[currentTestimonial].name}
                          width={100}
                          height={100}
                          className="rounded-full shadow-2xl ring-4 ring-[#C6D92E]/30"
                          loading="lazy"
                        />
                        {/* Badge */}
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#C6D92E] rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            className="w-6 h-6 text-black"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                        &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                      </p>

                      <div>
                        <p className="font-bold text-lg md:text-xl text-gray-900">
                          {testimonials[currentTestimonial].name}
                        </p>
                        {/* Stars */}
                        <div className="flex gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-[#C6D92E]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-8 right-8 w-16 h-16 border-4 border-[#C6D92E] rounded-tl-3xl opacity-20" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation - Mobile Optimized */}
            <div className="flex justify-center items-center gap-4 md:gap-6 mt-8 md:mt-10">
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-colors duration-300 shadow-lg touch-manipulation active:scale-95"
                aria-label="Testimonial precedente"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>

              {/* Dots indicator - Larger on mobile */}
              <div className="flex gap-2.5 md:gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation active:scale-90 ${
                      index === currentTestimonial
                        ? 'w-10 md:w-12 bg-[#C6D92E]'
                        : 'w-3 md:w-3 bg-gray-300'
                    }`}
                    aria-label={`Vai al testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-colors duration-300 shadow-lg touch-manipulation active:scale-95"
                aria-label="Testimonial successivo"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </div>

            {/* Swipe indicator for mobile */}
            <div className="md:hidden text-center mt-6 text-sm text-gray-600 flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Scorri per cambiare
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-bold mb-4">I nostri orari</h3>
              <p className="text-gray-400">
                Lunedì - Venerdì: 8:00 - 12:00 | 13:00 - 17:00
              </p>
              <p className="text-gray-400">Sabato: Chiuso</p>
              <p className="text-gray-400">Domenica: Chiuso</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contatti</h3>
              <p className="text-gray-400">Via del Greto 5</p>
              <p className="text-gray-400">40132 Bologna</p>
              <p>
                <a
                  href="tel:051563660"
                  className="text-gray-400 hover:text-[#C6D92E] transition-colors"
                >
                  Tel: 051 563660
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@litocalegari.it"
                  className="text-gray-400 hover:text-[#C6D92E] transition-colors"
                >
                  Email: info@litocalegari.it
                </a>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Logo-LitoCalegari.png"
                  alt="Lito Calegari"
                  width={120}
                  height={40}
                  className="h-10 w-auto filter brightness-0 invert"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>Copyright © 2025 Lito Calegari. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
