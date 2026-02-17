import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Mobile App Development - Trionex Technologies',
  description: 'Mobile app development services for iOS and Android platforms using React Native and Flutter.',
  openGraph: {
    title: 'Mobile App Development - Trionex Technologies',
    description: 'Mobile app development services for iOS and Android platforms using React Native and Flutter.',
    url: '/services/mobile-apps',
  },
}

export default function MobileAppsPage() {
  return (
    <>
      <StructuredData />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Mobile <span className="text-green-600">App Development</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  We're learning to create cross-platform mobile applications that work seamlessly on iOS and Android devices.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
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
                  Our Mobile App Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      iOS Apps
                    </h3>
                    <p className="text-gray-600">
                      Native iOS applications using Swift and modern development practices.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Android Apps
                    </h3>
                    <p className="text-gray-600">
                      Native Android applications using Kotlin and modern development practices.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Cross-Platform
                    </h3>
                    <p className="text-gray-600">
                      Single codebase apps that work on both iOS and Android using React Native or Flutter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Build Your Mobile App?
                </h2>
                <p className="text-xl text-green-100 mb-8">
                  Let's discuss how we can help you reach your mobile audience.
                </p>
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
