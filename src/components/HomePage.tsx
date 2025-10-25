'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowRight, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Mario Photokitesurf',
      text: 'Molto cordiali e disponibili, forniscono ottimi consigli per un risultato impeccabile dalla grafica superiore!!! ...anche oggi ne ho avuto dimostrazione... nonostante la richiesta dell\'ultimo momento, ho avuto subito un nuovo logo (STUPENDO!!!) e le stampe che mi servivano.',
    },
    {
      name: 'Fabrizio P.',
      text: 'Gentilissimi e bravissimi! Mi sono rivolto a loro per stampare la mia tesi per la quale richiedevo un impaginazione in A4 orizzontale tipo rivista (non penso stampino tesi classiche) con molte immagini e colori. Sono estremamente soddisfatto del risultato e della qualità della stampa, super consigliati e con prezzi ottimi!',
    },
    {
      name: 'Patrick Pagliaro',
      text: 'Super soddisfatto del servizio offerto per l\'impaginazione del mio catalogo prima e la stampa dopo. Molto bravi nel gestire il progetto. La comunicazione è stata chiara. Il risultato finale ha superato le mie aspettative',
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
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
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
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#C6D92E] transition-colors">
              HOME
            </Link>
            <div className="relative group">
              <Link href="/servizi" className="text-sm font-medium text-gray-700 hover:text-[#C6D92E] transition-colors flex items-center gap-1">
                SERVIZI
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/progettazione-grafica" className="block px-4 py-3 text-sm text-gray-700 hover:text-[#C6D92E] hover:bg-gray-50 transition-colors">
                  Progettazione Grafica
                </Link>
                <Link href="/stampa-digitale" className="block px-4 py-3 text-sm text-gray-700 hover:text-[#C6D92E] hover:bg-gray-50 transition-colors">
                  Stampa Digitale
                </Link>
                <Link href="/stampa-offset" className="block px-4 py-3 text-sm text-gray-700 hover:text-[#C6D92E] hover:bg-gray-50 transition-colors">
                  Stampa Offset
                </Link>
              </div>
            </div>
            <Link href="/contatti" className="text-sm font-medium text-gray-700 hover:text-[#C6D92E] transition-colors">
              CONTATTI
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="/contatti" className="hidden md:block bg-[#C6D92E] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#B8C526] transition-colors">
            PREVENTIVO
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                <Link href="/" className="block text-gray-700 hover:text-[#C6D92E]">HOME</Link>
                <Link href="/servizi" className="block text-gray-700 hover:text-[#C6D92E]">SERVIZI</Link>
                <Link href="/contatti" className="block text-gray-700 hover:text-[#C6D92E]">CONTATTI</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-gray-500 mb-4 tracking-wider">DOVE LE TUE IDEE PRENDONO FORMA</p>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              Studio grafico e<br />stampa
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dalla progettazione grafica alla stampa di alta qualità,<br />
              offriamo soluzioni creative e su misura per valorizzare la tua comunicazione
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Offriamo un'ampia gamma di soluzioni di stampa, dai{' '}
            <span className="text-[#C6D92E] font-semibold">biglietti da visita</span> ai{' '}
            <span className="text-[#C6D92E] font-semibold">cataloghi</span>, dai{' '}
            <span className="text-[#C6D92E] font-semibold">banner</span> ai{' '}
            <span className="text-[#C6D92E] font-semibold">materiali personalizzati</span>, garantendo
            qualità, creatività e attenzione ai dettagli in ogni progetto.
          </p>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: '🎯',
                title: 'Qualità',
                description: 'Per i tuoi progetti utilizziamo solo materiali di alta qualità.',
              },
              {
                icon: '🎨',
                title: 'Personalizzazione',
                description: 'Ogni prodotto è realizzato su misura, curando ogni dettaglio.',
              },
              {
                icon: '⚡',
                title: 'Rapidità',
                description: 'Dal progetto alla consegna, garantiamo tempi rapidi.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">I nostri servizi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Grafica',
                description: 'Diamo forma alle tue idee con creatività e competenza.',
                icon: '🎨',
              },
              {
                title: 'Stampa',
                description: 'Macchinari di ultima generazione e materiali certificati FSC®.',
                icon: '🖨️',
              },
              {
                title: 'Finitura',
                description: 'Rendiamo ogni lavoro unico grazie a finiture di pregio.',
                icon: '✨',
              },
              {
                title: 'Extra',
                description: 'Superiamo i limiti con supporti innovativi e di prestigio.',
                icon: '🚀',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COSA PUOI REALIZZARE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Cosa puoi realizzare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Cataloghi', image: '/images/banner_cat_magazines_01_d.jpg' },
              { title: 'Biglietti da visita', image: '/images/Artboard-1-1-scaled.png' },
              { title: 'Flyer', image: '/images/Artboard-13-scaled.png' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E MOLTO ALTRO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">e molto altro...</h2>
          <div className="flex justify-center gap-8">
            {['Taglio', 'Plastificazione', 'Rilegatura'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#C6D92E] transition-colors"
              >
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFSET O DIGITALE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Offset <span className="text-gray-400">o</span> Digitale
              </h2>
              <h3 className="text-2xl font-bold text-[#C6D92E] mb-6">Quale stampa scegliere?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">Offset</h4>
                  <p className="text-gray-600">
                    Particolarmente adatta per tirature medio/alte con formati fino ad un massimale di
                    (50×70 cm) consente una maggiore varietà di scelta per quanto riguarda la gamma di
                    colori (PANTONE - RAL - TOYOINK).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Digitale</h4>
                  <p className="text-gray-600">
                    Ideale per tirature limitate e stampe personalizzate con tempi di consegna rapidi.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#C6D92E] rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C6D92E] mb-4">LA NOSTRA FILOSOFIA</p>
              <p className="text-xl leading-relaxed">
                La nostra filosofia è quella di accompagnare il Cliente attraverso tutte le fasi del
                processo creativo partendo da una semplice bozza fino ad arrivare al mockup definitivo
                del prodotto.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl"></div>
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Il meglio per i tuoi progetti</h2>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            <div className="text-2xl font-bold text-gray-400">RICOH</div>
            <div className="text-2xl font-bold text-gray-400">mastercard</div>
            <div className="text-2xl font-bold text-gray-400">Adobe</div>
            <div className="text-2xl font-bold text-gray-400">3M</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#C6D92E] text-sm text-center mb-2">DA GOOGLE</p>
          <h2 className="text-4xl font-bold text-center mb-12">Cosa dicono di noi</h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <p className="text-gray-700 mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
                <p className="font-bold text-[#C6D92E]">{testimonials[currentTestimonial].name}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
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
              <p className="text-gray-400">Lunedì - Venerdì: 8:00 - 12:00 | 13:00 - 17:00</p>
              <p className="text-gray-400">Sabato: Chiuso</p>
              <p className="text-gray-400">Domenica: Chiuso</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contatti</h3>
              <p className="text-gray-400">Via del Greto 5</p>
              <p className="text-gray-400">40132 Bologna</p>
              <p className="text-gray-400">Tel: 051 563660</p>
              <p className="text-gray-400">Email: info@litocalegari.it</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/Logo-LitoCalegari.png"
                alt="Lito Calegari"
                width={120}
                height={40}
                className="h-10 w-auto filter brightness-0 invert"
              />
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
