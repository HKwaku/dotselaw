'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Mail, Phone, MapPin, Users, Briefcase, Globe, Award, Building2, Landmark, Factory, Ship, Heart, Smartphone, ArrowRight, CheckCircle2, Zap, Hotel, Building, TrendingUp, Scale, Shuffle } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const practiceAreas = [
    {
      title: 'Corporate, Commercial and Contracts',
      icon: Briefcase,
      description: 'Comprehensive legal advice on corporate transactions, commercial agreements, and contract law.',
      url: '/practice/corporate'
    },
    {
      title: 'Employment Laws & Industrial Relations',
      icon: Users,
      description: 'Expert guidance on employment contracts, workplace disputes, and industrial relations.',
      url: '/practice/employment'
    },
    {
      title: 'Real Estate & Construction',
      icon: Building2,
      description: 'Property transactions, construction contracts, and real estate development advisory.',
      url: '/practice/real-estate'
    },
    {
      title: 'Insolvency & Restructuring',
      icon: TrendingUp,
      description: 'Strategic counsel on insolvency proceedings and corporate restructuring matters.',
      url: '/practice/insolvency'
    },
    {
      title: 'Private Equity, Venture Capital & Funds',
      icon: Award,
      description: 'Specialized services in PE/VC transactions, fund formation, and investment advisory.',
      url: '/practice/private-equity'
    },
    {
      title: 'Project Finance & Banking',
      icon: Landmark,
      description: 'Financial law expertise in project finance, banking regulations, and financial transactions.',
      url: '/practice/project-finance'
    },
    {
      title: 'Mergers & Acquisitions',
      icon: Shuffle,
      description: 'Full-service M&A advisory from due diligence to transaction completion.',
      url: '/practice/mergers'
    },
    {
      title: 'Litigation (Civil/Criminal/ADR)',
      icon: Scale,
      description: 'Skilled representation in civil, criminal litigation, and alternative dispute resolution.',
      url: '/practice/litigation'
    },
    {
      title: 'Immigration Advisory Services',
      icon: Globe,
      description: 'Comprehensive immigration consulting for individuals and businesses.',
      url: '/practice/immigration'
    }
  ]

  const sectors = [
    { name: 'Energy & Infrastructure', icon: Zap },
    { name: 'Maritime', icon: Ship },
    { name: 'Life Sciences', icon: Heart },
    { name: 'Mining and Metals', icon: Factory },
    { name: 'Hotels and Leisure', icon: Hotel },
    { name: 'Financial Institutions', icon: Landmark },
    { name: 'Industrials and Manufacturing', icon: Building },
    { name: 'Telecommunications, Media & Technology', icon: Smartphone }
  ]

  const team = [
    {
      name: 'Divine Dotse Tettey',
      role: 'Managing Partner',
      phone: '+233 246950073',
      email: 'dotse@dotselaw.com',
      image: '/team/divine.jpg',
      profileUrl: '/team/divine'
    },
    {
      name: 'Patricia Mensah',
      role: 'Senior Associate',
      phone: '+233 242 882 523',
      email: 'patricia@dotselaw.com',
      image: '/team/patricia.jpg',
      profileUrl: '/team/patricia'
    },

    {
      name: 'Portia Bosompem',
      role: 'Associate',
      phone: '+233 262316969',
      email: 'portia@dotselaw.com',
      image: '/team/portia.jpg',
      profileUrl: '/team/portia'
    },
    {
      name: 'Governor Ahene-Amanquanor',
      role: 'Associate',
      phone: '+233 209622558',
      email: 'governor@dotselaw.com',
      image: '/team/governor.jpg',
      profileUrl: '/team/governor'
    },
    {
      name: 'Nicholas Normeshie',
      role: 'Associate',
      phone: '',
      email: '',
      image: '/team/nicholas.jpg',
      profileUrl: '/team/nicholas'
    },

    {
      name: 'Martin Kpebu',
      role: 'Consulting Attorney',
      phone: '',
      email: '',
      image: '/team/martin.jpg',
      profileUrl: '/team/martin'
    },

    {
      name: 'Kodjo Baidoo',
      role: 'Consultant',
      phone: '',
      email: '',
      image: '/team/kodjo.jpg',
      profileUrl: '/team/kodjo'
    },
    {
      name: 'Michael Balimukuubo',
      role: 'International Transaction Advisor (Middle East, North & East Africa)',
      phone: '',
      email: '',
      image: '/team/michael.jpg',
      profileUrl: '/team/michael'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Modern Blur Effect */}
      <nav className="fixed w-full navbar-blur shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Only - Scalable and fits navbar */}
            <a href="#home" className="flex items-center h-full py-3">
              <div className="relative h-full max-h-10 w-auto">
                <Image
                  src="/logo.png"
                  alt="Dotse@Law"
                  width={300}
                  height={70}
                  className="h-full w-auto object-contain max-w-[200px]"
                  priority
                />
              </div>
            </a>
            
            {/* Desktop Navigation - Sleek Links */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium transition-smooth">Home</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium transition-smooth">About</a>
              <a href="#practice" className="text-gray-800 hover:text-blue-600 font-medium transition-smooth">Practice Areas</a>
              <a href="#team" className="text-gray-800 hover:text-blue-600 font-medium transition-smooth">Team</a>
              <a 
                href="#contact" 
                className="btn-primary shadow-glow-blue hover:shadow-glow-blue-lg"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-smooth"
            >

              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Modern Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-dark border-t animate-fade-in">
            <div className="px-4 py-6 space-y-3">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-smooth">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-smooth">About</a>
              <a href="#practice" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-smooth">Practice Areas</a>
              <a href="#team" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-smooth">Team</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-smooth">Contact Us</a>

            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Background Image with Overlay */}
      <section id="home" className="relative pt-32 pb-32 px-6 min-h-[780px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/background.jpg"
            alt="Dotse@Law"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              FULL SERVICE<br />LAW FIRM
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
              Offering services in Private Equity, Corporate & Commercial Law, Immigration Advisory, Family Law, Criminal & Civil Litigation
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-smooth shadow-glow-blue hover:shadow-glow-blue-lg hover-scale group"
              >
                Get a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#practice" 
                className="inline-flex items-center justify-center glass text-white font-semibold px-8 py-4 rounded-full transition-smooth hover-scale"
              >
                Practice Areas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Clean & Minimal */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted Legal Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dotse@Law is a full-service law firm delivering innovative and solution-oriented consultancy services in corporate, commercial, and dispute resolution matters.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expertise spans mining law, international trade, real estate, intellectual property, private equity, M&A, and comprehensive litigation services.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Legal Counsel</h3>
                  <p className="text-gray-600">Highly competent in civil and criminal litigation, as well as Alternative Dispute Resolution mechanisms.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-gray-600">First choice for multinational companies navigating complex regulatory frameworks and expanding into new markets.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Exceptional Service</h3>
                  <p className="text-gray-600">We pride ourselves on responsiveness and seamless delivery of client services to the highest standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas - Modern Cards */}
      <section id="practice" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Practice Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {practiceAreas.map((area, index) => (
              <a
                key={index}
                href={area.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-modern p-8 hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-smooth group-hover:shadow-glow-blue">
                  <area.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-smooth" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:gradient-text transition-smooth">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{area.description}</p>
                <span className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </a>
            ))}
          </div>

          {/* Sectors - Minimal Pills */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Industries We Serve</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {sectors.map((sector, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-3 bg-white px-6 py-4 rounded-full border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                >
                  <sector.icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                    {sector.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Modern Profile Cards */}
      <section id="team" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                Our Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced legal professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <a
                key={index}
                href={member.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-modern overflow-hidden hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full aspect-[3/4] sm:aspect-auto sm:h-72 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top sm:object-center group-hover:scale-110 transition-smooth"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  
                  {/* View Profile Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <span className="glass text-white px-6 py-3 rounded-full font-semibold">
                      View Profile
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:gradient-text transition-smooth">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4 text-sm">{member.role}</p>
                  
                  <div className="space-y-2">
                    {member.phone && (
                      <div className="flex items-center text-gray-600 text-sm">
                        <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{member.phone}</span>
                      </div>
                    )}
                    {member.email && (
                      <div className="flex items-center text-gray-600 text-sm break-all">
                        <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{member.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Associations - Modern List with Logos */}
          <div className="mt-24 bg-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">Professional Memberships</h3>
            <p className="text-center text-gray-600 mb-10">Our lawyers belong to prestigious legal associations worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: 'Ghana Bar Association', logo: 'gba.png' },
                { name: 'Chartered Institute of Arbitrators', logo: 'ciarb.png' },
                { name: 'Law Society (UK)', logo: 'law-society.png' },
                { name: 'East African Law Society', logo: 'eals.png' },
                { name: 'Uganda Law Society', logo: 'uls.png' },
                { name: 'International Compliance Association', logo: 'ica.png' }
              ].map((association, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-600 hover:shadow-lg transition-all group">
                  <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                    <Image
                      src={`/associations/${association.logo}`}
                      alt={association.name}
                      width={96}
                      height={96}
                      className="object-contain group-hover:scale-110 transition-transform"
                      onError={(e) => {
                        // Hide image if it fails to load, show text instead
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <p className="font-semibold text-gray-800 text-sm text-center">{association.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Clean Split Layout */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <div className="text-white">
              <div className="inline-block mb-4">
                <span className="bg-blue-600/30 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Discuss Your Legal Needs</h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                Located 25 minutes from Kotoka International Airport, our office is easily accessible from major hotels in East Legon, Airport Residential, and Dzorwulu.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Address</h4>
                    <p className="text-slate-300">
                      No. 32, Methodist Street, Bluegate Road,<br />
                      Haatso ECOMOG, Accra-Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Email</h4>
                    <a href="mailto:info@dotselaw.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      info@dotselaw.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Quote Inquiries</h4>
                    <a href="mailto:dotse@dotselaw.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      dotse@dotselaw.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Contact us today to discuss how we can help with your legal needs. Our team is ready to provide innovative solutions tailored to your specific requirements.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
                <p className="text-gray-700 italic leading-relaxed">
                  "We are committed to providing innovative and solution-oriented legal services tailored to your specific needs."
                </p>
              </div>

              <a 
                href="mailto:dotse@dotselaw.com" 
                className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal & Clean */}
      <footer className="bg-slate-900 text-white py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="text-left md:text-left">
              <p className="text-slate-400 mb-1">Barristers, Solicitors and Consultants</p>
              <p className="text-slate-500 text-sm">© 2024 Dotse@Law. All rights reserved.</p>
            </div>
            
            <div className="flex gap-4">
              <a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}