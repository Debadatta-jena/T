import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - AI Solutions Company',
  description: 'Get in touch with AI Solutions Company for professional AI and software development services. Contact us for consultations and project inquiries.',
  openGraph: {
    title: 'Contact AI Solutions Company',
    description: 'Reach out to discuss your AI and software development needs.',
    url: '/contact',
  },
}

export default function ContactPage() {
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
                  Get in <span className="text-blue-600">Touch</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Ready to transform your business with AI and software solutions? 
                  Let's discuss your project and how we can help you achieve your goals.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Content */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Information */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                          <p className="text-gray-600">debadattajena552@gmail.com</p>
                          <p className="text-sm text-gray-500">We respond within 24 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.821l-2.467 7.46A1 1 0 016 18h2.982a1 1 0 00.948-.684l1.498-4.493a1 1 0 00-.502-.821L7.002 3H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                          <p className="text-gray-600">+91 84558 86462</p>
                          <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                          <p className="text-gray-600">Bhubaneswar, Odisha</p>
                          <p className="text-gray-600">India</p>
                          <p className="text-sm text-gray-500">By appointment only</p>
                        </div>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Monday - Friday</span>
                          <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Saturday</span>
                          <span className="font-medium">10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sunday</span>
                          <span className="font-medium">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                    <ContactForm />
                  </div>
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
                    Common questions about our services and process
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      How long does a typical project take?
                    </h3>
                    <p className="text-gray-600">
                      Project timelines vary based on complexity. A simple website might take 2-4 weeks, 
                      while a complex AI solution could take 2-6 months. We'll provide a detailed timeline during the discovery phase.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What is your pricing structure?
                    </h3>
                    <p className="text-gray-600">
                      We offer flexible pricing based on project scope and complexity. 
                      Projects typically start from $999 for basic websites and $2,499 for AI solutions.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Do you provide ongoing support?
                    </h3>
                    <p className="text-gray-600">
                      Yes! We offer maintenance and support packages for all our solutions. 
                      This includes updates, bug fixes, and technical assistance.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Can you work with our existing systems?
                    </h3>
                    <p className="text-gray-600">
                      Absolutely. We specialize in integrating with existing systems and APIs. 
                      We'll assess your current infrastructure during the discovery phase.
                    </p>
                  </div>
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
