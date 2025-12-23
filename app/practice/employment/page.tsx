'use client'

import Link from 'next/link'
import { ArrowLeft, Users, CheckCircle2 } from 'lucide-react'

export default function EmploymentPage() {
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
              <Users className="h-5 w-5" />
              <span className="font-semibold">Practice Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Employment Laws & Industrial Relations</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dotse@Law's Employment/Labour Laws practice covers comprehensive services in all aspects of employment and industrial relations.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Preparation of Work Regulations / HR Manual / Staff Handbook / Standing Orders',
                description: 'Drafting and documentation of conditions of service, social benefits, rules and regulations, code of ethics, disciplinary and grievance matters, leaves, benefits and various other policies.'
              },
              {
                title: 'Conducting Audit / Due Diligence / Compliance Review of Labour Laws',
                description: 'Inspection of records, highlighting discrepancies and advising remedial measures.'
              },
              {
                title: 'Employees Code of Conduct, Sexual Harassment Policy',
                description: 'Drafting policies/manuals/codes of fair ethics and good conduct applicable to employees at workplace and outside workplace. Assisting companies in framing suitable policy and procedure to prevent and deal with sexual harassment of women employees.'
              },
              {
                title: 'Social Security and Insurance Benefits',
                description: 'Advising on Social Security Laws and compliance requirements as well as various social security issues and providing assistance to the management for complying with health and safety issues.'
              },
              {
                title: 'Severance and Retrenchment Laws',
                description: 'Advising management on various policies regarding Ghanaian retrenchment laws and compliance thereof, wrongful dismissal, handling redundancy claims.'
              },
              {
                title: 'Social Benefits',
                description: 'Advising on Maternity Benefit Act for ensuring compliance of the provisions of maternity and other benefits to women employees. Advising on legislations relating to Bonus, Gratuity, Employees State Insurance, Provident Fund, etc.'
              },
              {
                title: 'Employment Contracts',
                description: 'Advising and drafting business transfer agreements, Employment Contracts, Retainership Agreements, Termination Letters, Probation Clauses, Non-Disclosure Agreements, Confidentiality Agreements, Secondment Agreements (inbound/outbound), etc.'
              },
              {
                title: 'Contract Labour and Regulations',
                description: 'Advising on registration of establishments, maintenance of registers and other records, hiring of contract labour, licensing of contractors and ensuring compliance. Advising on welfare, health, safety and conditions of service of contract labour.'
              },
              {
                title: 'Trade Union Laws and Related Activities',
                description: 'Advising the management in handling and negotiating with trade unions, laws applicable and their compliance thereof.'
              },
              {
                title: 'Workplace Accident and Fatal Accident Compensation Law',
                description: 'Advising the management on employer\'s liability (civil and criminal) for compensation payable to an employee involved in an accident fatal or otherwise and ensuring compliance with applicable laws.'
              },
              {
                title: 'Factories Law',
                description: 'Advising the management on registration and licensing of factories, health and safety safeguards to be maintained, and welfare and other such conditions of service and ensuring compliance of the applicable laws.'
              },
              {
                title: 'Environment Laws',
                description: 'Advising on National and International treaties and legislations, Pollution Control in any environmental medium, construction related environmental issues, environment implications on acquisitions and/or sale of business. Counseling on eco-auditing and eco-assessment, assisting in obtaining environmental clearances for infrastructure projects.'
              }
            ].map((service, index) => (
              <div key={index} className="card-modern p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Employment Law Services?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for expert legal advice on employment and industrial relations matters.
          </p>
          <a href="/#contact" className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  )
}
