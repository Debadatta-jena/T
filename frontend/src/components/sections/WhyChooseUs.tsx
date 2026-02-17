'use client';

import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  Headphones,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ParallaxCard } from '@/components/ui/ParallaxCard';

const reasons = [
  {
    icon: Award,
    title: 'Fresh Perspective',
    description: 'New approach to solving business challenges with modern ideas and enthusiasm.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Committed to following security best practices and compliance standards from day one.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Zap,
    title: 'Quick Learner',
    description: 'Adaptable and ready to learn new technologies to meet your specific needs.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Dedicated to understanding your business and providing personalized attention.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Clock,
    title: 'Responsive Support',
    description: 'Committed to being available and responsive to your questions and needs.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: TrendingUp,
    title: 'Growing Together',
    description: 'Building solutions that can evolve and scale as your business grows.',
    color: 'from-indigo-500 to-indigo-600'
  }
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We're learning and growing with technology to help solve business challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ParallaxCard key={reason.title} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-secondary-600">
                    {reason.description}
                  </p>
                </div>
              </ParallaxCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Our Commitment to Learning
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              We're working hard to learn and deliver good results for our clients. Every project is a chance to grow and build relationships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
              {[
                'Learning Every Day',
                'Honest Communication',
                'Learning Focus',
                'Client Success First'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-secondary-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

