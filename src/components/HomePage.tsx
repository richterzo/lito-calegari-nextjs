'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  AnimatePresence,
} from 'framer-motion'

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Simple parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  // Smooth spring animations
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-hidden"
    >
      {/* HEADER */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo-LitoCalegari.png"
              alt="Lito Calegari"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <Link
                href="/servizi"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1"
              >
                Servizi
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="/progettazione-grafica"
                  className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors rounded-lg mx-2 my-1"
                >
                  Progettazione Grafica
                </Link>
                <Link
                  href="/stampa-digitale"
                  className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors rounded-lg mx-2 my-1"
                >
                  Stampa Digitale
                </Link>
                <Link
                  href="/stampa-offset"
                  className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors rounded-lg mx-2 my-1"
                >
                  Stampa Offset
                </Link>
              </div>
            </div>
            <Link
              href="/contatti"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Contatti
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-[#C6D92E] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#B8C526] transition-colors"
          >
            Preventivo
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu - Perfect */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-gray-50">
                  <Image
                    src="/images/Logo-LitoCalegari.png"
                    alt="Lito Calegari Logo"
                    width={120}
                    height={32}
                    className="h-7 sm:h-8 w-auto"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-200"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.button>
                </div>

                {/* Navigation */}
                <div className="flex-1 px-4 sm:px-6 py-6 sm:py-8 space-y-6 overflow-y-auto">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href="/"
                      className="block text-lg font-semibold text-gray-900 hover:text-[#C6D92E] transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Servizi
                    </p>
                    <div className="space-y-2">
                      <Link
                        href="/progettazione-grafica"
                        className="block text-base text-gray-700 hover:text-[#C6D92E] transition-colors py-2 pl-4 border-l-2 border-transparent hover:border-[#C6D92E] hover:bg-gray-50 rounded-r-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Progettazione Grafica
                      </Link>
                      <Link
                        href="/stampa-digitale"
                        className="block text-base text-gray-700 hover:text-[#C6D92E] transition-colors py-2 pl-4 border-l-2 border-transparent hover:border-[#C6D92E] hover:bg-gray-50 rounded-r-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Stampa Digitale
                      </Link>
                      <Link
                        href="/stampa-offset"
                        className="block text-base text-gray-700 hover:text-[#C6D92E] transition-colors py-2 pl-4 border-l-2 border-transparent hover:border-[#C6D92E] hover:bg-gray-50 rounded-r-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Stampa Offset
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/contatti"
                      className="block text-lg font-semibold text-gray-900 hover:text-[#C6D92E] transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contatti
                    </Link>
                  </motion.div>
                </div>

                {/* Footer */}
                <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#C6D92E] text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-[#B8C526] transition-colors shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Richiedi Preventivo
                  </motion.button>

                  <div className="mt-4 text-center text-xs sm:text-sm text-gray-500 space-y-1">
                    <p>Via del Greto 5, 40132 Bologna</p>
                    <p>
                      <a
                        href="tel:+39051563660"
                        className="hover:text-[#C6D92E] transition-colors"
                      >
                        051 563660
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO SECTION - Mobile First */}
      <section
        ref={heroRef}
        className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900"
      >
        {/* Subtle parallax background */}
        <motion.div
          style={{ y: springY }}
          className="absolute inset-0 opacity-30"
        >
          <div className="w-full h-[120vh] bg-gradient-to-br from-[#C6D92E]/10 to-transparent"></div>
        </motion.div>

        {/* Main content - Mobile First */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 sm:mb-8 text-[#C6D92E] font-medium"
          >
            Studio grafico e stampa
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 leading-[0.9] tracking-tight text-white"
          >
            Dove le tue idee
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gradient-enhanced block"
            >
              prendono forma
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto font-light px-4"
          >
            Dalla progettazione grafica alla stampa di alta qualità, offriamo
            soluzioni creative e su misura per valorizzare la tua comunicazione.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(198, 217, 46, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#C6D92E] text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#B8C526] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Richiedi Preventivo
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border border-white/30 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:border-[#C6D92E] hover:text-[#C6D92E] transition-all duration-300"
            >
              Scopri i Servizi
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* CAROSELLO IMMAGINI */}
      <section className="py-16 sm:py-24 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              I nostri lavori
            </h2>
            <p className="text-xl text-gray-600">
              Scopri alcuni dei nostri progetti più recenti
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                'Artboard-1-1-scaled.png',
                'Artboard-13-scaled.png',
                'banner_cat_magazines_01_d.jpg',
                'unsplash-design-1.jpg',
                'unsplash-print-1.jpg',
                'Artboard-15-scaled.png',
                'Artboard-16-scaled.png',
                'unsplash-branding-1.jpg',
                'Artboard-4-scaled.png',
                'Artboard-7-scaled.png',
                'unsplash-packaging-1.jpg',
                'Artboard-8-1-scaled.png',
                'Artboard-12-scaled.png',
                'unsplash-typography-1.jpg',
                'Artboard-1-scaled.png',
                'Artboard-10.png',
                'Artboard-9-1.png',
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="relative w-80 h-60 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={`/images/${image}`}
                      alt={`Progetto ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    >
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-xl font-semibold">
                          Progetto {index + 1}
                        </h3>
                        <p className="text-sm opacity-90">Scopri di più</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* SEZIONE DESCRIZIONE */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl leading-relaxed font-light text-gray-800"
          >
            Offriamo un'ampia gamma di soluzioni di stampa, dai{' '}
            <motion.span
              className="highlight-brand"
              whileHover={{ scale: 1.05 }}
            >
              biglietti da visita
            </motion.span>{' '}
            ai{' '}
            <motion.span
              className="highlight-brand"
              whileHover={{ scale: 1.05 }}
            >
              cataloghi
            </motion.span>
            , dai{' '}
            <motion.span
              className="highlight-brand"
              whileHover={{ scale: 1.05 }}
            >
              banner
            </motion.span>{' '}
            ai{' '}
            <motion.span
              className="highlight-brand"
              whileHover={{ scale: 1.05 }}
            >
              materiali personalizzati
            </motion.span>
            , garantendo qualità, creatività e attenzione ai dettagli in ogni
            progetto.
          </motion.p>
        </div>
      </section>

      {/* SEZIONE VALORI */}
      <section className="py-16 sm:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#C6D92E] to-[#B8C526] rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center text-white text-xl sm:text-3xl font-bold shadow-2xl"
                >
                  {item.number}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 group-hover:text-[#C6D92E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* COSA PUOI REALIZZARE */}
      <section className="py-16 sm:py-24 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cosa puoi realizzare
            </h2>
            <p className="text-xl text-gray-600">
              Di seguito un'idea di quello che siamo in grado di fare
            </p>
          </motion.div>

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
              {
                title: 'Flyer',
                image: '/images/Artboard-13-scaled.png',
              },
              {
                title: 'Progettazione grafica',
                image: '/images/Artboard-16-scaled.png',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[#C6D92E] group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI NUMERATI */}
      <section className="py-16 sm:py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              I nostri servizi
            </h2>
            <p className="text-xl text-gray-600">
              Tutto quello che possiamo fare per te
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow hover:bg-[#C6D92E] hover:text-black group"
              >
                <div className="text-2xl font-bold mb-2 text-[#C6D92E] group-hover:text-black">
                  {index + 1}
                </div>
                <p className="text-sm font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STAMPA OFFSET O DIGITALE */}
      <section className="py-16 sm:py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stampa Offset o Digitale
            </h2>
            <p className="text-xl text-gray-600">Quale stampa scegliere?</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#C6D92E]">Offset</h3>
              <p className="text-gray-600">
                Particolarmente adatta per tirature medio/alte con formati fino
                ad un massimale di (50×70 cm) consente una maggiore varietà di
                scelta per quanto riguarda la gamma di colori (PANTONE - RAL -
                TOYOINK) e l'utilizzo d'inchiostri certificati per il settore
                alimentare. In tal modo è possibile ottenere colori brillanti e
                uniformi dalla prima all'ultima copia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#C6D92E]">
                Digitale
              </h3>
              <p className="text-gray-600">StampaPersonalizzazionePassione</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section className="py-16 sm:py-24 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              La nostra filosofia
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Il meglio per i tuoi progetti
            </p>
            <p className="text-lg text-gray-700">
              La nostra filosofia è quella di accompagnare il Cliente attraverso
              tutte le fasi del processo creativo partendo da una semplice bozza
              fino ad arrivare al mockup definitivo del prodotto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cosa dicono di noi
            </h2>
            <p className="text-xl text-gray-600">Da Google</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Mario Photokitesurf',
                text: "Molto cordiali e disponibili, forniscono ottimi consigli per un risultato impeccabile dalla grafica superiore!!! ...anche oggi ne ho avuto dimostrazione... nonostante la richiesta dell'ultimo momento, ho avuto subito un nuovo logo (STUPENDO!!!) e le stampe che mi servivano.",
              },
              {
                name: 'Fabrizio P.',
                text: 'Gentilissimi e bravissimi! Mi sono rivolto a loro per stampare la mia tesi per la quale richiedevo un impaginazione in A4 orizzontale tipo rivista (non penso stampino tesi classiche) con molte immagini e colori. Sono estremamente soddisfatto del risultato e della qualità della stampa, super consigliati e con prezzi ottimi! Se avrò di nuovo bisogno di lavori grafici di qualità so a chi rivolgermi, grazie ancora',
              },
              {
                name: 'Patrick Pagliaro',
                text: "Super soddisfatto del servizio offerto per l'impaginazione del mio catalogo prima e la stampa dopo. Molto bravi nel gestire il progetto. La comunicazione è stata chiara. Il risultato finale ha superato le mie aspettative",
              },
              {
                name: 'Antonio Tricarico',
                text: 'Preparati e attenti al più piccolo dettaglio, mi hanno sempre proposto la soluzione migliore a fronte dei vincoli di tempi e costi. Consigliato ad occhi chiusi.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-bold text-[#C6D92E]">
                  {testimonial.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ORARI E CONTATTI */}
      <section className="py-16 sm:py-24 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              I nostri orari
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Orari */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-[#C6D92E]">
                  Orari di apertura
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Lunedì - Venerdì</span>
                    <span className="text-gray-600">
                      8:00 - 12:00 | 13:00 - 17:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sabato</span>
                    <span className="text-gray-600">Chiuso</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Domenica</span>
                    <span className="text-gray-600">Chiuso</span>
                  </div>
                </div>
              </motion.div>

              {/* Contatti */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-[#C6D92E]">
                  Contatti
                </h3>
                <div className="space-y-4 text-left">
                  <div>
                    <p className="text-lg font-medium mb-2">Indirizzo</p>
                    <p className="text-gray-600">Via del Greto 5</p>
                    <p className="text-gray-600">40132 Bologna</p>
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-2">Telefono</p>
                    <a
                      href="tel:051563660"
                      className="text-[#C6D92E] hover:text-[#B8C526] transition-colors"
                    >
                      051 563660
                    </a>
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-2">Email</p>
                    <a
                      href="mailto:info@litocalegari.it"
                      className="text-[#C6D92E] hover:text-[#B8C526] transition-colors"
                    >
                      info@litocalegari.it
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">I nostri orari</h3>
              <div className="space-y-2 text-gray-300">
                <p>Lunedì - Venerdì: 8:00 - 12:00 | 13:00 - 17:00</p>
                <p>Sabato: Chiuso</p>
                <p>Domenica: Chiuso</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Contatti</h3>
              <div className="space-y-2 text-gray-300">
                <p>Via del Greto 5</p>
                <p>40132 Bologna</p>
                <p>
                  <a
                    href="tel:051563660"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    Tel: 051 563660
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@litocalegari.it"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    Email: info@litocalegari.it
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="/images/Logo-LitoCalegari.png"
                  alt="Lito Calegari Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto filter brightness-0 invert"
                />
              </motion.div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              Copyright © 2025 Lito Calegari. All Rights Reserved.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 text-[#C6D92E] hover:text-white transition-colors text-sm"
            >
              TORNA SU
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
