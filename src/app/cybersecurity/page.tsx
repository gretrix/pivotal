import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Solutions - PivotalTech Solutions',
  description: 'Enterprise cybersecurity solutions including threat protection, security audits, compliance, and incident response services.',
  alternates: {
    canonical: 'https://pivotaltech.solutions/cybersecurity',
  },
  openGraph: {
    title: 'Cybersecurity Solutions - PivotalTech Solutions',
    description: 'Enterprise security and threat protection solutions.',
    url: 'https://pivotaltech.solutions/cybersecurity',
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

export default function Cybersecurity() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-pivotal-50">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium shadow-md border border-emerald-200">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Enterprise Security • Threat Protection
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Cyber
                <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  Security
                </span>
                Solutions
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Protect your digital assets with comprehensive cybersecurity solutions. 
                From threat detection to compliance management, we provide enterprise-grade 
                security services that keep your business safe and secure.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="group bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    Secure Your Business
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a href="/portfolio" className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                  <span className="flex items-center justify-center">
                    View Security Cases
                    <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative lg:block">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/30">
                  <div className="space-y-6">
                    {/* Security Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl shadow-md">
                        <div className="text-2xl font-bold text-blue-600">99.9%</div>
                        <div className="text-sm text-gray-600">Threat Block</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl shadow-md">
                        <div className="text-2xl font-bold text-emerald-600">24/7</div>
                        <div className="text-sm text-gray-600">Monitoring</div>
                      </div>
                    </div>
                    
                    {/* Feature List */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">Threat Detection</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-md">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">Data Encryption</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center shadow-md">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">Compliance Management</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl shadow-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive security solutions designed to protect your business from evolving cyber threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Security Assessment */}
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Assessment</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation of your security posture to identify vulnerabilities 
                and recommend improvements for enhanced protection.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vulnerability scanning</li>
                <li>• Penetration testing</li>
                <li>• Security audits</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            {/* Threat Detection & Response */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Threat Detection & Response</h3>
              <p className="text-gray-600 mb-4">
                Advanced threat detection systems with real-time monitoring and 
                rapid incident response capabilities to minimize security breaches.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SIEM implementation</li>
                <li>• Threat intelligence</li>
                <li>• Incident response</li>
                <li>• Forensic analysis</li>
              </ul>
            </div>

            {/* Identity & Access Management */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Identity & Access Management</h3>
              <p className="text-gray-600 mb-4">
                Secure user authentication and authorization systems to control 
                access to your critical business resources and data.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-factor authentication</li>
                <li>• Single sign-on (SSO)</li>
                <li>• Privileged access management</li>
                <li>• User provisioning</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Protection</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive data security solutions including encryption, 
                backup, and recovery to safeguard your sensitive information.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Data encryption</li>
                <li>• Backup & recovery</li>
                <li>• Data loss prevention</li>
                <li>• Privacy compliance</li>
              </ul>
            </div>

            {/* Network Security */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Security</h3>
              <p className="text-gray-600 mb-4">
                Protect your network infrastructure with advanced firewalls, 
                intrusion detection, and secure network architecture design.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Firewall management</li>
                <li>• Intrusion detection</li>
                <li>• VPN solutions</li>
                <li>• Network segmentation</li>
              </ul>
            </div>

            {/* Compliance & Governance */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl border border-indigo-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance & Governance</h3>
              <p className="text-gray-600 mb-4">
                Ensure regulatory compliance with frameworks like GDPR, HIPAA, 
                SOX, and PCI DSS through comprehensive governance programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• GDPR compliance</li>
                <li>• HIPAA compliance</li>
                <li>• PCI DSS</li>
                <li>• Security policies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Security Technologies & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading security technologies and platforms we leverage to protect your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* SIEM & Monitoring */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SIEM & Monitoring</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Splunk</li>
                <li>IBM QRadar</li>
                <li>ArcSight</li>
                <li>LogRhythm</li>
              </ul>
            </div>

            {/* Endpoint Protection */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Endpoint Protection</h3>
              <ul className="text-gray-600 space-y-1">
                <li>CrowdStrike</li>
                <li>Carbon Black</li>
                <li>Symantec</li>
                <li>McAfee</li>
              </ul>
            </div>

            {/* Network Security */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Network Security</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Palo Alto</li>
                <li>Fortinet</li>
                <li>Cisco ASA</li>
                <li>Check Point</li>
              </ul>
            </div>

            {/* Identity Management */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Identity Management</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Okta</li>
                <li>Microsoft Azure AD</li>
                <li>CyberArk</li>
                <li>BeyondTrust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Current Threat Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the evolving cybersecurity threats and how we protect against them
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ransomware */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-100 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ransomware</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Data encryption attacks</li>
                <li>• Business disruption</li>
                <li>• Financial extortion</li>
                <li>• Recovery challenges</li>
              </ul>
            </div>

            {/* Phishing */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Phishing</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Social engineering</li>
                <li>• Credential theft</li>
                <li>• Malware distribution</li>
                <li>• Business email compromise</li>
              </ul>
            </div>

            {/* Insider Threats */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Insider Threats</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Privileged access abuse</li>
                <li>• Data exfiltration</li>
                <li>• Sabotage</li>
                <li>• Accidental exposure</li>
              </ul>
            </div>

            {/* Cloud Security */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud Security</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Misconfigured services</li>
                <li>• Data breaches</li>
                <li>• Access control issues</li>
                <li>• Compliance gaps</li>
              </ul>
            </div>

            {/* IoT Security */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">IoT Security</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Device vulnerabilities</li>
                <li>• Network infiltration</li>
                <li>• Botnet attacks</li>
                <li>• Privacy concerns</li>
              </ul>
            </div>

            {/* Supply Chain */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Supply Chain</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Third-party risks</li>
                <li>• Software vulnerabilities</li>
                <li>• Vendor compromise</li>
                <li>• Trust relationships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cybersecurity Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partner with security experts who understand both technology and business risk
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certified Experts</h3>
              <p className="text-gray-600">
                CISSP, CISM, and CEH certified professionals with deep expertise in cybersecurity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Monitoring</h3>
              <p className="text-gray-600">
                Round-the-clock security monitoring and incident response to protect your business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Ready</h3>
              <p className="text-gray-600">
                Ensure regulatory compliance with frameworks like GDPR, HIPAA, and PCI DSS.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proactive Defense</h3>
              <p className="text-gray-600">
                Proactive threat hunting and security optimization to stay ahead of attackers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Let&apos;s discuss your security needs and create a comprehensive 
            cybersecurity strategy that protects your digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Secure Your Business
            </a>
            <a href="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg">
              View Security Cases
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


