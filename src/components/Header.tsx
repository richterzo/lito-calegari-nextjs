'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Show navbar after delay or on first scroll
  useEffect(() => {
    // Show after 2 seconds automatically
    const timer = setTimeout(() => setIsVisible(true), 2000)

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar on any scroll, hide when at top
      if (currentScrollY > 10) {
        setIsVisible(true)
        setIsScrolled(true)
        clearTimeout(timer)
      } else {
        setIsScrolled(false)
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => setIsMobileMenuOpen(false), 0)
    return () => clearTimeout(timer)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const isActive = (path: string) => pathname === path

  const services = [
    { href: '/progettazione-grafica', label: 'Progettazione Grafica' },
    { href: '/stampa-digitale', label: 'Stampa Digitale' },
    { href: '/stampa-offset', label: 'Stampa Offset' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: isVisible ? 0 : 0,
        }}
        className={`h-20 fixed top-0 w-full backdrop-blur-xl shadow-sm border-b z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 border-gray-100/50'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" aria-label="Torna alla home">
              <Image
                src="/Logo-LitoCalegari.png"
                alt="Lito Calegari"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className={`relative text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive('/')
                    ? 'text-[#C6D92E]'
                    : 'text-gray-900 hover:text-[#C6D92E]'
                }`}
              >
                Home
                {isActive('/') && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#C6D92E]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>

            <div className="relative group">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="text-sm font-semibold uppercase tracking-wide text-gray-900 hover:text-[#C6D92E] transition-colors flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={isDropdownOpen}
              >
                Servizi
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 ${
                  isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                role="menu"
              >
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${
                        isActive(service.href)
                          ? 'text-[#C6D92E] bg-[#C6D92E]/10'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#C6D92E]'
                      }`}
                      role="menuitem"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contatti"
              className="text-sm font-semibold uppercase tracking-wide text-gray-900 hover:text-[#C6D92E] transition-colors"
            >
              Contatti
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              href="/contatti"
              className="relative overflow-hidden bg-[#C6D92E] px-6 py-2 rounded-full text-sm font-semibold text-black hover:bg-[#B8C526] transition-all group"
            >
              <span className="relative z-10">Contattaci</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:text-[#C6D92E] transition-colors"
            aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[90] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-20 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="p-6 space-y-6">
                <Link
                  href="/"
                  className={`block text-base font-semibold uppercase tracking-wide transition-colors ${
                    isActive('/') ? 'text-[#C6D92E]' : 'text-gray-900'
                  }`}
                >
                  Home
                </Link>

                <div>
                  <div className="text-base font-semibold uppercase tracking-wide text-gray-900 mb-3">
                    Servizi
                  </div>
                  <div className="pl-4 space-y-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block text-sm font-medium transition-colors ${
                          isActive(service.href)
                            ? 'text-[#C6D92E]'
                            : 'text-gray-700'
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contatti"
                  className={`block text-base font-semibold uppercase tracking-wide transition-colors ${
                    isActive('/contatti') ? 'text-[#C6D92E]' : 'text-gray-900'
                  }`}
                >
                  Contatti
                </Link>

                <Link
                  href="/contatti"
                  className="block w-full bg-[#C6D92E] px-6 py-3 rounded-full text-center text-sm font-semibold text-black hover:bg-[#B8C526] transition-colors mt-8"
                >
                  Contattaci
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
