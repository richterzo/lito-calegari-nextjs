'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface TestimonialsSectionProps {
  isMobile: boolean
  currentIndex: number
  onNext: () => void
  onPrev: () => void
  onIndexChange: (index: number) => void
}

const testimonials = [
  {
    name: 'Mario Photokitesurf',
    text: "Molto cordiali e disponibili, forniscono ottimi consigli per un risultato impeccabile dalla grafica superiore!!! ...anche oggi ne ho avuto dimostrazione... nonostante la richiesta dell'ultimo momento, ho avuto subito un nuovo logo (STUPENDO!!!) e le stampe che mi servivano.",
    avatar: '/images/9434619-scaled-254x254.jpg',
  },
  {
    name: 'Fabrizio P.',
    text: 'Gentilissimi e bravissimi! Mi sono rivolto a loro per stampare la mia tesi per la quale richiedevo un impaginazione in A4 orizzontale tipo rivista (non penso stampino tesi classiche) con molte immagini e colori. Sono estremamente soddisfatto del risultato e della qualità della stampa, super consigliati e con prezzi ottimi!',
    avatar: '/images/9439678-scaled-254x254.jpg',
  },
  {
    name: 'Patrick Pagliaro',
    text: "Super soddisfatto del servizio offerto per l'impaginazione del mio catalogo prima e la stampa dopo. Molto bravi nel gestire il progetto. La comunicazione è stata chiara. Il risultato finale ha superato le mie aspettative",
    avatar: '/images/9440461-scaled-254x254.jpg',
  },
  {
    name: 'Antonio Tricarico',
    text: 'Preparati e attenti al più piccolo dettaglio, mi hanno sempre proposto la soluzione migliore a fronte dei vincoli di tempi e costi. Consigliato ad occhi chiusi.',
    avatar: '/images/9439727-scaled-254x254.jpg',
  },
]

const TestimonialsSection = ({
  isMobile,
  currentIndex,
  onNext,
  onPrev,
  onIndexChange,
}: TestimonialsSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#C6D92E] rounded-full blur-[120px] opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-black rounded-full blur-[120px] opacity-5"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      )}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
              Da Google
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{}}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Cosa dicono di noi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{}}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            La soddisfazione dei nostri clienti è la nostra priorità
          </motion.p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isMobile ? -50 : -100 }}
              transition={{
                duration: isMobile ? 0.3 : 0.5,
                ease: 'easeInOut',
              }}
              drag={isMobile ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(e, { offset, velocity }) => {
                if (!isMobile) return
                const swipe = offset.x * velocity.x
                if (swipe > 5000) {
                  onPrev()
                } else if (swipe < -5000) {
                  onNext()
                }
              }}
              className={`relative bg-white p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl ${
                isMobile ? 'cursor-grab active:cursor-grabbing' : ''
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-[#C6D92E] opacity-20 text-7xl font-serif">
                &ldquo;
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-6 md:mb-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        width={100}
                        height={100}
                        className="rounded-full shadow-2xl ring-4 ring-[#C6D92E]/30"
                        loading="lazy"
                      />
                      {/* Badge */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#C6D92E] rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-neutral-800"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                      &ldquo;{testimonials[currentIndex].text}&rdquo;
                    </p>

                    <div>
                      <p className="font-bold text-lg md:text-xl text-gray-900">
                        {testimonials[currentIndex].name}
                      </p>
                      {/* Stars */}
                      <div className="flex gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-[#C6D92E]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-8 right-8 w-16 h-16 border-4 border-[#C6D92E] rounded-tl-3xl opacity-20" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 md:gap-6 mt-8 md:mt-10">
            <button
              onClick={onPrev}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-colors duration-300 shadow-lg touch-manipulation active:scale-95"
              aria-label="Testimonial precedente"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2.5 md:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onIndexChange(index)}
                  className={`h-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation active:scale-90 ${
                    index === currentIndex
                      ? 'w-10 md:w-12 bg-[#C6D92E]'
                      : 'w-3 md:w-3 bg-gray-300'
                  }`}
                  aria-label={`Vai al testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={onNext}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C6D92E] hover:text-black transition-colors duration-300 shadow-lg touch-manipulation active:scale-95"
              aria-label="Testimonial successivo"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
            </button>
          </div>

          {/* Swipe indicator for mobile */}
          {isMobile && (
            <div className="md:hidden text-center mt-6 text-sm text-gray-600 flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Scorri per cambiare
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
