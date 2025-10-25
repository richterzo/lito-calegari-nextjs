'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react'

const HeroVariants = () => {
  const [currentHero, setCurrentHero] = useState(0)

  const heroes = [
    {
      id: 1,
      name: '3D Typography Explosion',
      component: <Hero3DExplosion />,
    },
    {
      id: 2,
      name: 'Liquid Ink Flow',
      component: <HeroLiquidInk />,
    },
    {
      id: 3,
      name: 'Geometric Particles',
      component: <HeroGeometric />,
    },
    {
      id: 4,
      name: 'Paper Fold Magic',
      component: <HeroPaperFold />,
    },
    {
      id: 5,
      name: 'Neon Blueprint',
      component: <HeroNeonBlueprint />,
    },
  ]

  const nextHero = () => {
    setCurrentHero((prev) => (prev + 1) % heroes.length)
  }

  const prevHero = () => {
    setCurrentHero((prev) => (prev - 1 + heroes.length) % heroes.length)
  }

  // Keyboard Navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentHero((prev) => (prev + 1) % heroes.length)
      }
      if (e.key === 'ArrowLeft') {
        setCurrentHero((prev) => (prev - 1 + heroes.length) % heroes.length)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [heroes.length])

  return (
    <div className="relative w-full">
      {/* Hero Display */}
      <div className="relative min-h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHero}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {heroes[currentHero].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls - Modern Glass Style */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-6 bg-black/80 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10 shadow-2xl"
        >
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevHero}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="text-white" size={24} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {heroes.map((hero, index) => (
              <motion.button
                key={hero.id}
                onClick={() => setCurrentHero(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                {index === currentHero ? (
                  <motion.div
                    layoutId="activeDot"
                    className="w-12 h-3 bg-[#C6D92E] rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                ) : (
                  <div className="w-3 h-3 bg-white/30 rounded-full hover:bg-white/50 transition-colors" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextHero}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="text-white" size={24} />
          </motion.button>
        </motion.div>

        {/* Hero Name Label */}
        <motion.div
          key={currentHero}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-4"
        >
          <p className="text-white/60 text-sm font-medium">
            Variante {currentHero + 1} / {heroes.length}
          </p>
          <p className="text-white text-lg font-semibold">
            {heroes[currentHero].name}
          </p>
        </motion.div>
      </div>

      {/* Keyboard Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed top-8 right-8 z-50 text-white/40 text-sm"
      >
        <p>Usa ← → per navigare</p>
      </motion.div>
    </div>
  )
}

// HERO 1: 3D Typography Explosion
const Hero3DExplosion = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-blue-900 relative overflow-hidden pt-20">
      {/* 3D Floating Letters Background */}
      <div className="absolute inset-0">
        {['S', 'T', 'A', 'M', 'P', 'A'].map((letter, i) => (
          <motion.div
            key={i}
            className="absolute text-8xl md:text-[12rem] font-black text-white/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotateX: [0, 360],
              rotateY: [0, 180],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          >
            {letter}
          </motion.div>
        ))}
      </div>

      {/* Particle Explosion Effect */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-[#C6D92E] rounded-full"
          initial={{
            x: '50vw',
            y: '50vh',
            scale: 0,
          }}
          animate={{
            x: `${50 + (Math.random() - 0.5) * 100}vw`,
            y: `${50 + (Math.random() - 0.5) * 100}vh`,
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0, rotateX: 90 }}
          animate={{ scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-9xl font-black text-white mb-4"
            style={{
              textShadow: '0 0 80px rgba(198, 217, 46, 0.5)',
              transform: 'perspective(1000px)',
            }}
            animate={{
              textShadow: [
                '0 0 80px rgba(198, 217, 46, 0.5)',
                '0 0 120px rgba(198, 217, 46, 0.8)',
                '0 0 80px rgba(198, 217, 46, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            STAMPA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-4xl text-white/90 font-semibold"
          >
            Studio Grafico 3D
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl text-white/70 max-w-2xl mx-auto"
        >
          Dalla progettazione alla stampa di alta qualità
        </motion.p>
      </div>
    </section>
  )
}

// HERO 2: Liquid Ink Flow
const HeroLiquidInk = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20">
      {/* Liquid Ink Blobs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              ['#00B7EB', '#EC008C', '#C6D92E', '#000000'][i % 4]
            } 0%, transparent 70%)`,
            width: `${200 + i * 50}px`,
            height: `${200 + i * 50}px`,
            left: `${i * 20}%`,
            top: `${30 + i * 10}%`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Dripping Effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`drip-${i}`}
          className="absolute w-1 bg-gradient-to-b from-[#C6D92E] to-transparent"
          style={{
            left: `${i * 12 + 10}%`,
            top: 0,
            height: '200px',
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeIn',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-6xl md:text-9xl font-black mb-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="inline-block"
            style={{
              background:
                'linear-gradient(180deg, #000 0%, #C6D92E 50%, #000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '100% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '0% 100%', '0% 0%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Inchiostro
          </motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-8"
        >
          Fluido e Perfetto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Qualità CMYK professionale che scorre nella perfezione
        </motion.p>
      </div>
    </section>
  )
}

// HERO 3: Geometric Particles
const HeroGeometric = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden pt-20">
      {/* Geometric Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{
            backgroundImage: `
              linear-gradient(rgba(198, 217, 46, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(198, 217, 46, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
          className="w-full h-full"
        />
      </div>

      {/* Floating Geometric Shapes */}
      {[...Array(20)].map((_, i) => {
        const shapes = ['square', 'circle', 'triangle']
        const shape = shapes[i % 3]

        return (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {shape === 'circle' && (
              <div className="w-16 h-16 border-4 border-[#C6D92E]/30 rounded-full" />
            )}
            {shape === 'square' && (
              <div className="w-16 h-16 border-4 border-[#C6D92E]/30 rotate-45" />
            )}
            {shape === 'triangle' && (
              <div className="w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[55px] border-b-[#C6D92E]/30" />
            )}
          </motion.div>
        )
      })}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <motion.h1
            className="text-6xl md:text-9xl font-black text-white mb-6"
            style={{
              textShadow: '0 0 60px rgba(198, 217, 46, 0.3)',
            }}
          >
            GRAFICA
          </motion.h1>

          <motion.div
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {['&', '+', '='].map((symbol, i) => (
              <motion.div
                key={i}
                className="text-6xl md:text-8xl font-black text-[#C6D92E]"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                {symbol}
              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-3xl md:text-5xl font-bold text-white/90 mb-8"
          >
            STAMPA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Design geometrico incontra precisione tipografica
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// HERO 4: Paper Fold Magic
const HeroPaperFold = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden pt-20">
      {/* Paper Fold Lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`fold-${i}`}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"
          style={{
            left: `${i * 16 + 10}%`,
          }}
          animate={{
            scaleY: [0.8, 1, 0.8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Floating Paper Pieces */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`paper-${i}`}
          className="absolute bg-white shadow-lg"
          style={{
            width: `${50 + Math.random() * 100}px`,
            height: `${50 + Math.random() * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.h1
            className="text-6xl md:text-9xl font-black text-gray-900 mb-6"
            animate={{
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            style={{
              textShadow: '10px 10px 30px rgba(0,0,0,0.1)',
              transformStyle: 'preserve-3d',
            }}
          >
            CARTA
          </motion.h1>

          <motion.div
            className="relative inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              che prende <span className="text-[#C6D92E]">forma</span>
            </h2>

            {/* Folding Corner Effect */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#C6D92E]"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Dall'idea al prodotto finito, pieghiamo la carta con maestria
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// HERO 5: Neon Blueprint
const HeroNeonBlueprint = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-purple-950 to-black relative overflow-hidden pt-20">
      {/* Neon Grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          className="w-full h-full"
        />
      </div>

      {/* Neon Circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`neon-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            border: '2px solid rgba(198, 217, 46, 0.5)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 30px rgba(198, 217, 46, 0.5)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Scanning Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`scan-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            top: ['0%', '100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear',
          }}
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-9xl font-black mb-6"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px #00FFFF',
              textShadow: '0 0 60px rgba(0, 255, 255, 0.8)',
            }}
            animate={{
              textShadow: [
                '0 0 60px rgba(0, 255, 255, 0.8)',
                '0 0 100px rgba(0, 255, 255, 1)',
                '0 0 60px rgba(0, 255, 255, 0.8)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            DIGITAL
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-[#C6D92E] mb-8"
            style={{
              textShadow: '0 0 40px rgba(198, 217, 46, 0.8)',
            }}
          >
            PRINT
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl text-cyan-200/80 max-w-2xl mx-auto"
          >
            Tecnologia futuristica incontra tradizione tipografica
          </motion.p>
        </motion.div>
      </div>

      {/* Corner Tech Elements */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(
        (pos, i) => (
          <motion.div
            key={pos}
            className={`absolute ${
              pos === 'top-left'
                ? 'top-8 left-8'
                : pos === 'top-right'
                ? 'top-8 right-8'
                : pos === 'bottom-left'
                ? 'bottom-8 left-8'
                : 'bottom-8 right-8'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          >
            <div className="w-16 h-16 border-2 border-cyan-400/50 relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-400" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-cyan-400" />
            </div>
          </motion.div>
        )
      )}
    </section>
  )
}

export default HeroVariants
