export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Terms of
            <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            These terms govern your use of our services. Please read them carefully.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl border border-blue-100 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You must be at least 18 years old to use our services</li>
                <li>You agree to provide accurate and complete information</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You agree to use our services in compliance with applicable laws</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-700 mb-4">
                PivotalTech Solutions provides technology consulting and development services including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Web and mobile application development</li>
                <li>Cloud infrastructure and migration services</li>
                <li>Digital transformation consulting</li>
                <li>AI and machine learning solutions</li>
                <li>Cybersecurity services</li>
                <li>Data analytics and business intelligence</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms and conditions for our services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Payment is due according to the terms specified in your service agreement</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are exclusive of applicable taxes</li>
                <li>Refunds are subject to our refund policy</li>
                <li>We reserve the right to suspend services for non-payment</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Intellectual property rights and ownership:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We retain ownership of our proprietary technology and methodologies</li>
                <li>Client retains ownership of their data and business processes</li>
                <li>Work product ownership is defined in individual service agreements</li>
                <li>You may not reverse engineer or copy our proprietary solutions</li>
                <li>We respect third-party intellectual property rights</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-2xl border border-gray-100 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Our liability is limited as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Services are provided &quot;as is&quot; without warranties</li>
                <li>We are not liable for indirect or consequential damages</li>
                <li>Our total liability is limited to the amount paid for services</li>
                <li>We are not responsible for third-party actions or services</li>
                <li>Force majeure events may excuse performance delays</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-100 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services under the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>With 30 days written notice for convenience</li>
                <li>Immediately for material breach of terms</li>
                <li>Upon completion of agreed-upon deliverables</li>
                <li>For non-payment after cure period</li>
                <li>Upon mutual agreement of both parties</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-100 shadow-lg mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="text-gray-700">
                <p><strong>Email:</strong> legal@pivotaltech.com</p>
                <p><strong>Address:</strong> 4290 Bells Ferry Rd Ste 134 #3025, Kennesaw, GA 30144</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
