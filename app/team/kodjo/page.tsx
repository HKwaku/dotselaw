'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, Award, Briefcase } from 'lucide-react'

export default function KodjoPage() {
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
                <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image src="/team/kodjo.jpg" alt="Kodjo Baidoo" fill className="object-cover object-center" priority />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Kodjo Baidoo</h1>
                  <p className="text-blue-600 font-semibold mb-6">Consultant</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">About</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-gray-600 leading-relaxed">
                  <p>Kodjo Baidoo has consulted for various companies in the areas of mining, funds mobilization and law for over two decades.</p>
                  <p>He previously set up and run successfully, a mining support service company which provided turnkey services in concession acquisition, advisory on statutory compliance, obtaining of regulatory permits as well as mining operations and logistics strategies.</p>
                  <p>Prior to joining Dotse@Law as a consultant, Kodjo served as executive director for various Ghanaian and multinational private limited liability companies.</p>
                  <p>Kodjo is a member of a number of professional bodies and is also attached to an immigration specialist law firm in the UK. He has been a speaker in a number of international conferences.</p>
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
                    <span>Bachelor's Degree in Psychology - University of Cape Coast, Ghana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>LLB - Queen Mary University of London, UK</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>LLM - University of West of England, Bristol, UK</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Currently preparing for Doctor of Juridical Science (JSD - PhD) candidature</span>
                  </li>
                </ul>
              </div>

              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Mining Law',
                    'Funds Mobilization',
                    'Regulatory Compliance',
                    'Concession Acquisition',
                    'Mining Operations',
                    'Logistics Strategy',
                    'Immigration Law',
                    'Corporate Advisory'
                  ].map((expertise, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-smooth">
                      {expertise}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Experience</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Founded and operated a successful mining support service company providing turnkey services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Executive Director for various Ghanaian and multinational companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Attached to an immigration specialist law firm in the UK</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Speaker at numerous international conferences</span>
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
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Get in touch with Kodjo Baidoo for expert legal advice and representation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@dotselaw.com" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Send Email</a>
          </div>
        </div>
      </section>
    </div>
  )
}
