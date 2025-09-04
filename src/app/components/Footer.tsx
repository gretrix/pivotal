export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pivotal-600 to-pivotal-light-400 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">PIVOTAL</span>
                <span className="text-xs font-medium text-pivotal-light-400 -mt-1">TECH SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering businesses with innovative technology solutions that drive growth, 
              efficiency, and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-pivotal-600 rounded-lg flex items-center justify-center hover:bg-pivotal-700 transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pivotal-600 rounded-lg flex items-center justify-center hover:bg-pivotal-700 transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pivotal-600 rounded-lg flex items-center justify-center hover:bg-pivotal-700 transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-pivotal-light-400 transition-colors duration-200">
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
                  <p className="text-gray-400">info@pivotaltech.com</p>
                  <p className="text-gray-400">support@pivotaltech.com</p>
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
                &copy; 2024 PivotalTech Solutions. All rights reserved.
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
