'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Partners = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const partners = [
    {
      src: '/images/Adobe_Corporate_Logo.png',
      alt: 'Adobe',
      name: 'Adobe Creative Cloud',
    },
    { src: '/images/Ricoh_logo_2005.svg.png', alt: 'Ricoh', name: 'Ricoh' },
    {
      src: '/images/Roland_Digital_Group_logo.svg.png',
      alt: 'Roland',
      name: 'Roland Digital',
    },
    { src: '/images/3M_Logo.svg-1.png', alt: '3M', name: '3M' },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            I nostri partner
          </h3>
          <p className="text-lg text-gray-600">
            Tecnologie e strumenti di ultima generazione per garantire la
            massima qualità
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600 font-medium text-center">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
