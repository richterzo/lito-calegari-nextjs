'use client'

import { forwardRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface ServicesSectionProps {
  currentSlide: number
  onNext: () => void
  onPrev: () => void
  onSlideChange: (index: number) => void
}

const servicesData = [
  {
    title: 'Grafica',
    desc: 'Diamo forma alle tue idee con creatività e competenza, realizzando progetti grafici dal forte impatto visivo, accompagnandoti in ogni fase della creazione.',
  },
  {
    title: 'Stampa',
    desc: "Macchinari di ultima generazione e materiali certificati FSC® ci consentono di offrirti stampe rapide, di qualità eccellente e rispettose dell'ambiente.",
  },
  {
    title: 'Finitura',
    desc: 'Rendiamo ogni lavoro unico grazie a finiture di pregio e cura dei dettagli, per dare un tocco distintivo e valorizzare al massimo la tua comunicazione.',
  },
  {
    title: 'Extra',
    desc: 'Superiamo i limiti della carta con stampe su supporti innovativi e di prestigio, offrendo nuove possibilità creative per valorizzare la tua comunicazione.',
  },
]

const ServicesSection = forwardRef<HTMLDivElement, ServicesSectionProps>(
  ({ currentSlide, onNext, onPrev, onSlideChange }, ref) => {
    return (
      <section
        ref={ref}
        className="min-h-screen flex items-center justify-center py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Section Header */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{}}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                className="h-px w-16 bg-gradient-to-r from-[#C6D92E] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{}}
              />
              <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
                Expertise
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{}}
              className="text-5xl md:text-7xl font-bold text-gray-900"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              I nostri servizi
            </motion.h2>
          </div>

          {/* Mobile: Simple Grid */}
          <div className="grid grid-cols-1 gap-6 lg:hidden py-12">
            {servicesData.map((service, i) => (
              <div
                key={i}
                className="group relative bg-white border-2 border-black p-6 md:p-8 rounded-lg hover:bg-[#C6D92E] hover:rounded-2xl transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-neutral-800">
                  {service.title}
                </h3>
                <p className="text-neutral-800 leading-relaxed text-base md:text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop: Carousel */}
          <div className="hidden lg:block relative">
            <button
              onClick={onPrev}
              className="absolute left-0 -translate-x-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-all duration-300 shadow-lg"
              aria-label="Previous service"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-0 translate-x-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-all duration-300 shadow-lg"
              aria-label="Next service"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative overflow-hidden py-12">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: `calc(-${currentSlide * 33.333}% - ${
                    currentSlide * 2.666
                  }rem)`,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                }}
              >
                {servicesData.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                      backgroundColor: '#C6D92E',
                      borderRadius: '1.5rem',
                      transition: { duration: 0.3 },
                    }}
                    className="group relative bg-white border-2 border-black p-10 rounded-none cursor-pointer overflow-hidden flex-shrink-0"
                    style={{
                      width: 'calc(33.333% - 5.333rem)',
                      minWidth: 'calc(33.333% - 5.333rem)',
                    }}
                  >
                    <h3 className="text-3xl font-bold mb-6 text-neutral-800">
                      {service.title}
                    </h3>
                    <p className="text-neutral-800 leading-relaxed text-lg">
                      {service.desc}
                    </p>
                    <motion.div
                      className="absolute inset-0 border-4 border-[#C6D92E]"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3 mt-8">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => onSlideChange(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'w-10 bg-[#C6D92E]'
                        : 'w-2.5 bg-gray-300'
                    }`}
                    aria-label={`Vai alla slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
)

ServicesSection.displayName = 'ServicesSection'

export default ServicesSection
