'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import TypingParagraph from './TypingParagraph'

interface FilosofiaSectionProps {
  isMobile: boolean
}

const FilosofiaSection = ({ isMobile }: FilosofiaSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {!isMobile && (
        <motion.div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-[#C6D92E] to-[#B8C526] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-black/90 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            <div className="p-6 md:p-12">
              <div className="mb-5 md:mb-6">
                <div className="flex gap-2 md:gap-3 flex-wrap overflow-x-auto scrollbar-hide">
                  {[
                    { label: 'Stampa', borderColor: 'border-[#C6D92E]' },
                    {
                      label: 'Personalizzazione',
                      borderColor: 'border-cyan-500',
                    },
                    { label: 'Passione', borderColor: 'border-pink-500' },
                    { label: 'Qualità', borderColor: 'border-purple-500' },
                  ].map((pill, i) => (
                    <motion.div
                      key={pill.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: '-20% 0%' }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className={`flex-shrink-0 px-3 md:px-4 py-1.5 md:py-2 rounded-xl backdrop-blur-sm bg-white/5 text-white text-sm md:text-base font-semibold border-2 ${pill.borderColor} shadow-lg hover:bg-white/10 transition-all`}
                    >
                      {pill.label}
                    </motion.div>
                  ))}
                </div>
              </div>

              {isMobile ? (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-lg md:text-2xl leading-relaxed text-gray-300"
                >
                  La nostra filosofia è quella di accompagnare il Cliente
                  attraverso tutte le fasi del processo creativo partendo da una
                  semplice bozza fino ad arrivare al mockup definitivo del
                  prodotto.
                </motion.p>
              ) : (
                <TypingParagraph
                  text="La nostra filosofia è quella di accompagnare il Cliente attraverso tutte le fasi del processo creativo partendo da una semplice bozza fino ad arrivare al mockup definitivo del prodotto."
                  className="text-xl md:text-3xl leading-relaxed text-gray-300 font-medium"
                  typingSpeed={45}
                />
              )}
            </div>

            <motion.div
              className="relative min-h-[220px] md:min-h-[520px]"
              initial={{ opacity: 0.95, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Image
                src="/images/Artboard-1-1-scaled.png"
                alt="Esempi di materiali stampati"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 md:bg-gradient-to-l md:from-black/0 md:to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilosofiaSection
