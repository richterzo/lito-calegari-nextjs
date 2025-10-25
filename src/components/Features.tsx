'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Zap, Target } from 'lucide-react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: CheckCircle,
      title: 'Qualità',
      description:
        'Per i tuoi progetti utilizziamo solo materiali di alta qualità.',
      number: '#01',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Target,
      title: 'Personalizzazione',
      description:
        'Ogni prodotto è realizzato su misura, curando ogni dettaglio.',
      number: '#02',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'Rapidità',
      description: 'Dal progetto alla consegna, garantiamo tempi rapidi.',
      number: '#03',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            I nostri valori
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La nostra filosofia è quella di accompagnare il Cliente attraverso
            tutte le fasi del processo creativo partendo da una semplice bozza
            fino ad arrivare al mockup definitivo del prodotto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 h-full">
                {/* Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                  className="text-6xl font-bold text-gray-200 mb-4"
                >
                  {feature.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <feature.icon className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
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
      </div>
    </section>
  )
}

export default Features
