'use client'

import { motion } from 'framer-motion'

const DescriptionSection = () => {
  const keywords = [
    { text: 'stampa', delay: 0.3 },
    { text: 'biglietti da visita', delay: 0.5 },
    { text: 'cataloghi', delay: 0.7 },
    { text: 'banner', delay: 0.9 },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C6D92E] rounded-full blur-[150px] opacity-5 pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{}}
          className="text-2xl md:text-4xl text-gray-900 leading-relaxed font-normal"
          style={{
            lineHeight: 1.6,
            fontWeight: 400,
            letterSpacing: '-0.02em',
          }}
        >
          Offriamo un&apos;ampia gamma di soluzioni di{' '}
          {keywords.map((keyword, index) => (
            <span key={index}>
              <motion.span
                initial={{ backgroundSize: '0% 100%' }}
                whileInView={{ backgroundSize: '100% 100%' }}
                transition={{ duration: 0.8, delay: keyword.delay }}
                viewport={{}}
                className="font-semibold relative inline-block text-gray-900"
                style={{
                  background:
                    'linear-gradient(to right, #C6D92E 0%, #C6D92E 100%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0 88%',
                  backgroundSize: '0% 30%',
                  fontWeight: 600,
                }}
              >
                {keyword.text}
              </motion.span>
              {index === 0 && ', dai '}
              {index === 1 && ' ai '}
              {index === 2 && ', dai '}
            </span>
          ))}{' '}
          ai materiali personalizzati, garantendo{' '}
          <span className="text-gray-900 font-medium">qualità</span>,{' '}
          <span className="text-gray-900 font-medium">creatività</span> e{' '}
          <span className="text-gray-900 font-medium">
            attenzione ai dettagli
          </span>{' '}
          in ogni progetto.
        </motion.p>
      </div>
    </section>
  )
}

export default DescriptionSection
