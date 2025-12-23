'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, Award, Briefcase } from 'lucide-react'

export default function DivinePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <header className="navbar-blur border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <Link 
            href="/#team" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-smooth group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </Link>
        </div>
      </header>

      {/* Profile Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Profile Image */}
            <div className="md:col-span-1">
              <div className="card-modern overflow-hidden sticky top-28">
                <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src="/team/divine.jpg"
                    alt="Divine Dotse Tettey"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Divine Dotse Tettey</h1>
                  <p className="text-blue-600 font-semibold mb-6">Managing Partner</p>
                  
                  <div className="space-y-3">
                    <a 
                      href="tel:+233246950073" 
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-smooth group"
                    >
                      <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="group-hover:underline">+233 246950073</span>
                    </a>
                    <a 
                      href="mailto:dotse@dotselaw.com" 
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-smooth group break-all"
                    >
                      <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="group-hover:underline">dotse@dotselaw.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Bio Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">About</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Divine Dotse Tettey is a dual qualified lawyer of England and Wales and Ghana and is a member of the Ghana Bar Association, the Law Society of England and Wales, the Chartered Institute of Arbitrators, UK and the International Compliance Association. He has over twelve years' cumulative experience in corporate financial advisory, investment banking, private equity fund management, industrial operations and general law practice.
                  </p>
                  <p>
                    He has provided legal and investment advice to clients within various sectors of the Ghanaian economy including, mining, energy, oil and gas, finance, investments and private equity. He has extensive experience in Private Equity investments across West Africa having been involved in deal origination, execution and closing in Ghana, Nigeria, Liberia, Cote D'Ivoire, Burkina Faso, Niger, and Mali.
                  </p>
                  <p>
                    Divine has keen interest and expertise in Trade, energy, oil and gas, extractives, Investments and Labour law as well as Corporate Finance, Private Equity, Structured Finance, Capital Markets and Civil litigation. Divine has had stints at the law firm, JLD & MB Legal Consultancy and at the Legal Department of Access Bank (Ghana) Plc. He also trained at the prestigious law firm, Kulendi@Law and worked as a founding partner at Cudjoe & Dotse PRUC before starting Dotse@Law.
                  </p>
                </div>
              </div>

              {/* Qualifications */}
              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-blue-600" />
                  Qualifications
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>BSc in Molecular Biology and Biotechnology - University of Cape Coast</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>LLB - University of London, UK</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>BL - Ghana School of Law</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Qualifying Certificate - Solicitors Regulation Authority, UK</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Ghana Stock Exchange Securities Industry Courses - Qualified as Dealing Officer</span>
                  </li>
                </ul>
              </div>

              {/* Expertise */}
              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Trade Law',
                    'Energy & Oil Law',
                    'Extractives Law',
                    'Investment Law',
                    'Labour Law',
                    'Corporate Finance',
                    'Private Equity',
                    'Structured Finance',
                    'Capital Markets',
                    'Civil Litigation'
                  ].map((expertise, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-smooth"
                    >
                      {expertise}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional Development */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Divine has participated in a number of conferences and workshops including the Private Equity Forum at Oxford University, UK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Legal Consultation?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with Divine Dotse Tettey for expert legal advice and representation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:dotse@dotselaw.com"
              className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg"
            >
              Send Email
            </a>
            <a 
              href="tel:+233246950073"
              className="glass text-white px-8 py-3 rounded-full font-semibold transition-smooth hover-scale"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}