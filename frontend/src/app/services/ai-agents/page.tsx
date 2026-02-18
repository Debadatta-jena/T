import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Agents - Trionex Technologies',
  description: 'Autonomous AI agents that handle complex tasks, automate workflows, and streamline business operations with intelligent decision-making.',
  openGraph: {
    title: 'AI Agents - Trionex Technologies',
    description: 'Autonomous AI agents that automate business operations and workflows.',
    url: '/services/ai-agents',
  },
}

export default function AIAgentsPage() {
  return (
    <>
      <StructuredData />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-100">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  AI <span className="text-blue-600">Agents</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Autonomous AI agents that work around the clock to handle complex tasks, 
                  make intelligent decisions, and automate your business workflows.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
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
                  Key Capabilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Task Automation
                    </h3>
                    <p className="text-gray-600">
                      Automate repetitive tasks and processes, saving hours of manual work every day.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🧩</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Decision Making
                    </h3>
                    <p className="text-gray-600">
                      Intelligent agents that analyze data and make informed decisions based on rules and ML.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Learning Capabilities
                    </h3>
                    <p className="text-gray-600">
                      Agents learn from past interactions and improve performance over time.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🔌</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      API Integration
                    </h3>
                    <p className="text-gray-600">
                      Connect with 500+ apps and services through robust API integrations.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">👁️</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Monitoring Tools
                    </h3>
                    <p className="text-gray-600">
                      Real-time dashboards to monitor agent performance and task status.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🔀</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Custom Workflows
                    </h3>
                    <p className="text-gray-600">
                      Build custom workflows tailored to your specific business processes.
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
                      Data Processing & Analysis
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Process and clean large datasets</li>
                      <li>• Generate automated reports</li>
                      <li>• Extract insights from unstructured data</li>
                      <li>• Schedule and run ETL pipelines</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Customer Service Automation
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Handle complex inquiries autonomously</li>
                      <li>• Process orders and refunds</li>
                      <li>• Manage appointments and scheduling</li>
                      <li>• Escalate when needed</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Business Operations
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Invoice processing and accounting</li>
                      <li>• Inventory management</li>
                      <li>• HR onboarding automation</li>
                      <li>• Compliance monitoring</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Marketing & Sales
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Lead scoring and qualification</li>
                      <li>• Campaign management</li>
                      <li>• Social media automation</li>
                      <li>• Follow-up sequences</li>
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
                  <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent hover:border-blue-600 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                    <p className="text-4xl font-bold text-blue-600 mb-4">$3,999</p>
                    <p className="text-gray-600 mb-6">One-time setup</p>
                    <ul className="space-y-2 text-left text-gray-600 mb-8">
                      <li>✓ Up to 3 AI agents</li>
                      <li>✓ Basic automation</li>
                      <li>✓ Email support</li>
                      <li>✓ Standard integrations</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-600 relative">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg">Popular</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                    <p className="text-4xl font-bold text-blue-600 mb-4">$7,999</p>
                    <p className="text-gray-600 mb-6">One-time setup</p>
                    <ul className="space-y-2 text-left text-gray-600 mb-8">
                      <li>✓ Up to 10 AI agents</li>
                      <li>✓ Advanced decision making</li>
                      <li>✓ Priority support</li>
                      <li>✓ Custom workflows</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent hover:border-blue-600 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                    <p className="text-4xl font-bold text-blue-600 mb-4">Custom</p>
                    <p className="text-gray-600 mb-6">Contact us</p>
                    <ul className="space-y-2 text-left text-gray-600 mb-8">
                      <li>✓ Unlimited agents</li>
                      <li>✓ Custom AI training</li>
                      <li>✓ Dedicated support</li>
                      <li>✓ Full API access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Automate Your Business?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's build AI agents that transform how you operate.
                </p>
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
