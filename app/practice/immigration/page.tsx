'use client'

import Link from 'next/link'
import { ArrowLeft, Globe, CheckCircle2 } from 'lucide-react'

export default function ImmigrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="navbar-blur border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <Link href="/#practice" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-smooth group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Practice Areas
          </Link>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Globe className="h-5 w-5" />
              <span className="font-semibold">Practice Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Immigration Advisory Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dotse@Law has expertise in immigration law and our dedicated team of immigration lawyers advise corporate and individual clients on immigration laws and guide them through every step of the complicated immigration process.
            </p>
          </div>

          <div className="card-modern p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
            <div className="space-y-4">
              {[
                'Assisting foreigners in obtaining residency, business, and work permits',
                'Advising on all legal and regulatory immigration requirements under Ghanaian law',
                'Guiding clients through their visa applications to avoid any possible errors',
                'Assisting clients in organizing and filing all required regulatory documents to the appropriate institutions',
                'Ensuring compliance with immigration laws',
                'Advising and representing clients in navigating all their immigration issues'
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-modern p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Advisory Services Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Residency permit',
                'Work permit',
                'Free zone licenses',
                'Rotator permits',
                'Registration and compliance with GIPC',
                'Visa applications',
                'Dual citizenship',
                'Registration and renunciation of citizenship',
                'Naturalization',
                'Emergency entry visas',
                'Deportation issues',
                'Denied entry issues',
                'USA Immigration',
                'UK Immigration',
                'Schengen Immigration',
                'Ghana Immigration'
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-gray-800 font-medium text-sm">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Immigration</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Work permits for employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Business permits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>GIPC registration and compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Free zone licenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Rotator permits</span>
                </li>
              </ul>
            </div>

            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Individual Immigration</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Residency permits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Visa applications (all types)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Dual citizenship applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Naturalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Emergency entry visas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-modern p-8 mt-8 bg-blue-50">
            <h3 className="text-xl font-bold text-gray-900 mb-4">International Immigration</h3>
            <p className="text-gray-700 mb-4">We also provide immigration advisory services for:</p>
            <div className="flex flex-wrap gap-3">
              {['USA Immigration', 'UK Immigration', 'Schengen Immigration', 'Ghana Immigration'].map((item, index) => (
                <div key={index} className="bg-white px-4 py-2 rounded-full border border-blue-200">
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Immigration Services?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for expert legal advice on immigration matters for individuals and corporations.
          </p>
          <a href="/#contact" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}
