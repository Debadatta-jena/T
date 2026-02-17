import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Testimonials - AI Solutions Company',
  description: 'Read what our clients say about our AI and software development services. Real testimonials from satisfied customers.',
  openGraph: {
    title: 'Client Testimonials - AI Solutions Company',
    description: 'Real feedback from our satisfied clients about our AI and software solutions.',
    url: '/testimonials',
  },
}

const testimonials = [
  {
    id: 1,
    clientName: 'Sarah Johnson',
    clientCompany: 'TechMart Inc.',
    clientPosition: 'CEO',
    avatar: '/testimonials/sarah.jpg',
    rating: 5,
    content: 'AI Solutions transformed our e-commerce platform completely. The new system increased our conversion rate by 40% and reduced cart abandonment by 60%. Their team was professional, responsive, and delivered exactly what we needed.',
    projectTitle: 'E-Commerce Platform',
    serviceCategory: 'website-development',
    testimonialDate: '2024-01-15',
    isFeatured: true
  },
  {
    id: 2,
    clientName: 'Michael Chen',
    clientCompany: 'Global Retail Corp',
    clientPosition: 'CTO',
    avatar: '/testimonials/michael.jpg',
    rating: 5,
    content: 'The AI chatbot developed by AI Solutions has revolutionized our customer service. Response time improved by 80% and customer satisfaction scores increased significantly. Highly recommend their expertise!',
    projectTitle: 'AI Customer Support Chatbot',
    serviceCategory: 'ai-chatbots',
    testimonialDate: '2024-02-01',
    isFeatured: true
  },
  {
    id: 3,
    clientName: 'Emily Rodriguez',
    clientCompany: 'QuickBite',
    clientPosition: 'Founder',
    avatar: '/testimonials/emily.jpg',
    rating: 5,
    content: 'Our food delivery app was developed flawlessly. The team understood our vision perfectly and delivered a product that our customers love. App downloads exceeded our expectations by 200%!',
    projectTitle: 'Food Delivery Mobile App',
    serviceCategory: 'mobile-apps',
    testimonialDate: '2023-12-20',
    isFeatured: true
  },
  {
    id: 4,
    clientName: 'David Kim',
    clientCompany: 'DataDriven Solutions',
    clientPosition: 'Data Science Lead',
    avatar: '/testimonials/david.jpg',
    rating: 4,
    content: 'The analytics platform built by AI Solutions provides incredible insights for our business. The machine learning models are accurate and the dashboards are intuitive. Great technical expertise!',
    projectTitle: 'AI-Powered Data Analytics Platform',
    serviceCategory: 'ai-agents',
    testimonialDate: '2024-01-10',
    isFeatured: false
  },
  {
    id: 5,
    clientName: 'Lisa Thompson',
    clientCompany: 'MediCare Plus',
    clientPosition: 'Operations Manager',
    avatar: '/testimonials/lisa.jpg',
    rating: 5,
    content: 'The healthcare management system has streamlined our operations significantly. Patient records, appointments, and billing are now seamlessly integrated. Excellent work!',
    projectTitle: 'Healthcare Management System',
    serviceCategory: 'website-development',
    testimonialDate: '2023-11-15',
    isFeatured: false
  },
  {
    id: 6,
    clientName: 'Robert Martinez',
    clientCompany: 'SmartHome Tech',
    clientPosition: 'Product Manager',
    avatar: '/testimonials/robert.jpg',
    rating: 5,
    content: 'Our voice assistant integration was complex, but AI Solutions handled it perfectly. The team\'s expertise in IoT and voice technology is unmatched. Customers love the hands-free experience!',
    projectTitle: 'Voice Assistant for Smart Homes',
    serviceCategory: 'voice-bots',
    testimonialDate: '2023-10-30',
    isFeatured: false
  }
]

const categories = [
  { id: 'all', name: 'All Testimonials', count: testimonials.length },
  { id: 'website-development', name: 'Website Development', count: testimonials.filter(t => t.serviceCategory === 'website-development').length },
  { id: 'ai-chatbots', name: 'AI Chatbots', count: testimonials.filter(t => t.serviceCategory === 'ai-chatbots').length },
  { id: 'ai-agents', name: 'AI Agents', count: testimonials.filter(t => t.serviceCategory === 'ai-agents').length },
  { id: 'mobile-apps', name: 'Mobile Apps', count: testimonials.filter(t => t.serviceCategory === 'mobile-apps').length },
  { id: 'voice-bots', name: 'Voice Bots', count: testimonials.filter(t => t.serviceCategory === 'voice-bots').length },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
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
                  Client <span className="text-blue-600">Testimonials</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Don't just take our word for it. Hear what our clients have to say 
                  about their experience working with AI Solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-blue-600 font-semibold">{testimonials.length} Reviews</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-green-600 font-semibold">4.8/5 Average</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-purple-600 font-semibold">98% Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-8 bg-white border-b">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className="px-6 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors font-medium"
                      onClick={() => {
                        // Handle category filtering
                        console.log(`Filter by category: ${category.id}`)
                      }}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Testimonials */}
          <section className="py-16">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Testimonials</h2>
                  <p className="text-lg text-gray-600">
                    Outstanding feedback from our valued clients
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.filter(testimonial => testimonial.isFeatured).map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xl font-bold">
                                {testimonial.clientName.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {testimonial.clientName}
                              </h3>
                              <p className="text-blue-600 font-medium">
                                {testimonial.clientPosition}
                              </p>
                              <p className="text-gray-600 text-sm">
                                {testimonial.clientCompany}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Rating */}
                        <div className="mb-4">
                          <StarRating rating={testimonial.rating} />
                        </div>
                        
                        {/* Content */}
                        <blockquote className="text-gray-700 mb-4 italic">
                          "{testimonial.content}"
                        </blockquote>
                        
                        {/* Project Info */}
                        <div className="border-t pt-4">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Project:</span> {testimonial.projectTitle}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Date:</span> {testimonial.testimonialDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* All Testimonials */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">All Testimonials</h2>
                  <p className="text-lg text-gray-600">
                    Complete collection of client feedback
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">
                            {testimonial.clientName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {testimonial.clientName}
                            </h3>
                            <StarRating rating={testimonial.rating} />
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {testimonial.clientPosition} at {testimonial.clientCompany}
                          </p>
                          <blockquote className="text-gray-700 text-sm mb-3 italic">
                            "{testimonial.content}"
                          </blockquote>
                          <p className="text-xs text-gray-500">
                            {testimonial.projectTitle} • {testimonial.testimonialDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Satisfaction</h2>
                  <p className="text-lg text-gray-600">
                    Numbers that speak for themselves
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                    <div className="text-gray-600">Client Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">4.8/5</div>
                    <div className="text-gray-600">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                    <div className="text-gray-600">Repeat Client Rate</div>
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
                  Ready to Join Our Happy Clients?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how we can help transform your business with AI and software solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="/projects"
                    className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    View Our Work
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

