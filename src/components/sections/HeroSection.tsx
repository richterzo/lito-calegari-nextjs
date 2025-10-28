'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface HeroSectionProps {
  isMobile: boolean
}

const HeroSection = ({ isMobile }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Clean White Background */}
      <div className="absolute inset-0 bg-white" />

      {/* STAMPA gigante centrale FERMO con effetto carta millimetrata e testo animato */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative">
          {/* Griglia millimetrata animata con testi servizi */}
          <motion.div
            className="absolute inset-0 opacity-[0.25]"
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px'],
            }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(198, 217, 46, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(198, 217, 46, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Testi servizi/tecnologie in loop sulla griglia */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-0 whitespace-nowrap text-xs md:text-sm font-bold text-[#C6D92E]/30 tracking-wider"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
              OFFSET · DIGITALE · RILEGATURA · PLASTIFICAZIONE · NOBILITAZIONE ·
              SOFT TOUCH · TAGLIO PLOTTER ·
            </motion.div>
            <motion.div
              className="absolute top-1/2 right-0 whitespace-nowrap text-xs md:text-sm font-bold text-[#C6D92E]/30 tracking-wider"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
            >
              PANTONE · CARTE SPECIALI · DATO VARIABILE · PRESPAZIATI · FINITURE
              PREMIUM ·
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 left-0 whitespace-nowrap text-xs md:text-sm font-bold text-[#C6D92E]/30 tracking-wider"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
            >
              BIGLIETTI VISITA · CATALOGHI · BROCHURE · BANNER · IMPAGINAZIONE ·
            </motion.div>
          </div>

          <div
            className="font-black text-[clamp(200px,30vw,500px)] text-black/[0.02] tracking-tighter relative z-10"
            style={{
              textShadow: '0 0 100px rgba(198, 217, 46, 0.1)',
              WebkitTextStroke: '2px rgba(0, 0, 0, 0.01)',
            }}
          >
            STAMPA
          </div>
        </div>
      </div>

      {/* Fascia ALTA - scritte in loop simmetrica FERMA */}
      <div className="absolute top-0 left-0 right-0 h-24 md:h-32 flex items-center overflow-hidden pointer-events-none z-0 py-4 md:py-6">
        <motion.div
          className="whitespace-nowrap font-black text-xl md:text-3xl text-black/[0.08] tracking-[0.3em] uppercase"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        >
          STAMPA OFFSET · STAMPA DIGITALE · RILEGATURA · PLASTIFICAZIONE · SOFT
          TOUCH · NOBILITAZIONE · IMPAGINAZIONE · BIGLIETTI DA VISITA ·
          CATALOGHI · BROCHURE · BANNER · CARTA RICICLATA · FINITURE PREMIUM ·
          STAMPA OFFSET · STAMPA DIGITALE · RILEGATURA · PLASTIFICAZIONE ·
        </motion.div>
      </div>

      {/* Fascia BASSA - scritte in loop simmetrica FERMA direzione opposta */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 flex items-center overflow-hidden pointer-events-none z-0 py-4 md:py-6">
        <motion.div
          className="whitespace-nowrap font-black text-xl md:text-3xl text-black/[0.08] tracking-[0.3em] uppercase"
          animate={{ x: ['0%', '50%'] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        >
          TAGLIO PLOTTER · DATO VARIABILE · PRESPAZIATI · COLORI PANTONE · CARTE
          SPECIALI · FORMATI PERSONALIZZATI · STAMPA ECOLOGICA · CONSEGNA RAPIDA
          · BOLOGNA DAL 1970 · TAGLIO PLOTTER · DATO VARIABILE · PRESPAZIATI ·
          COLORI PANTONE · CARTE SPECIALI ·
        </motion.div>
      </div>

      {/* Halftone Dots Pattern - più leggero */}
      <motion.div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #000 0.5px, transparent 0.5px)`,
          backgroundSize: '14px 14px',
          y: y2,
        }}
      />

      {/* CMYK Ink Blobs - Desktop only */}
      {!isMobile && (
        <>
          {/* Cyan */}
          <motion.div
            className="absolute top-[18%] left-[5%] w-64 h-64 rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(0, 183, 235, 0.15), transparent)',
              y: y1,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Magenta */}
          <motion.div
            className="absolute top-[25%] right-[8%] w-80 h-80 rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(236, 0, 140, 0.12), transparent)',
              y: y2,
            }}
            animate={{
              scale: [1, 1.15, 1],
              x: [0, -25, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Yellow (Brand color) */}
          <motion.div
            className="absolute bottom-[25%] left-[12%] w-72 h-72 rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(198, 217, 46, 0.18), transparent)',
              y: y1,
            }}
            animate={{
              scale: [1, 1.25, 1],
              y: [0, -30, 0],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Black (Key) */}
          <motion.div
            className="absolute bottom-[35%] right-[15%] w-56 h-56 rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(0, 0, 0, 0.06), transparent)',
              y: y2,
            }}
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 20, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* Main content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10 flex flex-col justify-center items-center min-h-screen"
        style={{ opacity }}
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 md:mb-20"
        >
          <motion.div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
            <motion.div
              className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-black/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <span className="tracking-[0.15em] md:tracking-[0.3em] uppercase font-normal text-gray-600 text-[10px] md:text-base leading-tight">
              Dove le tue idee prendono forma
            </span>
            <motion.div
              className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-black/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Main Headline - POPPINS SEMIBOLD - Ridotto del 30% totale */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-semibold leading-[1.3] md:leading-[1.2] text-neutral-800 mb-10 md:mb-16 px-2 md:px-0"
          style={{
            fontSize: isMobile ? '34px' : 'clamp(48px, 10vw, 7.2rem)',
            letterSpacing: '-0.02em',
            wordBreak: 'keep-all',
            overflowWrap: 'normal',
            hyphens: 'none',
          }}
        >
          Studio grafico e
          <br />
          stampa
        </motion.h1>

        {/* Description with fade-in - POPPINS REGULAR 16px */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-gray-700 max-w-xl md:max-w-4xl mx-auto mb-10 md:mb-16 font-normal px-4 md:px-0"
          style={{ fontSize: '16px', lineHeight: '1.7' }}
        >
          Dalla progettazione grafica alla stampa di alta qualità,
          <br />
          offriamo soluzioni creative e su misura per valorizzare la tua
          comunicazione
        </motion.p>

        {/* CTA Button with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="px-4 md:px-0"
        >
          <Link href="/contatti">
            <motion.button
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-[#C6D92E] text-neutral-800 px-8 md:px-10 py-3.5 md:py-5 rounded-full text-base md:text-lg font-semibold tracking-wide overflow-hidden w-full md:w-auto"
            >
              {/* Shine effect */}
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
              )}
              <span className="relative z-10">CONTATTACI</span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
