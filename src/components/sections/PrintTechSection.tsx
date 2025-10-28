'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface PrintTechSectionProps {
  selectedTech: 'offset' | 'digitale'
  onTechChange: (tech: 'offset' | 'digitale') => void
}

const PrintTechSection = ({
  selectedTech,
  onTechChange,
}: PrintTechSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#C6D92E] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-black rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{}}
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{}}
              className="flex items-center gap-3 mb-6"
            >
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-[#C6D92E] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{}}
              />
              <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
                Tecnologie
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
              Stampa
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
              Offset <span className="text-[#C6D92E]">o</span> Digitale
            </h2>
            <h3 className="text-2xl font-bold text-[#C6D92E] mb-10">
              Quale stampa scegliere?
            </h3>

            {/* Toggle + content */}
            <div className="space-y-8">
              {/* Segmented control */}
              <div className="inline-flex p-1 rounded-full bg-gray-100 border border-gray-200">
                {[
                  {
                    id: 'offset' as const,
                    label: 'Offset',
                    dot: 'bg-[#C6D92E]',
                  },
                  {
                    id: 'digitale' as const,
                    label: 'Digitale',
                    dot: 'bg-black',
                  },
                ].map((opt) => {
                  const active = selectedTech === opt.id
                  return (
                    <button
                      key={opt.id}
                      onClick={() => onTechChange(opt.id)}
                      className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                        active
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      aria-pressed={active}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${opt.dot}`} />
                        {opt.label}
                      </span>
                      {active && (
                        <motion.span
                          layoutId="tech-segment"
                          className="absolute inset-0 rounded-full bg-white shadow"
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 40,
                          }}
                        />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Content area */}
              <div className="relative min-h-[160px]">
                <AnimatePresence mode="wait">
                  {selectedTech === 'offset' ? (
                    <motion.div
                      key="offset"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.35 }}
                      className="group absolute inset-0"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 3 }}
                          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-xl bg-[#C6D92E]"
                        >
                          01
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#C6D92E] transition-colors">
                            Offset
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            Particolarmente adatta per tirature medio/alte con
                            formati fino ad un massimale di (50×70 cm) consente
                            una maggiore varietà di scelta per quanto riguarda
                            la gamma di colori (PANTONE - RAL - TOYOINK).
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="digitale"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.35 }}
                      className="group absolute inset-0"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: -3 }}
                          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl bg-black"
                        >
                          02
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#C6D92E] transition-colors">
                            Digitale
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            Consigliata per tirature medio/basse con formati
                            fino ad un massimale di (33×100 cm). Consente
                            inoltre una maggiore rapidità d&apos;esecuzione, la
                            possibilità di effettuare lavorazioni con dato
                            variabile e la si può applicare ad una più ampia
                            varietà di supporti.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{}}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-[500px] bg-gradient-to-br from-[#C6D92E] via-[#B8C526] to-[#A8B01E] rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
            >
              {/* Animated pattern */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                  backgroundSize: '200% 200%',
                }}
              />

              {/* Text overlay with parallax */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-center"
                >
                  <div className="text-white text-7xl md:text-8xl font-black opacity-20 mb-4">
                    PRINT
                  </div>
                  <div className="text-white/60 text-2xl font-semibold tracking-wider">
                    Excellence
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 border-4 border-white/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-16 h-16 border-4 border-white/20 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PrintTechSection
