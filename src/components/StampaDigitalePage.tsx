'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, CheckCircle, Clock, Zap } from 'lucide-react'

const StampaDigitalePage = () => {
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
      icon: <Clock className="w-8 h-8" />,
      title: 'Rapidità',
      description:
        'Tempi di produzione ridotti rispetto alla stampa offset tradizionale.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Flessibilità',
      description:
        'Possibilità di stampare quantità variabili senza costi aggiuntivi.',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Qualità',
      description:
        'Risultati di alta qualità con colori vivaci e dettagli precisi.',
    },
  ]

  const applications = [
    {
      title: 'Materiali Promozionali',
      items: ['Biglietti da visita', 'Volantini', 'Brochure', 'Flyer'],
      image: 'Artboard-1-scaled.png',
    },
    {
      title: 'Materiali Aziendali',
      items: ['Carta intestata', 'Buste', 'Cartelline', 'Block notes'],
      image: 'Artboard-7-scaled.png',
    },
    {
      title: 'Materiali Eventi',
      items: ['Inviti', 'Locandine', 'Programmi', 'Gadget'],
      image: 'Artboard-8-1-scaled.png',
    },
    {
      title: 'Materiali Formativi',
      items: ['Manuali', 'Guide', 'Presentazioni', 'Materiali didattici'],
      image: 'Artboard-4-scaled.png',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Preparazione File',
      description: 'Verifichiamo e ottimizziamo i file per la stampa digitale.',
    },
    {
      step: '02',
      title: 'Calibrazione',
      description:
        'Calibriamo le macchine per garantire colori fedeli e uniformi.',
    },
    {
      step: '03',
      title: 'Stampa',
      description:
        "Procediamo con la stampa utilizzando tecnologie all'avanguardia.",
    },
    {
      step: '04',
      title: 'Controllo Qualità',
      description: 'Verifichiamo ogni singolo pezzo prima della consegna.',
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
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C6D92E] transition-colors bg-[#C6D92E]/10"
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
        className="min-h-screen relative flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20"
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
                Piccolo formato
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Stampe di Qualità per ogni esigenza
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
                ValoriZZa la tua identità
                <br />
                Su misura per te
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-8">
                Tantissimi supporti
              </div>
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
                  src="/images/9434619-scaled-254x254.jpg"
                  alt="Stampa Digitale"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
                <Image
                  src="/images/9439678-scaled-254x254.jpg"
                  alt="Macchinari Digitali"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl mt-8"
                />
                <Image
                  src="/images/9439727-scaled-254x254.jpg"
                  alt="Qualità Digitale"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
                <Image
                  src="/images/9440461-scaled-254x254.jpg"
                  alt="Processo Digitale"
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
      {/* STAMPA DIGITALE: LA SCELTA FLESSIBILE E VELOCE */}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Stampa digitale: la scelta flessibile e veloce
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              La stampa digitale si distingue dalla stampa offset per la sua{' '}
              <strong>rapidità e flessibilità</strong>. Non richiede lastre né
              avviamenti complessi e permette quindi di realizzare tirature
              anche ridotte, ottimizzando tempi e costi. È la soluzione ideale
              per chi ha bisogno di materiali di comunicazione in tempi brevi,
              senza rinunciare alla qualità.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView(refs.advantages)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Quando scegliere la stampa digitale
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                La stampa digitale è perfetta per{' '}
                <strong>tirature medio-basse</strong>, per progetti che
                richiedono <strong>personalizzazioni variabili</strong> (come
                nomi diversi su badge o inviti), o per chi desidera avere un
                prodotto stampato in <strong>tempi rapidi</strong>. Biglietti da
                visita, flyer, cataloghi, brochure, inviti e materiali
                promozionali prendono forma con nitidezza, colori brillanti e
                finiture professionali.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={
                isInView(refs.advantages)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                La differenza con la stampa offset
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                La stampa offset rimane insostituibile per tirature molto alte,
                dove i costi di avviamento si ammortizzano e il prezzo unitario
                diventa competitivo. Tuttavia, quando la necessità è{' '}
                <strong>
                  stampare poche copie, personalizzare i contenuti o avere tempi
                  stretti
                </strong>
                , la stampa digitale rappresenta la scelta più strategica,
                perché coniuga <strong>qualità, velocità e convenienza</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUALITÀ E TECNOLOGIA AL TUO SERVIZIO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView(refs.advantages)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Qualità e Tecnologia al tuo servizio
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              La stampa digitale garantisce risultati precisi e immediati, anche
              per piccole tirature. Offriamo un'ampia scelta di supporti (carta,
              cartoncino, PVC) e finiture (opaco, lucido, plastificazione,
              piega, cordonatura), per adattare ogni progetto alle tue esigenze.
              Grazie alla rapidità delle nostre tecnologie, consegniamo
              materiali pronti all'uso in tempi brevi, senza compromessi sulla
              qualità.
            </p>
          </motion.div>
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
              Applicazioni della stampa digitale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ideale per una vasta gamma di materiali e progetti
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

      {/* SEZIONE PROCESSO */}
      <section ref={refs.process} className="py-20 bg-white">
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
              Il nostro processo di stampa digitale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un workflow ottimizzato per garantire qualità e rapidità
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
                    <p className="text-gray-600">Fino a 33×100 cm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#C6D92E] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Tirature
                    </h3>
                    <p className="text-gray-600">
                      Ideale per tirature medio/basse
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#C6D92E] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Risoluzione
                    </h3>
                    <p className="text-gray-600">
                      Alta risoluzione per dettagli precisi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#C6D92E] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tempi</h3>
                    <p className="text-gray-600">
                      Consegna rapida in 24-48 ore
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
                src="/images/9434619-scaled-254x254.jpg"
                alt="Macchinario Stampa Digitale"
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
              Pronto per la tua stampa digitale?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Contattaci per un preventivo gratuito e scopri come possiamo
              realizzare il tuo progetto
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

export default StampaDigitalePage
