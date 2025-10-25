'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import {
  Paintbrush,
  Printer,
  BookOpen,
  Megaphone,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Paintbrush,
      title: 'Grafica',
      description:
        'Diamo forma alle tue idee con creatività e competenza, realizzando progetti grafici dal forte impatto visivo, accompagnandoti in ogni fase della creazione.',
      features: [
        'Adobe Creative Cloud',
        'Photoshop',
        'Illustrator',
        'InDesign',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Printer,
      title: 'Stampa',
      description:
        "Macchinari di ultima generazione e materiali certificati FSC® ci consentono di offrirti stampe rapide, di qualità eccellente e rispettose dell'ambiente.",
      features: ['Stampa Rapida', 'Alta Qualità', 'Formati Personalizzati'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: BookOpen,
      title: 'Finitura',
      description:
        'Rendiamo ogni lavoro unico grazie a finiture di pregio e cura dei dettagli, per dare un tocco distintivo e valorizzare al massimo la tua comunicazione.',
      features: [
        'Grandi Tirature',
        'Qualità Professionale',
        'Finishing Avanzato',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Megaphone,
      title: 'Extra',
      description:
        'Superiamo i limiti della carta con stampe su supporti innovativi e di prestigio, offrendo nuove possibilità creative per valorizzare la tua comunicazione.',
      features: ['Volantini', 'Poster', 'Banner'],
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles size={16} />I Nostri Servizi
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            I nostri servizi
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offriamo un'ampia gamma di soluzioni di stampa, dai biglietti da
            visita ai cataloghi, dai banner ai materiali personalizzati,
            garantendo qualità, creatività e attenzione ai dettagli in ogni
            progetto.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{
                        delay: 0.5 + index * 0.1 + featureIndex * 0.1,
                      }}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300"
                >
                  Scopri di più
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              I nostri lavori
            </h3>
            <p className="text-lg text-gray-600">
              Alcuni esempi dei progetti che abbiamo realizzato
            </p>
          </div>

          {/* Image Layers Animation */}
          <div className="relative h-96 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.9, duration: 0.8 }}
              className="absolute top-0 left-1/4 w-32 h-32 z-10"
            >
              <Image
                src="/images/layer_3-1a.png"
                alt="Elemento decorativo"
                width={128}
                height={128}
                className="w-full h-full object-contain animate-float"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 1.0, duration: 0.8 }}
              className="absolute top-8 right-1/4 w-40 h-40 z-20"
            >
              <Image
                src="/images/Artboard-15-scaled.png"
                alt="Progetto grafico"
                width={160}
                height={160}
                className="w-full h-full object-contain animate-float-delayed"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 1.1, duration: 0.8 }}
              className="absolute bottom-8 left-1/3 w-36 h-36 z-30"
            >
              <Image
                src="/images/layer_3-7.webp"
                alt="Elemento decorativo"
                width={144}
                height={144}
                className="w-full h-full object-contain animate-float-slow"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute top-16 right-1/3 w-28 h-28 z-40"
            >
              <Image
                src="/images/Artboard-4-scaled.png"
                alt="Progetto grafico"
                width={112}
                height={112}
                className="w-full h-full object-contain animate-float-reverse"
              />
            </motion.div>
          </div>

          {/* Static Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                src: '/images/Artboard-1-scaled.png',
                alt: 'Progetto grafico 1',
              },
              {
                src: '/images/Artboard-7-scaled.png',
                alt: 'Progetto grafico 2',
              },
              {
                src: '/images/Artboard-8-1-scaled.png',
                alt: 'Progetto grafico 3',
              },
              {
                src: '/images/Artboard-12-scaled.png',
                alt: 'Biglietti da visita',
              },
              { src: '/images/Artboard-13-scaled.png', alt: 'Adesivi' },
              { src: '/images/Artboard-16-scaled.png', alt: 'Flyer' },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Richiedi un Preventivo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
