'use client'

import Link from 'next/link'
import { ArrowLeft, Award, CheckCircle2 } from 'lucide-react'

export default function PrivateEquityPage() {
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
              <Award className="h-5 w-5" />
              <span className="font-semibold">Practice Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Private Equity, Venture Capital & Funds</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              In this era of strict commercial compliance, private equity funds and private companies must comply with a myriad of increasingly complex regulations. From fund formation to structuring and documenting complex deals, our Private Equity Practice counsels and assists in the entire spectrum.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="card-modern p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We represent private equity players in their formation and fund raising activities as well as with all phases of their venture investment activities. We also represent emerging companies who seek venture capital business.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our funds practice team advises domestic and offshore private investment funds, including private equity funds, venture capital funds, real estate funds and mutual funds on all aspects of fund organization, structuring and offer a broad array of legal know-how to support the formation and ongoing operations of our fund clients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It is the combination of our corporate, leveraged finance, securitization, mezzanine, and high-yield and full range of other finance expertise that makes us unique.
              </p>
            </div>

            <div className="card-modern p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Services</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                With a dedicated team as well as close links with our Finance, Corporate and Tax practices, we can quickly assemble and provide local and industry focus with international perspective to provide practical, integrated legal advice for all our clients' capital markets activities.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Advice Covers the Whole Financing Life Cycle:</h3>
              <div className="space-y-4">
                {[
                  'Conducting a legal due diligence exercise in the context of the disclosure to be made by the issuer in the Red Herring Prospectus/ Information Memorandum/ Listing Circular/ registration statement etc.',
                  'Assisting the issuer company to comply with all listing requirements including overseas in case of ADR/GDR/ FCCB/ Euro Notes.',
                  'Advising clients on issues relating to the raising of debt/ issuance of equity / equity linked instruments including the Ghanaian regulatory approvals required.'
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fund Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Fund formation and structuring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Fund raising activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Regulatory compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Ongoing operations support</span>
                  </li>
                </ul>
              </div>

              <div className="card-modern p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Structuring equity investments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Bridge and debt financing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Follow-on investments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Investment disposal strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Private Equity Services?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for expert legal advice on private equity, venture capital and fund matters.
          </p>
          <a href="/#contact" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}
