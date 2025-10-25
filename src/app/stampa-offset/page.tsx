'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const StampaOffsetPage = () => {
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
                  className="block px-4 py-3 text-sm text-gray-600 hover:text-[#C6D92E] hover:bg-gray-50 transition-colors rounded-lg mx-2 my-1"
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
                  className="block px-4 py-3 text-sm text-[#C6D92E] hover:bg-gray-50 transition-colors rounded-lg mx-2 my-1 font-semibold"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <Image
                    src="/images/Logo-LitoCalegari.png"
                    alt="Lito Calegari Logo"
                    width={120}
                    height={32}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 px-6 py-8 space-y-6">
                  <Link
                    href="/"
                    className="block text-lg font-semibold text-gray-900 hover:text-[#C6D92E] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Servizi
                    </p>
                    <div className="space-y-3">
                      <Link
                        href="/progettazione-grafica"
                        className="block text-base text-gray-700 hover:text-[#C6D92E] transition-colors py-2 border-l-2 border-transparent hover:border-[#C6D92E] pl-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Progettazione Grafica
                      </Link>
                      <Link
                        href="/stampa-digitale"
                        className="block text-base text-gray-700 hover:text-[#C6D92E] transition-colors py-2 border-l-2 border-transparent hover:border-[#C6D92E] pl-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Stampa Digitale
                      </Link>
                      <Link
                        href="/stampa-offset"
                        className="block text-base text-[#C6D92E] font-semibold py-2 border-l-2 border-[#C6D92E] pl-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Stampa Offset
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/contatti"
                    className="block text-lg font-semibold text-gray-900 hover:text-[#C6D92E] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contatti
                  </Link>
                </div>

                <div className="p-6 border-t border-gray-200">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#C6D92E] text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-[#B8C526] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CONTATTACI
                  </motion.button>
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
              Perfetti ogni volta
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
              La stampa offset rappresenta la soluzione ideale per chi cerca
              qualità elevata e convenienza nelle medie e grandi tirature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                È la tecnica tradizionale che garantisce colori brillanti,
                dettagli nitidi e una resa cromatica costante, perfetta per
                progetti di comunicazione istituzionale o promozionale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
              className="relative"
            >
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <Image
                  src="/images/scraped/stampa-offset_Artboard-56-scaled.jpg"
                  alt="Stampa Offset"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                  quality={85}
                />
              </div>
            </motion.div>
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Grazie alla tecnologia offset, ogni stampa mantiene uniformità e
                precisione, anche su quantità molto elevate. Questo consente di
                ottenere cataloghi, riviste, brochure, libri e materiali
                promozionali sempre coerenti e con una resa impeccabile.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
              className="bg-gray-50 p-8 sm:p-12 rounded-2xl"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center leading-tight">
                Stampa • Personalizzazione • Passione
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                Ogni pagina mantiene la stessa intensità, lo stesso colore, la
                stessa perfezione. Un alleato insostituibile per raccontare la
                tua storia con riviste, libri e cataloghi che lasciano il segno.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perché scegliere la stampa offset
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              La stampa offset offre vantaggi unici per progetti di grande
              qualità e tirature elevate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Qualità Superiore',
                description:
                  "Colori brillanti e uniformi dalla prima all'ultima copia, con dettagli nitidi e precisione cromatica costante.",
                icon: '🎨',
              },
              {
                title: 'Tirature Elevate',
                description:
                  'Ideale per grandi quantità dove i costi di avviamento si ammortizzano e il prezzo unitario diventa competitivo.',
                icon: '📚',
              },
              {
                title: 'Supporti Diversi',
                description:
                  'Formati fino a 50×70 cm con ampia gamma di colori PANTONE, RAL e TOYOINK per ogni esigenza.',
                icon: '📄',
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false, margin: "-100px" }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-4xl sm:text-5xl mb-4">
                  {advantage.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h4>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {advantage.description}
                </p>
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
              Pronto per la stampa offset?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              Contattaci per un preventivo personalizzato e scopri come possiamo
              realizzare i tuoi progetti con la massima qualità e precisione.
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

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>Copyright © 2025 Lito Calegari. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default StampaOffsetPage
