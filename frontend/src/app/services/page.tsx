import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - AI Solutions Company',
  description: 'Explore our comprehensive AI and software services including Website Development, AI Chatbots, AI Agents, Voice Bots, and Mobile Applications.',
  openGraph: {
    title: 'Our Services - AI Solutions Company',
    description: 'Professional AI and software development services tailored to your business needs.',
    url: '/services',
  },
}

const services = [
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Professional, SEO-optimized websites that drive business growth and deliver exceptional user experiences.',
    icon: '🌐',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Performance',
      'Security Features',
      'Cloud Hosting',
      'CMS Integration'
    ],
    price: 'Starting from $999',
    link: '/services/web-development'
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    description: 'Intelligent chatbots that automate customer support and enhance user engagement.',
    icon: '🤖',
    features: [
      'Natural Language Processing',
      '24/7 Availability',
      'Multi-language Support',
      'Custom Training',
      'Analytics Dashboard',
      'CRM Integration'
    ],
    price: 'Starting from $2,499',
    link: '/services/ai-chatbots'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Autonomous AI agents that handle complex tasks and streamline business operations.',
    icon: '🧠',
    features: [
      'Task Automation',
      'Decision Making',
      'Learning Capabilities',
      'API Integration',
      'Monitoring Tools',
      'Custom Workflows'
    ],
    price: 'Starting from $3,999',
    link: '/services/ai-agents'
  },
  {
    id: 'voice-bots',
    title: 'Voice Bots',
    description: 'Voice-powered assistants that enable natural voice interactions with your systems.',
    icon: '🎤',
    features: [
      'Speech Recognition',
      'Natural Voice',
      'Multi-device Support',
      'Custom Voices',
      'Real-time Processing',
      'Integration Ready'
    ],
    price: 'Starting from $1,999',
    link: '/services/voice-bots'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android with modern UI/UX.',
    icon: '📱',
    features: [
      'iOS & Android Apps',
      'Cross-platform Development',
      'UI/UX Design',
      'Backend Integration',
      'App Store Deployment',
      'Maintenance & Support'
    ],
    price: 'Starting from $1,999',
    link: '/services/mobile-apps'
  },
  {
    id: 'academic-projects',
    title: 'Academic Projects',
    description: 'Professional assistance with academic projects, research papers, and technical documentation.',
    icon: '📚',
    features: [
      'Research Papers',
      'Technical Documentation',
      'Data Analysis',
      'Project Implementation',
      'Academic Consulting',
      'Plagiarism-free Content'
    ],
    price: 'Starting from $299',
    link: '/services/academic-projects'
  }
]

export default function ServicesPage() {
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
                  Our <span className="text-blue-600">Services</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Comprehensive AI and software solutions tailored to transform your business operations 
                  and drive digital innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-blue-600 font-semibold">6 Services</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-green-600 font-semibold">15+ Completed Projects</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-purple-600 font-semibold">100% Dedication</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                    >
                      {/* Service Header */}
                      <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                            <span className="text-3xl">{service.icon}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-blue-600 font-semibold">{service.price}</p>
                          </div>
                        </div>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      
                      {/* Service Features */}
                      <div className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <Link
                          href={service.link}
                          className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-gray-50">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
                  <p className="text-lg text-gray-600">
                    How we turn your ideas into reality
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
                    <p className="text-gray-600">
                      Understanding your requirements and business objectives
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
                    <p className="text-gray-600">
                      Creating detailed project plans and technical specifications
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
                    <p className="text-gray-600">
                      Building your solution with agile methodology
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Deployment</h3>
                    <p className="text-gray-600">
                      Launching and supporting your solution for success
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
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how our services can help your business grow
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Learn More
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

