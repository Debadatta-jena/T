import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cloud Solutions - GLYVEXA',
  description: 'Scalable cloud infrastructure and services on AWS for your business applications. Secure, cost-effective cloud solutions.',
  openGraph: {
    title: 'Cloud Solutions - GLYVEXA',
    description: 'Scalable cloud infrastructure and services on AWS.',
    url: '/services/cloud-solutions',
  },
}

export default function CloudSolutionsPage() {
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
                  Cloud <span className="text-blue-600">Solutions</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Leverage the power of cloud computing with our AWS-based solutions that scale with your business,
                  ensure security, and optimize costs for maximum efficiency.
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
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Scalable Infrastructure
                    </h3>
                    <p className="text-gray-600">
                      Auto-scaling solutions that grow with your business needs, ensuring optimal performance.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Security & Compliance
                    </h3>
                    <p className="text-gray-600">
                      Enterprise-grade security with AWS compliance certifications and data protection.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Cost Optimization
                    </h3>
                    <p className="text-gray-600">
                      Intelligent cost management with reserved instances, spot instances, and monitoring.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      High Availability
                    </h3>
                    <p className="text-gray-600">
                      99.9% uptime with multi-region deployments and disaster recovery solutions.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      DevOps Automation
                    </h3>
                    <p className="text-gray-600">
                      CI/CD pipelines, infrastructure as code, and automated deployment processes.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Monitoring & Analytics
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive monitoring with CloudWatch, real-time analytics, and alerting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-20 bg-gray-50">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cloud Services</h2>
                <p className="text-lg text-gray-600">
                  Comprehensive cloud solutions tailored to your business needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Migration</h3>
                  <p className="text-gray-600 mb-6">
                    Seamless migration of your applications and data to AWS cloud infrastructure.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Assessment and planning</li>
                    <li>• Data migration strategies</li>
                    <li>• Application modernization</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                  <p className="text-gray-600 mb-6">
                    Design and implementation of scalable, secure cloud architectures.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• VPC design and setup</li>
                    <li>• EC2 instance management</li>
                    <li>• Load balancing solutions</li>
                    <li>• Storage solutions (S3, EBS)</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Serverless Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Modern serverless architectures using Lambda, API Gateway, and more.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Lambda functions</li>
                    <li>• API Gateway setup</li>
                    <li>• DynamoDB integration</li>
                    <li>• Event-driven architectures</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Security</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive security solutions for your cloud infrastructure.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• IAM policies and roles</li>
                    <li>• Security groups and NACLs</li>
                    <li>• Encryption solutions</li>
                    <li>• Compliance monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Move to the Cloud?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how our cloud solutions can accelerate your business growth
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Your Cloud Journey
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    View All Services
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
