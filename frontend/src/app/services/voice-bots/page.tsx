import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Voice Bots - Trionex Technologies',
  description: 'Voice-powered AI assistants that enable natural voice interactions with your systems. Speech recognition, natural voice synthesis, and multi-device support.',
  openGraph: {
    title: 'Voice Bots - Trionex Technologies',
    description: 'Voice-powered AI assistants for natural voice interactions.',
    url: '/services/voice-bots',
  },
}

export default function VoiceBotsPage() {
  return (
    <>
      <StructuredData />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Voice <span className="text-orange-600">Bots</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Voice-powered AI assistants that enable natural, hands-free interactions 
                  with your customers through advanced speech recognition and synthesis.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-8 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
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
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🎤</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Speech Recognition
                    </h3>
                    <p className="text-gray-600">
                      Advanced ASR technology that accurately converts speech to text in 100+ languages.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🔊</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Natural Voice Synthesis
                    </h3>
                    <p className="text-gray-600">
                      Human-like TTS with adjustable pace, tone, and emotional expression.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Multi-device Support
                    </h3>
                    <p className="text-gray-600">
                      Works on smartphones, smart speakers, IVR systems, and web browsers.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Custom Voices
                    </h3>
                    <p className="text-gray-600">
                      Create a unique brand voice with custom voice cloning and personality options.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Real-time Processing
                    </h3>
                    <p className="text-gray-600">
                      Low-latency voice processing for seamless, natural conversations.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Integration Ready
                    </h3>
                    <p className="text-gray-600">
                      Connect with CRM, helpdesk, and business systems via robust APIs.
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
                      IVR & Phone Support
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Replace traditional IVR menus</li>
                      <li>• Handle customer inquiries via phone</li>
                      <li>• Process orders and appointments</li>
                      <li>• 24/7 automated support</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Smart Home & IoT
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Voice control for smart devices</li>
                      <li>• Custom voice commands</li>
                      <li>• Multi-language support</li>
                      <li>• Integration with home assistants</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Accessibility
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Hands-free navigation</li>
                      <li>• Voice-first interfaces</li>
                      <li>• Assistive technology support</li>
                      <li>• WCAG compliant</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Voice Commerce
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Voice-based ordering</li>
                      <li>• Product search via voice</li>
                      <li>• Voice payments</li>
                      <li>• Loyalty program access</li>
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
                  <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent hover:border-orange-600 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                    <p className="text-4xl font-bold text-orange-600 mb-4">$1,999</p>
                    <p className="text-gray-600 mb-6">One-time setup</p>
                    <ul className="space-y-2 text-left text-gray-600 mb-8">
                      <li>✓ Up to 1,000 minutes/month</li>
                      <li>✓ Standard voice quality</li>
                      <li>✓ Email support</li>
                      <li>✓ Basic integrations</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-orange-600 relative">
                    <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs px-3 py-1 rounded-bl-lg">Popular</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                    <p className="text-4xl font-bold text-orange-600 mb-4">$3,999</p>
                    <p className="text-gray-600 mb-6">One-time setup</p>
                    <ul className="space-y-2 text-left text-gray-600 mb-8">
                      <li>✓ Up to 5,000 minutes/month</li>
                      <li>✓ Premium voice quality</li>
                      <li>✓ Priority support</li>
                      <li>✓ Custom voice creation</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent hover:border-orange-600 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                    <p className="text-4xl font-bold text-orange-600 mb-4">Custom</p>
                    <p className="text-gray-600 mb-6">Contact us</p>
                    <ul className="space-y-2 text-left text-gray-600 mb-8">
                      <li>✓ Unlimited minutes</li>
                      <li>✓ Custom voice cloning</li>
                      <li>✓ Dedicated support</li>
                      <li>✓ Full API access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Add Voice to Your Business?
                </h2>
                <p className="text-xl text-orange-100 mb-8">
                  Let's build a voice bot that transforms customer interactions.
                </p>
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
