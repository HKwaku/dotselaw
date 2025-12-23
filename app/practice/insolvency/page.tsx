'use client'

import Link from 'next/link'
import { ArrowLeft, Landmark } from 'lucide-react'

export default function InsolvencyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Insolvency & Restructuring</h1>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <div className="card-modern p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ghana has enacted a new law to regulate Insolvency, Bankruptcy and Restructuring. The newly enacted law repeals the winding up and liquidation proceedings under the Bodies Corporate (Official Liquidations) Act, 1963 (Act 180).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Corporate Restructuring and Insolvency Act 2020 (Act 1015), complete with the Companies Act, 2019 (Act 992), will introduce a new era in the Ghanaian business environment in which creditors, employees and shareholders' interests are adequately protected and private enterprises are ensured a safe transition of the business.
              </p>
            </div>

            <div className="card-modern p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Firm has a team of qualified Insolvency Resolution Professionals and lawyers who offer strategic advice to corporate debtors, creditors and other stakeholders during the insolvency proceedings and provide professional services required during the process and represent them in court/tribunal proceedings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our experienced lawyers can handle complex cases involving companies with distressed assets both from the legal and the business side in an effective manner.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services for Debtors</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Strategic restructuring advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Insolvency proceedings representation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Business continuity planning</span>
                  </li>
                </ul>
              </div>

              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services for Creditors</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Debt recovery strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Protection of creditor interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Court/tribunal representation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Insolvency & Restructuring Services?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for expert legal advice on insolvency proceedings and corporate restructuring.
          </p>
          <a href="/#contact" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}
