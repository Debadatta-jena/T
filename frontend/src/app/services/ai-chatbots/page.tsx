import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Chatbots - Trionex Technologies',
  description: 'Intelligent AI chatbots that automate customer support, enhance user engagement, and provide 24/7 assistance for your business.',
  openGraph: {
    title: 'AI Chatbots - Trionex Technologies',
    description: 'Intelligent AI chatbots that automate customer support and enhance user engagement.',
    url: '/services/ai-chatbots',
  },
}

export default function AIChatbotsPage() {
  return (
    <>
      <StructuredData />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-100">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  AI <span className="text-purple-600">Chatbots</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Intelligent chatbots powered by advanced AI that understand context, 
                  learn from interactions, and provide human-like responses 24/7.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Natural Language Processing
                    </h3>
                    <p className="text-gray-600">
                      Advanced NLP that understands context, sentiment, and intent for human-like conversations.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Multi-language Support
                    </h3>
                    <p className="text-gray-600">
                      Support for 50+ languages with automatic translation and cultural adaptation.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Analytics Dashboard
                    </h3>
                    <p className="text-gray-600">
                      Real-time insights into conversations, user behavior, and performance metrics.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      CRM Integration
                    </h3>
                    <p className="text-gray-600">
                      Seamless integration with Salesforce, HubSpot, Zendesk, and more.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Custom Training
                    </h3>
                    <p className="text-gray-600">
                      Train on your documents, website content, and specific business data.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Enterprise Security
                    </h3>
                    <p className="text-gray-600">
                      SOC 2 compliant with end-to-end encryption and data privacy controls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-20 bg-gray-50">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  Use Cases
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Customer Support
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Handle common queries 24/7</li>
                      <li>• Reduce support ticket volume by 70%</li>
                      <li>• Instant answers to FAQs</li>
                      <li>• Escalate complex issues to humans</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Sales & Lead Generation
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Qualify leads automatically</li>
                      <li>• Product recommendations</li>
                      <li>• Schedule appointments</li>
                      <li>• Follow-up automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Pricing Plans
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent hover:border-purple-600 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                    <p className="text-4xl font-bold text-purple-600 mb-4">$2,499</p>
                    <p className="text-gray-600 mb-6">One-time setup</p>
                    <ul className="space-y-2 text-left text-gray-600 mb-8">
                      <li>✓ Up to 1,000 conversations/month</li>
                      <li>✓ Basic NLP features</li>
                      <li>✓ Email support</li>
                      <li>✓ Standard analytics</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-purple-600 relative">
                    <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs px-3 py-1 rounded-bl-lg">Popular</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                    <p className="text-4xl font-bold text-purple-600 mb-4">$4,999</p>
                    <p className="text-gray-600 mb-6">One-time setup</p>
                    <ul className="space-y-2 text-left text-gray-600 mb-8">
                      <li>✓ Up to 10,000 conversations/month</li>
                      <li>✓ Advanced NLP & custom training</li>
                      <li>✓ Priority support</li>
                      <li>✓ CRM integrations</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent hover:border-purple-600 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                    <p className="text-4xl font-bold text-purple-600 mb-4">Custom</p>
                    <p className="text-gray-600 mb-6">Contact us</p>
                    <ul className="space-y-2 text-left text-gray-600 mb-8">
                      <li>✓ Unlimited conversations</li>
                      <li>✓ Custom AI model training</li>
                      <li>✓ Dedicated support</li>
                      <li>✓ Full API access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Automate Your Customer Support?
                </h2>
                <p className="text-xl text-purple-100 mb-8">
                  Let's build an AI chatbot that transforms your customer experience.
                </p>
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}
