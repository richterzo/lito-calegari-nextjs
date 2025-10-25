'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ProgettazioneGraficaPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/Logo-LitoCalegari.png"
              alt="Lito Calegari Logo"
              width={150}
              height={40}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-[#C6D92E] transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <Link
                href="/servizi"
                className="text-sm font-medium text-gray-600 hover:text-[#C6D92E] transition-colors flex items-center gap-1"
              >
                Servizi
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="/progettazione-grafica"
                  className="block px-4 py-3 text-sm text-[#C6D92E] hover:bg-gray-50 transition-colors rounded-lg mx-2 my-1 font-semibold"
                >
                  Progettazione Grafica
                </Link>
                <Link
                  href="/stampa-digitale"
                  className="block px-4 py-3 text-sm text-gray-600 hover:text-[#C6D92E] hover:bg-gray-50 transition-colors rounded-lg mx-2 my-1"
                >
                  Stampa Digitale
                </Link>
                <Link
                  href="/stampa-offset"
                  className="block px-4 py-3 text-sm text-gray-600 hover:text-[#C6D92E] hover:bg-gray-50 transition-colors rounded-lg mx-2 my-1"
                >
                  Stampa Offset
                </Link>
              </div>
            </div>
            <Link
              href="/contatti"
              className="text-sm font-medium text-gray-600 hover:text-[#C6D92E] transition-colors"
            >
              Contatti
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
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
            className="hidden md:block bg-[#C6D92E] text-black px-4 lg:px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#B8C526] transition-colors"
          >
            CONTATTACI
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu - Perfect */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
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
                        className="block text-base text-[#C6D92E] font-semibold py-2 pl-4 border-l-2 border-[#C6D92E] bg-gray-50 rounded-r-lg"
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

                <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#C6D92E] text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-[#B8C526] transition-colors shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CONTATTACI
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

      {/* HERO SECTION */}
      <section className="pt-20 sm:pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Progettazione grafica
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Disegniamo la tua Comunicazione, Pixel dopo Pixel
            </h2>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              La progettazione grafica è il punto di partenza di ogni prodotto
              per una comunicazione efficace. Non si tratta soltanto di "mettere
              in bella" un'idea, ma di interpretarla, svilupparla e trasformarla
              in un linguaggio visivo coerente, capace di parlare direttamente
              al pubblico a cui è destinata.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-12">
              Nel nostro reparto grafico, ascoltiamo con attenzione le tue
              esigenze per comprenderne obiettivi, target e messaggio,
              trasformando ogni informazione in un progetto visivo
              personalizzato. Crediamo che la grafica non sia un elemento
              accessorio, ma il cuore di un prodotto di qualità: il design
              definisce il tono della comunicazione, trasmette la tua identità e
              contribuisce in maniera decisiva all'efficacia del messaggio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CREATIVITÀ SECTION */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Creatività senza limiti
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                Per la progettazione grafica ci affidiamo ai software
                professionali della suite <strong>Adobe Creative Cloud</strong>,
                come <strong>Photoshop, Illustrator</strong> e{' '}
                <strong>InDesign</strong>, strumenti che ci permettono di
                lavorare con la massima precisione e creatività.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                L'utilizzo di queste piattaforme garantisce qualità,
                flessibilità e risultati sempre in linea con gli standard più
                elevati del settore.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/scraped/progettazione-grafica_Artboard-51-scaled.png"
                  alt="Progettazione Grafica"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              La nostra firma digitale
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Le nostre capacità crescono con ogni progetto, permettendoci di
              offrire soluzioni grafiche sempre innovative ed efficaci.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Photoshop', percentage: 95 },
              { name: 'InDesign', percentage: 90 },
              { name: 'Illustrator', percentage: 92 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#C6D92E] to-[#B8C526] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg">
                  {skill.percentage}%
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  {skill.name}
                </h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#C6D92E] to-[#B8C526] h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Pronto a dare forma alle tue idee?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              Contattaci per un preventivo personalizzato e scopri come possiamo
              trasformare la tua visione in un progetto grafico di successo.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C6D92E] text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#B8C526] transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Richiedi Preventivo
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                INFORMAZIONI
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-[#C6D92E] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servizi"
                    className="text-gray-400 hover:text-[#C6D92E] transition-colors"
                  >
                    Servizi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contatti"
                    className="text-gray-400 hover:text-[#C6D92E] transition-colors"
                  >
                    Contatti
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                CONTATTI
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>Via del Greto 5, 40132 Bologna</li>
                <li>
                  <a
                    href="tel:+39051563660"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    051 563660
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@litocalegari.it"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    info@litocalegari.it
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#C6D92E] to-[#B8C526] rounded-full flex items-center justify-center text-white text-3xl sm:text-5xl font-bold shadow-lg"
              >
                LC
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

export default ProgettazioneGraficaPage
