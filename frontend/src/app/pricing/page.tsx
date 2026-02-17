import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing - AI Solutions Company',
  description: 'Transparent pricing for AI and software development services. Choose the right plan for your business needs.',
  openGraph: {
    title: 'Pricing - AI Solutions Company',
    description: 'Transparent pricing for AI and software development services.',
    url: '/pricing',
  },
}

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: '$999',
    period: 'starting',
    features: [
      'Website Development',
      'Basic AI Integration',
      '5 Pages Maximum',
      'Contact Form Setup',
      'Basic SEO',
      '1 Month Support',
      'Mobile Responsive',
      'Social Media Links'
    ],
    notIncluded: [
      'Custom AI Development',
      'E-commerce Functionality',
      'API Integration',
      'Database Setup'
    ],
    cta: 'Get Started',
    popular: false,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses',
    price: '$2,499',
    period: 'starting',
    features: [
      'Everything in Starter',
      'Advanced AI Solutions',
      'Up to 15 Pages',
      'E-commerce Basic',
      'CMS Integration',
      '3 Months Support',
      'API Integration',
      'Analytics Dashboard',
      'Email Marketing Setup',
      'Basic Chatbot'
    ],
    notIncluded: [
      'Custom Machine Learning',
      'Enterprise Features'
    ],
    cta: 'Start Growing',
    popular: true,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: '$5,000+',
    period: 'starting',
    features: [
      'Everything in Growth',
      'Custom AI/ML Development',
      'Unlimited Pages',
      'Advanced E-commerce',
      'Custom Integrations',
      '12 Months Support',
      'Dedicated Manager',
      'SLA Guarantee',
      'White-labeling',
      'Advanced Analytics',
      'Multi-language Support',
      'Custom Dashboard'
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-orange-500 to-red-500'
  }
]

const servicePricing = [
  {
    category: 'AI Solutions',
    services: [
      { name: 'AI Chatbot Development', price: '$2,499 - $5,000' },
      { name: 'AI Agent Development', price: '$3,999 - $10,000' },
      { name: 'Voice Bot Integration', price: '$1,999 - $4,000' },
      { name: 'Predictive Analytics', price: '$4,000 - $15,000' },
      { name: 'Custom ML Models', price: '$5,000 - $25,000' }
    ]
  },
  {
    category: 'Web Development',
    services: [
      { name: 'Landing Page', price: '$499 - $999' },
      { name: 'Business Website', price: '$999 - $2,500' },
      { name: 'E-commerce Store', price: '$2,500 - $10,000' },
      { name: 'Web Application', price: '$5,000 - $50,000' },
      { name: 'CMS Development', price: '$2,000 - $8,000' }
    ]
  },
  {
    category: 'Mobile Apps',
    services: [
      { name: 'iOS App', price: '$3,000 - $15,000' },
      { name: 'Android App', price: '$3,000 - $15,000' },
      { name: 'Cross-platform App', price: '$4,000 - $20,000' },
      { name: 'App Redesign', price: '$1,500 - $5,000' }
    ]
  },
  {
    category: 'Additional Services',
    services: [
      { name: 'SEO Optimization', price: '$500 - $2,000/mo' },
      { name: 'Maintenance & Support', price: '$200 - $1,000/mo' },
      { name: 'UI/UX Design', price: '$1,000 - $5,000' },
      { name: 'API Development', price: '$1,000 - $5,000' },
      { name: 'Cloud Setup', price: '$1,500 - $5,000' }
    ]
  }
]

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex AI solutions can take 2-6 months. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! We offer flexible payment plans for larger projects. Typically, we work with a 50% upfront payment and 50% upon completion, or monthly installments for ongoing projects.'
  },
  {
    question: 'What is included in the support period?',
    answer: 'Our support includes bug fixes, minor updates, and technical assistance. The duration varies by plan - Starter includes 1 month, Growth includes 3 months, and Enterprise includes 12 months of dedicated support.'
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely! You can upgrade your plan at any time. We\'ll pro-rate the difference and ensure a smooth transition with no downtime.'
  },
  {
    question: 'Do you provide refunds?',
    answer: 'We offer a satisfaction guarantee. If you\'re not happy with our work after the first revision cycle, we\'ll work to make it right or provide a prorated refund.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use cutting-edge technologies including Next.js, React, Python, TensorFlow, PyTorch, Node.js, PostgreSQL, and cloud platforms like AWS, Azure, and Google Cloud.'
  }
]

