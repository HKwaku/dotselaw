'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Briefcase, CheckCircle2 } from 'lucide-react'

export default function CorporatePage() {
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
              <Briefcase className="h-5 w-5" />
              <span className="font-semibold">Practice Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Corporate, Commercial and Contracts</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dotse@Law has an excellent Corporate, Commercial & Contracts Law Practice. Our expert corporate lawyers, consultant chartered accountants, company secretaries and other professionals enjoy high reputation in matters related to all corporate & commercial laws of Ghana and are adept in handling complex commercial and corporate legal matters, advising on entry strategies, risk identification, structuring, planning and documentation.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team combines its expertise over relevant corporate & commercial laws along with its comprehensive understanding of clients' industry and business. This holistic approach enables our Firm to offer its clients proactive legal solutions which are business oriented, pragmatic and workable in real business environment.
            </p>
          </div>

          <div className="card-modern p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">We Assist Our Clients In:</h2>
            <div className="space-y-3">
              {[
                'Understanding legal and regulatory aspects of investing in Ghana and doing business in Ghana',
                'Developing an appropriate entry strategy for setting up business in Ghana',
                'Seeking approvals from various authorities wherever required',
                'Incorporation/setting up of suitable entity like LLC, PRUC, NGOs, Branch Office, Representative Office, etc.',
                'Drafting and execution of legal documentation like shareholders agreement, joint venture agreement, collaboration agreement, technology transfer agreement, IPR license and assignment agreements, etc.',
                'Undertaking applicable legal and regulatory compliances',
                'Setting up of office and advising clients on Real Estate issues, drafting of agreements for acquisition of land/office/buildings'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-modern p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Critical Contracts</h2>
            <p className="text-gray-700 mb-6">Dotse@Law's lawyers offer top class professional expertise and experience in structuring, negotiation, drafting and closing of business critical contracts including:</p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                'EPC Contracts and Construction Contracts',
                'Project Management/Development Contracts',
                'Offshore and Onshore Supplies and Services Contracts',
                'Project Finance Documentation',
                'Asset Purchase Agreements',
                'Business Transfer Agreements',
                'Share Purchase/Subscription Agreements',
                'Lease Agreements for large commercial properties',
                'Conveyance and Mortgage Documents',
                'Sales Agreements',
                'Distributorship Agreements',
                'Franchise Agreements',
                'Trade practices, Advertising and Promotions agreements',
                'Technology Agreements',
                'Software Agreements (End-User, Joint Development, Service & Repair)',
                'Labour and Employment Agreements'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Corporate Legal Services?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for expert legal advice on corporate, commercial and contract matters.
          </p>
          <a href="/#contact" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}
