import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Web Development - Trionex Technologies',
  description: 'Professional web development services including responsive websites, e-commerce platforms, and custom web applications.',
  openGraph: {
    title: 'Web Development - Trionex Technologies',
    description: 'Professional web development services including responsive websites, e-commerce platforms, and custom web applications.',
    url: '/services/web-development',
  },
}

export default function WebDevelopmentPage() {
  return (
    <>
      <StructuredData />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Web <span className="text-blue-600">Development</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  We're building our expertise in modern web development technologies to help businesses establish their online presence.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  Our Web Development Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Responsive Websites
                    </h3>
                    <p className="text-gray-600">
                      Mobile-first websites that look great on all devices and screen sizes.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      E-commerce Platforms
                    </h3>
                    <p className="text-gray-600">
                      Online stores with secure payment processing and inventory management.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Custom Web Apps
                    </h3>
                    <p className="text-gray-600">
                      Tailored web applications designed to solve your specific business challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Build Your Website?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how we can help you establish your online presence.
                </p>
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}
