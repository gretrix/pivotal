'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const closeServices = () => {
    setIsServicesOpen(false)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close dropdown on page load/route change
  useEffect(() => {
    setIsServicesOpen(false)
    setIsMenuOpen(false)
  }, [])

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <div className="w-32 h-32">
          <Image
            src="/pivotal_tech.png"
            alt="Pivotal Tech Solutions Logo"
            width={128}
            height={128}
            className="w-full h-full object-contain"
            priority
          />
                  </div>
                </Link>
              </div>

          {/* Desktop Navigation - Absolutely Centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-pivotal-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={toggleServices}
                  className="text-gray-600 hover:text-pivotal-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Services
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    <Link href="/services" onClick={closeServices} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pivotal-600 transition-colors duration-200">
                      <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      All Services
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link href="/web-development" onClick={closeServices} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pivotal-600 transition-colors duration-200">
                      <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Web Development
                    </Link>
                    <Link href="/cloud-solutions" onClick={closeServices} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pivotal-600 transition-colors duration-200">
                      <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                      Cloud Solutions
                    </Link>
                    <Link href="/digital-transformation" onClick={closeServices} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pivotal-600 transition-colors duration-200">
                      <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Digital Transformation
                    </Link>
                    <Link href="/ai-machine-learning" onClick={closeServices} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pivotal-600 transition-colors duration-200">
                      <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      AI & Machine Learning
                    </Link>
                    <Link href="/cybersecurity" onClick={closeServices} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pivotal-600 transition-colors duration-200">
                      <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Cybersecurity
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/portfolio" className="text-gray-600 hover:text-pivotal-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Portfolio
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-pivotal-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-pivotal-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </Link>
              <Link href="/blogs" className="text-gray-600 hover:text-pivotal-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Blogs
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
            <Link href="/" onClick={closeMenu} className="text-gray-900 hover:text-pivotal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={toggleServices}
                className="text-gray-600 hover:text-pivotal-600 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left flex items-center justify-between"
              >
                Services
                <svg className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Dropdown Menu */}
              {isServicesOpen && (
                <div className="pl-6 space-y-1">
                  <Link href="/services" onClick={closeServices} className="text-gray-500 hover:text-pivotal-600 flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    All Services
                  </Link>
                  <Link href="/web-development" onClick={closeServices} className="text-gray-500 hover:text-pivotal-600 flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Web Development
                  </Link>
                  <Link href="/cloud-solutions" onClick={closeServices} className="text-gray-500 hover:text-pivotal-600 flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    Cloud Solutions
                  </Link>
                  <Link href="/digital-transformation" onClick={closeServices} className="text-gray-500 hover:text-pivotal-600 flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Digital Transformation
                  </Link>
                  <Link href="/ai-machine-learning" onClick={closeServices} className="text-gray-500 hover:text-pivotal-600 flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    AI & Machine Learning
                  </Link>
                  <Link href="/cybersecurity" onClick={closeServices} className="text-gray-500 hover:text-pivotal-600 flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200">
                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Cybersecurity
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/portfolio" onClick={closeMenu} className="text-gray-600 hover:text-pivotal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
              Portfolio
            </Link>
            <Link href="/about" onClick={closeMenu} className="text-gray-600 hover:text-pivotal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" onClick={closeMenu} className="text-gray-600 hover:text-pivotal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
              Contact
            </Link>
            <Link href="/blogs" onClick={closeMenu} className="text-gray-600 hover:text-pivotal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
              Blogs
            </Link>

          </div>
        </div>
      )}
    </nav>
  )
}
