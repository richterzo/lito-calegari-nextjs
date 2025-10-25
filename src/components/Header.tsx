'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface HeaderProps {
  currentPage?: 'home' | 'progettazione-grafica' | 'stampa-digitale' | 'stampa-offset'
}

const Header = ({ currentPage = 'home' }: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="h-20 fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/Logo-LitoCalegari.png"
              alt="Lito Calegari"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link
            href="/"
            className={`text-sm font-medium uppercase tracking-wide transition-colors ${
              currentPage === 'home' 
                ? 'text-[#C6D92E]' 
                : 'text-gray-900 hover:text-[#C6D92E]'
            }`}
          >
            Home
          </Link>
          
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="text-sm font-medium uppercase tracking-wide text-gray-900 hover:text-[#C6D92E] transition-colors flex items-center gap-1"
            >
              Servizi
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div 
              className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 z-50 ${
                isDropdownOpen 
                  ? 'opacity-100 visible' 
                  : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="py-2">
                <Link
                  href="/progettazione-grafica"
                  className={`block px-4 py-2 text-sm transition-colors ${
                    currentPage === 'progettazione-grafica'
                      ? 'text-[#C6D92E] bg-[#C6D92E]/10'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#C6D92E]'
                  }`}
                >
                  Progettazione Grafica
                </Link>
                <Link
                  href="/stampa-digitale"
                  className={`block px-4 py-2 text-sm transition-colors ${
                    currentPage === 'stampa-digitale'
                      ? 'text-[#C6D92E] bg-[#C6D92E]/10'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#C6D92E]'
                  }`}
                >
                  Stampa Digitale
                </Link>
                <Link
                  href="/stampa-offset"
                  className={`block px-4 py-2 text-sm transition-colors ${
                    currentPage === 'stampa-offset'
                      ? 'text-[#C6D92E] bg-[#C6D92E]/10'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#C6D92E]'
                  }`}
                >
                  Stampa Offset
                </Link>
              </div>
            </div>
          </div>
          
          <Link
            href="/#contatti"
            className="text-sm font-medium uppercase tracking-wide text-gray-900 hover:text-[#C6D92E] transition-colors"
          >
            Contatti
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="bg-[#C6D92E] px-6 py-2 rounded-full text-sm font-semibold text-black hover:bg-[#B8C526] transition-colors">
          Preventivo
        </button>
      </div>
    </header>
  )
}

export default Header