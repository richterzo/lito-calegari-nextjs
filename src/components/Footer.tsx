'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Palette,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Servizi', href: '#services' },
    { name: 'Contatti', href: '#contact' },
  ]

  const services = ['Progettazione Grafica', 'Stampa Digitale', 'Stampa Offset']

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Palette className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold">Lito Calegari</h3>
            </motion.div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              La progettazione grafica è il punto di partenza di ogni prodotto
              per una comunicazione efficace. Non si tratta soltanto di "mettere
              in bella" un'idea, ma di interpretarla, svilupparla e trasformarla
              in un linguaggio visivo coerente.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-6">Navigazione</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-6">Servizi</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  className="text-gray-300"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <Phone className="text-primary-500" size={20} />
              <span className="text-gray-300">051 563660</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <Mail className="text-primary-500" size={20} />
              <span className="text-gray-300">info@litocalegari.it</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <MapPin className="text-primary-500" size={20} />
              <span className="text-gray-300">Via del Greto 5, Bologna</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Lito Calegari. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <motion.button
              whileHover={{ color: '#ffffff' }}
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </motion.button>
            <motion.button
              whileHover={{ color: '#ffffff' }}
              className="hover:text-white transition-colors duration-300"
            >
              Termini di Servizio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
