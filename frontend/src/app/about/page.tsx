import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'About Us - GLYVEXA',
  description: 'Learn about GLYVEXA - our mission, team, and commitment to delivering cutting-edge AI and software solutions for businesses worldwide.',
  openGraph: {
    title: 'About GLYVEXA',
    description: 'Our mission is to transform businesses through innovative AI and software solutions.',
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <StructuredData />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About <span className="text-blue-600">GLYVEXA</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  We are GLYVEXA, a team of passionate developers and AI experts dedicated to transforming businesses 
                  through cutting-edge technology solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
                    <div className="text-gray-600">Team Member</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-gray-600">Dedication to Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      To empower businesses with innovative AI and software solutions that drive growth, 
                      efficiency, and competitive advantage in the digital age.
                    </p>
                    <p className="text-lg text-gray-600">
                      We believe in transforming complex challenges into simple, elegant solutions that 
                      deliver real business value.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-lg">
                      To be the global leader in AI-powered business solutions, 
                      helping companies of all sizes leverage technology for success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-gray-50">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                <p className="text-lg text-gray-600">
                  The principles that guide everything we do
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Constantly pushing boundaries and exploring new technologies
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    Delivering highest quality solutions that exceed expectations
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
                  <p className="text-gray-600">
                    Working closely with clients as long-term technology partners
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    Building trust through transparency and ethical practices
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                <p className="text-lg text-gray-600">
                  The talented individuals behind our success
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">DJ</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Debadatta Jena</h3>
                  <p className="text-blue-600 font-medium mb-2">Founder & CEO</p>
                  <p className="text-gray-600">
                    Passionate about AI and software development
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how our AI solutions can help you achieve your goals
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started
                  </a>
                  <a
                    href="/services"
                    className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    View Services
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

