'use client';

import { useState } from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const accessFeatures = [
  {
    title: 'Founding Member Benefits',
    description: 'Be among our first clients and receive special founding member pricing and priority access.',
    icon: CheckCircle,
  },
  {
    title: 'Direct Collaboration',
    description: 'Work directly with our founding team to shape solutions that meet your specific needs.',
    icon: CheckCircle,
  },
  {
    title: 'Personal Support',
    description: 'Get dedicated attention from our team as we build and grow together.',
    icon: CheckCircle,
  },
  {
    title: 'Long-term Partnership',
    description: 'Join us as we grow and enjoy benefits as our most valued early supporters.',
    icon: CheckCircle,
  },
];

export function Testimonials() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle early access signup
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setEmail('');
  };

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
            Join Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We're just starting out and looking for our first clients to grow with. As an early partner, 
            you'll receive our full attention and commitment to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {accessFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md"
              >
                <feature.icon className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Be Our First Client
              </h3>
              <p className="text-secondary-600">
                We're looking for partners who believe in new ideas and want to grow together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 placeholder:text-gray-500"
                  required
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Join Our Journey
              </button>
            </form>

            <p className="text-xs text-secondary-500 text-center mt-4">
              We're excited to build something amazing together.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Ready to Start Something New?
            </h3>
            <p className="text-secondary-600 mb-6">
              We may be new, but we're passionate, dedicated, and ready to help you succeed.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

