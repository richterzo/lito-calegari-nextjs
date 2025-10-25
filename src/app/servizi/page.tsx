'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ServiziPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const servizi = [
    {
      title: 'Progettazione Grafica',
      description:
        'Diamo forma alle tue idee con creatività e competenza, realizzando progetti grafici dal forte impatto visivo.',
      link: '/progettazione-grafica',
      icon: 'G',
      color: 'from-blue-500 to-blue-600',
      features: [
        'Logo Design',
        'Brand Identity',
        'Materiali Promozionali',
        'Packaging Design',
      ],
    },
    {
      title: 'Stampa Digitale',
      description:
        'Ideale per tirature basse e personalizzazioni, offre rapidità di esecuzione e qualità eccellente.',
      link: '/stampa-digitale',
      icon: 'D',
      color: 'from-green-500 to-green-600',
      features: [
        'Stampa Rapida',
        'Personalizzazione',
        'Piccole Tirature',
        'Qualità Eccellente',
      ],
    },
    {
      title: 'Stampa Offset',
      description:
        'Particolarmente adatta per tirature medio/alte con formati fino a 50×70 cm e colori brillanti.',
      link: '/stampa-offset',
      icon: 'O',
      color: 'from-purple-500 to-purple-600',
      features: [
        'Tirature Medie/Alte',
        'Colori Pantone',
        'Formati Grandi',
        'Qualità Costante',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/Logo-LitoCalegari.png"
              alt="Lito Calegari Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-[#C6D92E] transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <span className="text-sm font-medium text-[#C6D92E] font-semibold flex items-center gap-1">
                Servizi
                <ChevronDown className="w-4 h-4" />
              </span>
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
            className="md:hidden p-2 text-gray-600 hover:text-[#C6D92E] transition-colors"
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
            className="bg-[#C6D92E] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#B8C526] transition-colors"
          >
            Preventivo
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

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              I nostri servizi
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dalla progettazione grafica alla stampa di alta qualità, offriamo
              soluzioni creative e su misura per valorizzare la tua
              comunicazione.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVIZI GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servizi.map((servizio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={servizio.link}>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-[#C6D92E] transition-all duration-300 h-full">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${servizio.color} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white text-2xl font-bold">
                        {servizio.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#C6D92E] transition-colors">
                      {servizio.title}
                    </h3>

                    <p className="text-gray-600 mb-6 text-center leading-relaxed">
                      {servizio.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {servizio.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-500"
                        >
                          <div className="w-2 h-2 bg-[#C6D92E] rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center justify-center text-[#C6D92E] font-semibold group-hover:text-[#B8C526] transition-colors">
                      Scopri di più
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hai un progetto in mente?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contattaci per un preventivo personalizzato e scopri come possiamo
              dare forma alle tue idee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C6D92E] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#B8C526] transition-colors flex items-center justify-center gap-2"
              >
                Richiedi Preventivo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-[#C6D92E] hover:text-[#C6D92E] transition-colors"
              >
                Contattaci
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Colonna 1: INFORMAZIONI */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
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
            </motion.div>

            {/* Colonna 2: CONTATTI */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">CONTATTI</h3>
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
            </motion.div>

            {/* Colonna 3: LOGO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-end"
            >
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
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 mt-12 text-center text-gray-500 text-sm">
            <p>Copyright © 2025 Lito Calegari. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ServiziPage
