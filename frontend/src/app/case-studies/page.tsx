import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies - Trionex Technologies',
  description: 'Explore our success stories and see how we help businesses transform with innovative AI and software solutions.',
  openGraph: {
    title: 'Case Studies - Trionex Technologies',
    description: 'Real-world success stories showcasing our AI and software development expertise.',
    url: '/case-studies',
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Case <span className="text-blue-600">Studies</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  We're just getting started! Our case studies section will showcase 
                  real projects as we grow our portfolio. Get in touch to be our first success story!
                </p>
              </div>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Case Studies Coming Soon
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    We're currently working on exciting projects that we'll be proud to showcase here. 
                    Each case study will highlight real challenges, solutions, and results from actual clients.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                      <div className="text-gray-600">Completed Projects</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="text-3xl font-bold text-green-600 mb-2">12+</div>
                      <div className="text-gray-600">Happy Clients</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                      <div className="text-gray-600">Dedication</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Want to be our first success story? Let's discuss your project!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
                    >
                      Start a Project
                    </Link>
                    <Link
                      href="/services"
                      className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What to Expect Section */}
          <section className="py-20 bg-gray-50">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Case Studies Will Show</h2>
                  <p className="text-lg text-gray-600">
                    When we publish case studies, you can expect honest, detailed breakdowns of:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Challenges</h3>
                    <p className="text-gray-600">
                      Actual business problems our clients faced and how we understood their needs.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Honest Solutions</h3>
                    <p className="text-gray-600">
                      The technical approach we took, including what worked and what we learned.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Measurable Results</h3>
                    <p className="text-gray-600">
                      Real metrics and outcomes, including both successes and areas for improvement.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Testimonials</h3>
                    <p className="text-gray-600">
                      Genuine feedback from satisfied clients about their experience working with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Be Our First Success Story!
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  We're offering special founding partner pricing for our first clients
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    View Our Services
                  </Link>
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
