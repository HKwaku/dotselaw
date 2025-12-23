'use client'

import Link from 'next/link'
import { ArrowLeft, Building2, CheckCircle2 } from 'lucide-react'

export default function RealEstatePage() {
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
              <Building2 className="h-5 w-5" />
              <span className="font-semibold">Practice Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Real Estate & Construction</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Real estate is the world's largest asset class and our work for organizations active in the sector, whether they're lenders, borrowers, investors, developers or occupiers, gives us a deep understanding of the industry and the way it operates.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Real estate deals are becoming ever more complex and with the introduction of the Real Estate Agency Act 2020 (Act 1047) and the Land Act, 2020 (Act 1036), housing project developers as well as agents have to comply with new rules. The Firm can assist in the registration process as well as development and planning of projects and construction, risk identification and appraisal, representation and liaising with regulators and Government authorities, tax, finance and re-financing, securitization, real estate investment fund formation, structuring and joint ventures, and real estate mergers and acquisitions.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed">
              Dotse@Law provides comprehensive services in all aspects of property and real estate transactions including title due diligence, sale-purchase, leasing, construction-development, mortgage and litigation in respect of industrial, commercial and residential property. Besides serving clients on traditional sale and purchase transactions, our Firm has multifaceted areas of real estate practice.
            </p>
          </div>

          <div className="card-modern p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Real Estate Services</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Entry Level Strategy Planning',
                  description: 'Entry level legal advice and structuring of FDI for individual foreign investors, foreign companies, WOS, Foreign Institutional Investors and NRIs/PIOs.'
                },
                {
                  title: 'Location & Site Analysis and Title Due Diligence',
                  description: 'Legal assistance for finalizing most favorable/preferred location and other allied searches including vetting of documents and verification of title.'
                },
                {
                  title: 'Due Diligence',
                  description: 'Carrying out thorough and exhaustive client specific and also client specified Due Diligences before advising clients.'
                },
                {
                  title: 'Legal Risk Identification and Appraisals',
                  description: 'Identification of legal risks and arriving at appraisals through experts for real estate transactions, development projects and infrastructure projects.'
                },
                {
                  title: 'Finance and Re-financing',
                  description: 'Legal assistance and advice for arranging project finance and also for arranging re-finance on existing projects.'
                },
                {
                  title: 'Auctioning/Bidding',
                  description: 'Legal assistance and advice for auctioning, bidding and contesting for deals.'
                },
                {
                  title: 'Representation and Liaising with Government Authorities',
                  description: 'For securing various clearances from various Government authorities.'
                },
                {
                  title: 'Tax Structuring and Planning',
                  description: 'Legal advice in structuring taxation strategy for Real Estate Projects (Income-Tax, GST etc.) and Tax Planning for the same.'
                },
                {
                  title: 'Transactional Compliance',
                  description: 'Assistance in mandatory legal compliances for various transactions.'
                },
                {
                  title: 'Joint Ventures and Joint Developments',
                  description: 'Advice on structuring of domestic as well as cross-border joint ventures and Joint Development Agreements.'
                }
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-modern p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Real Estate Legal Advisory & Litigation</h2>
            <p className="text-gray-700 mb-6">Our Firm is adept in handling advisory and litigation in real estate related projects including:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Lease related Legal Assistance and Administration',
                'Construction and Development of projects and related contracts',
                'Pre/Post Purchase/Sale documentation',
                'Issuance of Letter of Intent, Public Notice, Agreement-to-Sale, Sale Deed',
                'Appointment of Broker, Project Manager, Architect, Interior Decorator',
                'Certified Surveyor, Certified Valuer appointments',
                'Civil Contractor and Sub-Contractors for projects',
                'Dispute Resolution and Litigation',
                'Landlord/Tenant Proceedings',
                'Buyer/Seller matters',
                'Lessor/Lessee disputes'
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Real Estate Legal Services?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for expert legal advice on property, construction and real estate matters.
          </p>
          <a href="/#contact" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}