export default function PricingPage() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Simple, <span className="text-blue-600">Transparent</span> Pricing
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Clear pricing with no hidden fees. Choose the plan that fits your needs, 
                  with flexible options for businesses of all sizes.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-green-600 font-semibold">No Hidden Fees</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-blue-600 font-semibold">Flexible Plans</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-purple-600 font-semibold">Money-back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                        plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50 transform scale-105' : ''
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 font-semibold">
                          Most Popular
                        </div>
                      )}
                      
                      <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                          <span className="text-white text-2xl">💎</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-gray-600 mb-6">{plan.description}</p>
                        
                        <div className="mb-6">
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                          <span className="text-gray-600"> {plan.period}</span>
                        </div>
                        
                        <Link
                          href="/contact"
                          className={`block w-full text-center py-3 rounded-lg font-semibold mb-8 transition-colors ${
                            plan.popular
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                              : 'bg-gray-900 text-white hover:bg-gray-800'
                          }`}
                        >
                          {plan.cta}
                        </Link>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                          <ul className="space-y-3">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                            {plan.notIncluded.map((feature, index) => (
                              <li key={`not-${index}`} className="flex items-start opacity-50">
                                <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-400">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Service-Based Pricing */}
          <section className="py-20 bg-gray-50">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Service-Based Pricing</h2>
                  <p className="text-lg text-gray-600">
                    Detailed pricing for individual services
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {servicePricing.map((category) => (
                    <div key={category.category} className="bg-white rounded-2xl shadow-lg p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                      <ul className="space-y-4">
                        {category.services.map((service, index) => (
                          <li key={index} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0">
                            <span className="text-gray-700">{service.name}</span>
                            <span className="font-semibold text-blue-600">{service.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-gray-600 mb-4">
                    * Prices are starting points and may vary based on specific requirements
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Get Custom Quote
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Plans</h2>
                  <p className="text-lg text-gray-600">
                    Find the perfect plan for your needs
                  </p>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-4 font-bold text-gray-900">Features</th>
                        <th className="text-center py-4 px-4 font-bold text-gray-900">Starter</th>
                        <th className="text-center py-4 px-4 font-bold text-blue-600 bg-blue-50">Growth</th>
                        <th className="text-center py-4 px-4 font-bold text-gray-900">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Pages', '5', '15', 'Unlimited'],
                        ['AI Integration', 'Basic', 'Advanced', 'Custom'],
                        ['E-commerce', '❌', 'Basic', 'Full'],
                        ['Support', '1 month', '3 months', '12 months'],
                        ['API Integration', '❌', '✅', '✅'],
                        ['Analytics', 'Basic', 'Advanced', 'Custom'],
                        ['Chatbot', '❌', 'Basic', 'Advanced'],
                        ['SLA Guarantee', '❌', '❌', '✅'],
                        ['Dedicated Manager', '❌', '❌', '✅'],
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-4 px-4 text-gray-700">{row[0]}</td>
                          <td className={`py-4 px-4 text-center ${index === 2 ? 'bg-blue-50' : ''}`}>{row[1]}</td>
                          <td className="py-4 px-4 text-center bg-blue-50 font-semibold text-blue-600">{row[2]}</td>
                          <td className={`py-4 px-4 text-center ${index === 2 ? 'bg-blue-50' : ''}`}>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gray-50">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                  <p className="text-lg text-gray-600">
                    Got questions? We've got answers.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                      <details className="group">
                        <summary className="flex items-center justify-between p-6 cursor-pointer">
                          <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Not Sure Which Plan is Right for You?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Schedule a free consultation and we'll help you find the perfect solution
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
