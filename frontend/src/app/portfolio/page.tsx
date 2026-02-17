import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Portfolio - Trionex Technologies',
  description: 'Our portfolio of projects and work we have done for clients.',
  openGraph: {
    title: 'Portfolio - Trionex Technologies',
    description: 'Our portfolio of projects and work we have done for clients.',
    url: '/portfolio',
  },
}

export default function PortfolioPage() {
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
                  Our <span className="text-blue-600">Portfolio</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  We're just starting our journey and excited to showcase our first projects.
                </p>
                <div className="bg-white px-6 py-3 rounded-full shadow-md inline-block">
                  <span className="text-blue-600 font-semibold">Coming Soon</span>
                </div>
              </div>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Building Our Portfolio
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  As we complete our first projects, we'll be showcasing them here. 
                  We believe in quality over quantity and are excited to share our work with you.
                </p>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="text-6xl mb-4">🚧</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Under Construction
                  </h3>
                  <p className="text-gray-600">
                    Check back soon to see our amazing work!
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
                  Want to Be Our First Client?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Join us on this exciting journey and let's create something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="/services"
                    className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    View Our Services
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
