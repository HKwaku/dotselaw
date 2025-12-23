'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, Award, Briefcase, Heart } from 'lucide-react'

export default function MartinPage() {
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
                  <Image src="/team/martin.jpg" alt="Martin Kpebu" fill className="object-cover object-center" priority />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Martin Kpebu</h1>
                  <p className="text-blue-600 font-semibold mb-6">Consulting Attorney</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 gradient-text">About</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-gray-600 leading-relaxed">
                  <p>Martin is a lawyer and a partner in GT Legal Africa, a law firm. He specialises in corporate law and litigation (civil and criminal). He is a human rights activist and has succeeded in arguing four different cases, for the Supreme Court of Ghana to strike down two laws that infringed the human rights of accused persons and sureties and interpret two other laws for fair trials in ground breaking decisions.</p>
                  <p>These are the decisions that, all criminal offences are now bailable, sureties (persons who sign a contract to guarantee the appearance of accused and suspects in court) can no longer be jailed when an accused/suspect absconds, the state must give accused persons the evidence it intends to rely on at the trial (introduction of disclosure), before a trial starts and finally, a few courts must sit during weekends and public holidays to hear bail applications by suspects/accused where the police do not wish to grant bail, within 48 hours of the arrest.</p>
                  <p>For ten years of Martin's legal practice, he lectured at Central University (2014-2018), and Accra Technical University (2008-2014).</p>
                  <p>He engages in some mass media advocacy on legal issues and social justice by contributing to a number of programmes on television and radio.</p>
                </div>
              </div>

              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="h-6 w-6 mr-3 text-blue-600" />
                  Juvenile Justice Project
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  As a result of his passion for child protection, and the need for juveniles to be given opportunities to reform, he founded the Juvenile Justice Project, an NGO, with three (3) other lawyers. They provide free legal services to juveniles in Accra. UNICEF and the Legal Aid Commission partnered this project for a number of years.
                </p>
              </div>

              <div className="card-modern p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-blue-600" />
                  Qualifications
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>BSc in Business Administration (Banking and Finance) - University of Ghana (2002)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>LLB - University of Ghana (2005)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Qualifying Certificate in Law - Ghana School of Law (2007)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>LLM in Oil & Gas Law - University of Ghana (2013)</span>
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
                    'Civil Litigation',
                    'Criminal Litigation',
                    'Human Rights',
                    'Oil & Gas Law',
                    'Constitutional Law',
                    'Media Law',
                    'Social Justice Advocacy'
                  ].map((expertise, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-smooth">
                      {expertise}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Experience</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Lecturer at Central University (2014-2018)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Lecturer at Accra Technical University (2008-2014)</span>
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
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">Get in touch with Martin Kpebu for expert legal advice and representation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@dotselaw.com" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Send Email</a>
          </div>
        </div>
      </section>
    </div>
  )
}
