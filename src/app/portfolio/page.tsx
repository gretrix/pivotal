export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-pivotal-50">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we&apos;ve helped businesses transform 
            their operations with innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">E-Commerce Platform</h3>
              <p className="text-gray-600 mb-4">
                Complete e-commerce solution with payment integration, inventory management, 
                and customer analytics for a growing retail business.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">MongoDB</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Seamless migration of legacy systems to AWS cloud infrastructure, 
                resulting in 40% cost reduction and improved scalability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Kubernetes</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analytics Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Intelligent business analytics platform with machine learning capabilities 
                for predictive insights and automated reporting.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">React</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Banking App</h3>
              <p className="text-gray-600 mb-4">
                Secure mobile banking application with biometric authentication, 
                real-time transactions, and comprehensive financial management tools.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity Suite</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive cybersecurity solution with threat detection, 
                vulnerability assessment, and automated incident response.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Security</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Docker</span>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl border border-indigo-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ERP System</h3>
              <p className="text-gray-600 mb-4">
                Enterprise resource planning system with integrated modules for 
                finance, HR, inventory, and customer relationship management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Spring</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Project Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself - delivering exceptional results across all projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-lg text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-lg text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-lg text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-lg text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Let&apos;s discuss how we can help bring your vision to life with our 
            proven expertise and innovative solutions.
          </p>
          <a href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  )
}


