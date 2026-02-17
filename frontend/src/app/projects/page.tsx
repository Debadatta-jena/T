import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Projects - AI Solutions Company',
  description: 'Explore our portfolio of AI and software development projects. See how we\'ve helped businesses transform with innovative technology solutions.',
  openGraph: {
    title: 'Our Projects - AI Solutions Company',
    description: 'Portfolio of successful AI and software development projects.',
    url: '/projects',
  },
}

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform for Retail',
    category: 'website-development',
    description: 'A comprehensive e-commerce solution with advanced inventory management, real-time analytics, and seamless payment integration.',
    image: '/projects/ecommerce-platform.jpg',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    features: ['Real-time Inventory', 'Payment Gateway', 'Analytics Dashboard', 'Mobile Responsive'],
    clientName: 'TechMart Inc.',
    clientCompany: 'TechMart Inc.',
    projectUrl: 'https://techmart-demo.com',
    status: 'completed',
    completionDate: '2024-01-15',
    isFeatured: true
  },
  {
    id: 2,
    title: 'AI Customer Support Chatbot',
    category: 'ai-chatbots',
    description: 'Intelligent chatbot that reduced customer response time by 80% and improved satisfaction scores significantly.',
    image: '/projects/ai-chatbot.jpg',
    technologies: ['Python', 'TensorFlow', 'React', 'Dialogflow', 'Google Cloud'],
    features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support', 'CRM Integration'],
    clientName: 'Global Retail Corp',
    clientCompany: 'Global Retail Corp',
    status: 'completed',
    completionDate: '2024-02-01',
    isFeatured: true
  },
  {
    id: 3,
    title: 'Food Delivery Mobile App',
    category: 'mobile-apps',
    description: 'Cross-platform mobile application connecting restaurants with customers for seamless food delivery experience.',
    image: '/projects/food-delivery-app.jpg',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Stripe'],
    features: ['Real-time Tracking', 'In-app Payments', 'Restaurant Dashboard', 'Rating System'],
    clientName: 'QuickBite',
    clientCompany: 'QuickBite',
    projectUrl: 'https://quickbite-app.com',
    status: 'completed',
    completionDate: '2023-12-20',
    isFeatured: true
  },
  {
    id: 4,
    title: 'AI-Powered Data Analytics Platform',
    category: 'ai-agents',
    description: 'Advanced analytics platform using machine learning to provide actionable business insights and predictions.',
    image: '/projects/analytics-platform.jpg',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL'],
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
    clientName: 'DataDriven Solutions',
    clientCompany: 'DataDriven Solutions',
    status: 'completed',
    completionDate: '2024-01-10',
    isFeatured: false
  },
  {
    id: 5,
    title: 'Healthcare Management System',
    category: 'website-development',
    description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and billing.',
    image: '/projects/healthcare-system.jpg',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'AWS'],
    features: ['Patient Management', 'Appointment Scheduling', 'Electronic Health Records', 'Billing System'],
    clientName: 'MediCare Plus',
    clientCompany: 'MediCare Plus',
    status: 'completed',
    completionDate: '2023-11-15',
    isFeatured: false
  },
  {
    id: 6,
    title: 'Voice Assistant for Smart Homes',
    category: 'voice-bots',
    description: 'Voice-controlled smart home assistant integrating with IoT devices for home automation.',
    image: '/projects/voice-assistant.jpg',
    technologies: ['Python', 'Alexa Skills Kit', 'Google Assistant', 'Node.js', 'MQTT'],
    features: ['Voice Commands', 'Device Integration', 'Automation Rules', 'Mobile App Control'],
    clientName: 'SmartHome Tech',
    clientCompany: 'SmartHome Tech',
    status: 'completed',
    completionDate: '2023-10-30',
    isFeatured: false
  }
]

const categories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'website-development', name: 'Website Development', count: projects.filter(p => p.category === 'website-development').length },
  { id: 'ai-chatbots', name: 'AI Chatbots', count: projects.filter(p => p.category === 'ai-chatbots').length },
  { id: 'ai-agents', name: 'AI Agents', count: projects.filter(p => p.category === 'ai-agents').length },
  { id: 'mobile-apps', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile-apps').length },
  { id: 'voice-bots', name: 'Voice Bots', count: projects.filter(p => p.category === 'voice-bots').length },
]

export default function ProjectsPage() {
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
                  Our <span className="text-blue-600">Projects</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Explore our portfolio of successful AI and software development projects 
                  that have helped businesses transform and grow.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-blue-600 font-semibold">{projects.length} Projects</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-green-600 font-semibold">{projects.filter(p => p.isFeatured).length} Featured</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="text-purple-600 font-semibold">6 Categories</span>
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

          {/* Featured Projects */}
          <section className="py-16">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                  <p className="text-lg text-gray-600">
                    Highlighted projects that showcase our expertise and innovation
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.filter(project => project.isFeatured).map((project) => (
                    <div
                      key={project.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      {/* Project Image */}
                      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-2xl">🚀</span>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full font-semibold">
                            Featured
                          </span>
                        </div>
                      </div>
                      
                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                              {project.title}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                              <span className="mr-4">{project.clientCompany}</span>
                              <span>• {project.completionDate}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          {project.projectUrl && (
                            <a
                              href={project.projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                              View Live Project
                            </a>
                          )}
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* All Projects */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">All Projects</h2>
                  <p className="text-lg text-gray-600">
                    Complete portfolio showcasing our diverse expertise
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      {/* Project Image */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-2xl">💼</span>
                          </div>
                        </div>
                        {!project.isFeatured && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-gray-500 text-white text-xs rounded-full font-semibold">
                              Standard
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Project Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{project.clientCompany}</span>
                          <span className="text-sm text-gray-500">{project.completionDate}</span>
                        </div>
                      </div>
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
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss how we can bring your vision to life
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

