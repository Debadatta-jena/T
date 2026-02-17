import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found - AI Solutions Company',
  description: 'The page you are looking for could not be found. Return to the AI Solutions homepage or explore our services.',
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              {/* 404 Number */}
              <div className="mb-8">
                <h1 className="text-8xl md:text-9xl font-bold text-blue-600">
                  404
                </h1>
              </div>
              
              {/* Error Message */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Page Not Found
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Oops! The page you're looking for seems to have vanished into the digital void. 
                Don't worry, even the best AI can't find what doesn't exist!
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Go Home
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Browse Services
                </Link>
              </div>
              
              {/* Helpful Links */}
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Maybe you were looking for:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="/about"
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600">ℹ️</span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900">About Us</h4>
                      <p className="text-sm text-gray-600">Learn about our company and team</p>
                    </div>
                  </Link>
                  
                  <Link
                    href="/services"
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600">🚀</span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900">Our Services</h4>
                      <p className="text-sm text-gray-600">Explore our AI and software solutions</p>
                    </div>
                  </Link>
                  
                  <Link
                    href="/projects"
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600">💼</span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900">Projects</h4>
                      <p className="text-sm text-gray-600">View our portfolio and case studies</p>
                    </div>
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-600">📧</span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900">Contact Us</h4>
                      <p className="text-sm text-gray-600">Get in touch with our team</p>
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Fun AI Message */}
              <div className="mt-12 p-6 bg-blue-50 rounded-xl max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🤖</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  AI Assistant Says:
                </h3>
                <p className="text-blue-700">
                  "I've searched through all my algorithms and neural networks, but this page 
                  remains a mystery. How about we explore our amazing AI solutions instead?"
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

