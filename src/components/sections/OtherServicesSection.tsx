'use client'

import { motion } from 'framer-motion'

interface OtherServicesSectionProps {
  isMobile: boolean
}

const services = [
  'Rilegatura',
  'Plastificazione',
  'Taglio',
  'Taglio plotter',
  'Nobilitazione',
  'Soft Touch',
  'Impaginazione',
  'Stampa dato variabile',
  'Prespaziati',
  'e molto altro...',
]

const OtherServicesSection = ({ isMobile }: OtherServicesSectionProps) => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{}}
          className="text-center mb-12"
        >
          <span className="text-sm text-[#C6D92E] tracking-wider uppercase font-semibold mb-3 block">
            Altri Servizi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            e molto altro...
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: isMobile ? 0 : index * 0.03,
              }}
              viewport={{ once: true }}
              whileHover={isMobile ? {} : { y: -5 }}
              className="relative group"
            >
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:border-[#C6D92E] group-hover:shadow-lg group-hover:shadow-[#C6D92E]/10">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#C6D92E] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-black font-bold text-xs">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <span className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-black transition-colors">
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherServicesSection
