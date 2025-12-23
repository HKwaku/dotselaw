'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, Award, Briefcase, Globe } from 'lucide-react'

export default function MichaelPage() {
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
                  <Image src="/team/michael.jpg" alt="Michael Balimukuubo" fill className="object-cover object-center" priority />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Michael Balimukuubo</h1>
                  <p className="text-blue-600 font-semibold mb-6 text-sm">International Transaction Advisor (Middle East, North & East Africa)</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">About</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-gray-600 leading-relaxed">
                  <p>Michael Balimukuubo has had a distinguished legal career spanning over 11 years post qualification experience starting as a legal associate in several top tier law firms in Uganda such as MMAKS (Africa Legal Network), Hunter and Greg Advocates. He moved to be an in-house legal counsel for Total Energies Uganda B.V. to advise on the Upstream Tilenga project and the downstream pipeline project aspects for five years.</p>
                  <p>Michael is currently based in the United Arab Emirates where he continues to advise on several multimillion-dollar water and solar utility projects structured around the project finance and public private partnership models within the region.</p>
                  <p>Michael's legal practice focuses on corporate law, corporate finance, project finance, and structuring of project transactions. Michael has advised on projects in the areas of oil and gas (upstream, and midstream) within sub-Saharan Africa, water treatment, wastewater treatment and solar scaling utility projects within the MENA region and in the CIS region.</p>
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
                    <span>LLM in Corporate and Commercial Laws - University of Cambridge, UK</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>LLB - Makerere University, Uganda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Diploma in Legal Practice - Uganda</span>
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
                    'Corporate Law',
                    'Corporate Finance',
                    'Project Finance',
                    'Oil & Gas Law',
                    'PPP Structures',
                    'Water Treatment Projects',
                    'Solar Utility Projects',
                    'International Transactions',
                    'Sub-Saharan Africa',
                    'MENA Region'
                  ].map((expertise, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-smooth">
                      {expertise}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-blue-600" />
                  Professional Experience
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>In-house Legal Counsel - Total Energies Uganda B.V. (5 years)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Legal Associate - MMAKS (Africa Legal Network), Uganda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Legal Associate - Hunter and Greg Advocates, Uganda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Currently based in United Arab Emirates advising on multimillion-dollar utility projects</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Memberships</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Uganda Law Society</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>East African Law Society</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notable Projects</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Upstream Tilenga Oil Project - Total Energies Uganda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>East African Crude Oil Pipeline (EACOP) - Downstream aspects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Multimillion-dollar water and solar utility projects - MENA region</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Water treatment and wastewater treatment projects - MENA & CIS regions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need International Legal Consultation?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Get in touch with Michael Balimukuubo for expert advice on international transactions and project finance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@dotselaw.com" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Send Email</a>
          </div>
        </div>
      </section>
    </div>
  )
}
