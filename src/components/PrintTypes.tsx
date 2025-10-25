'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Printer, Clock, Palette } from 'lucide-react'

const PrintTypes = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const printTypes = [
    {
      title: 'Offset',
      icon: Printer,
      description:
        "Particolarmente adatta per tirature medio/alte con formati fino ad un massimale di (50×70 cm) consente una maggiore varietà di scelta per quanto riguarda la gamma di colori (PANTONE - RAL - TOYOINK) e l'utilizzo d'inchiostri certificati per il settore alimentare. In tal modo è possibile ottenere colori brillanti e uniformi dalla prima all'ultima copia.",
      features: [
        'Tirature medio/alte',
        'Formati fino 50×70 cm',
        'Colori PANTONE',
        'Inchiostri certificati',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Digitale',
      icon: Clock,
      description:
        "Consigliata per tirature medio/basse con formati fino ad un massimale di (33×100 cm). Consente inoltre una maggiore rapidità d'esecuzione, la possibilità di effettuare lavorazioni con dato variabile e la si può applicare ad una più ampia varietà di supporti. Tutte queste caratteristiche l'hanno portata ad essere il tipo di stampa maggiormente utilizzato oggi.",
      features: [
        'Tirature medio/basse',
        'Formati fino 33×100 cm',
        "Rapidità d'esecuzione",
        'Dato variabile',
      ],
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Offset o Digitale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quale stampa scegliere?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {printTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                  >
                    <type.icon className="text-white" size={28} />
                  </motion.div>

                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {type.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        delay: 0.4 + index * 0.2 + featureIndex * 0.1,
                      }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${type.color} rounded-full`}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stampa • Personalizzazione • Passione
            </h3>
            <p className="text-lg opacity-90">
              La nostra filosofia è quella di accompagnare il Cliente attraverso
              tutte le fasi del processo creativo partendo da una semplice bozza
              fino ad arrivare al mockup definitivo del prodotto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PrintTypes
