'use client'

import Link from 'next/link'
import { ArrowLeft, Briefcase, CheckCircle2 } from 'lucide-react'

export default function LitigationPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Litigation (Civil/Criminal/Alternative Dispute Resolution)</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Litigation is a very complex and time consuming process in Ghana demanding patience and robust strategic approach. Dotse@Law is handling litigation matters throughout Ghana including the Superior Courts of Ghana.
            </p>
          </div>

          <div className="card-modern p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Lawyers are members of the Ghana Bar Association, the Law Society of England and Wales, the Uganda Law Society, the East African Law Society and the Chartered Institute of Arbitrators, UK. Our litigation team is adept in effectively handling various categories of cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Civil Litigation</h3>
              <p className="text-gray-600">Including recovery cases and various civil matters</p>
            </div>
            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Litigation</h3>
              <p className="text-gray-600">Business and commercial disputes</p>
            </div>
            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Criminal Litigation</h3>
              <p className="text-gray-600">Defense and prosecution matters</p>
            </div>
          </div>

          <div className="card-modern p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Disputes We Handle</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Civil Suits, including recovery suits',
                'Corporate & Commercial Disputes',
                'Contractual Disputes',
                'Consumer and Service related disputes',
                'Trade Mark/ Patent/ Copyright/ Design Infringement',
                'White Collar Criminal Matters including fraud',
                'Dispute resolution in judicial and quasi-judicial tribunals'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-modern p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Civil Litigation Expertise</h2>
            <p className="text-gray-700 mb-6">Our team of lawyers are competent in handling the most complex civil disputes such as:</p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                'Suit for Recovery of Money',
                'Suit for Damages',
                'Injunctions',
                'Commercial and Contractual disputes',
                'Eviction Suits',
                'Property Suits',
                'Employee/Employer claims',
                'Consumer laws',
                'Product liability',
                'Medical negligence',
                'Environmental litigation',
                'Construction disputes',
                'Matrimonial matters',
                'IP related litigation',
                'Infrastructure and telecommunications',
                'Taxation disputes'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">International & Domestic Arbitration</h3>
              <p className="text-gray-600 mb-4">We have significant competence in conducting arbitration proceedings and are well informed of all the key institutional rules, including:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>LCIA (London Court of International Arbitration)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>ICC (International Chamber of Commerce)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>HKIAC (Hong Kong International Arbitration Centre)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>SIAC (Singapore International Arbitration Centre)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>ICSID (International Centre for Settlement of Investment Disputes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>UNCITRAL Rules</span>
                </li>
              </ul>
            </div>

            <div className="card-modern p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mediation & Conciliation</h3>
              <p className="text-gray-600 mb-4">We actively advise and represent clients in matters undergoing mediation or conciliation proceedings.</p>
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <p className="text-gray-700 font-semibold">Alternative Dispute Resolution</p>
                <p className="text-gray-600 text-sm mt-2">Cost-effective and time-efficient resolution of disputes through mediation, conciliation, and negotiation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Litigation Services?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for expert legal representation in civil, criminal and alternative dispute resolution matters.
          </p>
          <a href="/#contact" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}
