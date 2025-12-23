'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, Award, Briefcase } from 'lucide-react'

export default function GovernorPage() {
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
                  <Image src="/team/governor.jpg" alt="Governor Ahene-Amanquanor" fill className="object-cover object-center" priority />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Governor Ahene-Amanquanor</h1>
                  <p className="text-blue-600 font-semibold mb-6">Associate</p>
                  <div className="space-y-3">
                    <a href="tel:+233209622558" className="flex items-center text-gray-600 hover:text-blue-600 transition-smooth group">
                      <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="group-hover:underline">+233 209622558</span>
                    </a>
                    <a href="mailto:governor@dotselaw.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-smooth group break-all">
                      <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="group-hover:underline">governor@dotselaw.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">About</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-gray-600 leading-relaxed">
                  <p>Governor Ahene-Amanquanor is an Associate at the firm. He is a trained lawyer and a member of the Ghana Bar Association.</p>
                  <p>He trained at Yartey and Associates during his pupilage before joining Dotse @ Law. Governor also doubles as the Legal Officer and Programme/Secretarial Assistant for Development Agenda And Productivity Institute, Accra (DAAPI), an innovative labour productivity/human-centered management social enterprise.</p>
                  <p>Governor also provides legal research for some research consultancies. Specifically, he advises on legal stances related to stakeholder organizations that should take on global, continental, and national legal/conventional frameworks and reactively and proactively redress the research findings.</p>
                  <p>Contributing to charity, Governor is the head of Legal Affairs for the 2014 Year Group of University Basic School, Legon and is also an advisor to the Genius Girls Empowering Movement (GGEM).</p>
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
                    <span>LLB - University of Professional Studies, Accra</span>
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
                  Additional Roles
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Legal Officer & Programme/Secretarial Assistant - Development Agenda And Productivity Institute, Accra (DAAPI)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Head of Legal Affairs - 2014 Year Group of University Basic School, Legon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Advisor - Genius Girls Empowering Movement (GGEM)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Legal Research Consultant for various research consultancies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Legal Consultation?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Get in touch with Governor Ahene-Amanquanor for expert legal advice and representation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:governor@dotselaw.com" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Send Email</a>
            <a href="tel:+233209622558" className="glass text-white px-8 py-3 rounded-full font-semibold transition-smooth hover-scale">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
