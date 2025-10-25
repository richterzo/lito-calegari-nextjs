'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'

const LitoCalegariClone = () => {
  const [activeAccordion, setActiveAccordion] = useState(0)

  const refs = {
    hero: useRef(null),
    description: useRef(null),
    values: useRef(null),
    services: useRef(null),
    portfolio: useRef(null),
    more: useRef(null),
    offset: useRef(null),
    philosophy: useRef(null),
    partners: useRef(null),
    testimonials: useRef(null),
  }

  const isInView = (ref: any) =>
    useInView(ref, { once: true, margin: '-100px' })

  // Tutte le immagini disponibili
  const allImages = [
    'Artboard-1-1-scaled.png',
    'Artboard-1-scaled.png',
    'Artboard-10.png',
    'Artboard-12-scaled.png',
    'Artboard-13-scaled.png',
    'Artboard-15-scaled.png',
    'Artboard-16-scaled.png',
    'Artboard-4-scaled.png',
    'Artboard-7-scaled.png',
    'Artboard-8-1-scaled.png',
    'Artboard-9-1.png',
    'banner_cat_magazines_01_d.jpg',
    'homepage_4-2.webp',
    'layer_3-1a.png',
    'layer_3-7.webp',
    '9434619-scaled-254x254.jpg',
    '9439678-scaled-254x254.jpg',
    '9439727-scaled-254x254.jpg',
    '9440461-scaled-254x254.jpg',
  ]

  // Loghi partner
  const partnerLogos = [
    'Ricoh_logo_2005.svg.png',
    'Roland_Digital_Group_logo.svg.png',
    'Adobe_Corporate_Logo.png',
    '3M_Logo.svg-1.png',
  ]

  // Portfolio items con labels dinamici
  const portfolioItems = [
    { src: 'Artboard-1-scaled.png', label: 'Biglietti da visita' },
    { src: 'Artboard-7-scaled.png', label: 'Cataloghi' },
    { src: 'Artboard-8-1-scaled.png', label: 'Banner' },
    { src: 'Artboard-4-scaled.png', label: 'Volantini' },
    { src: 'Artboard-12-scaled.png', label: 'Poster' },
    { src: 'Artboard-13-scaled.png', label: 'Adesivi' },
    { src: 'Artboard-15-scaled.png', label: 'Brochure' },
    { src: 'Artboard-16-scaled.png', label: 'Manifesti' },
    { src: 'Artboard-9-1.png', label: 'Packaging' },
    { src: 'banner_cat_magazines_01_d.jpg', label: 'Riviste' },
    { src: 'homepage_4-2.webp', label: 'Materiali promozionali' },
    { src: '9434619-scaled-254x254.jpg', label: 'Stampa digitale' },
    { src: '9439678-scaled-254x254.jpg', label: 'Stampa offset' },
    { src: '9439727-scaled-254x254.jpg', label: 'Finitura speciale' },
    { src: '9440461-scaled-254x254.jpg', label: 'Rilegatura' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="h-20 fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/Logo-LitoCalegari.png"
              alt="Lito Calegari"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a
              href="#home"
              className="text-sm font-medium uppercase tracking-wide text-gray-900 hover:text-[#C6D92E] transition-colors"
            >
              Home
            </a>
            <a
              href="#servizi"
              className="text-sm font-medium uppercase tracking-wide text-gray-900 hover:text-[#C6D92E] transition-colors"
            >
              Servizi
            </a>
            <a
              href="#contatti"
              className="text-sm font-medium uppercase tracking-wide text-gray-900 hover:text-[#C6D92E] transition-colors"
            >
              Contatti
            </a>
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
        className="min-h-screen relative flex items-center bg-gray-50 pt-20"
      >
        {/* Watermark */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView(refs.hero)
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[clamp(8rem,20vw,16rem)] font-black text-[#f5f5f5] tracking-[0.1em] select-none leading-none"
          >
            STAMPA
          </motion.h1>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.hero) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs uppercase tracking-widest mb-4 text-gray-600"
          >
            Dove le tue idee prendono forma
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.hero) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-6xl md:text-7xl font-bold text-center leading-tight text-gray-900 mb-6"
          >
            Studio grafico e stampa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.hero) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto text-center text-gray-600 mt-6 text-lg leading-relaxed"
          >
            Dalla progettazione grafica alla stampa di alta qualità, offriamo
            soluzioni creative e su misura per valorizzare la tua comunicazione
          </motion.p>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isInView(refs.hero) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 relative h-[400px] max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-6 gap-4 h-full">
              {/* Image 1 */}
              <div className="col-span-1 row-span-2">
                <Image
                  src={`/images/${allImages[0]}`}
                  alt="Progetto 1"
                  width={200}
                  height={400}
                  className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Image 2 - Centered */}
              <div className="col-span-2 row-span-2 flex items-center justify-center">
                <Image
                  src={`/images/${allImages[1]}`}
                  alt="Progetto 2"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 rotate-2"
                />
              </div>

              {/* Image 3 */}
              <div className="col-span-1 row-span-2">
                <Image
                  src={`/images/${allImages[2]}`}
                  alt="Progetto 3"
                  width={200}
                  height={400}
                  className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 -rotate-1"
                />
              </div>

              {/* Image 4 */}
              <div className="col-span-1 row-span-1">
                <Image
                  src={`/images/${allImages[3]}`}
                  alt="Progetto 4"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Image 5 */}
              <div className="col-span-1 row-span-1">
                <Image
                  src={`/images/${allImages[4]}`}
                  alt="Progetto 5"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 rotate-1"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEZIONE DESCRIZIONE */}
      <section ref={refs.description} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.description)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl leading-relaxed font-light text-gray-900"
          >
            Offriamo un'ampia gamma di soluzioni di stampa, dai{' '}
            <span className="bg-[#C6D92E] px-2 py-1 font-semibold">
              biglietti da visita
            </span>{' '}
            ai{' '}
            <span className="bg-[#C6D92E] px-2 py-1 font-semibold">
              cataloghi
            </span>
            , dai{' '}
            <span className="bg-[#C6D92E] px-2 py-1 font-semibold">banner</span>{' '}
            ai{' '}
            <span className="bg-[#C6D92E] px-2 py-1 font-semibold">
              materiali personalizzati
            </span>
            , garantendo qualità, creatività e attenzione ai dettagli in ogni
            progetto.
          </motion.p>
        </div>
      </section>

      {/* SEZIONE VALORI */}
      <section ref={refs.values} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Valore 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView(refs.values)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold mt-6 text-center text-gray-900">
                Qualità
              </h3>
              <p className="text-gray-600 text-center mt-2">
                Per i tuoi progetti utilizziamo solo materiali di alta qualità.
              </p>
            </motion.div>

            {/* Valore 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView(refs.values)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold mt-6 text-center text-gray-900">
                Personalizzazione
              </h3>
              <p className="text-gray-600 text-center mt-2">
                Ogni prodotto è realizzato su misura, curando ogni dettaglio.
              </p>
            </motion.div>

            {/* Valore 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView(refs.values)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold mt-6 text-center text-gray-900">
                Rapidità
              </h3>
              <p className="text-gray-600 text-center mt-2">
                Dal progetto alla consegna, garantiamo tempi rapidi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEZIONE "I NOSTRI SERVIZI" */}
      <section ref={refs.services} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.services)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            I nostri servizi
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servizio 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView(refs.services)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-center mt-6 text-gray-900">
                Grafica
              </h3>
              <p className="text-gray-600 text-center mt-4 text-sm leading-relaxed">
                Diamo forma alle tue idee con creatività e competenza,
                realizzando progetti grafici dal forte impatto visivo.
              </p>
            </motion.div>

            {/* Servizio 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView(refs.services)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-xl">🖨️</span>
              </div>
              <h3 className="text-xl font-semibold text-center mt-6 text-gray-900">
                Stampa
              </h3>
              <p className="text-gray-600 text-center mt-4 text-sm leading-relaxed">
                Macchinari di ultima generazione e materiali certificati FSC®
                per stampe rapide e di qualità eccellente.
              </p>
            </motion.div>

            {/* Servizio 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView(refs.services)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-center mt-6 text-gray-900">
                Finitura
              </h3>
              <p className="text-gray-600 text-center mt-4 text-sm leading-relaxed">
                Rendiamo ogni lavoro unico grazie a finiture di pregio e cura
                dei dettagli.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEZIONE "COSA PUOI REALIZZARE" */}
      <section ref={refs.portfolio} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.portfolio)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Cosa puoi realizzare
          </motion.h2>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
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
                className="break-inside-avoid mb-6"
              >
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={`/images/${item.src}`}
                    alt={item.label}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="font-medium px-4 py-2 border border-gray-300 rounded-full inline-block text-sm">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE "E MOLTO ALTRO" */}
      <section ref={refs.more} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.more) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-12 text-gray-900"
          >
            E molto altro
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8">
            {['Rilegatura', 'Plastificazione', 'Taglio', 'Taglio plotter'].map(
              (service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView(refs.more)
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-center font-medium text-lg hover:border-[#C6D92E] hover:text-[#C6D92E] transition-colors cursor-pointer"
                >
                  {service}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SEZIONE OFFSET vs DIGITALE */}
      <section ref={refs.offset} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Colonna sinistra */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView(refs.offset)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Quale stampa scegliere?
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">
                    <span className="bg-[#C6D92E] px-2 py-1 rounded">
                      Offset
                    </span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Particolarmente adatta per tirature medio/alte con formati
                    fino ad un massimale di (50×70 cm) consente una maggiore
                    varietà di scelta per quanto riguarda la gamma di colori.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">
                    <span className="bg-[#C6D92E] px-2 py-1 rounded">
                      Digitale
                    </span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Consigliata per tirature medio/basse con formati fino ad un
                    massimale di (33×100 cm). Consente inoltre una maggiore
                    rapidità d'esecuzione.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Colonna destra - Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={
                isInView(refs.offset)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                {
                  title: 'Caratteristiche Offset',
                  content:
                    'Tirature medio/alte, Formati fino 50×70 cm, Colori PANTONE, Inchiostri certificati',
                },
                {
                  title: 'Caratteristiche Digitale',
                  content:
                    "Tirature medio/basse, Formati fino 33×100 cm, Rapidità d'esecuzione, Dato variabile",
                },
                {
                  title: 'Materiali',
                  content:
                    'Utilizziamo solo materiali di alta qualità certificati FSC® per garantire risultati eccellenti.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === index ? -1 : index)
                    }
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4 text-gray-600 text-sm"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEZIONE FILOSOFIA */}
      <section ref={refs.philosophy} className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Testo sinistra */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView(refs.philosophy)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl leading-relaxed font-light mb-8">
                Stampa • Personalizzazione • Passione
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                La nostra filosofia è quella di accompagnare il Cliente
                attraverso tutte le fasi del processo creativo partendo da una
                semplice bozza fino ad arrivare al mockup definitivo del
                prodotto.
              </p>
            </motion.div>

            {/* Immagini destra */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={
                isInView(refs.philosophy)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {allImages.slice(5, 9).map((image, index) => (
                <Image
                  key={index}
                  src={`/images/${image}`}
                  alt={`Filosofia ${index + 1}`}
                  width={200}
                  height={200}
                  className={`rounded-lg transition-transform duration-300 ${
                    index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEZIONE PARTNER */}
      <section ref={refs.partners} className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.partners)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            I nostri Partner
          </motion.h2>

          <div className="flex flex-wrap justify-center items-center gap-16">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView(refs.partners)
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={`/images/${logo}`}
                  alt={logo.split('_')[0] || logo.split('.')[0]}
                  width={150}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY COMPLETA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 text-gray-900"
          >
            La nostra Galleria Completa
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={`/images/${image}`}
                    alt={`Progetto ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                      {image.split('.')[0].replace(/-/g, ' ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section ref={refs.testimonials} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.testimonials)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-16 text-gray-900"
          >
            Cosa dicono di noi
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.testimonials)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-gradient-to-r from-[#C6D92E] to-[#B8C526] flex items-center justify-center">
              <span className="text-white text-2xl">👨‍💼</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">
              Mario Photokitesurf
            </h3>
            <p className="text-gray-600 italic text-xl leading-relaxed mt-4">
              "Molto cordiali e disponibili, forniscono ottimi consigli per un
              risultato impeccabile dalla grafica superiore!!! Anche oggi ne ho
              avuto dimostrazione... nonostante la richiesta dell'ultimo
              momento, ho avuto subito un nuovo logo (STUPENDO!!!) e le stampe
              che mi servivano."
            </p>
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
                  <a
                    href="#"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    Chi siamo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    Servizi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#C6D92E] transition-colors"
                  >
                    Preventivi
                  </a>
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

export default LitoCalegariClone
