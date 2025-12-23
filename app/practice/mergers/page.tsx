'use client'

import Link from 'next/link'
import { ArrowLeft, Globe, CheckCircle2 } from 'lucide-react'

export default function MergersPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mergers & Acquisitions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dotse@Law has expertise in Merger & Acquisitions (M&A) practice area and the Firm and its partners have acted for a number of Ghanaian and multinational corporations. The firm advises its clients on all legal and regulatory aspects of M&A.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div className="card-modern p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Firm offers a core team of professional experts comprising of considerably experienced M&A lawyers, chartered accountants and company secretaries who are dedicated to providing expected level of professional services on a timely basis.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dotse@Law's core M&A Practice Group is assisted by experts from other related key areas such as employment laws, environment regulations, antitrust/competition law, intellectual property, real estate and taxation etc.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our M&A Services</h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Due Diligences',
                description: 'We conduct extensive Due Diligences, both from legal and commercial perspectives, in order to ascertain the assets and liabilities of the target company/business/asset, based on the underlying records. This includes visiting data rooms, undertaking extensive review of the relevant documents for the relevant past period, conducting interviews with personnel of target company/business and preparing comprehensive DD reports for clients.'
              },
              {
                title: 'Risk Identification, Analysis & Mitigation',
                description: 'Dotse@Law\'s lawyers identify risks involved (legal, financial as well as commercial) in the proposed transactions. This activity involves determination of any contingent liabilities, pending litigation, incomplete documentation or reporting, any pending commitments of the target company not recorded in the books of accounts etc. The Firm then advises clients on possibility of formulating an appropriate risk mitigation strategy from legal and regulatory points of view and suggests remedial measures and/or steps to rectify the shortfall or deficiencies.'
              },
              {
                title: 'Approvals',
                description: 'We offer adequate professional expertise and experience in drafting Scheme(s) of Arrangement under the Companies Act and obtaining approval from concerned Court(s)/Tribunals, in case the client undertakes a \'court approval\' route of merger/de-merger. In addition, we actively assist clients in obtaining necessary approvals from government agencies, administrative ministries and other government/statutory authorities in M&A transactions wherever such approvals are required.'
              },
              {
                title: 'M&A Documentation',
                description: 'Counsel at our Firm have considerable experience in structuring and negotiating the relatively complicated transaction documentation involved in M&As, including Schemes of Arrangement, Project Finance Documentation, Asset Purchase Agreements, Business Transfer Agreements, Share Purchase/Shares Subscription Agreements, Shareholders Agreements, Joint Venture Conveyance and Mortgage Documents, Franchise Agreements, Technology/IPR Agreements, License and Assignment Agreements, etc.'
              },
              {
                title: 'Closing of M&A Transactions',
                description: 'The Firm has a team of experts who negotiate and provide end to end legal support in closure of the M&A transactions, including reviewing and advising on closing documents.'
              },
              {
                title: 'Transaction Taxes and Stamp Duty Advice',
                description: 'Our M&A team also include tax experts to advise clients on tax planning and other related issues. Stamp duties may pose significant costs on M&A transactions and our team of experts is adept in advising clients on stamp duty laws.'
              },
              {
                title: 'Post-Closing Activities & Compliances',
                description: 'We also advise with respect to post closing compliances including drafting and filing of the necessary documents before the concerned body and in case of requirements sending intimations required under the various contracts.'
              },
              {
                title: 'Management & Operational Support',
                description: 'Dotse@Law has vast experience in advising clients on the managerial and operational controls including methods of acquiring and exercising management control, representation on Board and management, etc.'
              }
            ].map((service, index) => (
              <div key={index} className="card-modern p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-modern p-8 mt-8 bg-blue-50">
            <p className="text-gray-800 leading-relaxed">
              <strong>Confidentiality & Ethics:</strong> Dotse@Law practices utmost strict internal code with respect to conflict of interest and confidentiality expected in handling M&A transactions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need M&A Legal Services?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for expert legal advice on mergers, acquisitions and corporate transactions.
          </p>
          <a href="/#contact" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}
