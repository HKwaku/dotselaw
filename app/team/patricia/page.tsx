'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, Award, Briefcase } from 'lucide-react'

export default function PatriciaPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="navbar-blur border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <Link href="/#team" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-smooth group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </Link>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="card-modern overflow-hidden sticky top-28">
                <div className="relative w-full aspect-[3/4] sm:aspect-auto sm:h-72 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <Image src="/team/patricia.jpg" alt="Patricia Mensah" fill className="object-cover object-center" priority />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Patricia Mensah</h1>
                  <p className="text-blue-600 font-semibold mb-6">Associate</p>
                  <div className="space-y-3">
                    <a href="tel:+233242882523" className="flex items-center text-gray-600 hover:text-blue-600 transition-smooth group">
                      <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="group-hover:underline">+233 242 882 523</span>
                    </a>
                    <a href="mailto:patricia@dotselaw.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-smooth group break-all">
                      <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="group-hover:underline">patricia@dotselaw.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">About</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-gray-600 leading-relaxed">
                  <p>Patricia Serwaa Appiah Mensah is an Associate at the firm. She has keen interest and expertise in trade and investment law, banking and finance, construction and real estate as well as civil and criminal litigation.</p>
                  <p>Prior to joining the legal fraternity, she worked as a professional in the area of Real Estate and Construction, Marketing and Relationship Management. She possesses appreciable knowledge in the construction industry having served as the Managing Director of a reputable player in the construction space in Ghana for eight (8) years. She also trained at Darko Law Firm during her pupillage before joining Dotse @ Law.</p>
                </div>
              </div>

              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-blue-600" />
                  Qualifications
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>BA Sociology and Social Work - Kwame Nkrumah University of Science & Technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Diplome d'Etudes en Langue Francaise (DELF A2) - Alliance Francais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Certificate in Public Administration - GIMPA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>LLB - Ghana Institute of Management and Public Administration (GIMPA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>MBA, Marketing - University of Ghana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>BL - Ghana School of Law</span>
                  </li>
                </ul>
              </div>

              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Trade & Investment Law', 'Banking & Finance', 'Construction Law', 'Real Estate', 'Civil Litigation', 'Criminal Litigation'].map((expertise, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-smooth">
                      {expertise}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Membership</h3>
                <p className="text-gray-600 leading-relaxed">Active member of the Ghana Bar Association, contributing her legal acumen to the legal community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Legal Consultation?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Get in touch with Patricia Mensah for expert legal advice and representation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:patricia@dotselaw.com" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Send Email</a>
            <a href="tel:+233242882523" className="glass text-white px-8 py-3 rounded-full font-semibold transition-smooth hover-scale">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}