'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, CheckCircle, Award, Palette } from 'lucide-react'

const StampaOffsetPage = () => {
  const refs = {
    hero: useRef(null),
    advantages: useRef(null),
    applications: useRef(null),
    process: useRef(null),
    cta: useRef(null),
  }

  const isInView = (ref: any) =>
    useInView(ref, { once: true, margin: '-100px' })

  const advantages = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Qualità Superiore',
      description:
        "Risultati di altissima qualità con colori brillanti e uniformi dalla prima all'ultima copia.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Colori Pantone',
      description:
        'Utilizzo di colori PANTONE, RAL e TOYOINK per una fedeltà cromatica perfetta.',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Certificazioni',
      description:
        'Inchiostri certificati per il settore alimentare e materiali eco-sostenibili.',
    },
  ]

  const applications = [
    {
      title: 'Editoria',
      items: ['Cataloghi', 'Riviste', 'Libri', 'Manuali tecnici'],
      image: 'Artboard-7-scaled.png',
      description:
        'Ideale per pubblicazioni con molte pagine e alta qualità di stampa.',
    },
    {
      title: 'Packaging',
      items: ['Scatole', 'Etichette', 'Confezioni', 'Materiali promozionali'],
      image: 'Artboard-9-1.png',
      description:
        'Perfetto per confezioni che richiedono colori specifici e resistenza.',
    },
    {
      title: 'Corporate',
      items: [
        'Report annuali',
        'Brochure aziendali',
        'Materiali istituzionali',
      ],
      image: 'Artboard-15-scaled.png',
      description: 'La scelta ideale per materiali aziendali di prestigio.',
    },
    {
      title: 'Pubblicità',
      items: ['Poster', 'Manifesti', 'Materiali outdoor', 'Campagne stampa'],
      image: 'Artboard-16-scaled.png',
      description:
        'Eccellente per campagne pubblicitarie che richiedono impatto visivo.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Preparazione Lastre',
      description:
        'Creazione delle lastre di stampa per ogni colore utilizzato.',
    },
    {
      step: '02',
      title: 'Montaggio',
      description:
        'Montaggio delle lastre sui cilindri della macchina da stampa.',
    },
    {
      step: '03',
      title: 'Registrazione',
      description:
        'Regolazione precisa per garantire la perfetta sovrapposizione dei colori.',
    },
    {
      step: '04',
      title: 'Stampa',
      description: 'Stampa delle copie con controllo continuo della qualità.',
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
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C6D92E] transition-colors"
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
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C6D92E] transition-colors bg-[#C6D92E]/10"
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
        className="min-h-screen relative flex items-center bg-gradient-to-br from-purple-50 to-pink-100 pt-20"
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
                Stampa Offset
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Perfetti ogni volta
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                La stampa offset rappresenta la soluzione ideale per chi cerca
                qualità elevata e convenienza nelle medie e grandi tirature. È
                la tecnica tradizionale che garantisce colori brillanti,
                dettagli nitidi e una resa cromatica costante, perfetta per
                progetti di comunicazione istituzionale o promozionale.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Grazie alla tecnologia offset, ogni stampa mantiene uniformità e
                precisione, anche su quantità molto elevate. Questo consente di
                ottenere cataloghi, riviste, brochure, libri e materiali
                promozionali sempre coerenti e con una resa impeccabile.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#C6D92E] px-8 py-3 rounded-full text-sm font-semibold text-black hover:bg-[#B8C526] transition-colors">
                  Richiedi Preventivo
                </button>
                <button className="border border-gray-300 px-8 py-3 rounded-full text-sm font-semibold text-gray-700 hover:border-[#C6D92E] hover:text-[#C6D92E] transition-colors">
                  Scopri le Applicazioni
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
                  src="/images/Artboard-7-scaled.png"
                  alt="Stampa Offset"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
                <Image
                  src="/images/Artboard-15-scaled.png"
                  alt="Qualità Offset"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl mt-8"
                />
                <Image
                  src="/images/Artboard-16-scaled.png"
                  alt="Colori Pantone"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
                <Image
                  src="/images/Artboard-9-1.png"
                  alt="Packaging Offset"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEZIONE VANTAGGI */}
      <section ref={refs.advantages} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.advantages)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              I vantaggi della stampa offset
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La tecnologia tradizionale per risultati di massima qualità
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView(refs.advantages)
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#C6D92E] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE APPLICAZIONI */}
      <section ref={refs.applications} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.applications)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Applicazioni della stampa offset
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ideale per progetti che richiedono la massima qualità e tirature
              elevate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView(refs.applications)
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/images/${application.image}`}
                      alt={application.title}
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {application.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {application.description}
                    </p>
                    <ul className="space-y-2">
                      {application.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-[#C6D92E] mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STAMPA PERSONALIZZAZIONE PASSIONE */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.advantages)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              StampaPersonalizzazionePassione
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              Ogni pagina mantiene la stessa intensità, lo stesso colore, la
              stessa perfezione. Un alleato insostituibile per raccontare la tua
              storia con riviste, libri e cataloghi che lasciano il segno.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEZIONE SPECIFICHE TECNICHE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Specifiche tecniche
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#C6D92E] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Formati
                    </h3>
                    <p className="text-gray-600">Fino a 50×70 cm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#C6D92E] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Tirature
                    </h3>
                    <p className="text-gray-600">
                      Ideale per tirature medio/alte
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#C6D92E] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Colori</h3>
                    <p className="text-gray-600">PANTONE, RAL, TOYOINK</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#C6D92E] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Certificazioni
                    </h3>
                    <p className="text-gray-600">
                      Inchiostri certificati per alimenti
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/images/Artboard-7-scaled.png"
                alt="Macchinario Stampa Offset"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
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
              Pronto per la stampa offset di qualità?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Contattaci per un preventivo personalizzato e scopri la qualità
              superiore della stampa offset
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

export default StampaOffsetPage
