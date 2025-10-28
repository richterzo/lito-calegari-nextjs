'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ImageGallerySectionProps {
  isMobile: boolean
}

const galleryImages = [
  {
    src: '/images/Artboard-1-1-scaled.png',
    alt: 'Portfolio 1',
    title: 'Biglietti da Visita',
    desc: 'Design personalizzato e stampa di qualità',
    animation: { rotate: -10, finalRotate: -4 },
    delay: 0,
  },
  {
    src: '/images/banner_cat_magazines_01_d.jpg',
    alt: 'Portfolio 2',
    animation: { rotate: 0, finalRotate: 0 },
    delay: 0.1,
  },
  {
    src: '/images/Artboard-13-scaled.png',
    alt: 'Portfolio 3',
    animation: { rotate: 8, finalRotate: 4 },
    delay: 0.2,
  },
  {
    src: '/images/Artboard-16-scaled.png',
    alt: 'Portfolio 4',
    animation: { rotate: -8, finalRotate: -3 },
    delay: 0.3,
  },
  {
    src: '/images/homepage_4-2.webp',
    alt: 'Portfolio 5',
    animation: { rotate: 8, finalRotate: 3 },
    delay: 0.4,
  },
]

const ImageGallerySection = ({ isMobile }: ImageGallerySectionProps) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div key={index}>
              {isMobile ? (
                <div className="relative h-72 rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: index === 0 ? 80 : 50,
                    rotate: image.animation.rotate,
                    scale: index === 0 ? 0.8 : 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: image.animation.finalRotate,
                    scale: 1,
                  }}
                  transition={{
                    duration: index === 0 ? 0.6 : 0.5,
                    type: 'tween',
                    ease: 'easeOut',
                    delay: image.delay,
                  }}
                  viewport={{ margin: '-100px', once: true }}
                  whileHover={{
                    scale: index === 0 ? 1.05 : 1.03,
                    rotate: index === 0 ? 0 : image.animation.finalRotate / 2,
                    y: -10,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  className={`group relative h-96 rounded-${
                    index === 0 ? '3xl' : '2xl'
                  } overflow-hidden shadow-${
                    index === 0 ? 'premium-lg' : 'xl'
                  } cursor-pointer`}
                  style={{ transformOrigin: 'center center' }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {index === 0 && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h2 className="text-white font-bold text-xl mb-2">
                            {image.title}
                          </h2>
                          <p className="text-white/80 text-sm">{image.desc}</p>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.8 }}
                      />
                    </>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGallerySection
