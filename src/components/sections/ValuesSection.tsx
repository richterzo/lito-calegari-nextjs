'use client'

import { motion } from 'framer-motion'

const values = [
  {
    number: '#01',
    title: 'Qualità',
    description:
      'Per i tuoi progetti utilizziamo solo materiali di alta qualità.',
  },
  {
    number: '#02',
    title: 'Personalizzazione',
    description:
      'Ogni prodotto è realizzato su misura, curando ogni dettaglio.',
  },
  {
    number: '#03',
    title: 'Rapidità',
    description: 'Dal progetto alla consegna, garantiamo tempi rapidi.',
  },
]

const ValuesSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-black text-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2 }}
        viewport={{}}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C6D92E] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#B8C526] rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: 'spring',
              }}
              viewport={{ margin: '-100px' }}
              style={{ transformStyle: 'preserve-3d' }}
              className="text-center group perspective-1000"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  z: 50,
                  transition: { duration: 0.3 },
                }}
                className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#C6D92E] to-[#B8C526] rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center text-white text-xl sm:text-3xl font-bold shadow-2xl cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {item.number}
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 group-hover:text-[#C6D92E] transition-colors">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
