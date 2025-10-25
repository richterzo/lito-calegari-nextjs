'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowLeft, CheckCircle } from 'lucide-react'

const ProgettazioneGraficaPage = () => {
  const refs = {
    hero: useRef(null),
    services: useRef(null),
    process: useRef(null),
    portfolio: useRef(null),
    cta: useRef(null),
  }

  const isInView = (ref: any) =>
    useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: '🎨',
      title: 'Logo Design',
      description:
        'Creazione di loghi unici e memorabili che rappresentano perfettamente la tua identità aziendale.',
      features: [
        'Ricerca e analisi',
        'Concept creativi',
        'Varianti multiple',
        'File vettoriali',
      ],
    },
    {
      icon: '📄',
      title: 'Materiali Promozionali',
      description:
        "Biglietti da visita, volantini, brochure e cataloghi che catturano l'attenzione.",
      features: [
        'Layout personalizzato',
        'Tipografia professionale',
        'Gestione colori',
        'Stampa ready',
      ],
    },
    {
      icon: '🖼️',
      title: 'Brand Identity',
      description:
        "Sviluppo completo dell'identità visiva della tua azienda con linee guida dettagliate.",
      features: [
        'Manuale brand',
        'Palette colori',
        'Font corporate',
        'Applicazioni',
      ],
    },
    {
      icon: '📱',
      title: 'Digital Design',
      description:
        'Interfacce web, social media graphics e materiali digitali per la tua presenza online.',
      features: [
        'UI/UX Design',
        'Social media kit',
        'Banner web',
        'Responsive design',
      ],
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Briefing',
      description:
        'Analizziamo le tue esigenze e obiettivi per comprendere perfettamente il progetto.',
    },
    {
      step: '02',
      title: 'Concept',
      description:
        'Sviluppiamo idee creative e proposte iniziali basate sulla tua visione.',
    },
    {
      step: '03',
      title: 'Sviluppo',
      description:
        'Realizziamo il design finale con attenzione ai dettagli e alla qualità.',
    },
    {
      step: '04',
      title: 'Consegna',
      description:
        "Forniamo tutti i file necessari per la stampa e l'utilizzo digitale.",
    },
  ]

  const portfolioItems = [
    {
      src: 'Artboard-1-scaled.png',
      title: 'Logo Aziendale',
      category: 'Brand Identity',
    },
    {
      src: 'Artboard-7-scaled.png',
      title: 'Catalogo Prodotto',
      category: 'Editoriale',
    },
    {
      src: 'Artboard-8-1-scaled.png',
      title: 'Biglietti da Visita',
      category: 'Corporate',
    },
    {
      src: 'Artboard-4-scaled.png',
      title: 'Volantino Promozionale',
      category: 'Marketing',
    },
    {
      src: 'Artboard-12-scaled.png',
      title: 'Poster Evento',
      category: 'Eventi',
    },
    {
      src: 'Artboard-13-scaled.png',
      title: 'Packaging Design',
      category: 'Prodotto',
    },
    {
      src: 'Artboard-15-scaled.png',
      title: 'Brochure Aziendale',
      category: 'Corporate',
    },
    {
      src: 'Artboard-16-scaled.png',
      title: 'Manifesto Pubblicitario',
      category: 'Advertising',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="h-20 fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/Logo-LitoCalegari.png"
                alt="Lito Calegari"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-sm font-medium uppercase tracking-wide text-gray-900 hover:text-[#C6D92E] transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium uppercase tracking-wide text-gray-900 hover:text-[#C6D92E] transition-colors flex items-center gap-1">
                Servizi
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    href="/progettazione-grafica"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C6D92E] transition-colors bg-[#C6D92E]/10"
                  >
                    Progettazione Grafica
                  </Link>
                  <Link
                    href="/stampa-digitale"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C6D92E] transition-colors"
                  >
                    Stampa Digitale
                  </Link>
                  <Link
                    href="/stampa-offset"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C6D92E] transition-colors"
                  >
                    Stampa Offset
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/#contatti"
              className="text-sm font-medium uppercase tracking-wide text-gray-900 hover:text-[#C6D92E] transition-colors"
            >
              Contatti
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="bg-[#C6D92E] px-6 py-2 rounded-full text-sm font-semibold text-black hover:bg-[#B8C526] transition-colors">
            Preventivo
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        ref={refs.hero}
        className="min-h-screen relative flex items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView(refs.hero)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs uppercase tracking-widest mb-4 text-[#C6D92E] font-semibold">
                Progettazione grafica
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Disegniamo la tua Comunicazione, Pixel dopo Pixel
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                La progettazione grafica è il punto di partenza di ogni prodotto
                per una comunicazione efficace. Non si tratta soltanto di
                "mettere in bella" un'idea, ma di interpretarla, svilupparla e
                trasformarla in un linguaggio visivo coerente, capace di parlare
                direttamente al pubblico a cui è destinata.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Nel nostro reparto grafico, ascoltiamo con attenzione le tue
                esigenze per comprenderne obiettivi, target e messaggio,
                trasformando ogni informazione in un progetto visivo
                personalizzato. Crediamo che la grafica non sia un elemento
                accessorio, ma il cuore di un prodotto di qualità: il design
                definisce il tono della comunicazione, trasmette la tua identità
                e contribuisce in maniera decisiva all'efficacia del messaggio.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#C6D92E] px-8 py-3 rounded-full text-sm font-semibold text-black hover:bg-[#B8C526] transition-colors">
                  Richiedi Preventivo
                </button>
                <button className="border border-gray-300 px-8 py-3 rounded-full text-sm font-semibold text-gray-700 hover:border-[#C6D92E] hover:text-[#C6D92E] transition-colors">
                  Vedi Portfolio
                </button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={
                isInView(refs.hero)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/Artboard-1-scaled.png"
                  alt="Progettazione Grafica"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
                <Image
                  src="/images/Artboard-7-scaled.png"
                  alt="Design Portfolio"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl mt-8"
                />
                <Image
                  src="/images/Artboard-8-1-scaled.png"
                  alt="Brand Identity"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
                <Image
                  src="/images/Artboard-4-scaled.png"
                  alt="Creative Design"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEZIONE SERVIZI */}
      {/* CREATIVITÀ SENZA LIMITI */}
      <section ref={refs.services} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.services)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Creatività senza limiti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Per la progettazione grafica ci affidiamo ai software
              professionali della suite Adobe Creative Cloud, come Photoshop,
              Illustrator e InDesign, strumenti che ci permettono di lavorare
              con la massima precisione e creatività. L'utilizzo di queste
              piattaforme garantisce qualità, flessibilità e risultati sempre in
              linea con gli standard più elevati del settore.
            </p>
          </motion.div>

          {/* COMPETENZE ADOBE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.services)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              La nostra firma digitale
            </h3>
            <p className="text-lg text-gray-600 mb-12">
              Le nostre capacità crescono con ogni progetto, permettendoci di
              offrire soluzioni grafiche sempre innovative ed efficaci.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C6D92E] mb-2">
                  90%
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Photoshop
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C6D92E] mb-2">
                  90%
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  InDesign
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C6D92E] mb-2">
                  90%
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Illustrator
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEZIONE PROCESSO */}
      <section ref={refs.process} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.process)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Il nostro processo creativo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguiamo un metodo strutturato per garantire risultati eccellenti
              in ogni progetto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView(refs.process)
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#C6D92E] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE PORTFOLIO */}
      <section ref={refs.portfolio} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.portfolio)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Alcuni dei nostri progetti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esempi di lavori realizzati per i nostri clienti
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView(refs.portfolio)
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={`/images/${item.src}`}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                    <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <span className="text-sm bg-[#C6D92E] px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE CTA */}
      <section ref={refs.cta} className="py-20 bg-[#C6D92E]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.cta) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Pronto a dare forma alle tue idee?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Contattaci per discutere del tuo progetto e ricevere un preventivo
              personalizzato
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                Richiedi Preventivo
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-colors">
                Chiamaci Ora
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Colonna 1 - Informazioni */}
            <div>
              <h3 className="text-xl font-semibold mb-6">INFORMAZIONI</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/progettazione-grafica"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    Progettazione Grafica
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stampa-digitale"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    Stampa Digitale
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stampa-offset"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    Stampa Offset
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonna 2 - Contatti */}
            <div>
              <h3 className="text-xl font-semibold mb-6">CONTATTI</h3>
              <div className="space-y-3 text-gray-300">
                <p>Via del Greto 5</p>
                <p>40132 Bologna</p>
                <p>Email: info@litocalegari.it</p>
                <p>Tel: +39 051 1234567</p>
              </div>
            </div>

            {/* Colonna 3 - Logo */}
            <div className="flex justify-center md:justify-end">
              <div className="w-16 h-auto">
                <Image
                  src="/Logo-LitoCalegari.png"
                  alt="Lito Calegari"
                  width={64}
                  height={64}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm mt-12 pt-8 border-t border-gray-800">
            Copyright © 2025 Lito Calegari. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ProgettazioneGraficaPage
