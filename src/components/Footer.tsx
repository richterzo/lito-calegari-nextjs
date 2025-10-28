'use client'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Orari */}
          <div>
            <h3 className="font-bold text-lg mb-4">I nostri orari</h3>
            <div className="space-y-2 text-gray-300">
              <p>Lunedì - Venerdì: 8:00 - 12:00 | 13:00 - 17:00</p>
              <p>Sabato: Chiuso</p>
              <p>Domenica: Chiuso</p>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contatti</h3>
            <address className="not-italic space-y-2 text-gray-300">
              <p>Via del Greto 5</p>
              <p>40132 Bologna</p>
              <p>
                <a
                  href="tel:051563660"
                  className="hover:text-[#C6D92E] transition-colors"
                >
                  Tel: 051 563660
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@litocalegari.it"
                  className="hover:text-[#C6D92E] transition-colors"
                >
                  Email: info@litocalegari.it
                </a>
              </p>
            </address>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center justify-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/Logo-LitoCalegari.png"
                alt="Lito Calegari"
                width={140}
                height={47}
                className="h-12 w-auto filter brightness-0 invert"
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            Copyright © {new Date().getFullYear()} Lito Calegari. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
