'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface PortfolioSectionProps {
  isMobile: boolean
}

const portfolioItems = [
  { title: 'Cataloghi', image: '/images/banner_cat_magazines_01_d.jpg' },
  { title: 'Biglietti da visita', image: '/images/Artboard-1-1-scaled.png' },
  { title: 'Adesivi', image: '/images/Artboard-12-scaled.png' },
  { title: 'Flyer', image: '/images/Artboard-13-scaled.png' },
  {
    title: 'Progettazione grafica',
    image: '/images/Artboard-16-scaled.png',
  },
]

const PortfolioSection = ({ isMobile }: PortfolioSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
              Portfolio
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{}}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Cosa puoi realizzare
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{}}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Di seguito un&apos;idea di quello che siamo in grado di fare
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: isMobile ? 0 : index * 0.05,
              }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={isMobile ? {} : { y: -8 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                <div className="relative h-72 rounded-3xl overflow-hidden mb-5 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold text-center text-gray-900 group-hover:text-[#C6D92E] transition-colors duration-300">
                  {item.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
