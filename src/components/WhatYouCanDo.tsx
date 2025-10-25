'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scissors, BookOpen, Settings } from 'lucide-react'

const WhatYouCanDo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Scissors,
      title: 'Rilegatura',
      description:
        'Servizi di rilegatura professionale per ogni tipo di documento',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: BookOpen,
      title: 'Plastificazione',
      description: 'Protezione e finitura con plastificazione di alta qualità',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Scissors,
      title: 'Taglio',
      description: 'Taglio preciso e professionale per ogni formato',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Settings,
      title: 'Taglio plotter',
      description: 'Taglio plotter per forme personalizzate e adesivi',
      color: 'from-orange-500 to-orange-600',
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
            Cosa puoi realizzare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Di seguito un'idea di quello che siamo in grado di fare
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 h-full text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
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

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              E molto altro...
            </h3>
            <p className="text-lg text-gray-600">
              Offriamo una vasta gamma di servizi di finitura e
              personalizzazione per soddisfare ogni esigenza
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatYouCanDo
