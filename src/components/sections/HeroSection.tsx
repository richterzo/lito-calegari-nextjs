'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  isMobile: boolean
}

const HeroSection = ({ isMobile }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Blueprint Paper Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-yellow-50/20" />

      {/* Animated Typography Bands - Desktop only for performance */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-[15%] left-0 whitespace-nowrap font-bold text-7xl md:text-9xl text-gray-900 opacity-[0.06]"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          >
            GRAFICA • DESIGN • CREATIVITÀ • INNOVAZIONE • QUALITÀ •{' '}
          </motion.div>
          <motion.div
            className="absolute bottom-[15%] right-0 whitespace-nowrap font-bold text-7xl md:text-9xl text-gray-900 opacity-[0.06]"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
          >
            OFFSET • DIGITALE • ESPERIENZA • PROFESSIONALITÀ • ARTE •{' '}
          </motion.div>
        </div>
      )}

      {/* Center Text - STAMPA */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      >
        <div className="font-bold text-[20vw] md:text-[25vw] text-gray-900 whitespace-nowrap">
          STAMPA
        </div>
      </div>

      {/* Technical Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 123, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 123, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Finer grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 123, 255, 0.1) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(0, 123, 255, 0.1) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '10px 10px',
        }}
      />

      {/* Paper Texture Noise */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* CMYK Color blobs - Desktop only */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full blur-3xl opacity-20"
            style={{ background: 'rgba(0, 183, 235, 0.4)' }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[25%] right-[10%] w-40 h-40 rounded-full blur-3xl opacity-15"
            style={{ background: 'rgba(236, 0, 140, 0.4)' }}
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[20%] left-[15%] w-36 h-36 rounded-full blur-3xl opacity-20"
            style={{ background: 'rgba(198, 217, 46, 0.5)' }}
            animate={{
              y: [0, -35, 0],
              scale: [1, 1.25, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[30%] right-[12%] w-28 h-28 rounded-full blur-3xl opacity-10"
            style={{ background: 'rgba(0, 0, 0, 0.3)' }}
            animate={{
              y: [0, 25, 0],
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div>
          {/* Overline */}
          <div className="mb-8 flex items-center justify-center gap-3">
            {!isMobile && (
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-transparent to-[#C6D92E]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            )}
            <p className="text-xs md:text-sm text-gray-600 tracking-[0.3em] uppercase font-semibold">
              Dove le tue idee prendono forma
            </p>
            {!isMobile && (
              <motion.div
                className="h-px w-12 bg-gradient-to-l from-transparent to-[#C6D92E]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            )}
          </div>

          {/* Main Headline */}
          <h1
            className="mb-8 leading-[0.95]"
            style={{
              fontSize: 'clamp(2.8rem, 9vw, 8rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              height: 'auto',
            }}
          >
            <span className="block text-gray-900" style={{ fontWeight: 600 }}>
              Studio grafico e
            </span>
            <span
              className="block mt-2 text-gray-900"
              style={{ fontWeight: 600 }}
            >
              stampa
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12 font-normal"
            style={{ lineHeight: 1.7 }}
          >
            Dalla progettazione grafica alla stampa di alta qualità, offriamo
            soluzioni creative e su misura per valorizzare la tua comunicazione
          </p>

          {/* CTA Button */}
          <div className="mt-12">
            <Link
              href="/contatti"
              className="inline-block bg-[#C6D92E] text-black px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#B8C526] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              CONTATTACI
            </Link>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-20"
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-xs text-gray-600 tracking-widest uppercase font-medium">
                Scroll
              </span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
                <motion.div
                  className="w-1.5 h-1.5 bg-gray-600 rounded-full"
                  animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
