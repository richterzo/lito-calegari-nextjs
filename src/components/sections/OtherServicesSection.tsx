'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface OtherServicesSectionProps {
  isMobile: boolean
}

const services = ['e molto altro...']

const OtherServicesSection = ({ isMobile }: OtherServicesSectionProps) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header - Framer Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              className="h-px w-16 bg-gradient-to-r from-[#C6D92E] to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
              Altri Servizi
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            Soluzioni Complete
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            Ogni progetto merita attenzione ai dettagli
          </p>
        </motion.div>

        {/* Falling Spheres Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ y: -100, opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: isMobile ? index * 0.05 : index * 0.08,
                ease: [0.16, 1, 0.3, 1],
                scale: {
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                },
              }}
              className="relative group"
            >
              {/* Sphere Container */}
              <div className="aspect-square relative">
                {/* Main Sphere */}
                <motion.div
                  whileHover={
                    isMobile
                      ? {}
                      : {
                          scale: 1.05,
                          y: -8,
                        }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                  }}
                  className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow cursor-pointer"
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-black/5 opacity-50" />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent"
                    style={{
                      clipPath: 'circle(40% at 30% 30%)',
                    }}
                  />

                  {/* Number Badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg z-10"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Service Name - Centered */}
                  <span className="text-xs md:text-sm font-semibold text-black text-center px-4 z-10 leading-tight">
                    {service}
                  </span>

                  {/* Hover accent */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#C6D92E] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </motion.div>

                {/* Shadow under sphere */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-black/10 rounded-full blur-md"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: isMobile ? index * 0.05 : index * 0.08 + 0.3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-sm md:text-base text-gray-500 mb-6 font-normal">
            Non trovi quello che cerchi?
          </p>
          <motion.a
            href="/contatti"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-sm md:text-base font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl"
          >
            Richiedi un preventivo
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default OtherServicesSection
