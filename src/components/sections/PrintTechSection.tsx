'use client'

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { useState, useRef } from 'react'

interface PrintTechSectionProps {
  selectedTech: 'offset' | 'digitale'
  onTechChange: (tech: 'offset' | 'digitale') => void
}

const PrintTechSection = ({
  selectedTech,
  onTechChange,
}: PrintTechSectionProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return // Disable on mobile/tablet
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section className="min-h-screen flex items-center justify-center py-16 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#C6D92E] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-black rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
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
          <div
            className="relative perspective-1000"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              animate={{
                z: isHovered && !isMobile ? 50 : 0,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full bg-gradient-to-br from-[#C6D92E] via-[#B8C526] to-[#A8B01E] rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer mx-auto"
              style={{
                rotateX: isMobile ? 0 : rotateX,
                rotateY: isMobile ? 0 : rotateY,
                transformStyle: 'preserve-3d',
                aspectRatio: '85/55',
                maxWidth: '600px',
                minHeight: '220px',
                boxShadow:
                  isHovered && !isMobile
                    ? '0 30px 60px -15px rgba(198, 217, 46, 0.4), 0 20px 40px -10px rgba(0, 0, 0, 0.3)'
                    : '0 15px 30px -10px rgba(0, 0, 0, 0.2)',
              }}
            >
              {/* Glossy overlay for realism */}
              <motion.div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
                  transform: 'translateZ(1px)',
                }}
              />

              {/* Subtle dot pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                  transform: 'translateZ(0)',
                }}
              />

              {/* Holographic shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 pointer-events-none"
                animate={{
                  opacity: isHovered ? [0, 0.3, 0] : 0,
                  background: isHovered
                    ? [
                        'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)',
                        'linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)',
                        'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)',
                      ]
                    : 'transparent',
                }}
                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                style={{
                  transform: 'translateZ(2px)',
                }}
              />

              {/* Business Card Content with depth layers */}
              <div
                className="absolute inset-0 p-4 md:p-6 lg:p-10 flex flex-col justify-between"
                style={{ transform: isMobile ? 'none' : 'translateZ(20px)' }}
              >
                {/* Top - Logo/Brand */}
                <motion.div
                  className="flex items-start justify-between"
                  style={{ transform: isMobile ? 'none' : 'translateZ(10px)' }}
                >
                  <div className="text-black drop-shadow-lg">
                    <div className="text-[11px] md:text-sm lg:text-base font-semibold uppercase tracking-wider opacity-90">
                      Lito Calegari
                    </div>
                    <div className="text-[9px] md:text-xs lg:text-sm font-normal opacity-70 mt-0.5">
                      Studio Grafico
                    </div>
                  </div>
                </motion.div>

                {/* Center - Main message */}
                <motion.div
                  className="text-center"
                  style={{ transform: isMobile ? 'none' : 'translateZ(40px)' }}
                >
                  <motion.div
                    animate={{
                      scale: isHovered && !isMobile ? 1.05 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-white text-2xl md:text-4xl lg:text-6xl font-black drop-shadow-2xl mb-1 md:mb-2"
                    style={{
                      textShadow:
                        '0 4px 20px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.2)',
                    }}
                  >
                    PRINT
                  </motion.div>
                  <div className="text-black/80 text-xs md:text-base lg:text-xl font-semibold tracking-wide drop-shadow">
                    Excellence
                  </div>
                </motion.div>

                {/* Bottom - Details */}
                <motion.div
                  className="flex items-end justify-between text-[9px] md:text-xs lg:text-sm text-black/80 drop-shadow"
                  style={{ transform: isMobile ? 'none' : 'translateZ(15px)' }}
                >
                  <div>Bologna, Italia</div>
                  <div className="font-semibold">Est. 1970</div>
                </motion.div>
              </div>

              {/* Dynamic light reflection - Desktop only */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: useTransform(
                      [mouseX, mouseY],
                      ([x, y]: number[]) => {
                        const centerX = 50 + x / 10
                        const centerY = 50 + y / 10
                        return `radial-gradient(circle at ${centerX}% ${centerY}%, rgba(255,255,255,0.4) 0%, transparent 50%)`
                      }
                    ),
                    transform: 'translateZ(50px)',
                    opacity: isHovered ? 0.8 : 0,
                    transition: 'opacity 0.3s',
                  }}
                />
              )}

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
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrintTechSection
