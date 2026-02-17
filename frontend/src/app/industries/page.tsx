import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industries We Serve - AI Solutions Company',
  description: 'Explore the industries we serve including Healthcare, Finance, Retail, Manufacturing, and Logistics. Custom AI solutions tailored to your sector.',
  openGraph: {
    title: 'Industries We Serve - AI Solutions Company',
    description: 'Expert AI solutions tailored for Healthcare, Finance, Retail, Manufacturing, and Logistics industries.',
    url: '/industries',
  },
}

const industries = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Transform healthcare delivery with AI-powered diagnostics, patient management systems, and predictive analytics.',
    icon: '🏥',
    color: 'from-green-500 to-emerald-600',
    services: [
      'Medical Diagnostics AI',
      'Patient Management Systems',
      'Predictive Analytics',
      'Electronic Health Records',
      'Telemedicine Solutions',
      'Drug Discovery AI'
    ],
    stats: [
      { label: 'Efficiency Increase', value: '45%' },
      { label: 'Cost Reduction', value: '30%' },
      { label: 'Patient Satisfaction', value: '95%' }
    ]
  },
  {
    id: 'finance',
    title: 'Finance & Banking',
    description: 'Revolutionize financial services with fraud detection, algorithmic trading, and intelligent risk management.',
    icon: '🏦',
    color: 'from-blue-500 to-indigo-600',
    services: [
      'Fraud Detection Systems',
      'Algorithmic Trading',
      'Risk Assessment AI',
      'Customer Analytics',
      'Regulatory Compliance',
      'Automated Advisory'
    ],
    stats: [
      { label: 'Fraud Prevention', value: '99.9%' },
      { label: 'Processing Speed', value: '10x' },
      { label: 'Cost Savings', value: '40%' }
    ]
  },
  {
    id: 'retail',
    title: 'Retail & E-Commerce',
    description: 'Enhance customer experiences with personalized recommendations, inventory management, and smart pricing.',
    icon: '🛒',
    color: 'from-orange-500 to-red-600',
    services: [
      'Recommendation Engines',
      'Inventory Optimization',
      'Dynamic Pricing',
      'Customer Segmentation',
      'Demand Forecasting',
      'Visual Search'
    ],
    stats: [
      { label: 'Sales Increase', value: '35%' },
      { label: 'Customer Retention', value: '60%' },
      { label: 'Inventory Accuracy', value: '98%' }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Optimize production with predictive maintenance, quality control, and smart factory automation.',
    icon: '🏭',
    color: 'from-gray-500 to-slate-600',
    services: [
      'Predictive Maintenance',
      'Quality Control AI',
      'Supply Chain Optimization',
      'Production Planning',
      'IoT Integration',
      'Digital Twins'
    ],
    stats: [
      { label: 'Downtime Reduction', value: '50%' },
      { label: 'Quality Improvement', value: '85%' },
      { label: 'Energy Efficiency', value: '25%' }
    ]
  },
  {
    id: 'logistics',
    title: 'Logistics & Transportation',
    description: 'Streamline operations with route optimization, fleet management, and demand forecasting.',
    icon: '🚚',
    color: 'from-purple-500 to-violet-600',
    services: [
      'Route Optimization',
      'Fleet Management',
      'Demand Forecasting',
      'Warehouse Automation',
      'Last-Mile Delivery',
      'Supply Chain Visibility'
    ],
    stats: [
      { label: 'Fuel Savings', value: '30%' },
      { label: 'Delivery Speed', value: '45%' },
      { label: 'On-Time Rate', value: '98%' }
    ]
  }
]

export default function IndustriesPage() {
  return (
    <>
      <StructuredData />
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Industries <span className="text-blue-600">We Serve</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Delivering specialized AI and software solutions across diverse industries, 
                  helping businesses transform operations and achieve measurable results.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-blue-600 font-semibold">5 Industries</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-green-600 font-semibold">100+ Projects</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-purple-600 font-semibold">98% Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industries Grid */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {industries.map((industry) => (
                    <div
                      key={industry.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      {/* Industry Header */}
                      <div className={`p-6 bg-gradient-to-br ${industry.color} text-white`}>
                        <div className="flex items-center mb-4">
                          <span className="text-4xl mr-4">{industry.icon}</span>
                          <h3 className="text-2xl font-bold">{industry.title}</h3>
                        </div>
                        <p className="text-white/90">{industry.description}</p>
                      </div>
                      
                      {/* Stats */}
                      <div className="p-6 bg-gray-50 border-t">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {industry.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                              <div className="text-xs text-gray-600">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Services */}
                      <div className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                        <ul className="space-y-2 mb-6">
                          {industry.services.slice(0, 4).map((service, index) => (
                            <li key={index} className="flex items-center text-gray-600 text-sm">
                              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {service}
                            </li>
                          ))}
                        </ul>
                        
                        <Link
                          href={`/industries/${industry.id}`}
                          className="block w-full text-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
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

          {/* Why Choose Us for Your Industry */}
          <section className="py-20 bg-gray-50">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us for Your Industry?</h2>
                  <p className="text-lg text-gray-600">
                    We combine deep industry expertise with cutting-edge AI technology
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                    <p className="text-gray-600">
                      Deep understanding of sector-specific challenges and regulations
                    </p>
                  </div>
                  
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">
                      Measurable ROI and performance improvements
                    </p>
                  </div>
                  
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🔒</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                    <p className="text-gray-600">
                      Solutions built with industry regulations in mind
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
                  Ready to Transform Your Industry?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how our industry-specific solutions can drive your business forward
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    href="/case-studies"
                    className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    View Case Studies
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
