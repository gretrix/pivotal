export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <p className="text-gray-400 mb-4">
              Empowering businesses with innovative technology solutions that drive growth, 
              efficiency, and digital transformation. We specialize in delivering cutting-edge 
              web development, cloud solutions, AI & machine learning, and cybersecurity services 
              tailored to meet your unique business needs.
            </p>
            <p className="text-gray-400 mb-4">
              Our expert team combines technical excellence with strategic thinking to help 
              organizations navigate the digital landscape and achieve sustainable competitive 
              advantages in today&apos;s rapidly evolving market.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/web-development" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/cloud-solutions" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="/digital-transformation" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="/ai-machine-learning" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="/cybersecurity" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>



          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-pivotal-light-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-gray-400">info@pivotaltech.solutions</p>
                  <p className="text-gray-400">support@pivotaltech.solutions</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-pivotal-light-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-gray-400">404-374-9322</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-pivotal-light-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-400">4290 Bells Ferry Rd Ste 134 #3025</p>
                  <p className="text-gray-400">Kennesaw, GA 30144</p>
                  <p className="text-gray-400">United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; 2025 PivotalTech Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
