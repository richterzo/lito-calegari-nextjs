'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ContattiPage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simula invio form
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    // Qui puoi aggiungere la logica per inviare il form
    console.log('Form submitted')
  }

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
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo-LitoCalegari.png"
              alt="Lito Calegari"
              width={120}
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
                  className="block px-4 py-3 text-sm text-gray-600 hover:text-[#C6D92E] hover:bg-gray-50 transition-colors rounded-lg mx-2 my-1"
                >
                  Stampa Offset
                </Link>
              </div>
            </div>
            <Link
              href="/contatti"
              className="text-sm font-medium text-[#C6D92E] font-semibold"
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
                      className="block text-lg font-semibold text-[#C6D92E] py-2"
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
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Siamo qui per te
            </h1>
            <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-2">
              <p>Hai un'idea da realizzare o una domanda da farci?</p>
              <p>Scrivici attraverso il form, saremo felici di ascoltarti.</p>
              <p>Insieme troveremo la soluzione migliore</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTATTI SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contattaci
              </h2>
              <div className="mb-8 text-gray-600">
                <p>Il tuo indirizzo mail non verrà pubblicati.</p>
                <p>I seguenti campi sono obbligatori</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6D92E] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Mail"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6D92E] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Richiesta"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6D92E] focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C6D92E] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B8C526] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    'INVIA'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* CONTATTI INFO */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Hai un'idea?
                  <br />
                  Diamole forma insieme.
                </h3>
                <p className="text-gray-600 mb-8">
                  Compila i campi che trovi a lato oppure vieni a trovarci
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#C6D92E] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Indirizzo</p>
                    <p className="text-gray-600">
                      Via del Greto 5, 40132 Bologna
                    </p>
                  </div>
                </motion.div>

                <motion.a
                  href="tel:+39051563660"
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#C6D92E] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefono</p>
                    <p className="text-gray-600">051 563660</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@litocalegari.it"
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#C6D92E] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@litocalegari.it</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAPPA SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dove trovarci
            </h2>
            <p className="text-gray-600">
              Siamo facilmente raggiungibili nel cuore di Bologna
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://maps.google.com/maps?q=Via%20del%20Greto%205%2C%2040132%2C%20Bologna&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
              title="Via del Greto 5, 40132, Bologna"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />

            {/* Overlay per effetto glass */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
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
                <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                <p>Sabato: 9:00 - 13:00</p>
                <p>Domenica: Chiuso</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Contatti</h3>
              <div className="space-y-2 text-gray-300">
                <p>Via del Greto 5</p>
                <p>40132 Bologna</p>
                <p>Tel: +39 051 563660</p>
                <p>Email: info@litocalegari.it</p>
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

export default ContattiPage
