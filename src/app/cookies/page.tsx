import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - PivotalTech Solutions',
  description: 'Learn about how PivotalTech Solutions uses cookies and similar technologies to enhance your browsing experience.',
  alternates: {
    canonical: 'https://pivotaltech.solutions/cookies',
  },
  openGraph: {
    title: 'Cookie Policy - PivotalTech Solutions',
    description: 'Learn about how we use cookies and similar technologies.',
    url: 'https://pivotaltech.solutions/cookies',
    siteName: 'PivotalTech Solutions',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function CookiePolicyPage() {
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
            Cookie
            <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your experience.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl border border-blue-100 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cookies are harmless and cannot damage your device</li>
                <li>They help websites remember your preferences</li>
                <li>They enable website functionality and analytics</li>
                <li>You can control cookie settings in your browser</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700">
                    These cookies are necessary for the website to function properly. They enable basic 
                    functions like page navigation and access to secure areas of the website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-700">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-700">
                    These cookies enable enhanced functionality and personalization, such as remembering 
                    your preferences and settings.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-700">
                    These cookies are used to track visitors across websites to display relevant and 
                    engaging advertisements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and user behavior</li>
                <li>To improve website performance and functionality</li>
                <li>To provide personalized content and recommendations</li>
                <li>To ensure website security and prevent fraud</li>
                <li>To measure the effectiveness of our marketing campaigns</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that set their own cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Google Analytics:</strong> For website traffic analysis</li>
                <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                <li><strong>Marketing Tools:</strong> For advertising and lead generation</li>
                <li><strong>Customer Support:</strong> For chat and support features</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-2xl border border-gray-100 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through settings</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to choose your preferences</li>
                <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                <li><strong>Contact Us:</strong> Reach out if you have questions about our cookie usage</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-100 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Retention</h2>
              <p className="text-gray-700 mb-4">
                Different cookies have different lifespans:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
                <li><strong>First-Party Cookies:</strong> Set by our website directly</li>
                <li><strong>Third-Party Cookies:</strong> Set by external services we use</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-100 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
              <div className="text-gray-700">
                <p><strong>Email:</strong> privacy@pivotaltech.solutions</p>
                <p><strong>Address:</strong> 4290 Bells Ferry Rd Ste 134 #3025, Kennesaw, GA 30144</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
