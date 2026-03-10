import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Shield, Award, FileText, AlertCircle, Lock } from 'lucide-react';

export default function ShashiRanjanHSEWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    { icon: '🛡️', title: 'Occupational Health & Safety', desc: 'Comprehensive workplace safety management and assessments' },
    { icon: '♻️', title: 'Environmental Management', desc: 'ISO 14001 implementation and environmental compliance' },
    { icon: '📋', title: 'HIRA & Risk Assessment', desc: 'Hazard Identification, Risk Analysis and mitigation strategies' },
    { icon: '🚨', title: 'Emergency Response Planning', desc: 'Crisis management and emergency preparedness' },
    { icon: '📚', title: 'HSE Training & Awareness', desc: 'Employee training programs and safety awareness initiatives' },
    { icon: '✅', title: 'Compliance & Auditing', desc: 'Regulatory compliance and internal HSE audits' },
  ];

  const certifications = [
    { title: 'Certified Safety Professional (CSP)', issuer: 'Board of Certified Safety Professionals', year: '2022' },
    { title: 'ISO 45001:2018 Lead Auditor', issuer: 'International Certification Body', year: '2021' },
    { title: 'ISO 14001:2015 Environmental Auditor', issuer: 'DNV GL', year: '2020' },
    { title: 'NEBOSH International General Certificate', issuer: 'NEBOSH', year: '2019' },
    { title: 'Advanced Fire Safety Management', issuer: 'Fire Safety Institute', year: '2021' },
    { title: 'First Aid & Disaster Management', issuer: 'Red Cross', year: '2023' },
  ];

  const expertise = [
    'Industrial Safety Management',
    'Environmental Compliance',
    'Risk Assessment & HIRA',
    'ISO 45001 & ISO 14001',
    'Accident Investigation',
    'Emergency Response Planning',
    'Safety Auditing',
    'Construction Safety',
    'Process Safety Management',
    'Legal Compliance',
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent. We'll respond within 24 hours.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)} />
      
      <div className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-gray-700">
          <X size={24} />
        </button>
        <nav className="mt-20 flex flex-col gap-2 px-6">
          {navItems.map(item => (
            <button key={item.id} onClick={() => { setCurrentPage(item.id); setMenuOpen(false); }}
              className="text-left text-lg font-medium text-gray-700 hover:text-blue-600 py-3 border-b border-gray-200 transition-colors">
              {item.name}
            </button>
          ))}
          <button onClick={() => { setCurrentPage('privacy'); setMenuOpen(false); }}
            className="text-left text-sm text-gray-600 hover:text-blue-600 py-3 transition-colors">
            Privacy Policy
          </button>
          <button onClick={() => { setCurrentPage('disclaimer'); setMenuOpen(false); }}
            className="text-left text-sm text-gray-600 hover:text-blue-600 py-3 transition-colors">
            Disclaimer
          </button>
          <button onClick={() => { setCurrentPage('terms'); setMenuOpen(false); }}
            className="text-left text-sm text-gray-600 hover:text-blue-600 py-3 transition-colors">
            Terms & Conditions
          </button>
        </nav>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/90 border-b-2 border-blue-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-blue-700">Shashi Ranjan</div>
            <div className="text-xs text-gray-600 font-semibold">HSE OFFICER & CONSULTANT</div>
          </div>
          
          <nav className="hidden md:flex gap-8">
            {navItems.map(item => (
              <button key={item.id} onClick={() => setCurrentPage(item.id)}
                className={`font-semibold transition-colors ${currentPage === item.id ? 'text-blue-700' : 'text-gray-700 hover:text-blue-600'}`}>
                {item.name}
              </button>
            ))}
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* HOME SECTION */}
      {currentPage === 'home' && (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Shashi<br /><span className="text-blue-700">Ranjan</span>
                  </h1>
                  <h2 className="text-2xl font-bold text-gray-700">Health, Safety & Environment Officer</h2>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dedicated HSE professional with 8+ years of experience in occupational health, safety management, and environmental compliance. Specializing in ISO standards implementation and risk mitigation strategies.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => setCurrentPage('contact')}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                    Get in Touch
                  </button>
                  <button onClick={() => setCurrentPage('about')}
                    className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all">
                    Learn More
                  </button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-3 pt-6 border-t border-gray-300">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone size={20} className="text-blue-700" />
                    <span>+91-XXXXXXXXXX</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail size={20} className="text-blue-700" />
                    <span>contact@shashiranjan.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin size={20} className="text-blue-700" />
                    <span>India</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-6">
                  <a href="https://linkedin.com/in/shashiranjanx" target="_blank" rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://twitter.com/shashiranjanx" target="_blank" rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-all">
                    𝕏
                  </a>
                  <a href="https://instagram.com/shashiranjanx" target="_blank" rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-all">
                    📷
                  </a>
                </div>
              </div>

              {/* Right Side - Photo */}
              <div className="flex justify-center">
                <div className="relative w-80 h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700 rounded-2xl transform rotate-3 opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl p-1 h-full">
                    <div className="bg-white rounded-xl h-full flex items-center justify-center overflow-hidden">
                      <div className="text-center">
                        <div className="text-8xl mb-4">👨‍💼</div>
                        <p className="text-gray-600 font-semibold">Professional Photo</p>
                        <p className="text-sm text-gray-500">Add Your Photo Here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ABOUT SECTION */}
      {currentPage === 'about' && (
        <section className="min-h-screen flex items-center px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">About Me</h1>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Left - Photo */}
              <div className="md:col-span-1">
                <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl p-1">
                  <div className="bg-white rounded-xl flex items-center justify-center h-80">
                    <div className="text-center">
                      <div className="text-7xl mb-4">👨‍💼</div>
                      <p className="text-gray-600">Professional Photo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Bio */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Profile</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    I am an accomplished Health, Safety & Environment (HSE) professional with over 8 years of dedicated experience in managing occupational health, industrial safety, and environmental compliance across diverse industries including manufacturing, construction, and petrochemicals.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    My expertise encompasses ISO 45001 (Occupational Health & Safety Management Systems), ISO 14001 (Environmental Management Systems), NEBOSH standards, and comprehensive risk assessment methodologies. I am committed to fostering a culture of safety and sustainability while ensuring organizational compliance with local and international regulations.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Expertise Areas</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {expertise.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <Shield className="text-blue-700 flex-shrink-0" size={20} />
                        <span className="text-gray-800 font-semibold">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <p className="text-gray-900 font-semibold">
                    ✓ Proven track record in implementing HSE management systems in complex industrial environments
                  </p>
                  <p className="text-gray-900 font-semibold mt-2">
                    ✓ Excellent communication skills and ability to work collaboratively with multi-disciplinary teams
                  </p>
                  <p className="text-gray-900 font-semibold mt-2">
                    ✓ Commitment to continuous improvement and staying updated with latest HSE practices and regulations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SERVICES SECTION */}
      {currentPage === 'services' && (
        <section className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-6xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">HSE Services</h1>
            <p className="text-xl text-gray-700 mb-12">Comprehensive Health, Safety & Environment Solutions</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.desc}</p>
                  <button className="text-blue-700 font-semibold mt-4 hover:text-blue-900 flex items-center gap-2">
                    Learn More <ExternalLink size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CERTIFICATIONS SECTION */}
      {currentPage === 'certifications' && (
        <section className="min-h-screen flex items-center px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Certifications & Qualifications</h1>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-700 rounded-lg p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <Award className="text-blue-700 flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                      <p className="text-gray-700 mt-1">{cert.issuer}</p>
                      <p className="text-blue-700 font-semibold text-sm mt-2">✓ Certified {cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Professional Memberships</h3>
              <ul className="space-y-2 text-lg">
                <li>✓ Member, Institution of Occupational Safety and Health (IOSH)</li>
                <li>✓ Member, National Safety Council</li>
                <li>✓ Certified by Board of Certified Safety Professionals</li>
                <li>✓ Active participant in HSE forums and professional networks</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT SECTION */}
      {currentPage === 'contact' && (
        <section className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-700 mb-12">Have an HSE consultation need? Let's discuss how I can help your organization.</p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                  
                  <div className="flex gap-4 bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
                    <Phone className="text-blue-700 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-gray-600 text-sm">Phone</p>
                      <p className="text-gray-900 font-semibold">+91-XXXXXXXXXX</p>
                    </div>
                  </div>

                  <div className="flex gap-4 bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
                    <Mail className="text-blue-700 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-gray-600 text-sm">Email</p>
                      <p className="text-gray-900 font-semibold">contact@shashiranjan.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4 bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
                    <MapPin className="text-blue-700 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-gray-600 text-sm">Location</p>
                      <p className="text-gray-900 font-semibold">India</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-600 text-white rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/shashiranjanx" target="_blank" rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://twitter.com/shashiranjanx" target="_blank" rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all">
                      𝕏
                    </a>
                    <a href="https://instagram.com/shashiranjanx" target="_blank" rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all">
                      📷
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleFormSubmit} className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      required
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-all"
                      placeholder="Your Subject"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows="5"
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-all resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* PRIVACY POLICY */}
      {currentPage === 'privacy' && (
        <section className="min-h-screen px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Lock className="text-blue-700" size={32} />
              <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            
            <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Shashi Ranjan ("we", "our", or "us") operates shashiranjan.com. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We may collect the following types of information:</p>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Contact Information:</strong> Name, email address, phone number, and other contact details you provide through our contact forms</li>
                  <li>• <strong>Professional Information:</strong> Details about your organization and HSE-related queries</li>
                  <li>• <strong>Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser type, pages visited, and time spent</li>
                  <li>• <strong>Cookies:</strong> We use cookies to enhance your experience on our website</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <ul className="space-y-3 text-gray-700">
                  <li>• To respond to your inquiries and provide HSE consulting services</li>
                  <li>• To send you updates about our services and expertise</li>
                  <li>• To improve our website functionality and user experience</li>
                  <li>• To comply with legal obligations and protect our rights</li>
                  <li>• To conduct market research and analyze user behavior</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure. We encourage you to use strong passwords and to be cautious about the information you share online.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
                <ul className="space-y-3 text-gray-700">
                  <li>• Access the personal information we hold about you</li>
                  <li>• Request correction of inaccurate or incomplete information</li>
                  <li>• Request deletion of your information (subject to legal requirements)</li>
                  <li>• Withdraw your consent for data processing</li>
                  <li>• Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of external websites. We encourage you to review their privacy policies before sharing any information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us at contact@shashiranjan.com
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DISCLAIMER */}
      {currentPage === 'disclaimer' && (
        <section className="min-h-screen px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="text-blue-700" size={32} />
              <h1 className="text-4xl font-bold text-gray-900">Disclaimer</h1>
            </div>
            
            <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The information provided on shashiranjan.com is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained herein.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Professional Services Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The HSE services, advice, and consulting information provided through this website should not be considered as professional legal, safety, or environmental advice. Before implementing any recommendations, organizations should consult with qualified professionals and ensure compliance with local, state, and national regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Shashi Ranjan be liable for any damages arising from the use of or inability to use the materials on this website, or for any loss or damage caused by the reliability or inaccuracy of the information provided.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. External Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  This website may contain links to external websites. We are not responsible for the content, accuracy, or practices of external websites. Use of external links is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Changes to Website</h2>
                <p className="text-gray-700 leading-relaxed">
                  Shashi Ranjan reserves the right to modify, suspend, or discontinue this website and its services at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Regulatory Compliance</h2>
                <p className="text-gray-700 leading-relaxed">
                  HSE standards and regulations vary by region and industry. It is the responsibility of organizations to ensure full compliance with applicable regulations in their jurisdiction. Information provided on this website should be verified against current regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TERMS & CONDITIONS */}
      {currentPage === 'terms' && (
        <section className="min-h-screen px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="text-blue-700" size={32} />
              <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
            </div>
            
            <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on shashiranjan.com for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for any commercial purpose or for any public display</li>
                  <li>• Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>• Remove any copyright or other proprietary notations</li>
                  <li>• Transmit the materials to anyone else or "mirror" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Shashi Ranjan or its content suppliers and is protected by international copyright laws. Reproduction or redistribution of website content without written permission is prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Shashi Ranjan or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on shashiranjan.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials appearing on shashiranjan.com could include technical, typographical, or photographic errors. Shashi Ranjan does not warrant that any of the materials on this website are accurate, complete, or current. This website may be updated without notice at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Shashi Ranjan has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Shashi Ranjan of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h2>
                <p className="text-gray-700 leading-relaxed">
                  Shashi Ranjan may revise these terms of service for this website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in India.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shashi Ranjan</h3>
              <p className="text-gray-300">HSE Officer & Consultant</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {navItems.map(item => (
                  <button key={item.id} onClick={() => setCurrentPage(item.id)}
                    className="text-gray-300 hover:text-white block transition-colors">
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <nav className="space-y-2">
                <button onClick={() => setCurrentPage('privacy')} className="text-gray-300 hover:text-white block transition-colors">Privacy Policy</button>
                <button onClick={() => setCurrentPage('disclaimer')} className="text-gray-300 hover:text-white block transition-colors">Disclaimer</button>
                <button onClick={() => setCurrentPage('terms')} className="text-gray-300 hover:text-white block transition-colors">Terms & Conditions</button>
              </nav>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/shashiranjanx" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/shashiranjanx" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded transition-all">
                  𝕏
                </a>
                <a href="https://instagram.com/shashiranjanx" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded transition-all">
                  📷
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-gray-300">
              © 2024 <span className="font-bold text-white">Shashi Ranjan</span> | All Rights Reserved
            </p>
            <p className="text-center text-gray-400 text-sm mt-2">
              Website: shashiranjan.com | Powered with Expertise in Health, Safety & Environment
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}