'use client';

import { 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  Factory, 
  Building,
  Plane,
  Gamepad2
} from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  {
    icon: ShoppingCart,
    title: 'E-commerce & Retail',
    description: 'AI-powered shopping experiences, inventory management, and customer service solutions.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Medical AI diagnostics, patient management systems, and healthcare automation.',
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'E-learning platforms, AI tutors, and educational content management systems.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    icon: Briefcase,
    title: 'Finance & Banking',
    description: 'Fraud detection, automated trading, and customer service automation.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'IoT integration, predictive maintenance, and supply chain optimization.',
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100'
  },
  {
    icon: Building,
    title: 'Real Estate',
    description: 'Property management systems, virtual tours, and AI-powered property recommendations.',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100'
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    description: 'Booking systems, customer service chatbots, and personalized travel recommendations.',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'from-cyan-50 to-cyan-100'
  },
  {
    icon: Gamepad2,
    title: 'Gaming & Entertainment',
    description: 'AI-powered game mechanics, player analytics, and content recommendation systems.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'from-pink-50 to-pink-100'
  }
];

export function IndustriesServed() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We provide AI and software solutions for different industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${industry.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {industry.title}
                </h3>
                
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Help Your Industry with Technology
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Whether you're in healthcare, finance, retail, or any other industry, 
              we're ready to learn and work with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors inline-block">
                Schedule a Consultation
              </a>
              <a href="/case-studies" className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-all inline-block">
                View Case Studies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

