'use client';

import Link from 'next/link';
import { 
  Globe, 
  Bot, 
  MessageSquare, 
  Mic, 
  Smartphone, 
  Cloud,
  Code,
  Brain,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern frameworks and best practices for optimal performance.',
    features: ['React/Next.js', 'E-commerce Solutions', 'Progressive Web Apps', 'SEO Optimization'],
    href: '/services/web-development',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Intelligent conversational AI solutions that enhance customer service and automate interactions.',
    features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Custom Training'],
    href: '/services/ai-chatbots',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Brain,
    title: 'AI Agents',
    description: 'Autonomous AI agents that can perform complex tasks and make intelligent decisions.',
    features: ['Machine Learning', 'Decision Making', 'Process Automation', 'Data Analysis'],
    href: '/services/ai-agents',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Mic,
    title: 'Voice Bots',
    description: 'Voice-enabled AI assistants for customer support.',
    features: ['Speech Recognition', 'Natural Voices', 'Multi-platform', 'Real-time Processing'],
    href: '/services/voice-bots',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Mobile apps for iOS and Android.',
    features: ['React Native', 'Flutter', 'Native Development', 'App Store Optimization'],
    href: '/services/mobile-apps',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services for optimal performance.',
    features: ['Cloud Services', 'DevOps', 'Auto-scaling', 'Security'],
    href: '/services/cloud-solutions',
    color: 'from-cyan-500 to-cyan-600'
  },
];

export function ServicesOverview() {
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We offer AI and software solutions to help your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card h-full hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-secondary-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

