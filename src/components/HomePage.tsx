'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'framer-motion'

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8])

  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const testimonials = [
    {
      name: 'Mario Photokitesurf',
      text: "Molto cordiali e disponibili, forniscono ottimi consigli per un risultato impeccabile dalla grafica superiore!!! ...anche oggi ne ho avuto dimostrazione... nonostante la richiesta dell'ultimo momento, ho avuto subito un nuovo logo (STUPENDO!!!) e le stampe che mi servivano.",
    },
    {
      name: 'Fabrizio P.',
      text: 'Gentilissimi e bravissimi! Mi sono rivolto a loro per stampare la mia tesi per la quale richiedevo un impaginazione in A4 orizzontale tipo rivista (non penso stampino tesi classiche) con molte immagini e colori. Sono estremamente soddisfatto del risultato e della qualità della stampa, super consigliati e con prezzi ottimi!',
    },
    {
      name: 'Patrick Pagliaro',
      text: "Super soddisfatto del servizio offerto per l'impaginazione del mio catalogo prima e la stampa dopo. Molto bravi nel gestire il progetto. La comunicazione è stata chiara. Il risultato finale ha superato le mie aspettative",
    },
    {
      name: 'Antonio Tricarico',
      text: 'Preparati e attenti al più piccolo dettaglio, mi hanno sempre proposto la soluzione migliore a fronte dei vincoli di tempi e costi. Consigliato ad occhi chiusi.',
    },
  ]

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
      {/* HEADER - From screenshot version */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo-LitoCalegari.png"
              alt="Lito Calegari"
              width={120}
              height={40}
              className="h-10 w-auto"
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
            PREVENTIVO
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
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
      </motion.header>

      {/* HERO SECTION - With parallax from old version */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background blur effects */}
        <motion.div
          style={{ y: springY, opacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#C6D92E]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#B8C526]/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm text-gray-500 mb-4 tracking-wider"
            >
              DOVE LE TUE IDEE PRENDONO FORMA
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-black mb-6"
            >
              Studio grafico e
              <br />
              stampa
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Dalla progettazione grafica alla stampa di alta qualità,
              <br />
              offriamo soluzioni creative e su misura per valorizzare la tua
              comunicazione
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* IMAGE GALLERY - Enhanced with animations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/Artboard-1-1-scaled.png',
              '/images/banner_cat_magazines_01_d.jpg',
              '/images/Artboard-13-scaled.png',
              '/images/Artboard-16-scaled.png',
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION SECTION - With hover effects */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#C6D92E]/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            Offriamo un'ampia gamma di soluzioni di stampa, dai{' '}
            <motion.span
              className="text-[#C6D92E] font-semibold cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
            >
              biglietti da visita
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6D92E]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.span>{' '}
            ai{' '}
            <motion.span
              className="text-[#C6D92E] font-semibold cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              cataloghi
            </motion.span>
            , dai{' '}
            <motion.span
              className="text-[#C6D92E] font-semibold cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              banner
            </motion.span>{' '}
            ai{' '}
            <motion.span
              className="text-[#C6D92E] font-semibold cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              materiali personalizzati
            </motion.span>
            , garantendo qualità, creatività e attenzione ai dettagli in ogni
            progetto.
          </motion.p>
        </div>
      </section>

      {/* VALUES SECTION - Enhanced with better animations */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#C6D92E] to-[#B8C526] rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center text-white text-xl sm:text-3xl font-bold shadow-2xl cursor-pointer"
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

      {/* SERVICES SECTION - With stagger animations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            I nostri servizi
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Grafica',
                description:
                  'Diamo forma alle tue idee con creatività e competenza.',
                icon: '🎨',
              },
              {
                title: 'Stampa',
                description:
                  'Macchinari di ultima generazione e materiali certificati FSC®.',
                icon: '🖨️',
              },
              {
                title: 'Finitura',
                description:
                  'Rendiamo ogni lavoro unico grazie a finiture di pregio.',
                icon: '✨',
              },
              {
                title: 'Extra',
                description:
                  'Superiamo i limiti con supporti innovativi e di prestigio.',
                icon: '🚀',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, shadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#C6D92E]/20"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COSA PUOI REALIZZARE - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Cosa puoi realizzare
          </motion.h2>
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
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold text-center group-hover:text-[#C6D92E] transition-colors">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI NUMERATI */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">e molto altro...</h2>
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
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-full h-32 rounded-full border-2 border-gray-300 flex flex-col items-center justify-center hover:border-[#C6D92E] hover:bg-[#C6D92E]/5 transition-all cursor-pointer"
              >
                <span className="text-xl font-bold text-[#C6D92E]">
                  {index + 1}
                </span>
                <span className="text-xs text-center px-2 mt-1">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFSET O DIGITALE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Offset <span className="text-gray-400">o</span> Digitale
              </h2>
              <h3 className="text-2xl font-bold text-[#C6D92E] mb-6">
                Quale stampa scegliere?
              </h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold mb-2">Offset</h4>
                  <p className="text-gray-600">
                    Particolarmente adatta per tirature medio/alte con formati
                    fino ad un massimale di (50×70 cm) consente una maggiore
                    varietà di scelta per quanto riguarda la gamma di colori
                    (PANTONE - RAL - TOYOINK).
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold mb-2">Digitale</h4>
                  <p className="text-gray-600">
                    Ideale per tirature limitate e stampe personalizzate con
                    tempi di consegna rapidi.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-96 bg-gradient-to-br from-[#C6D92E] to-[#B8C526] rounded-2xl shadow-2xl relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FILOSOFIA - Enhanced with parallax */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: springY }}
        >
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#C6D92E] mb-4 font-semibold tracking-wider">
                LA NOSTRA FILOSOFIA
              </p>
              <p className="text-xl md:text-2xl leading-relaxed">
                La nostra filosofia è quella di accompagnare il Cliente
                attraverso tutte le fasi del processo creativo partendo da una
                semplice bozza fino ad arrivare al mockup definitivo del
                prodotto.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="h-48 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Il meglio per i tuoi progetti
          </motion.h2>
          <div className="flex justify-center items-center gap-12 md:gap-16 flex-wrap">
            {[
              { name: 'Ricoh', src: '/images/Ricoh_logo_2005.svg.png', width: 120, height: 40 },
              { name: 'Mastercard', src: '/images/9439727-scaled-254x254.jpg', width: 80, height: 80 },
              { name: 'Adobe', src: '/images/Adobe_Corporate_Logo.png', width: 100, height: 40 },
              { name: '3M', src: '/images/9439678-scaled-254x254.jpg', width: 80, height: 80 },
            ].map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Enhanced carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#C6D92E] text-sm text-center mb-2 font-semibold tracking-wider">
            DA GOOGLE
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Cosa dicono di noi
          </motion.h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              >
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="font-bold text-[#C6D92E] text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-colors shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-colors shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
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
