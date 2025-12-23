'use client'

import Link from 'next/link'
import { ArrowLeft, Landmark } from 'lucide-react'

export default function ProjectFinancePage() {
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
              <Landmark className="h-5 w-5" />
              <span className="font-semibold">Practice Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Project Finance & Banking and Financial Laws</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Large-scale projects are subject to a range of challenges, including structuring and financing issues, government regulations, construction and other contractual issues, local law coordination and other elements.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="card-modern p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We provide business, strategic and cultural advice in assisting our clients in structuring, negotiating and documenting the full array of project and financing agreements tailored to each client's needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our lawyers collectively have considerable professional experience with regard to projects finance from acting as legal adviser to financiers and developers of projects and the preparation and negotiation of the financing documentation, inter-creditor arrangements and trust and retention documents, to the carrying out of due diligence on the security assets, project contracts and preparing and negotiating securitization and project finance documentation.
              </p>
            </div>

            <div className="card-modern p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Banking & Financial Services</h2>
              <p className="text-gray-700 leading-relaxed">
                We provide regular service and advice on all types of commercial, financial and other banking transactions, including negotiating loan agreements and other documentations to leading corporations in Ghana and abroad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Finance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Structuring and negotiation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Financing documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Inter-creditor arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Trust and retention documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Due diligence on security assets</span>
                  </li>
                </ul>
              </div>

              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Banking Transactions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Commercial transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Loan agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Financial documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Securitization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Regulatory compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-modern p-8 bg-blue-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Expertise Areas</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Government Regulations',
                  'Construction Contracts',
                  'Local Law Coordination',
                  'Financing Documentation',
                  'Risk Management',
                  'Project Structuring'
                ].map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg text-center">
                    <p className="font-semibold text-gray-800 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Project Finance Services?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for expert legal advice on project finance and banking matters.
          </p>
          <a href="/#contact" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}
