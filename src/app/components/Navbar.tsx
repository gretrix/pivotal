'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-pivotal-600 to-pivotal-light-400 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-pivotal-600">PIVOTAL</span>
                <span className="text-xs font-medium text-pivotal-light-400 -mt-1">TECH SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Absolutely Centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-pivotal-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-pivotal-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-pivotal-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Services
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-pivotal-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-pivotal-600 focus:outline-none focus:text-pivotal-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link href="/" className="text-gray-900 hover:text-pivotal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-pivotal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-pivotal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-pivotal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  )
}
