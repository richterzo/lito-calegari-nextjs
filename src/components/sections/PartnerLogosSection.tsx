'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface PartnerLogosSectionProps {
  isMobile: boolean
}

const partners = [
  {
    name: 'Ricoh',
    src: '/images/Ricoh_logo_2005.svg.png',
    width: 140,
    height: 50,
  },
  {
    name: 'Roland',
    src: '/images/Roland_Digital_Group_logo.svg.png',
    width: 140,
    height: 50,
  },
  {
    name: 'Adobe',
    src: '/images/Adobe_Corporate_Logo.png',
    width: 120,
    height: 50,
  },
  { name: '3M', src: '/images/3M_Logo.svg-1.png', width: 100, height: 50 },
]

const PartnerLogosSection = ({ isMobile }: PartnerLogosSectionProps) => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{}}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="text-sm text-[#C6D92E] tracking-widest uppercase font-semibold">
              Partner
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
            Il meglio per i tuoi progetti
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{}}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Collaboriamo con i migliori brand del settore
          </motion.p>
        </div>

        {/* Logos Grid */}
        <div className="flex justify-center items-center gap-16 md:gap-24 flex-wrap">
          {partners.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: isMobile ? 0 : index * 0.08,
              }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={isMobile ? {} : { scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-400"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerLogosSection
